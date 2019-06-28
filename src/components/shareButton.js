import React from "react"
import Tippy from "@tippy.js/react"

class ShareButton extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super(props)
    this.state = ***REMOVED***
      url: `https://nelsontky.github.io/let-it-go/$***REMOVED***this.props.name.replace(
        /\s/g,
        ""
      )***REMOVED***`,
    ***REMOVED***
  ***REMOVED***

  copyText = event => ***REMOVED***
    event.preventDefault()

    this.refs.input.select()

    document.execCommand("copy")

    return false
  ***REMOVED***

  render() ***REMOVED***
    const content = (
      <div style=***REMOVED******REMOVED*** textAlign: "left" ***REMOVED******REMOVED***>
        <h4 style=***REMOVED******REMOVED*** color: "white" ***REMOVED******REMOVED***>Share</h4>
        <hr style=***REMOVED******REMOVED*** border: "1px solid white" ***REMOVED******REMOVED*** />
        Love/Hate <strong>***REMOVED***this.props.name***REMOVED***</strong>? Share your Let It Go
        experience on social media! <br />
        (psst... try not to look suspicious in the toilet with your phone ok?)
        <div style=***REMOVED******REMOVED*** textAlign: "center" ***REMOVED******REMOVED***>
          <form onSubmit=***REMOVED***this.copyText***REMOVED***>
            <input ref="input" type="text" value=***REMOVED***this.state.url***REMOVED*** readonly />
            <input type="submit" value="Copy" />
          </form>
          <iframe
            src=***REMOVED***`https://www.facebook.com/plugins/share_button.php?href=$***REMOVED***
              this.state.url
            ***REMOVED***&layout=button&size=small&width=58&height=20&appId`***REMOVED***
            width="60"
            height="20"
            style=***REMOVED******REMOVED*** border: "none", overflow: "hidden" ***REMOVED******REMOVED***
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            title="fb"
          />
          <iframe
            height="20"
            width="62"
            style=***REMOVED******REMOVED*** border: "none", overflow: "hidden" ***REMOVED******REMOVED***
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            src=***REMOVED***`https://platform.twitter.com/widgets/tweet_button.html?url=$***REMOVED***
              this.state.url
            ***REMOVED***`***REMOVED***
            title="tweet"
          />
        </div>
      </div>
    )
    return (
      <Tippy
        content=***REMOVED***content***REMOVED***
        trigger="click"
        placement="bottom"
        interactive=***REMOVED***true***REMOVED***
        arrow=***REMOVED***true***REMOVED***
      >
        <img
          style=***REMOVED******REMOVED*** verticalAlign: "bottom" ***REMOVED******REMOVED***
          src="https://material.io/tools/icons/static/icons/twotone-share-24px.svg"
          alt=""
        />
      </Tippy>
    )
  ***REMOVED***
***REMOVED***

export default ShareButton
