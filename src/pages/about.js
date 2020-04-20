import React from "react"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import styles from "./about.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import HiOutline from "../assets/svg/hi_outline"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

const AboutPage = () => {
  const data = useStaticQuery(query)
  const { contentfulAboutPage } = data

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data, content }) => (
        <a target="_blank" href={data.uri} className="default-link">
          {content[0].value}
        </a>
      ),
    },
  }

  return (
    <Layout>
      <SEO title="About" />

      <section className={styles.mainContainer}>
        <Img
          sizes={contentfulAboutPage.image.sizes}
          className={styles.mainImage}
          alt=""
        />

        <div className={styles.mainContentContainer}>
          <HiOutline />
          <div className={styles.mainIntroContainer}>
            {documentToReactComponents(contentfulAboutPage.intro.json)}
          </div>
          <ol className={styles.mainLinkList}>
            {contentfulAboutPage.resume && (
              <li>
                <a
                  href={contentfulAboutPage.resume.file.url}
                  className="default-link"
                >
                  View my resume here
                </a>
              </li>
            )}
            <li>
              <Link to="/contact" className="default-link">
                Having a question or just want to say ‘hi’
              </Link>
            </li>
          </ol>
        </div>
      </section>

      <p className={styles.marquee}>
        <span className={styles.quote}>{contentfulAboutPage.quote}</span>
      </p>

      <section className={styles.content}>
        {documentToReactComponents(contentfulAboutPage.body.json, options)}
      </section>
    </Layout>
  )
}

const query = graphql`
  query {
    contentfulAboutPage(slug: { eq: "about-page" }) {
      body {
        json
      }
      image {
        sizes(maxWidth: 420) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      quote
      intro {
        json
      }
      resume {
        file {
          url
        }
      }
    }
  }
`

export default AboutPage
