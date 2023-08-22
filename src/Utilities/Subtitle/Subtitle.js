import React from "react"
import * as styles from "./subtitle.module.scss"

const Subtitle = ({ title }) => {
  return <h2 className={styles.subtitle}>{title}</h2>
}

export default Subtitle
