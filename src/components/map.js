import React from "react"
import ***REMOVED*** compose, withProps ***REMOVED*** from "recompose"
import ***REMOVED***
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
***REMOVED*** from "react-google-maps"

const MapComponent = compose(
  withProps(***REMOVED***
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAm31tTHPuaSkBR1Ff7pYAavUX6K1DlZ5g&callback=initMap`,
    loadingElement: <div style=***REMOVED******REMOVED*** height: `100%` ***REMOVED******REMOVED*** />,
    containerElement: <div style=***REMOVED******REMOVED*** height: `400px` ***REMOVED******REMOVED*** />,
    mapElement: <div style=***REMOVED******REMOVED*** height: `100%` ***REMOVED******REMOVED*** />,
  ***REMOVED***),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom=***REMOVED***17***REMOVED*** center=***REMOVED******REMOVED*** lat: props.myLat, lng: props.myLon ***REMOVED******REMOVED***>
    ***REMOVED***<Marker position=***REMOVED******REMOVED*** lat: props.lat, lng: props.lon ***REMOVED******REMOVED*** />***REMOVED***
    ***REMOVED***
      <Circle
        center=***REMOVED******REMOVED*** lat: props.myLat, lng: props.myLon ***REMOVED******REMOVED***
        radius=***REMOVED***7***REMOVED***
        options=***REMOVED******REMOVED***
          fillColor: "#00f",
          fillOpacity: 1.0,
          strokeOpacity: 0.0,
        ***REMOVED******REMOVED***
      />
    ***REMOVED***
    ***REMOVED***
      <Circle
        center=***REMOVED******REMOVED*** lat: props.myLat, lng: props.myLon ***REMOVED******REMOVED***
        radius=***REMOVED***props.accuracy***REMOVED***
        options=***REMOVED******REMOVED***
          fillColor: "#00f",
          fillOpacity: 0.2,
          strokeOpacity: 0.0,
        ***REMOVED******REMOVED***
      />
    ***REMOVED***
  </GoogleMap>
))

class MapView extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
    this.state = ***REMOVED***
      myLat: props.lat,
      myLon: props.lon,
      accuracy: 0,
    ***REMOVED***
  ***REMOVED***

  getGeoLocation = () => ***REMOVED***
    return navigator.geolocation.getCurrentPosition(
      position => ***REMOVED***
        console.log(position.coords)
        this.setState(***REMOVED***
          myLat: position.coords.latitude,
          myLon: position.coords.longitude,
          accuracy: position.coords.accuracy,
        ***REMOVED***)
      ***REMOVED***,
      err => console.log(err),
      ***REMOVED*** enableHighAccuracy: true ***REMOVED***
    )
  ***REMOVED***

  componentDidMount() ***REMOVED***
    this.timerID = setInterval(() => this.getGeoLocation(), 1000)
  ***REMOVED***

  componentWillUnmount() ***REMOVED***
    clearInterval(this.timerID)
  ***REMOVED***

  render() ***REMOVED***
    return (
      <MapComponent
        lat=***REMOVED***this.props.lat***REMOVED***
        lon=***REMOVED***this.props.lon***REMOVED***
        myLat=***REMOVED***this.state.myLat***REMOVED***
        myLon=***REMOVED***this.state.myLon***REMOVED***
        accuracy=***REMOVED***this.state.accuracy***REMOVED***
      />
    )
  ***REMOVED***
***REMOVED***

export default MapView
