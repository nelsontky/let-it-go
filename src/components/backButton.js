import React from "react"
import { Link } from "gatsby"
import * as utils from "../utils/utils"

class BackButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { localWindow: null }
  }
  componentDidMount() {
    this.setState({
      localWindow: window,
    })
  }

  render() {
    if (this.state.localWindow == null) {
      return <Link to={"/"}>Back</Link>
    } else {
      return this.state.localWindow.history.state == null ? (
        <Link to={"/"}>Back</Link>
      ) : (
        <button
          onClick={() => this.state.localWindow.history.back()}
          style={utils.buttonToLinkStyle("#1ca086", "100%")}
        >
          Back
        </button>
      )
    }
  }
}

export default BackButton
