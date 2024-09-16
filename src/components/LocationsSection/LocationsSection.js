import React from "react"
import * as styles from "./locationsSection.module.scss"
import Subtitle from "./../../Utilities/Subtitle/Subtitle"
import { graphql, useStaticQuery } from "gatsby"
import Location from "./Location/Location"

const LocationsSection = () => {
  const data = useStaticQuery(graphql`
    query getLocations {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(markdown/locations)/" } }
        sort: { fields: frontmatter___id }
      ) {
        nodes {
          frontmatter {
            id
            title
            address
            addressHelp
            phone
            email
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  `)

  const locations = data.allMarkdownRemark.nodes

  return (
    <section id="lokacije" className={styles.locationsSection}>
      <Subtitle title="Lokacije" />
      <p>
        Call centar za upise, informacije i savjetovanja je dostupan od
        ponedjeljka do petka u terminu od{" "}
        <span style={{ color: "#3dad6a" }}>10 do 18 sati</span>.
      </p>
      <p>
        Vrata studija za probne sate svih stilova, dobi i nivoa otvorena su od
        09.09.2024. na slijedećim lokacijama u Zagrebu:
      </p>
      <div className={styles.locationsWrapper}>
        {locations.map((location, index) => (
          <Location locationObject={location.frontmatter} key={index} />
        ))}
      </div>
    </section>
  )
}

export default LocationsSection
