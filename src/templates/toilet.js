import React from "react"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import Layout from "../components/layout"
import Map from "../components/map"
import Paranoma from "../components/paranoma"

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
      <Paranoma name=***REMOVED***name***REMOVED*** paranomaUrl=***REMOVED***paranomaUrl***REMOVED***
        startingYaw=***REMOVED***startingYaw***REMOVED*** />
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
