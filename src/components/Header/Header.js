import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

export const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <nav>
      <ol>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ol>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
