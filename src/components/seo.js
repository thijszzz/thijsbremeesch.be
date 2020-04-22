/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}

      //       <!-- Primary Meta Tags --></meta>
      // <title>Hi, I'm Thijs Bremeesch</title>
      // <meta name="title" content="Hi, I'm Thijs Bremeesch">
      // <meta name="description" content="I’m Thijs Bremeesch, A normal boy with an abnormal love for (visual) design.
      // Interested in being my next best work or just having a simple question? Let’s have a quick chat, no string attached!">

      // <!-- Open Graph / Facebook -->
      // <meta property="og:type" content="website">
      // <meta property="og:url" content="https://metatags.io/">
      // <meta property="og:title" content="Hi, I'm Thijs Bremeesch">
      // <meta property="og:description" content="I’m Thijs Bremeesch, A normal boy with an abnormal love for (visual) design.
      // Interested in being my next best work or just having a simple question? Let’s have a quick chat, no string attached!">
      // <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

      // <!-- Twitter -->
      // <meta property="twitter:card" content="summary_large_image">
      // <meta property="twitter:url" content="https://metatags.io/">
      // <meta property="twitter:title" content="Hi, I'm Thijs Bremeesch">
      // <meta property="twitter:description" content="I’m Thijs Bremeesch, A normal boy with an abnormal love for (visual) design.
      // Interested in being my next best work or just having a simple question? Let’s have a quick chat, no string attached!">
      // <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
