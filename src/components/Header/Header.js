import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import SignatureLogo from "../../assets/svg/signature_logo"
import lottie from "lottie-web"
import animationData from "../../assets/lottie/logo_large.json"

export const Header = ({ siteTitle }) => {
  const logoRef = React.useRef(null)

  React.useEffect(() => {
    console.log(logoRef.current, animationData)
    lottie.loadAnimation({
      container: logoRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      // path: "../../assets/lottie/logo_large",
      animationData,
    })

    return () => lottie.destroy()
  }, [logoRef])

  return (
    <>
      <div ref={logoRef}>Thijs</div>
      <header className={styles.header}>
        <h1>
          <span className="hide">{siteTitle} </span>
          <Link to="/">
            <SignatureLogo />
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
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
