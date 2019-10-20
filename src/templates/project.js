import React from "react"
import { Layout } from "../components/Layout"
import { graphql, Link, navigate } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Img from "gatsby-image"
import styles from "./project.module.css"
import { format } from "date-fns"
import { getDomainFromUrl } from "../lib"
import { useArrowKeys } from "../lib/useArrowKeys"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const file = node.data.target.fields && node.data.target.fields.file

      if (!file) return null
      return <img src={file["en-US"].url} alt="" width="100%" />
    },
  },
}

const ProjectPage = ({ data, pageContext: { prevProject, nextProject } }) => {
  const { contentfulProject: project } = data

  const navigateToNextProject = () =>
    prevProject && navigate(`/project/${prevProject.slug}`)

  const navigateToPrevProject = () =>
    nextProject && navigate(`/project/${nextProject.slug}`)

  useArrowKeys({ left: navigateToNextProject, right: navigateToPrevProject })

  const renderAsideItems = () => (
    <>
      <div className={`${styles.taglistItem} ${styles.taglistAsideItem}`}>
        <dt className={styles.taglistItemTitle}>Team</dt>
        <dd className={styles.taglistItemDesc}>
          <ol>
            {project.team.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ol>
        </dd>
      </div>

      {project.onlineLink && (
        <div className={`${styles.taglistItem} ${styles.taglistAsideItem}`}>
          <dt className={styles.taglistItemTitle}>Online</dt>
          <dd className={styles.taglistItemDesc}>
            <a className="default-link" href={project.onlineLink}>
              {getDomainFromUrl(project.onlineLink)}
            </a>
          </dd>
        </div>
      )}

      {project.behanceLink && (
        <div className={`${styles.taglistItem} ${styles.taglistAsideItem}`}>
          <dt className={styles.taglistItemTitle}>Full project</dt>
          <dd className={styles.taglistItemDesc}>
            <a className="default-link" href={project.behanceLink}>
              behance.com
            </a>
          </dd>
        </div>
      )}
    </>
  )

  return (
    <Layout>
      <SEO title={project.title} />
      <Link to="/">←</Link>

      <Img
        sizes={project.headerImage.sizes}
        alt={`${project.title} image`}
        className={styles.headerImage}
      />

      <dl className={styles.taglist}>
        <div className={`${styles.taglistItem} ${styles.taglistMainItem}`}>
          <dt className={styles.taglistItemTitle}>Client</dt>
          <dd className={styles.taglistItemDesc}>
            {project.clients.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </dd>
        </div>
        <div className={`${styles.taglistItem} ${styles.taglistMainItem}`}>
          <dt className={styles.taglistItemTitle}>Category</dt>
          <dd className={styles.taglistItemDesc}>{project.category}</dd>
        </div>
        <div className={`${styles.taglistItem} ${styles.taglistMainItem}`}>
          <dt className={styles.taglistItemTitle}>Date</dt>
          <dd className={styles.taglistItemDesc}>
            {format(new Date(project.date), "MMM yyyy")}
          </dd>
        </div>

        {renderAsideItems()}
      </dl>

      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          {documentToReactComponents(project.body.json, options)}
        </div>

        <aside>{renderAsideItems()}</aside>
      </div>

      {prevProject && (
        <button onClick={navigateToPrevProject}>Previous project</button>
      )}

      {nextProject && (
        <button onClick={navigateToNextProject}>Next project</button>
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
      behanceLink
      onlineLink
      team
      title
    }
  }
`

export default ProjectPage
