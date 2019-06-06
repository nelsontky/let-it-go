import React from "react"
import ***REMOVED*** Helmet ***REMOVED*** from "react-helmet"

class Paranoma extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
  ***REMOVED***

  componentDidMount() ***REMOVED***
    window.pannellum.viewer("panorama", ***REMOVED***
      type: "equirectangular",
      panorama: this.props.paranomaUrl,
      yaw: this.props.startingYaw,
      vaov: 45,
      maxPitch: 0,
      minPitch: 0,
      autoLoad: true,
      hotSpots: [
        ***REMOVED***
          pitch: 0,
          yaw: this.props.startingYaw,
          type: "info",
          text: this.props.name
        ***REMOVED***,
      ],
    ***REMOVED***)
  ***REMOVED***

  render() ***REMOVED***
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://cdn.pannellum.org/2.4/pannellum.css"/>
        </Helmet>
        <div id="panorama" style=***REMOVED******REMOVED*** width: "100%", height: 200 ***REMOVED******REMOVED***></div>
      </div>
    )
  ***REMOVED***
***REMOVED***

export default Paranoma
