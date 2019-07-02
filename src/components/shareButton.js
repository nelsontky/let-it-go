import React from "react"
import Tippy from "@tippy.js/react"

class ShareButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: `https://nelsontky.github.io/let-it-go/${this.props.name.replace(
        /\s/g,
        ""
      )}`,
    }
  }

  copyText = event => {
    event.preventDefault()

    this.refs.input.select()

    document.execCommand("copy")

    return false
  }

  render() {
    const content = (
      <div style={{ textAlign: "left" }}>
        <h4 style={{ color: "white" }}>Share</h4>
        <hr style={{ border: "1px solid white" }} />
        Love/Hate <strong>{this.props.name}</strong>? Share your Let It Go
        experience on social media! <br />
        (psst... try not to look suspicious in the toilet with your phone ok?)
        <div style={{ textAlign: "center" }}>
          <form onSubmit={this.copyText}>
            <input ref="input" type="text" value={this.state.url} readOnly />
            <input type="submit" value="Copy" />
          </form>
          <iframe
            src={`https://www.facebook.com/plugins/share_button.php?href=${
              this.state.url
            }&layout=button&size=small&width=58&height=20&appId`}
            width="60"
            height="20"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="fb"
          />
          <iframe
            height="20"
            width="62"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            src={`https://platform.twitter.com/widgets/tweet_button.html?url=${
              this.state.url
            }`}
            title="tweet"
          />
        </div>
      </div>
    )
    return (
      <Tippy
        content={content}
        trigger="click"
        placement="bottom"
        interactive={true}
        arrow={true}
      >
        <img
          style={{ verticalAlign: "bottom" }}
          src="https://material.io/tools/icons/static/icons/twotone-share-24px.svg"
          alt=""
        />
      </Tippy>
    )
  }
}

export default ShareButton
