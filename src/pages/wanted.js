import React from "react"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import { Seo } from "../components/seo"
import WantedPage from "../components/WantedPage/WantedPage"

const Wanted = () => {
  return (
    <>
      <Nav />
      <WantedPage />
      <Footer />
    </>
  )
}

export default Wanted

export const Head = () => <Seo title="Escape | Wanted" />
