import React from "react"
import * as styles from "./enrollment.module.scss"
import Subtitle from "./../../Utilities/Subtitle/Subtitle"
import { Link } from "gatsby"
import pdf from "../../../static/okviranRaspored.pdf"

const EnrollmentSection = () => {
  return (
    <section className={styles.enrollmentSection} id="upisi">
      <Subtitle title="Upisi" />
      <p>
        Nadamo se da ćete među različitim plesnim edukacijama koje nudimo
        pronaći onu koja Vama najbolje odgovara.
      </p>
      <p>
        U svrhu bolje organizacije grupa i razmjene informacija, za upis u novu
        godinu molimo{" "}
        <Link
          to="/upisnica"
          style={{ color: "#3dad6a", textDecoration: "none" }}
        >
          ispunite upisnicu
        </Link>
        .
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className={styles.downloadButton}>
            <img src="/pdf.svg" alt="Pdf logo" className={styles.logo} />
            <p>Preuzmite PDF rasporeda</p>
          </button>
        </a>
      </p>
    </section>
  )
}

export default EnrollmentSection
