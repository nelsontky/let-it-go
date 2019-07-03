import React from "react"

class PaginatedArray extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.pageSize = this.props.pageSize

    this.state = {
      page: this.props.pageNumber,
    }

    // Setting up page number buttons
    this.pageNumbers = []
    for (
      let i = 0;
      i < Math.ceil(this.props.children.length / this.pageSize);
      i++
    ) {
      this.pageNumbers.push(" " + (i + 1) + " ")
    }

    // Setting up individual pages
    this.pages = this.props.children.reduce((acc, currentValue, i) => {
      if (i % this.pageSize === 0) {
        acc.push([currentValue])
        return acc
      } else {
        acc[acc.length - 1].push(currentValue)
        return acc
      }
    }, [])
  }

  handleClick(event) {
    this.setState({ page: parseInt(event.target.id) })
  }

  render() {
    return (
      <tbody>
        {this.pages[this.state.page - 1]}
        <tr>
          <td style={{ border: "0" }}>
            {this.pageNumbers.map((x, i) => (
              <button
                onClick={this.handleClick}
                id={i + 1}
                key={i + 1}
                disabled={this.state.page === i + 1}
              >
                {x}
              </button>
            ))}
          </td>
        </tr>
      </tbody>
    )
  }
}

export default PaginatedArray
