import React from "react"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import styles from "./about.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import HiOutline from "../assets/svg/hi_outline"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const AboutPage = () => {
  const data = useStaticQuery(query)
  const { contentfulAboutPage } = data

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
                <a href={contentfulAboutPage.resume.file.url}>
                  Check out my resume
                </a>
              </li>
            )}
            <li>
              <Link to="/contact">Contact me</Link>
            </li>
          </ol>
        </div>
      </section>

      <span>{contentfulAboutPage.quote}</span>

      <section>
        {documentToReactComponents(contentfulAboutPage.body.json)}
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
