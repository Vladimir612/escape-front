import React from "react"
import * as styles from "./HeroSection.module.scss"
import { BsArrowDownCircle } from "react-icons/bs"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const HeroSection = () => {
  // const homeVideo = "homeVideo.mp4"
  const data = useStaticQuery(graphql`
    query getHeroImg {
      img: file(relativePath: { eq: "homeSection/hero.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.hero}>
      <Img
        fluid={data.img.childImageSharp.fluid}
        className={styles.imgWrapper}
      />
      {/* <video loop muted autoPlay controls poster="videoPoster.png">
        <source src={homeVideo} type="video/mp4" />
        <p>Message for when the video cannot be played.</p>
      </video> */}

      <AnchorLink className={styles.buttonScroll} to="/#tko-smo-mi">
        <BsArrowDownCircle size={40} color={"#fff"} />
      </AnchorLink>
    </section>
  )
}

export default HeroSection
