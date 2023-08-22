import { Link } from "gatsby"
import React from "react"
import * as styles from "./styleCard.module.scss"
import Img from "gatsby-image"

const StyleCard = ({ styleObject }) => {
  const image = styleObject.thumb.childImageSharp.fluid

  return (
    <div className={styles.styleCard}>
      <Img fluid={image} className={styles.imgWrapper} />
      <div className={styles.content}>
        <h3 className={styles.title}>
          {styleObject.shortTitle !== ""
            ? styleObject.shortTitle
            : styleObject.title}
        </h3>
        <div className={styles.linkWrapper}>
          <Link to={"/stilovi/" + styleObject.slug}>Saznajte više</Link>
        </div>
      </div>
    </div>
  )
}

export default StyleCard
