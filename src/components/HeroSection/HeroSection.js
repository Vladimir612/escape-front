import React from "react"
import homeVideo from "../../videos/homeVideo.mp4"
import * as styles from "./HeroSection.module.scss"
import { BsArrowDownCircle } from "react-icons/bs"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <video loop muted autoPlay controls="" poster="videoPoster.png">
        <source src={homeVideo} type="video/mp4" />
        <p>Message for when the video cannot be played.</p>
      </video>
      <AnchorLink className={styles.buttonScroll} to="/#tko-smo-mi">
        <BsArrowDownCircle size={40} color={"#fff"} />
      </AnchorLink>
    </section>
  )
}

export default HeroSection
