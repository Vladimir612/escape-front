import React from "react"
import * as styles from "./stylesSection.module.scss"
import Subtitle from "./../../Utilities/Subtitle/Subtitle"
import { useStaticQuery, graphql } from "gatsby"
import StyleCard from "./StyleCard/StyleCard"

const StylesSection = () => {
  const data = useStaticQuery(graphql`
    query getStyleObjects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(markdown/stylesSection)/" } }
      ) {
        nodes {
          frontmatter {
            title
            shortTitle
            textContent
            ages
            slug
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            banner {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  `)

  const stylesObjects = data.allMarkdownRemark.nodes

  return (
    <div className={styles.stylesSection} id="stilovi">
      <Subtitle title="Stilovi" />
      <div className={styles.stylesWrapper}>
        {stylesObjects.map((styleObject, index) => (
          <StyleCard styleObject={styleObject.frontmatter} key={index} />
        ))}
      </div>
    </div>
  )
}

export default StylesSection
