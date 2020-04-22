import React from "react"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import styles from "./index.module.css"
import Img from "gatsby-image"
import { useArrowKeys } from "../lib/useArrowKeys"
import Arrow from "../assets/svg/arrow"
import Eye from "../assets/svg/eye"

const IndexPage = () => {
  const data = useStaticQuery(query)
  const [navIndex, setNavIndex] = React.useState(0)

  const { nodes: externalLinks } = data.allContentfulExternalLink
  const { nodes: projects } = data.allContentfulProject

  const projectAmt = projects.length - 1

  const navigateUp = () =>
    navIndex === 0 ? setNavIndex(projectAmt) : setNavIndex(navIndex - 1)

  const navigateDown = () =>
    navIndex === projectAmt ? setNavIndex(0) : setNavIndex(navIndex + 1)

  useArrowKeys({
    up: navigateUp,
    left: navigateUp,
    down: navigateDown,
    right: navigateDown,
  })

  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.projectsContainer}>
        <ol className={styles.projectsContainerList}>
          {projects.map(({ title, id, slug, previewImage, tagline }, i) => (
            <li
              key={id}
              className={styles.projectContainer}
              style={{ display: i === navIndex && "block" }}
            >
              <Link to={`/project/${slug}`}>
                <div className={styles.projectImageContainer}>
                  <Img
                    sizes={previewImage.sizes}
                    alt={`${title} preview`}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectTitleContainer}>
                  <h2 className={styles.projectTitle}>{title}</h2>
                  <span className={styles.projectSubtitle}>{tagline}</span>
                  <Eye />
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <div className={styles.projectNavContainer}>
          <div className={styles.projectNavButtonContainer}>
            {projects.map((_project, i) => (
              <React.Fragment key={`button-${i}`}>
                <button
                  className={styles.projectNavButton}
                  key={`nav-${i}`}
                  tabIndex={-1}
                  onClick={() => setNavIndex(i)}
                  style={{ transform: i === navIndex && "scale(10, 0.2)" }}
                />
                {i !== projects.length - 1 && (
                  <div className={styles.projectNavSeparator} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className={styles.projectNavArrowsContainer}>
            <button
              className={styles.projectNavArrow}
              tabIndex={-1}
              onClick={navigateUp}
            >
              <Arrow style={{ transform: "scaleY(-1)" }} />
            </button>
            <button
              className={styles.projectNavArrow}
              tabIndex={-1}
              onClick={navigateDown}
            >
              <Arrow />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.contactContainer}>
        <p className={styles.contactText}>
            Interested in being my next best work or just having a simple question?
          <br />
          <Link className="default-link" to="/contact">
            Let’s have a quick chat
          </Link>
          , no strings attached!
        </p>
        <ol className={styles.linksList}>
          {externalLinks.map(
            ({ title, link, image }, i) =>
              image && (
                <li key={`link-${i}`} className={styles.linksListItem}>
                  <a href={link}>
                    <img
                      src={image.file.url}
                      width={20}
                      height={20}
                      title={title}
                      alt=""
                    />
                  </a>
                </li>
              )
          )}
        </ol>
      </section>
    </Layout>
  )
}

const query = graphql`
  query {
    allContentfulExternalLink {
      nodes {
        title
        link
        image {
          file {
            url
          }
        }
      }
    }
    # limit should always be an even number
    allContentfulProject(limit: 4) {
      nodes {
        slug
        title
        tagline
        id
        previewImage {
          sizes(maxWidth: 530) {
            ...GatsbyContentfulSizes_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
