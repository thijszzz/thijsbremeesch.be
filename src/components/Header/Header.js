import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import SignatureLogo from "../../assets/svg/signature_logo"

export const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1>
      <span className="hide">{siteTitle} </span>
      <Link to="/">
        <SignatureLogo />
      </Link>
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
