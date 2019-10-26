import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import styles from "./layout.module.css"
import "../../styles/reset.css"
import "../../styles/global.css"
import Helmet from "react-helmet"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <base target="_blank" href="*" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.container}>{children}</main>
      <footer className={styles.footerContainer}>
        © {new Date().getFullYear()} - Wouter Landuydt
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
