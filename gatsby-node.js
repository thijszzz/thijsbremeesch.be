const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulProject {
        nodes {
          slug
          title
          id
        }
      }
    }
  `).then(({ data }) => {
    data.allContentfulProject.nodes.forEach(({ slug }) => {
      createPage({
        path: `/project/${slug}`,
        component: path.resolve(`./src/templates/project.js`),
        // TODO: add next and previous project to context
        context: { slug },
      })
    })
  })
}
