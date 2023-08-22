const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query stylePrograms {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/stilovi/" + node.frontmatter.slug,
      component: path.resolve(
        "./src/templates/ProgramDetails/ProgramDetails.js"
      ),
      context: { slug: node.frontmatter.slug },
    })
  })
}
