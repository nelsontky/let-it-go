import React from "react"
import Layout from "../components/layout"
import TypesHelp from "../components/typesHelp"
import FilterHelp from "../components/filterHelp"
import LocationHelp from "../components/locationHelp"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import ***REMOVED*** Link ***REMOVED*** from "gatsby"
import * as utils from "../utils/utils"

let isLocationAvailable = false

export default class App extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
    this.state = ***REMOVED***
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
    ***REMOVED***

    this.sortByDistance = this.sortByDistance.bind(this)
    this.compareDistance = this.compareDistance.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.isShown = this.isShown.bind(this)
  ***REMOVED***

  componentDidMount() ***REMOVED***
    isLocationAvailable = false
    this.updatePosition()
  ***REMOVED***

  handleChange(event) ***REMOVED***
    this.setState(***REMOVED***
      sortBy: event.target.value,
    ***REMOVED***)

    if (event.target.value === "name") ***REMOVED***
      this.sortByName()
    ***REMOVED*** else ***REMOVED***
      this.sortByDistance()
    ***REMOVED***
  ***REMOVED***

  // Handles click on filter button
  handleClick() ***REMOVED***
    this.setState(***REMOVED***
      isFilterHidden: !this.state.isFilterHidden,
    ***REMOVED***)
  ***REMOVED***

  handleFilterChange(event) ***REMOVED***
    this.setState(***REMOVED***
      [event.target.name]: !this.state[event.target.name],
    ***REMOVED***)
  ***REMOVED***

  sortByDistance() ***REMOVED***
    let toilets = this.state.toilets.slice(0)
    toilets.sort(this.compareDistance)

    this.setState(***REMOVED***
      toilets: toilets,
    ***REMOVED***)
  ***REMOVED***

  compareDistance(t1, t2) ***REMOVED***
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
  ***REMOVED***

  sortByName() ***REMOVED***
    let toilets = this.state.toilets.slice(0)
    toilets.sort((t1, t2) => t1.name.localeCompare(t2.name))

    this.setState(***REMOVED***
      toilets: toilets,
    ***REMOVED***)
  ***REMOVED***

  isShown(toilet) ***REMOVED***
    return (
      (!this.state.maleChecked || utils.hasMaleToilet(toilet)) &&
      (!this.state.femaleChecked || utils.hasFemaleToilet(toilet)) &&
      (!this.state.handicappedChecked || utils.hasHandicappedToilet(toilet)) &&
      (!this.state.showerHeadsChecked || utils.toiletHasShowerHeads(toilet)) &&
      (!this.state.hoseChecked || utils.toiletHasHose(toilet)) &&
      (!this.state.waterCoolerChecked || utils.toiletHasWaterCooler(toilet))
    )
  ***REMOVED***

  updatePosition() ***REMOVED***
    if (navigator.geolocation) ***REMOVED***
      navigator.geolocation.getCurrentPosition(
        pos => ***REMOVED***
          this.setState(***REMOVED***
            myLat: pos.coords.latitude,
            myLon: pos.coords.longitude,
            sortBy: `distance`,
          ***REMOVED***)
          isLocationAvailable = true
          this.sortByDistance()
        ***REMOVED***,
        () => ***REMOVED***
          // Geolocation permissions denied
          isLocationAvailable = false
        ***REMOVED***,
        ***REMOVED*** enableHighAccuracy: true ***REMOVED***
      )
    ***REMOVED*** else ***REMOVED***
      // Browser doesn't support Geolocation
      isLocationAvailable = false
    ***REMOVED***

    this.forceUpdate()
  ***REMOVED***

  render() ***REMOVED***
    // console.log(this.state)
    const iconStyle = ***REMOVED*** fontSize: "calc(0.6em + 0.5vw)" ***REMOVED***

    return (
      <Layout main=***REMOVED***true***REMOVED***>
        ***REMOVED***/* Sorting dropdown */***REMOVED***
        <div style=***REMOVED******REMOVED*** float: "right" ***REMOVED******REMOVED***>
          <label>
            Sort by:
            <select value=***REMOVED***this.state.sortBy***REMOVED*** onChange=***REMOVED***this.handleChange***REMOVED***>
              <option value="name">Name</option>
              ***REMOVED***isLocationAvailable && (
                <option value="distance">Distance</option>
              )***REMOVED***
            </select>
          </label>
        </div>

        ***REMOVED***/* Filtering */***REMOVED***
        <button onClick=***REMOVED***this.handleClick***REMOVED***>
          ***REMOVED***this.state.isFilterHidden ? 'Filter' : "Hide"***REMOVED***
        </button>
        ***REMOVED***!this.state.isFilterHidden && (
          <div>
            <p>
              Show only
              <FilterHelp />:
            </p>
            <label>
              <input
                name="maleChecked"
                type="checkbox"
                checked=***REMOVED***this.state.maleChecked***REMOVED***
                onChange=***REMOVED***this.handleFilterChange***REMOVED***
              />
              Male
            </label>
            <br />
            <label>
              <input
                name="femaleChecked"
                type="checkbox"
                checked=***REMOVED***this.state.femaleChecked***REMOVED***
                onChange=***REMOVED***this.handleFilterChange***REMOVED***
              />
              Female
            </label>
            <br />
            <label>
              <input
                name="handicappedChecked"
                type="checkbox"
                checked=***REMOVED***this.state.handicappedChecked***REMOVED***
                onChange=***REMOVED***this.handleFilterChange***REMOVED***
              />
              Wheelchair accessible
            </label>
            <br />
            <label>
              <input
                name="showerHeadsChecked"
                type="checkbox"
                checked=***REMOVED***this.state.showerHeadsChecked***REMOVED***
                onChange=***REMOVED***this.handleFilterChange***REMOVED***
              />
              Has Shower Heads
            </label>
            <br />
            <label>
              <input
                name="hoseChecked"
                type="checkbox"
                checked=***REMOVED***this.state.hoseChecked***REMOVED***
                onChange=***REMOVED***this.handleFilterChange***REMOVED***
              />
              Has Hoses
            </label>
            <br />
            <label>
              <input
                name="waterCoolerChecked"
                type="checkbox"
                checked=***REMOVED***this.state.waterCoolerChecked***REMOVED***
                onChange=***REMOVED***this.handleFilterChange***REMOVED***
              />
              Has Water Cooler
            </label>
            <br />
          </div>
        )***REMOVED***

        ***REMOVED***/* Location not available message */***REMOVED***
        ***REMOVED***!isLocationAvailable && <LocationHelp />***REMOVED***

        ***REMOVED***/* Start of table */***REMOVED***
        <table style=***REMOVED******REMOVED*** tableLayout: "fixed" ***REMOVED******REMOVED***>
          <thead>
            <tr>
              <th>
                Name
                ***REMOVED***isLocationAvailable && (
                    <div style=***REMOVED******REMOVED*** color: "gray", fontSize: "80%" ***REMOVED******REMOVED***>
                      Distance
                  </div>
                )***REMOVED***
              </th>
              <th style=***REMOVED******REMOVED*** textAlign: "center" ***REMOVED******REMOVED***>
                Types
                <TypesHelp />
              </th>
            </tr>
          </thead>
          <tbody>
            ***REMOVED***this.state.toilets.filter(this.isShown).map((toilet, index) => (
              <tr key=***REMOVED***index***REMOVED***>
                ***REMOVED***/* Name */***REMOVED***
                <td>
                  <Link to=***REMOVED***"/" + toilet.name.replace(/\s/g, "")***REMOVED***>
                    ***REMOVED***toilet.name***REMOVED***
                  </Link>
                  <br />
                  ***REMOVED***isLocationAvailable && (
                    <span style=***REMOVED******REMOVED*** color: "gray", fontSize: "80%" ***REMOVED******REMOVED***>
                      ***REMOVED***utils.appendMetres(
                        utils.latLonToMetres(
                          this.state.myLat,
                          this.state.myLon,
                          toilet.lat,
                          toilet.lon
                        )
                      )***REMOVED***
                    </span>
                  )***REMOVED***
                </td>
                ***REMOVED***/* Types */***REMOVED***
                <td style=***REMOVED******REMOVED*** textAlign: "center" ***REMOVED******REMOVED***>
                  ***REMOVED***utils.hasMaleToilet(toilet) && (
                    <i
                      className="em-svg em-man-raising-hand"
                      style=***REMOVED***iconStyle***REMOVED***
                    />
                  )***REMOVED***
                  ***REMOVED***utils.hasFemaleToilet(toilet) && (
                    <i
                      className="em-svg em-woman-raising-hand"
                      style=***REMOVED***iconStyle***REMOVED***
                    />
                  )***REMOVED***
                  ***REMOVED***utils.hasHandicappedToilet(toilet) && (
                    <i className="em-svg em-wheelchair" style=***REMOVED***iconStyle***REMOVED*** />
                  )***REMOVED***
                </td>
              </tr>
            ))***REMOVED***
          </tbody>
        </table>
      </Layout>
    )
  ***REMOVED***
***REMOVED***

export const query = graphql`
  query ***REMOVED***
    allToilets(sort: ***REMOVED*** fields: name ***REMOVED***) ***REMOVED***
      nodes ***REMOVED***
        name
        facilities ***REMOVED***
          hose
          showerHeads
        ***REMOVED***
        paranoma ***REMOVED***
          femaleYaw
          maleYaw
          handicappedYaw
          waterCoolerYaw
        ***REMOVED***
        lat
        lon
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`
