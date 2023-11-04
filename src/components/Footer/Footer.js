import React from "react"
import * as styles from "./footer.module.scss"
import { FaTiktok } from "react-icons/fa"
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.leftSide}>&copy;escape 2022</div>
      <div className={styles.rightSide}>
        <a
          href="https://www.tiktok.com/@escapedancestudio?_t=8ew9PHdtMh6&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.imageWrapper}>
            <FaTiktok color="#fff" size={35} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/plesnistudioescape/?locale=hr_HR"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.imageWrapper}>
            <BsFacebook color="#fff" size={35} />
          </div>
        </a>

        <a
          href="https://www.instagram.com/plesnistudioescape/#"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.imageWrapper}>
            <BsInstagram color="#fff" size={35} />
          </div>
        </a>
        <a
          href="https://www.youtube.com/user/DanceEscape"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.imageWrapper}>
            <BsYoutube color="#fff" size={35} />
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
