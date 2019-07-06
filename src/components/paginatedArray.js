import React from "react"

class PaginatedArray extends React.Component {
  constructor(props) {
    super(props)

    this.pageSize =
      this.props.pageSize > this.props.children.length
        ? this.props.children.length
        : this.props.pageSize

    // Setting up page number buttons
    this.pageButtons = []
    for (
      let i = 0;
      i < Math.ceil(this.props.children.length / this.pageSize);
      i++
    ) {
      this.pageButtons.push(i + 1)
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

  render() {
    return (
      <tbody>
        {this.pages[this.props.pageNumber - 1]}
        {this.pageSize < this.props.children.length && (
          <tr>
            <td colSpan={this.props.columns} style={{ border: "0", textAlign: "center" }}>
              {this.pageButtons.map((x, i) => (
                <button
                  onClick={this.props.handlePageChange}
                  id={i + 1}
                  key={i + 1}
                  disabled={this.props.pageNumber === i + 1}
                >
                  {x}
                </button>
              ))}
            </td>
          </tr>
        )}
      </tbody>
    )
  }
}

export default PaginatedArray
