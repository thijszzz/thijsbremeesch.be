import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import LogoBig from "../../assets/svg/logo_big"
import LogoSmall from "../../assets/svg/logo_small"

export const Header = ({ siteTitle }) => {

  const pages = [
    {
      name: "about",
      to: "/about"
    }
  ]

  return (
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
          {pages.map(page => {
            const isActive = window.location.pathname === page.to

            if (isActive) {
              return (
                <li className={styles.navListItemActive}>
                  <Link className={styles.navListLinkActive} to={page.to}>
                    {page.name}
                  </Link>
                </li>
              )
            }

            return (
              <li className={styles.navListItem}>
                <Link className={styles.navListLink} to={page.to}>
                  {page.name}
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
