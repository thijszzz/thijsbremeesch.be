import React from "react"
import { Layout } from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import styles from "./index.module.css"

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
      <SEO title="Home" />
      <section className={styles.projectsContainer}>
        <ol>
          {projects.map(
            ({ title, id, slug, previewImage }, i) =>
              i === navIndex && (
                <li key={id}>
                  <Link to={`/project/${slug}`}>
                    <img
                      src={previewImage.fixed.src}
                      alt={`${title} preview image`}
                    />
                    <div>
                      <h2>{title}</h2>
                      <span>Tagline comes here</span>
                    </div>
                  </Link>
                </li>
              )
          )}
        </ol>

        <div>
          <p>{navIndex}</p>

          {projects.map((_project, i) => (
            <button key={`nav-${i}`} onClick={() => setNavIndex(i)}>
              {i}
            </button>
          ))}

          <button onClick={navigateUp}>up</button>
          <button onClick={navigateDown}>down</button>
        </div>
      </section>

      <ol>
        {externalLinks.map(({ title, link, image }, i) => (
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
        ))}
      </ol>
      <Link to="/contact">Contact me please</Link>
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
          fixed {
            src
          }
        }
      }
    }
  }
`

export default IndexPage
