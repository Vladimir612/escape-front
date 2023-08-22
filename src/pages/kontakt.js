import React from "react"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import { Seo } from "../components/seo"
import ContactPage from "../components/ContactPage/ContactPage"

const Kontakt = () => {
  return (
    <>
      <Nav />
      <ContactPage />
      <Footer />
    </>
  )
}

export default Kontakt

export const Head = () => <Seo title="Escape | Kontakt" />
