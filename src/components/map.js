import React from "react"
import LocationHelp from "./locationHelp"

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLocationAvailable: false,
    }

    this.watchLocation = this.watchLocation.bind(this)
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.id)
  }

  watchLocation() {
    if (navigator.geolocation) {
      this.id = navigator.geolocation.watchPosition(
        position => {
          this.locationMarker.setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          this.setState({
            isLocationAvailable: true,
          })

          this.accuracyRadius.setCenter(this.locationMarker.getPosition())
          this.accuracyRadius.setRadius(position.coords.accuracy)
        },
        () => {
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

  componentDidMount() {
    this.watchLocation()

    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.props.lat, lng: this.props.lon },
      zoom: 17,
      gestureHandling: "cooperative",
    })

    new window.google.maps.Marker({
      position: { lat: this.props.lat, lng: this.props.lon },
      map: this.map,
    })

    this.locationMarker = new window.google.maps.Marker({
      map: this.map,
      icon: `https://i.imgur.com/Rw0L7jC.png`,
      position: { lat: this.props.lat, lng: this.props.lon },
    })

    this.accuracyRadius = new window.google.maps.Circle({
      map: this.map,
      center: { lat: this.props.lat, lng: this.props.lon },
      radius: 0,
      fillColor: "#00F",
      fillOpacity: 0.2,
      strokeWeight: 0,
    })

    // Location button
    const self = this
    function CenterControl(controlDiv, map) {
      // Set CSS for the control border.
      let controlUI = document.createElement("div")
      controlUI.style.backgroundColor = "#fff"
      controlUI.style.border = "2px solid #fff"
      controlUI.style.borderRadius = "3px"
      controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)"
      controlUI.style.cursor = "pointer"
      controlUI.style.textAlign = "center"
      controlUI.style.marginBottom = "22px"
      controlUI.style.height = "31px"
      controlUI.title = "Click to recenter the map to location"
      controlDiv.appendChild(controlUI)

      // Set CSS for the control interior.
      let controlText = document.createElement("div")
      controlText.innerHTML = "<img src='https://i.imgur.com/raFRca2.png' />"
      controlUI.appendChild(controlText)

      // Setup the click event listeners
      controlUI.addEventListener("click", function() {
        map.setCenter(self.locationMarker.getPosition())
      })
    }

    // Render the button
    let centerControlDiv = document.createElement("div")
    new CenterControl(centerControlDiv, this.map)

    centerControlDiv.index = 1
    this.map.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(
      centerControlDiv
    )
  }

  render() {
    return (
      <div>
        {!this.state.isLocationAvailable && <LocationHelp />}
        <div id="map" style={{ width: "100%", height: 300 }} />
      </div>
    )
  }
}

export default Map
