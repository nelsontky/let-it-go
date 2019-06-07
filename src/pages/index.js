import React from "react"
import Layout from "../components/layout"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import ***REMOVED*** Link ***REMOVED*** from "gatsby"

export default class App extends React.Component ***REMOVED***

  constructor(props) ***REMOVED***
    super(props)
    this.state = ***REMOVED***
      toilets: this.props.data.allToilets.nodes
    ***REMOVED***
  ***REMOVED***

  render() ***REMOVED***
    return (
      <Layout main=***REMOVED***true***REMOVED***>
        <table style=***REMOVED******REMOVED*** tableLayout: "fixed" ***REMOVED******REMOVED***>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            ***REMOVED***this.state.toilets.map((toilet, index) => (
              <tr key=***REMOVED***index***REMOVED***>
                <td><Link
                  to=***REMOVED***"/" + toilet.name.replace(/\s/g,'')***REMOVED***>***REMOVED***toilet.name***REMOVED***
                </Link></td>
              </tr>
            ))***REMOVED***
          </tbody>
        </table>
      </Layout>
    )
  ***REMOVED***
***REMOVED***

export const query = graphql`
  query ***REMOVED***
    allToilets(sort: ***REMOVED***fields: name, order: ASC***REMOVED***) ***REMOVED***
      nodes ***REMOVED***
        name
        lat
        lon
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`
