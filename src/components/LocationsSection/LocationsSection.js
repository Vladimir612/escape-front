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
        22.08.2023. u terminu{" "}
        <span style={{ color: "#3dad6a" }}>10:00 - 18:00 sati</span>.
      </p>
      <p>
        Vrata studija za probne satove svih stilova, dobi i nivoa otvorena su od
        04.09.2023. na sljedećim lokacijama u Zagrebu:
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
