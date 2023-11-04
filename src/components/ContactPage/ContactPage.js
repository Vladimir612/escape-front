import React from "react"
import * as styles from "./contactPage.module.scss"

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <p>
        Za sve upite u vezi upisa ili drop in satova u studio Escape, ljubazno
        molimo kontaktirajte
      </p>
      <div className={styles.contacts}>
        <div>
          <h2>Marija</h2>
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
      </div>
      <p>
        Za sve upite, ponude i savjetovanja vezana za angažman profesionalnih
        plesača i umjetničkih izvođača kontaktirajte
      </p>
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
