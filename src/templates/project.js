import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file } = node.data.target.fields
      return <img src={file["en-US"].url} alt="" width={200}></img>
    },
  },
}

const ProjectPage = ({ data, pageContext }) => {
  const { contentfulProject: project } = data

  return (
    <Layout>
      <SEO title={project.title} />
      <Link to="/">Back</Link>
      {pageContext.prevProject && (
        <Link to={`/project/${pageContext.prevProject.slug}`}>
          Previous project
        </Link>
      )}
      {pageContext.nextProject && (
        <Link to={`/project/${pageContext.nextProject.slug}`}>
          Next project
        </Link>
      )}
      <h1>{project.title}</h1>
      <dl>
        <img src={project.headerImage.fixed.src} alt=""></img>
        <dt>Client</dt>
        <dd>
          {project.clients.map(({ name }) => (
            <span key={name}>{name}</span>
          ))}
        </dd>

        <dt>Category</dt>
        <dd>{project.category}</dd>

        <dt>Date</dt>
        <dd>{project.date}</dd>

        <dt>Team</dt>
        <dd>
          {project.team.map(name => (
            <span key={name}>{name}</span>
          ))}
        </dd>

        <dt>Link</dt>
        <dd>
          <a href={project.link}>{project.link}</a>
        </dd>
      </dl>

      <p>{project.intro.intro}</p>
      <div>{documentToReactComponents(project.body.json, options)}</div>
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
      category
      date
      headerImage {
        fixed {
          src
        }
      }
      id
      body {
        json
      }
      clients {
        name
        link
      }
      intro {
        intro
      }
      link
      team
      title
    }
  }
`

export default ProjectPage
