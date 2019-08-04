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
    const projects = data.allContentfulProject.nodes
    projects.forEach((project, i) => {
      createPage({
        path: `/project/${project.slug}`,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          slug: project.slug,
          prevProject: projects[i - 1],
          nextProject: projects[i + 1],
        },
      })
    })
  })
}
