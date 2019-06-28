import React from "react"
import HelpButton from "./helpButton"

const content = (
  <div style=***REMOVED******REMOVED*** textAlign: "left" ***REMOVED******REMOVED***>
    Check that you have:
    <ul>
      <li>
        Enabled your device's GPS settings
        <ul>
          <li>
            <a
              style=***REMOVED******REMOVED***
                textShadow: "none",
              ***REMOVED******REMOVED***
              href="https://support.google.com/accounts/answer/3467281"
              rel="noopener noreferrer"
              target="_blank"
            >
              Android
            </a>
          </li>
          <li>
            <a
              style=***REMOVED******REMOVED*** textShadow: "none" ***REMOVED******REMOVED***
              href="https://support.apple.com/en-us/HT207092"
              rel="noopener noreferrer" 
              target="_blank"
            >
              iOS
            </a>
          </li>
          <li>Reload the page after enabling GPS settings</li>
        </ul>
      </li>
      <li>
        Allowed your browser and this website the neccessary permissions to read
        your location
      </li>
    </ul>
  </div>
)

export default () => (
  <p>
    Location not detected <HelpButton content=***REMOVED***content***REMOVED*** />
  </p>
)
