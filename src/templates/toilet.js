import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BackButton from "../components/backButton"
import ShareButton from "../components/shareButton"
import * as utils from "../utils/utils"
import Map from "../components/map"
import Paranoma from "../components/paranoma"
import { Helmet } from "react-helmet"
import Reviews from "../components/reviews"

export default ({ data }) => {
  const name = data.toilets.name
  const lat = data.toilets.lat
  const lon = data.toilets.lon
  const paranomaUrl = data.toilets.paranomaUrl

  function glanceStyle(pred) {
    return {
      textDecoration: pred(data.toilets) ? "" : "line-through",
      color: pred(data.toilets) ? "" : "gray",
    }
  }

  function handicappedText() {
    if (!utils.hasHandicappedToilet(data.toilets)) {
      return "Is handicapped accessible"
    } else if (!utils.hasSeperateHandicappedToilet(data.toilets))
      return "Is handicapped accessible (Handicapped cubicle inside toilet)"
    else {
      return "Is handicapped accessible (Has seperate handicapped toilet)"
    }
  }

  return (
    <Layout main={false}>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <BackButton />
      <h3>{name}</h3>
      <ShareButton name={name} />
      <Map lat={lat} lon={lon} />
      <Paranoma name={name} paranomaUrl={paranomaUrl} />
      <h4>At a glance</h4>
      <ul style={{ listStyle: "none" }}>
        <li style={glanceStyle(utils.hasMaleToilet)}>
          <i className="em-svg em-man-raising-hand" />
          Has Male toilet
        </li>
        <li style={glanceStyle(utils.hasFemaleToilet)}>
          <i className="em-svg em-woman-raising-hand" />
          Has Female toilet
        </li>
        <li style={glanceStyle(utils.hasHandicappedToilet)}>
          <i className="em-svg em-wheelchair" />
          {handicappedText()}
        </li>
        <li style={glanceStyle(utils.toiletHasWaterCooler)}>
          <i className="em-svg em-potable_water" />
          Has water cooler
        </li>
        <li style={glanceStyle(utils.toiletHasShowerHeads)}>
          <i className="em-svg em-shower" />
          Has shower heads
        </li>
        <li style={glanceStyle(utils.toiletHasHose)}>
          <i className="em-svg em-sweat_drops" />
          Has hose
        </li>
      </ul>
      <Reviews name={name} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    toilets(fields: { slug: { eq: $slug } }) {
      name
      lat
      lon
      facilities {
        hose
        showerHeads
        handicapped
        male
        female
        seperateHandicapped
        waterCooler
      }
    paranomaUrl
    }
  }
`
