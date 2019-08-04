import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"

const ProjectPage = ({ data }) => {
  const { contentfulProject: project } = data

  return (
    <Layout>
      <SEO title={project.title} />
      {JSON.stringify(project)}
    </Layout>
  )
}

ProjectPage.propTypes = {
  siteTitle: PropTypes.string,
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      date
    }
  }
`

export default ProjectPage
