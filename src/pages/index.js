import React from "react"
import Layout from "../components/layout"
import ***REMOVED*** graphql ***REMOVED*** from "gatsby"
import ***REMOVED*** Link ***REMOVED*** from "gatsby"

export default (***REMOVED*** data ***REMOVED***) => ***REMOVED***
  const edges = data.allToilets.edges
  return (
    <Layout>
      <h1>Let It Go</h1>
      <table style=***REMOVED******REMOVED***tableLayout: "fixed"***REMOVED******REMOVED***>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          ***REMOVED***edges.map((***REMOVED*** node ***REMOVED***, index) => (
            <tr key=***REMOVED***index***REMOVED***>
              <td><Link
                to=***REMOVED***"/" + node.name.replace(/\s/g,'')***REMOVED***>***REMOVED***node.name***REMOVED***
              </Link></td>
            </tr>
          ))***REMOVED***
        </tbody>
      </table>
    </Layout>
  )
***REMOVED***

export const query = graphql`
  query ***REMOVED***
    allToilets(sort: ***REMOVED***fields: name***REMOVED***) ***REMOVED***
      edges ***REMOVED***
        node ***REMOVED***
          name
          lat
          lon
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
`
