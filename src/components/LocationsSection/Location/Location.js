import React from "react"
import * as styles from "./location.module.scss"
import Img from "gatsby-image"

const Location = ({ locationObject }) => {
  const image = locationObject.thumb.childImageSharp.fluid

  return (
    <div className={styles.location}>
      <div className={styles.content}>
        <Img fluid={image} className={styles.imgWrapper} />
        <div className={styles.rightSide}>
          <h3>{locationObject.title}</h3>
          <p>{locationObject.address}</p>
          <p className={styles.addressHelp}>{locationObject.addressHelp}</p>
          {/* <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            {locationObject.phone}
          </div> */}
          <div className={styles.emailWrapper}>
            <img src="/mail.svg" alt="Mail logo" />
            <a
              href={"mailto: " + locationObject.email}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3dad6a", textDecoration: "none" }}
            >
              {locationObject.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
