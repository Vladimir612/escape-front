import React from "react"
import Nav from "./../components/Nav/Nav"
import "../global.scss"
import HeroSection from "../components/HeroSection/HeroSection"
import AboutSection from "../components/AboutSection/AboutSection"
import StylesSection from "../components/StylesSection/StylesSection"
import LocationsSection from "../components/LocationsSection/LocationsSection"
import EnrollmentSection from "../components/EnrollmentSection/EnrollmentSection"
import Footer from "../components/Footer/Footer"
import { Seo } from "../components/seo"

const Home = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <StylesSection />
      <LocationsSection />
      <EnrollmentSection />
      <Footer />
    </>
  )
}

export default Home

export const Head = () => <Seo />
