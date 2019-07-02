const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type == "Toilets") {
      const { createNodeField } = actions
      const slug = `/${node.name.replace(/\s/g,'')}/`
      createNodeField({
        node,
        name: "slug",
        value: slug
      })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allToilets {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `
  ).then(result => {
    result.data.allToilets.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/toilet.js"),
        context: {
          slug: node.fields.slug
        }
      })
    })
  })
}
