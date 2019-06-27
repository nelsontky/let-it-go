import React from "react"
// https://i.imgur.com/Rw0L7jC.png

let isLocationAvailable = true

class Map extends React.Component ***REMOVED***

  componentWillUnmount() ***REMOVED***
    clearInterval(this.timerID)
  ***REMOVED***

  getGeoLocation() ***REMOVED***
    if (navigator.geolocation) ***REMOVED***
      navigator.geolocation.getCurrentPosition(
        position => ***REMOVED***
          this.locationMarker.setPosition(***REMOVED***
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          ***REMOVED***)

          this.accuracyRadius.setCenter(this.locationMarker.getPosition())
          this.accuracyRadius.setRadius(position.coords.accuracy)
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

  componentDidMount() ***REMOVED***
    this.timerID = setInterval(() => this.getGeoLocation(), 1000)

    this.map = new window.google.maps.Map(document.getElementById("map"), ***REMOVED***
      center: ***REMOVED*** lat: this.props.lat, lng: this.props.lon ***REMOVED***,
      zoom: 17,
      gestureHandling: 'cooperative'
    ***REMOVED***)

    new window.google.maps.Marker(***REMOVED***
      position: ***REMOVED*** lat: this.props.lat, lng: this.props.lon ***REMOVED***,
      map: this.map,
    ***REMOVED***)

    this.locationMarker = new window.google.maps.Marker(***REMOVED***
      map: this.map,
      icon: `https://i.imgur.com/Rw0L7jC.png`,
      position: ***REMOVED*** lat: this.props.lat, lng: this.props.lon ***REMOVED***,
    ***REMOVED***)

    this.accuracyRadius = new window.google.maps.Circle(***REMOVED***
      map: this.map,
      center: ***REMOVED*** lat: this.props.lat, lng: this.props.lon ***REMOVED***,
      radius: 0,
      fillColor: "#00F",
      fillOpacity: 0.2,
      strokeWeight: 0,
    ***REMOVED***)

    // Location button
    const self = this
    function CenterControl(controlDiv, map) ***REMOVED***
      // Set CSS for the control border.
      let controlUI = document.createElement("div")
      controlUI.style.backgroundColor = "#fff"
      controlUI.style.border = "2px solid #fff"
      controlUI.style.borderRadius = "3px"
      controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)"
      controlUI.style.cursor = "pointer"
      controlUI.style.textAlign = "center"
      controlUI.style.marginBottom = '22px';
      controlUI.style.height = "31px"
      controlUI.title = "Click to recenter the map to location"
      controlDiv.appendChild(controlUI)

      // Set CSS for the control interior.
      let controlText = document.createElement("div")
      controlText.innerHTML = "<img src='https://i.imgur.com/raFRca2.png' />"
      controlUI.appendChild(controlText)

      // Setup the click event listeners
      controlUI.addEventListener("click", function() ***REMOVED***
        self.getGeoLocation()
        map.setCenter(self.locationMarker.getPosition());
      ***REMOVED***)
    ***REMOVED***

    // Render the button
    let centerControlDiv = document.createElement("div")
    new CenterControl(centerControlDiv, this.map)

    centerControlDiv.index = 1
    this.map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(
      centerControlDiv
    )
  ***REMOVED***

  render() ***REMOVED***
    return (
      <div>
        ***REMOVED***!isLocationAvailable && <p>Location services not working! (Add help popup, convert to component)</p>***REMOVED***
        <div id="map" style=***REMOVED******REMOVED*** width: "100%", height: 300 ***REMOVED******REMOVED*** />
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Map
