import React from "react"

class Stars extends React.Component {
  constructor(props) {
    super(props)
    this.isClicked = this.isClicked.bind(this)
  }

  isClicked(index) {
    return this.props.starsState[index] ? { color: "orange" } : {}
  }

  render() {
    // CSS defined in parent class
    return (
      <div>
        <i
          id="0"
          className="fas fa-star"
          style={this.isClicked(0)}
          onClick={this.props.handleStarClick}
        />
        <i
          id="1"
          className="fas fa-star"
          style={this.isClicked(1)}
          onClick={this.props.handleStarClick}
        />
        <i
          id="2"
          className="fas fa-star"
          style={this.isClicked(2)}
          onClick={this.props.handleStarClick}
        />
        <i
          id="3"
          className="fas fa-star"
          style={this.isClicked(3)}
          onClick={this.props.handleStarClick}
        />
        <i
          id="4"
          className="fas fa-star"
          style={this.isClicked(4)}
          onClick={this.props.handleStarClick}
        />
      </div>
    )
  }
}

export default Stars
