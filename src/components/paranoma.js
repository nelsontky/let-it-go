import React from "react"
import { Helmet } from "react-helmet"

class Paranoma extends React.Component {
  componentDidMount() {
    // Determine hotspots
    const hotSpots = []

    if (this.props.maleYaw !== null) {
      hotSpots.push({
        pitch: 0,
        yaw: this.props.maleYaw,
        type: "info",
        text: "Male"
      })
    }

    if (this.props.femaleYaw !== null) {
      hotSpots.push({
        pitch: 0,
        yaw: this.props.femaleYaw,
        type: "info",
        text: "Female"
      })
    }

    if (this.props.handicappedYaw !== null) {
      hotSpots.push({
        pitch: 0,
        yaw: this.props.handicappedYaw,
        type: "info",
        text: "Handicapped"
      })
    }

    if (this.props.waterCoolerYaw !== null) {
      hotSpots.push({
        pitch: 0,
        yaw: this.props.waterCoolerYaw,
        type: "info",
        text: "Water Cooler",
      })
    }

    window.pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: this.props.paranomaUrl,
      yaw: this.props.startingYaw,
      vaov: 45,
      maxPitch: 0,
      minPitch: 0,
      autoLoad: true,
      hotSpots,
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.pannellum.org/2.4/pannellum.css"
          />
        </Helmet>
        <div id="panorama" style={{ width: "100%", height: 200 }} />
      </div>
    )
  }
}

export default Paranoma
