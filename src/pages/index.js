import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query)

  const { nodes: externalLinks } = data.allContentfulExternalLink
  const { nodes: projects } = data.allContentfulProject

  return (
    <Layout>
      <SEO title="Home" />
      <ol>
        {projects.map(({ title, id, slug }) => (
          <li key={id}>
            <Link to={`/project/${slug}`}>{title}</Link>
          </li>
        ))}
      </ol>
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
      }
    }
  }
`

export default IndexPage
