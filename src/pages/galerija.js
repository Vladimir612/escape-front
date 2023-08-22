import React from "react"
import Nav from "../components/Nav/Nav"
import GaleryPage from "../components/GaleryPage/GaleryPage"
import Footer from "../components/Footer/Footer"
import { Seo } from "../components/seo"

const Galerija = () => {
  return (
    <>
      <Nav />
      <GaleryPage />
      <Footer />
    </>
  )
}

export default Galerija

export const Head = () => <Seo title="Escape | Galerija" />
