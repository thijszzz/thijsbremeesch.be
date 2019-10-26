import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import LogoBig from "../../assets/svg/logo_big"
import LogoSmall from "../../assets/svg/logo_small"

export const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.logo}>
      <span className="hide">{siteTitle}</span>
      <Link to="/">
        <LogoBig />
        <LogoSmall />
      </Link>
    </h1>

    <nav className={styles.nav}>
      <ol className={styles.navList}>
        <li className={styles.navListItem}>
          <Link className={styles.navListLink} to="/about">
            about
          </Link>
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
