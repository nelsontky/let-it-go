import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) ***REMOVED***
  return (
    <html ***REMOVED***...props.htmlAttributes***REMOVED***>
      <head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAm31tTHPuaSkBR1Ff7pYAavUX6K1DlZ5g&callback=initMap"></script>
        <script type="text/javascript" src="https://cdn.pannellum.org/2.4/pannellum.js"/>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        ***REMOVED***props.headComponents***REMOVED***
      </head>
      <body ***REMOVED***...props.bodyAttributes***REMOVED***>
        ***REMOVED***props.preBodyComponents***REMOVED***
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key=***REMOVED***`body`***REMOVED***
          id="___gatsby"
          dangerouslySetInnerHTML=***REMOVED******REMOVED*** __html: props.body ***REMOVED******REMOVED***
        />
        ***REMOVED***props.postBodyComponents***REMOVED***
      </body>
    </html>
  )
***REMOVED***

HTML.propTypes = ***REMOVED***
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
***REMOVED***
