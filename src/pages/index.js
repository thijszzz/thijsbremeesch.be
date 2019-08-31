import React from "react"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import styles from "./index.module.css"
import Img from "gatsby-image"

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

  const navigateUsingKeys = e => {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") navigateUp()
    if (e.key === "ArrowDown" || e.key === "ArrowRight") navigateDown()
  }

  React.useEffect(() => {
    document.addEventListener("keydown", navigateUsingKeys)

    return () => {
      document.removeEventListener("keydown", navigateUsingKeys)
    }
  })

  return (
    <Layout>
      <p>{navIndex}</p>
      <SEO title="Home" />
      <section className={styles.projectsContainer}>
        <ol className={styles.projectsContainerList}>
          {projects.map(({ title, id, slug, previewImage }, i) => (
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
                  <span className={styles.projectSubtitle}>
                    Tagline comes here
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <div className={styles.projectNavContainer}>
          <div className={styles.projectNavDotsContainer}>
            {projects.map((_project, i) => (
              <button key={`nav-${i}`} onClick={() => setNavIndex(i)}>
                {i}
              </button>
            ))}
          </div>

          <div className={styles.projectNavArrowsContainer}>
            <button onClick={navigateUp}>up</button>
            <button onClick={navigateDown}>down</button>
          </div>
        </div>
      </section>

      <section className={styles.contactContainer}>
        <p>
          Lorem ipsum dolor sit amet{" "}
          <Link to="/contact">Contact me please</Link>
        </p>
        <ol className={styles.linksList}>
          {externalLinks.map(
            ({ title, link, image }, i) =>
              image && (
                <li key={`link-${i}`}>
                  <a href={link}>
                    <img
                      src={image.fixed.src}
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
          fixed {
            src
          }
        }
      }
    }
    allContentfulProject(limit: 4) {
      nodes {
        slug
        title
        id
        previewImage {
          sizes(maxWidth: 900) {
            ...GatsbyContentfulSizes_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
