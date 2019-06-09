import React from "react"
import Layout from "../components/layout"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import ***REMOVED*** Link ***REMOVED*** from "gatsby"

function latLonToMetres(lat1, lon1, lat2, lon2) ***REMOVED***
  if (lat1 === null || lat2 === null || lon1 === null || lon2 === null) ***REMOVED***
    return "Location not available"
  ***REMOVED***
  const R = 6371000 // Radius of the earth in m
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in m
  return Math.round(d)
***REMOVED***

let isLocationAvailable = true

export default class App extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
    this.state = ***REMOVED***
      toilets: this.props.data.allToilets.nodes.slice(0),
      myLat: null,
      myLon: null,
      sortBy: `name`,
    ***REMOVED***

    this.sortByDistance = this.sortByDistance.bind(this)
    this.compareDistance = this.compareDistance.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.handleChange = this.handleChange.bind(this)
  ***REMOVED***

  componentDidMount() ***REMOVED***
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

  sortByDistance() ***REMOVED***
    let toilets = this.state.toilets
    toilets.sort(this.compareDistance)

    this.setState(***REMOVED***
      toilets: toilets,
    ***REMOVED***)
  ***REMOVED***

  compareDistance(t1, t2) ***REMOVED***
    const t1ToMe = latLonToMetres(
      t1.lat,
      t1.lon,
      this.state.myLat,
      this.state.myLon
    )
    const t2ToMe = latLonToMetres(
      t2.lat,
      t2.lon,
      this.state.myLat,
      this.state.myLon
    )
    return t1ToMe - t2ToMe
  ***REMOVED***

  sortByName() ***REMOVED***
    console.log("test")
    let toilets = this.state.toilets
    toilets.sort((t1, t2) => t1.name.localeCompare(t2.name))

    this.setState(***REMOVED***
      toilets: toilets,
    ***REMOVED***)
  ***REMOVED***

  updatePosition() ***REMOVED***
    if (navigator.geolocation) ***REMOVED***
      navigator.geolocation.getCurrentPosition(
        pos => ***REMOVED***
          this.setState(***REMOVED***
            myLat: pos.coords.latitude,
            myLon: pos.coords.longitude,
          ***REMOVED***)
        ***REMOVED***,
        () => ***REMOVED***
          isLocationAvailable = false
          this.forceUpdate()
        ***REMOVED***,
        ***REMOVED*** enableHighAccuracy: true ***REMOVED***
      )
    ***REMOVED*** else ***REMOVED***
      // Browser doesn't support Geolocation
      isLocationAvailable = false
      this.forceUpdate()
    ***REMOVED***
  ***REMOVED***

  render() ***REMOVED***
    console.log(this.state)
    return (
      <Layout main=***REMOVED***true***REMOVED***>
        <label>Sort by: </label>
        <select value=***REMOVED***this.state.sortBy***REMOVED*** onChange=***REMOVED***this.handleChange***REMOVED***>
          <option value="name">Name</option>
          ***REMOVED***isLocationAvailable && <option value="distance">Distance</option>***REMOVED***
        </select>
        ***REMOVED***!isLocationAvailable && <p>Location services not working! (Add help popup, convert to component)</p>***REMOVED***
        <table style=***REMOVED******REMOVED*** tableLayout: "fixed" ***REMOVED******REMOVED***>
          <thead>
            <tr>
              <th>Name</th>
              <th>Distance (m)</th>
            </tr>
          </thead>
          <tbody>
            ***REMOVED***this.state.toilets.map((toilet, index) => (
              <tr key=***REMOVED***index***REMOVED***>
                <td>
                  <Link to=***REMOVED***"/" + toilet.name.replace(/\s/g, "")***REMOVED***>
                    ***REMOVED***toilet.name***REMOVED***
                  </Link>
                </td>
                <td>
                  ***REMOVED***latLonToMetres(
                    this.state.myLat,
                    this.state.myLon,
                    toilet.lat,
                    toilet.lon
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
    allToilets(sort: ***REMOVED*** fields: name, order: ASC ***REMOVED***) ***REMOVED***
      nodes ***REMOVED***
        name
        lat
        lon
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`
