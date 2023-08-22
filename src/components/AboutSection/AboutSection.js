import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "./aboutSection.module.scss"
import Img from "gatsby-image"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query getFirstImage {
      imageOne: file(relativePath: { eq: "homeSection/pocetna1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "homeSection/pocetna2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.aboutSection} id="tko-smo-mi">
      <Link
        to="/upisnica"
        style={{
          color: "#3dad6a",
          textDecoration: "none",
          fontSize: "2rem",
          fontWeight: 700,
          border: "2px solid #3dad6a",
          padding: "0.4rem 2rem",
        }}
      >
        UPISNICA
      </Link>
      <h1>Tko smo mi?</h1>
      <p>
        Plesni studio Escape je edukacijska plesna škola umjetničke voditeljice
        Lidije Iveković osnovana 2009. godine s ciljem promoviranja plesne
        umjetnosti. Na 4 lokacije grada Zagreba kvalitetni i iskusni pedagozi
        mnogobrojne članove podučavaju raznim plesnim tehnikama te odgajaju
        profesionalne plesače.
      </p>
      <Img
        fluid={data.imageOne.childImageSharp.fluid}
        className={styles.imgWrapper}
      />
      <p>
        Naši satovi su otvoreni svim zaljubljenicima u plesno izražavanje i
        onima koji to tek namjeravaju postati – djeci i odraslima, početnicima i
        naprednima, rekreativcima i profesionalcima. Odabir stila i grupe koja
        vam najviše odgovara olakšavamo besplatnim probnim satom i
        konzultacijama s našim voditeljima.
      </p>
      <Img
        fluid={data.imageTwo.childImageSharp.fluid}
        className={styles.imgWrapper}
      />
      <p>
        Osim sudjelovanja na državnim i međunarodnim natjecanjima, za sve naše
        članove minimalno jednom godišnje organiziramo završnu produkciju na
        kojoj imaju priliku zaokružiti svoj rad profesionalnim nastupom na
        velikoj pozornici uz ozbiljne scenske tehničke uvjete.
      </p>
      <p>
        Daljnjim rastom i razvojem pravi zaljubljenici u svjetla pozornice
        stvaraju put prema svijetu profesionalnih angažmana na ozbiljnim
        televizijskim, kazališnim, korporativnim i sportskim projektima.
      </p>
      <p>
        U naš paralelni svijet zavirite klikom na{" "}
        <Link to="/galerija" style={{ color: "#3dad6a" }}>
          GALERIJU
        </Link>
      </p>
    </section>
  )
}

export default AboutSection
