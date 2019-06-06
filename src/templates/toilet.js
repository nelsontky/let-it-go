import React from "react"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import Layout from "../components/layout"
import Map from "../components/map"
import ***REMOVED*** Pannellum ***REMOVED*** from "pannellum-react";

export default (***REMOVED*** data ***REMOVED***) => ***REMOVED***
  const name = data.toilets.name
  const lat = data.toilets.lat
  const lon = data.toilets.lon
  const paranomaUrl = data.toilets.paranomaUrl
  const startingYaw = data.toilets.startingYaw

  return (
    <Layout>
      <h1>***REMOVED***name***REMOVED***</h1>
      <Map lat=***REMOVED***lat***REMOVED*** lon=***REMOVED***lon***REMOVED*** />
      <Pannellum
        width="100%"
        height="300px"
        image=***REMOVED***paranomaUrl***REMOVED***
        yaw=***REMOVED*** startingYaw ***REMOVED***
        vaov=***REMOVED***45***REMOVED***
        maxPitch=***REMOVED***0***REMOVED***
        minPitch=***REMOVED***0***REMOVED***
        autoLoad
      >
        <Pannellum.Hotspot
          type="info"
          pitch=***REMOVED***0***REMOVED***
          yaw=***REMOVED*** startingYaw ***REMOVED***
          text=***REMOVED***name***REMOVED***
        />
      </Pannellum>
      <p>Todo</p>
    </Layout>
  )
***REMOVED***

export const query = graphql`
  query($slug: String!) ***REMOVED***
    toilets(fields: ***REMOVED*** slug: ***REMOVED*** eq: $slug ***REMOVED*** ***REMOVED***) ***REMOVED***
      name
      lat
      lon
      paranomaUrl
      startingYaw
    ***REMOVED***
  ***REMOVED***
`
