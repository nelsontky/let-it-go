import React from "react"
import Layout from "../components/layout"
import TypesHelp from "../components/typesHelp"
import FilterHelp from "../components/filterHelp"
import LocationHelp from "../components/locationHelp"
import PaginatedArray from "../components/paginatedArray"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import * as utils from "../utils/utils"
import { Helmet } from "react-helmet"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLocationAvailable: false,
      toilets: this.props.data.allToilets.nodes.slice(0),
      myLat: null,
      myLon: null,
      sortBy: `name`,
      isFilterHidden: true,
      maleChecked: false,
      femaleChecked: false,
      handicappedChecked: false,
      waterCoolerChecked: false,
      showerHeadsChecked: false,
      hoseChecked: false,
    }

    this.sortByDistance = this.sortByDistance.bind(this)
    this.compareDistance = this.compareDistance.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.isShown = this.isShown.bind(this)
  }

  componentDidMount() {
    this.getLocation()
  }

  handleChange(event) {
    this.setState({
      sortBy: event.target.value,
    })

    if (event.target.value === "name") {
      this.sortByName()
    } else {
      this.sortByDistance()
    }
  }

  // Handles click on filter button
  handleClick() {
    this.setState({
      isFilterHidden: !this.state.isFilterHidden,
    })
  }

  handleFilterChange(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name],
    })
  }

  sortByDistance() {
    let toilets = this.state.toilets.slice(0)
    toilets.sort(this.compareDistance)

    this.setState({
      toilets: toilets,
    })
  }

  compareDistance(t1, t2) {
    const t1ToMe = utils.latLonToMetres(
      t1.lat,
      t1.lon,
      this.state.myLat,
      this.state.myLon
    )
    const t2ToMe = utils.latLonToMetres(
      t2.lat,
      t2.lon,
      this.state.myLat,
      this.state.myLon
    )
    return t1ToMe - t2ToMe
  }

  sortByName() {
    let toilets = this.state.toilets.slice(0)
    toilets.sort((t1, t2) => t1.name.localeCompare(t2.name))

    this.setState({
      toilets: toilets,
    })
  }

  isShown(toilet) {
    return (
      (!this.state.maleChecked || utils.hasMaleToilet(toilet)) &&
      (!this.state.femaleChecked || utils.hasFemaleToilet(toilet)) &&
      (!this.state.handicappedChecked || utils.hasHandicappedToilet(toilet)) &&
      (!this.state.showerHeadsChecked || utils.toiletHasShowerHeads(toilet)) &&
      (!this.state.hoseChecked || utils.toiletHasHose(toilet)) &&
      (!this.state.waterCoolerChecked || utils.toiletHasWaterCooler(toilet))
    )
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.setState({
            myLat: pos.coords.latitude,
            myLon: pos.coords.longitude,
            sortBy: `distance`,
            isLocationAvailable: true,
          })
          this.sortByDistance()
        },
        () => {
          // Geolocation permissions denied
          this.setState({
            isLocationAvailable: false,
          })
        },
        { enableHighAccuracy: true }
      )
    } else {
      // Browser doesn't support Geolocation
      this.setState({
        isLocationAvailable: false,
      })
    }
  }

  render() {
    // console.log(this.state)
    const iconStyle = { fontSize: "calc(0.6em + 0.5vw)" }

    return (
      <Layout main={true}>
        <Helmet>
          <title>Let It Go</title>
        </Helmet>
        <h1>Let It Go</h1>

        {/* Sorting dropdown */}
        <div style={{ float: "right" }}>
          <label>
            Sort by:{" "}
            <select value={this.state.sortBy} onChange={this.handleChange}>
              <option value="name">Name</option>
              {this.state.isLocationAvailable && (
                <option value="distance">Distance</option>
              )}
            </select>
          </label>
        </div>

        {/* Filtering */}
        <button onClick={this.handleClick}>
          {this.state.isFilterHidden ? "Filter" : "Hide"}
        </button>
        {!this.state.isFilterHidden && (
          <div>
            <p>
              Show only
              <FilterHelp />:
            </p>
            <label>
              <input
                name="maleChecked"
                type="checkbox"
                checked={this.state.maleChecked}
                onChange={this.handleFilterChange}
              />
              Male
            </label>
            <br />
            <label>
              <input
                name="femaleChecked"
                type="checkbox"
                checked={this.state.femaleChecked}
                onChange={this.handleFilterChange}
              />
              Female
            </label>
            <br />
            <label>
              <input
                name="handicappedChecked"
                type="checkbox"
                checked={this.state.handicappedChecked}
                onChange={this.handleFilterChange}
              />
              Handicapped accessible
            </label>
            <br />
            <label>
              <input
                name="showerHeadsChecked"
                type="checkbox"
                checked={this.state.showerHeadsChecked}
                onChange={this.handleFilterChange}
              />
              Has Shower Heads
            </label>
            <br />
            <label>
              <input
                name="hoseChecked"
                type="checkbox"
                checked={this.state.hoseChecked}
                onChange={this.handleFilterChange}
              />
              Has Hoses
            </label>
            <br />
            <label>
              <input
                name="waterCoolerChecked"
                type="checkbox"
                checked={this.state.waterCoolerChecked}
                onChange={this.handleFilterChange}
              />
              Has Water Cooler
            </label>
            <br />
          </div>
        )}

        {/* Location not available message */}
        {!this.state.isLocationAvailable && <LocationHelp />}

        {/* Start of table */}
        <table style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th>
                Name
                {this.state.isLocationAvailable && (
                  <div style={{ color: "gray", fontSize: "80%" }}>Distance</div>
                )}
              </th>
              <th style={{ textAlign: "center" }}>
                Types
                <TypesHelp />
              </th>
            </tr>
          </thead>
          <PaginatedArray
            key={
              this.state.maleChecked +
              this.state.femaleChecked +
              this.state.handicappedChecked +
              this.state.waterCoolerChecked +
              this.state.hoseChecked +
              this.state.showerHeadsChecked
            }
            pageSize = {6}
          >
            {this.state.toilets.filter(this.isShown).map((toilet, index) => (
              <tr key={index}>
                {/* Name */}
                <td>
                  <Link to={"/" + toilet.name.replace(/\s/g, "")}>
                    {toilet.name}
                  </Link>
                  <br />
                  {this.state.isLocationAvailable && (
                    <span style={{ color: "gray", fontSize: "80%" }}>
                      {utils.appendMetres(
                        utils.latLonToMetres(
                          this.state.myLat,
                          this.state.myLon,
                          toilet.lat,
                          toilet.lon
                        )
                      )}
                    </span>
                  )}
                </td>
                {/* Types */}
                <td style={{ textAlign: "center" }}>
                  {utils.hasMaleToilet(toilet) && (
                    <i
                      className="em-svg em-man-raising-hand"
                      style={iconStyle}
                    />
                  )}
                  {utils.hasFemaleToilet(toilet) && (
                    <i
                      className="em-svg em-woman-raising-hand"
                      style={iconStyle}
                    />
                  )}
                  {utils.hasHandicappedToilet(toilet) && (
                    <i className="em-svg em-wheelchair" style={iconStyle} />
                  )}
                </td>
              </tr>
            ))}
          </PaginatedArray>
        </table>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allToilets(sort: { fields: name }) {
      nodes {
        name
        facilities {
          hose
          showerHeads
          handicapped
        }
        paranoma {
          femaleYaw
          maleYaw
          handicappedYaw
          waterCoolerYaw
        }
        lat
        lon
      }
    }
  }
`
