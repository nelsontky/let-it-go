import React from "react"
import ***REMOVED*** Helmet ***REMOVED*** from "react-helmet"

class Paranoma extends React.Component ***REMOVED***
  componentDidMount() ***REMOVED***
    // Determine hotspots
    const hotSpots = []

    if (this.props.maleYaw !== null) ***REMOVED***
      hotSpots.push(***REMOVED***
        pitch: 0,
        yaw: this.props.maleYaw,
        type: "info",
        text: this.props.name.includes("Male")
          ? this.props.name
          : this.props.name + " Male",
      ***REMOVED***)
    ***REMOVED***

    if (this.props.femaleYaw !== null) ***REMOVED***
      hotSpots.push(***REMOVED***
        pitch: 0,
        yaw: this.props.femaleYaw,
        type: "info",
        text: this.props.name.includes("Female")
          ? this.props.name
          : this.props.name + " Female",
      ***REMOVED***)
    ***REMOVED***

    if (this.props.handicappedYaw !== null) ***REMOVED***
      hotSpots.push(***REMOVED***
        pitch: 0,
        yaw: this.props.handicappedYaw,
        type: "info",
        text: this.props.name + " Handicapped",
      ***REMOVED***)
    ***REMOVED***

    if (this.props.waterCoolerYaw !== null) ***REMOVED***
      hotSpots.push(***REMOVED***
        pitch: 0,
        yaw: this.props.waterCoolerYaw,
        type: "info",
        text: this.props.name + " Water Cooler",
      ***REMOVED***)
    ***REMOVED***

    window.pannellum.viewer("panorama", ***REMOVED***
      type: "equirectangular",
      panorama: this.props.paranomaUrl,
      yaw: this.props.startingYaw,
      vaov: 45,
      maxPitch: 0,
      minPitch: 0,
      autoLoad: true,
      hotSpots,
    ***REMOVED***)
  ***REMOVED***

  render() ***REMOVED***
    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.pannellum.org/2.4/pannellum.css"
          />
        </Helmet>
        <div id="panorama" style=***REMOVED******REMOVED*** width: "100%", height: 200 ***REMOVED******REMOVED*** />
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Paranoma
