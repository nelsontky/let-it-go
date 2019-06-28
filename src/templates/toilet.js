import React from "react"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import Layout from "../components/layout"
import ShareButton from "../components/shareButton"
import * as utils from "../utils/utils"
import Map from "../components/map"
import Paranoma from "../components/paranoma"

export default (***REMOVED*** data ***REMOVED***) => ***REMOVED***
  const name = data.toilets.name
  const lat = data.toilets.lat
  const lon = data.toilets.lon
  const paranomaUrl = data.toilets.paranoma.url
  const startingYaw = data.toilets.paranoma.startingYaw
  const maleYaw = data.toilets.paranoma.maleYaw
  const femaleYaw = data.toilets.paranoma.femaleYaw
  const handicappedYaw = data.toilets.paranoma.handicappedYaw
  const waterCoolerYaw = data.toilets.paranoma.waterCoolerYaw

  return (
    <Layout main=***REMOVED***false***REMOVED***>
      <h3>***REMOVED***name***REMOVED***</h3>
      <ShareButton />
      <Map lat=***REMOVED***lat***REMOVED*** lon=***REMOVED***lon***REMOVED*** />
      <Paranoma
        name=***REMOVED***name***REMOVED***
        paranomaUrl=***REMOVED***paranomaUrl***REMOVED***
        startingYaw=***REMOVED***startingYaw***REMOVED***
        maleYaw=***REMOVED***maleYaw***REMOVED***
        femaleYaw=***REMOVED***femaleYaw***REMOVED***
        handicappedYaw=***REMOVED***handicappedYaw***REMOVED***
        waterCoolerYaw=***REMOVED***waterCoolerYaw***REMOVED***
      />
      <h4>At a glance</h4>
      <ul style=***REMOVED******REMOVED*** listStyle: "none" ***REMOVED******REMOVED***>
        ***REMOVED***utils.hasMaleToilet(data.toilets) && (
          <li>
            <i className="em-svg em-man-raising-hand" />
            Has Male toilet
          </li>
        )***REMOVED***
        ***REMOVED***utils.hasFemaleToilet(data.toilets) && (
          <li>
            <i className="em-svg em-woman-raising-hand" />
            Has Female toilet
          </li>
        )***REMOVED***
        ***REMOVED***utils.hasHandicappedToilet(data.toilets) && (
          <li>
            <i className="em-svg em-wheelchair" />
            Is handicap accessible (Add in seperate or not seperate)
          </li>
        )***REMOVED***
        ***REMOVED***utils.toiletHasWaterCooler(data.toilets) && (
          <li>
            <i class="em-svg em-potable_water"></i>
            Has water cooler
          </li>
        )***REMOVED***
        ***REMOVED***utils.toiletHasShowerHeads(data.toilets) && (
          <li>
            <i class="em-svg em-shower" />
            Has shower heads
          </li>
        )***REMOVED***
        ***REMOVED***utils.toiletHasHose(data.toilets) && (
          <li>
            <i class="em-svg em-sweat_drops" />
            Has hose
          </li>
        )***REMOVED***
      </ul>
    </Layout>
  )
***REMOVED***

export const query = graphql`
  query($slug: String!) ***REMOVED***
    toilets(fields: ***REMOVED*** slug: ***REMOVED*** eq: $slug ***REMOVED*** ***REMOVED***) ***REMOVED***
      name
      lat
      lon
      paranoma ***REMOVED***
        femaleYaw
        handicappedYaw
        maleYaw
        startingYaw
        waterCoolerYaw
        url
      ***REMOVED***
      facilities ***REMOVED***
        hose
        showerHeads
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`
