import React from "react"
import ***REMOVED*** Link ***REMOVED*** from "gatsby"

export default (props) => (
  <div style=***REMOVED******REMOVED*** margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` ***REMOVED******REMOVED***>
    ***REMOVED***!props.main && <Link to="/">Back</Link>***REMOVED***
    ***REMOVED***props.main && <h1>Let It Go</h1>***REMOVED***
    ***REMOVED***props.children***REMOVED***
  </div>
)
