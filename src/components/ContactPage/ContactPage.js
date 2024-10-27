import React from "react"
import * as styles from "./contactPage.module.scss"

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      {/* <p>
        Za sve upite u vezi upisa ili drop in satova u studio Escape, ljubazno
        molimo kontaktirajte
      </p> */}
      {/* <div className={styles.contacts}>
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
      </div> */}
      <p>
        Za upise i upite u vezi Plesnog studija Escape, dostupni smo na
        slijedeće kontakte ovisno o vrsti upita koji imate:
      </p>
      <div className={styles.contacts}>
        <div>
          <h2>Laura</h2>
          <p className={styles.phoneTxt}>Upisi</p>
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
          <h2>Karla</h2>
          <p className={styles.phoneTxt}>
            Savjetovanja za napredne plesače i Speed program
          </p>
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
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            091 22 00 442
          </div>
        </div>
        <div>
          <h2>Lidija</h2>
          <p className={styles.phoneTxt}>
            Za sve upite, ponude i savjetovanja vezana za angažman
            profesionalnih plesača i umjetničkih izvođača
          </p>
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
          <div className={styles.phoneWrapper}>
            <img src="/telefon.svg" alt="Phone logo" />
            098 9040 174
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
