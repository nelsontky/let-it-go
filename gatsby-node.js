const path = require(`path`)

exports.onCreateNode = (***REMOVED*** node, actions ***REMOVED***) => ***REMOVED***
  if (node.internal.type == "Toilets") ***REMOVED***
      const ***REMOVED*** createNodeField ***REMOVED*** = actions
      const slug = `/$***REMOVED***node.name.replace(/\s/g,'')***REMOVED***/`
      createNodeField(***REMOVED***
        node,
        name: "slug",
        value: slug
      ***REMOVED***)
  ***REMOVED***
***REMOVED***

exports.createPages = (***REMOVED*** graphql, actions ***REMOVED***) => ***REMOVED***
  const ***REMOVED*** createPage ***REMOVED*** = actions
  return graphql(`
    ***REMOVED***
      allToilets ***REMOVED***
        edges ***REMOVED***
          node ***REMOVED***
            fields ***REMOVED***
              slug
            ***REMOVED***
          ***REMOVED***
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    `
  ).then(result => ***REMOVED***
    result.data.allToilets.edges.forEach((***REMOVED*** node ***REMOVED***) => ***REMOVED***
      createPage(***REMOVED***
        path: node.fields.slug,
        component: path.resolve("./src/templates/toilet.js"),
        context: ***REMOVED***
          slug: node.fields.slug
        ***REMOVED***
      ***REMOVED***)
    ***REMOVED***)
  ***REMOVED***)
***REMOVED***
