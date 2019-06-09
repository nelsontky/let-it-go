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
  const maleYaw = data.toilets.maleYaw
  const femaleYaw = data.toilets.femaleYaw
  const handicappedYaw = data.toilets.handicappedYaw

  return (
    <Layout main=***REMOVED***false***REMOVED***>
      <h3>***REMOVED***name***REMOVED***</h3>
      <Map lat=***REMOVED***lat***REMOVED*** lon=***REMOVED***lon***REMOVED*** />
      <Paranoma
        name=***REMOVED***name***REMOVED***
        paranomaUrl=***REMOVED***paranomaUrl***REMOVED***
        startingYaw=***REMOVED***startingYaw***REMOVED***
        maleYaw=***REMOVED***maleYaw***REMOVED***
        femaleYaw=***REMOVED***femaleYaw***REMOVED***
        handicappedYaw=***REMOVED***handicappedYaw***REMOVED*** />
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
      maleYaw
      femaleYaw
      handicappedYaw
    ***REMOVED***
  ***REMOVED***
`
