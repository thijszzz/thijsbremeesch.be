import React from "react"
import { Layout } from "../components/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Img from "gatsby-image"
import styles from "./project.module.css"
import { format } from "date-fns"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const file = node.data.target.fields && node.data.target.fields.file

      if (!file) return null
      return <img src={file["en-US"].url} alt="" width="100%" />
    },
  },
}

const ProjectPage = ({ data, pageContext }) => {
  const { contentfulProject: project } = data

  return (
    <Layout>
      <SEO title={project.title} />
      <Link to="/">←</Link>

      <Img
        sizes={project.headerImage.sizes}
        alt={`${project.title} image`}
        className={styles.headerImage}
      />

      <dl className={styles.quickInfoList}>
        <div>
          <dt>Client</dt>
          <dd>
            {project.clients.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </dd>
        </div>

        <div>
          <dt>Category</dt>
          <dd>{project.category}</dd>
        </div>

        <div>
          <dt>Date</dt>
          <dd>{format(new Date(project.date), "MMM yyyy")}</dd>
        </div>
      </dl>

      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          {documentToReactComponents(project.body.json, options)}
        </div>

        <aside>
          <dl>
            <div>
              <dt>Team</dt>
              <dd>
                <ol>
                  {project.team.map(name => (
                    <li key={name}>{name}</li>
                  ))}
                </ol>
              </dd>
            </div>

            <div>
              <dt>Link</dt>
              <dd>
                <a href={project.link}>{project.link}</a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      {pageContext.prevProject && (
        <Link to={`/project/${pageContext.prevProject.slug}`}>
          <button>Previous project</button>
        </Link>
      )}
      {pageContext.nextProject && (
        <Link to={`/project/${pageContext.nextProject.slug}`}>
          <button>Next project</button>
        </Link>
      )}
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
        sizes(maxWidth: 960) {
          ...GatsbyContentfulSizes_withWebp
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
      link
      team
      title
    }
  }
`

export default ProjectPage
