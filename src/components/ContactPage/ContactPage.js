import React from "react"
import * as styles from "./contactPage.module.scss"

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <p>
        Molimo da za upite vezane za upis nazovete voditeljice zadužene za
        pojedinu lokaciju:
      </p>
      <div className={styles.contacts}>
        <div>
          <h2>Centar - Anja</h2>
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            099 860 7501
          </div>
          <div className={styles.emailWrapper}>
            <img src="/mail.svg" alt="Mail logo" />
            <a
              href="mailto: upisi.escape@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3dad6a", textDecoration: "none" }}
            >
              upisi.escape@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h2>Trešnjevka - Marija</h2>
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            091 457 3558
          </div>
          <div className={styles.emailWrapper}>
            <img src="/mail.svg" alt="Mail logo" />
            <a
              href="mailto: upisi.escape@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3dad6a", textDecoration: "none" }}
            >
              upisi.escape@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h2>Dubrava - Chay</h2>
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            097 738 4889
          </div>
          <div className={styles.emailWrapper}>
            <img src="/mail.svg" alt="Mail logo" />
            <a
              href="mailto: upisi.escape@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3dad6a", textDecoration: "none" }}
            >
              upisi.escape@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h2>Zavrtnica - Ema</h2>
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            091 364 8455
          </div>
          <div className={styles.emailWrapper}>
            <img src="/mail.svg" alt="Mail logo" />
            <a
              href="mailto: upisi.escape@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3dad6a", textDecoration: "none" }}
            >
              upisi.escape@gmail.com
            </a>
          </div>
        </div>
      </div>
      <p>Dodatna savetovanja za napredne plesače i upit za nastupe</p>
      <div className={styles.contacts}>
        <div>
          <h2>Karla</h2>
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            091 2200 442
          </div>
          <div className={styles.emailWrapper}>
            <img src="/mail.svg" alt="Mail logo" />
            <a
              href="mailto: karla.escape@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3dad6a", textDecoration: "none" }}
            >
              karla.escape@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h2>Lidija</h2>
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            098 9040 174
          </div>
          <div className={styles.emailWrapper}>
            <img src="/mail.svg" alt="Mail logo" />
            <a
              href="mailto: plesnistudioescape@yahoo.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3dad6a", textDecoration: "none" }}
            >
              plesnistudioescape@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
