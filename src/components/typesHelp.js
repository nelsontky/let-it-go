import React from "react"
import HelpButton from "./helpButton"

const content = (
  <div style={{ textAlign: "left" }}>
    Legend:
    <ul>
      <li>
        <i className="em-svg em-man-raising-hand" />: Has male toilet
      </li>
      <li>
        <i className="em-svg em-woman-raising-hand" />: Has female toilet
      </li>
      <li>
        <i className="em-svg em-wheelchair" />: Is handicapped accessible
        (Includes seperate handicapped toilets or those inside toilets as a
        larger cubicle)
      </li>
    </ul>
  </div>
)

export default () => <HelpButton content={content} />
