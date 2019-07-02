import React from "react"
import ***REMOVED*** Link ***REMOVED*** from "gatsby"
import * as utils from "../utils/utils"

class BackButton extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
    this.state = ***REMOVED*** localWindow: null ***REMOVED***
  ***REMOVED***
  componentDidMount() ***REMOVED***
    this.setState(***REMOVED***
      localWindow: window,
    ***REMOVED***)
  ***REMOVED***

  render() ***REMOVED***
    if (this.state.localWindow == null) ***REMOVED***
      return <Link to=***REMOVED***"/"***REMOVED***>Back</Link>
    ***REMOVED*** else ***REMOVED***
      console.log(this.state.localWindow.history)
      return this.state.localWindow.history.state == null ? (
        <Link to=***REMOVED***"/"***REMOVED***>Back</Link>
      ) : (
        <button
          onClick=***REMOVED***() => this.state.localWindow.history.back()***REMOVED***
          style=***REMOVED***utils.buttonToLinkStyle("#1ca086", "100%")***REMOVED***
        >
          Back
        </button>
      )
    ***REMOVED***
  ***REMOVED***
***REMOVED***

export default BackButton
