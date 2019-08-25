import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import styles from "./layout.module.css"
import "../../styles/reset.css"
import "../../styles/global.css"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.container}>{children}</main>
      <footer>© {new Date().getFullYear()} - Wouter Landuydt</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
