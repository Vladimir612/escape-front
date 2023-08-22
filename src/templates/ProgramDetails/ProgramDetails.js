import React from "react"
import * as styles from "./programDetails.module.scss"
import Nav from "./../../components/Nav/Nav"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Footer from "../../components/Footer/Footer"

export default function ProgramDetails({ data }) {
  const { banner, title, textContent, ages } = data.markdownRemark.frontmatter

  return (
    <section className={styles.programDetails}>
      <Nav />
      <div className={styles.bannerWrapper}>
        <Img
          fluid={banner.childImageSharp.fluid}
          className={styles.imgWrapper}
        />
        <h1>{title}</h1>
      </div>
      <p>{textContent}</p>

      {ages.length !== 0 && (
        <>
          <h3>UZRASTI</h3>
          <ul className={styles.agesList}>
            {ages.map((age, index) => (
              <li key={index}>{age}</li>
            ))}
          </ul>
        </>
      )}
      <Footer />
    </section>
  )
}

export const stylesObjectsQuery = graphql`
  query stylesObjectsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        textContent
        ages
        banner {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
