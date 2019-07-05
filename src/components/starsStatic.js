import React from "react"

class StarsStatic extends React.Component {
  constructor(props) {
    super(props)
    this.isClicked = this.isClicked.bind(this)
  }

  isClicked(index) {
    return index < this.props.score
      ? { color: "orange", fontSize: "80%" }
      : { fontSize: "80%" }
  }

  render() {
    // CSS defined in parent class
    return (
      <span>
        <i id="0" className="fas fa-star" style={this.isClicked(0)} />
        <i id="1" className="fas fa-star" style={this.isClicked(1)} />
        <i id="2" className="fas fa-star" style={this.isClicked(2)} />
        <i id="3" className="fas fa-star" style={this.isClicked(3)} />
        <i id="4" className="fas fa-star" style={this.isClicked(4)} />
      </span>
    )
  }
}

export default StarsStatic
