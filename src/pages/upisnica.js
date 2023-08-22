import React from "react"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import Application from "./../components/Application/Application"
import { Seo } from "../components/seo"

const Upisnica = () => {
  return (
    <>
      <Nav />
      <Application />
      <Footer />
    </>
  )
}

export default Upisnica

export const Head = () => <Seo title="Escape | Upisnica" />
