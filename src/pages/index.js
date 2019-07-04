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
    this.paginateKey = 0

    this.state = {
      isLocationAvailable: false,
      isLocationLoading: true,
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
      pageSize: 10,
      pageNumber: 1,
    }

    this.sortByDistance = this.sortByDistance.bind(this)
    this.compareDistance = this.compareDistance.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.isShown = this.isShown.bind(this)
    this.handlePageSize = this.handlePageSize.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)

    this.getState = this.getState.bind(this)
    this.storeState = this.storeState.bind(this)
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.storeState)
    this.getState()
    this.getLocation()
  }

  componentWillUnmount() {
    this.storeState()
    window.removeEventListener("beforeunload", this.storeState)
  }

  getState() {
    if (sessionStorage.length > 1) {
      this.setState({
        sortBy: JSON.parse(sessionStorage.getItem("sortBy")),
        maleChecked: JSON.parse(sessionStorage.getItem("maleChecked")),
        femaleChecked: JSON.parse(sessionStorage.getItem("femaleChecked")),
        handicappedChecked: JSON.parse(
          sessionStorage.getItem("handicappedChecked")
        ),
        waterCoolerChecked: JSON.parse(
          sessionStorage.getItem("waterCoolerChecked")
        ),
        showerHeadsChecked: JSON.parse(
          sessionStorage.getItem("showerHeadsChecked")
        ),
        hoseChecked: JSON.parse(sessionStorage.getItem("hoseChecked")),
        pageSize: JSON.parse(sessionStorage.getItem("pageSize")),
        pageNumber: JSON.parse(sessionStorage.getItem("pageNumber")),
        isFilterHidden: JSON.parse(sessionStorage.getItem("isFilterHidden")),
      })
    }
  }

  storeState() {
    sessionStorage.setItem("sortBy", JSON.stringify(this.state.sortBy))
    sessionStorage.setItem(
      "maleChecked",
      JSON.stringify(this.state.maleChecked)
    )
    sessionStorage.setItem(
      "femaleChecked",
      JSON.stringify(this.state.femaleChecked)
    )
    sessionStorage.setItem(
      "handicappedChecked",
      JSON.stringify(this.state.handicappedChecked)
    )
    sessionStorage.setItem(
      "waterCoolerChecked",
      JSON.stringify(this.state.waterCoolerChecked)
    )
    sessionStorage.setItem(
      "showerHeadsChecked",
      JSON.stringify(this.state.showerHeadsChecked)
    )
    sessionStorage.setItem(
      "hoseChecked",
      JSON.stringify(this.state.hoseChecked)
    )
    sessionStorage.setItem("pageSize", JSON.stringify(this.state.pageSize))
    sessionStorage.setItem("pageNumber", JSON.stringify(this.state.pageNumber))
    sessionStorage.setItem(
      "isFilterHidden",
      JSON.stringify(this.state.isFilterHidden)
    )
  }

  // Handle change in soriing
  handleChange(event) {
    this.setState({
      sortBy: event.target.value,
      pageNumber: 1,
    })

    if (event.target.value === "name") {
      this.sortByName()
    } else {
      this.sortByDistance()
    }
  }

  handlePageSize(event) {
    this.setState({
      pageSize: parseInt(event.target.value),
      pageNumber: 1,
    })
  }

  // Handles click on filter button
  handleClick() {
    this.setState({
      isFilterHidden: !this.state.isFilterHidden,
    })
  }

  handleFilterChange(event) {
    this.setState({
      pageNumber: 1,
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
            isLocationAvailable: true,
            isLocationLoading: false,
          })

          if (this.state.sortBy === "distance") {
            this.sortByDistance()
          }
        },
        () => {
          // Geolocation permissions denied
          this.setState({
            isLocationAvailable: false,
            isLocationLoading: false,
          })
        },
        { enableHighAccuracy: true }
      )
    } else {
      // Browser doesn't support Geolocation
      this.setState({
        isLocationAvailable: false,
        isLocationLoading: false,
      })
    }
  }

  handlePageChange(event) {
    this.setState({ pageNumber: parseInt(event.target.id) })
  }

  render() {
    const iconStyle = { fontSize: "calc(0.6em + 0.5vw)" }

    return (
      <Layout main={true}>
        <Helmet>
          <title>Let It Go</title>
        </Helmet>
        <h1>Let It Go</h1>

        {/* Page size dropdown */}
        <div style={{ float: "right", marginLeft: "10px" }}>
          <label>
            Show:{" "}
            <select value={this.state.pageSize} onChange={this.handlePageSize}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
            </select>
          </label>
        </div>

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

        {/* Location not available/Loading message */}
        {this.state.isLocationLoading && (
          <p>
            <strong>Location service is loading...</strong>
          </p>
        )}
        {!this.state.isLocationAvailable && !this.state.isLocationLoading && (
          <LocationHelp />
        )}

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
            key={this.paginateKey++}
            pageSize={this.state.pageSize}
            pageNumber={this.state.pageNumber}
            handlePageChange={this.handlePageChange}
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
