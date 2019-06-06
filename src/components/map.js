import React from "react"
// https://i.imgur.com/Rw0L7jC.png

class Map extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
  ***REMOVED***

  componentWillUnmount() ***REMOVED***
    clearInterval(this.timerID)
  ***REMOVED***

  getGeoLocation() ***REMOVED***
    if (navigator.geolocation) ***REMOVED***
      navigator.geolocation.getCurrentPosition(
        position => ***REMOVED***
          // console.log("yay")
          this.locationMarker.setPosition(***REMOVED***
            lat: position.coords.latitude,
            lng: position.coords.longitude
          ***REMOVED***)

          this.accuracyRadius.setCenter(***REMOVED***
            lat: position.coords.latitude,
            lng: position.coords.longitude
          ***REMOVED***)

          this.accuracyRadius.setRadius(position.coords.accuracy)
        ***REMOVED***,
        () => ***REMOVED***
          //handleLocationError(true, infoWindow, map.getCenter());
        ***REMOVED***,
        ***REMOVED*** enableHighAccuracy: true ***REMOVED***
      )
    ***REMOVED*** else ***REMOVED***
      // Browser doesn't support Geolocation
      //handleLocationError(false, infoWindow, map.getCenter());
    ***REMOVED***
  ***REMOVED***

  componentDidMount() ***REMOVED***
    this.timerID = setInterval(() => this.getGeoLocation(), 1000)

    this.map = new window.google.maps.Map(document.getElementById("map"), ***REMOVED***
      center: ***REMOVED*** lat: this.props.lat, lng: this.props.lon ***REMOVED***,
      zoom: 17,
    ***REMOVED***)

    new window.google.maps.Marker(***REMOVED***
      position: ***REMOVED*** lat: this.props.lat, lng: this.props.lon ***REMOVED***,
      map: this.map,
    ***REMOVED***)

    this.locationMarker = new window.google.maps.Marker(***REMOVED***
      map: this.map,
      icon: `https://i.imgur.com/Rw0L7jC.png`,
      position: ***REMOVED*** lat: this.props.lat, lng: this.props.lon ***REMOVED***
    ***REMOVED***)

    this.accuracyRadius = new window.google.maps.Circle(***REMOVED***
      map: this.map,
      center: this.locationMarker.getPosition(),
      radius: 0,
      fillColor: '#00F',
      fillOpacity: 0.2,
      strokeWeight: 0
    ***REMOVED***)
  ***REMOVED***

  render() ***REMOVED***
    return <div id="map" style=***REMOVED******REMOVED*** width: "100%", height: 300 ***REMOVED******REMOVED*** />
  ***REMOVED***
***REMOVED***

export default Map
