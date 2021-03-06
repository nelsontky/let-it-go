import React from "react"
import { Helmet } from "react-helmet"

class Paranoma extends React.Component {
  componentDidMount() {
    this.viewer = window.pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: this.props.paranomaUrl,
      vaov: 45,
      maxPitch: 0,
      minPitch: 0,
      autoLoad: true,
    })
  }
  
  componentWillUnmount() {                                                     
    this.viewer.destroy();                                             
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
