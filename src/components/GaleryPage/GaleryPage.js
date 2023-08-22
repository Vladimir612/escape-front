import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import * as styles from "./galeryPage.module.scss"
import ImagesContainer from "./ImagesContainer/ImagesContainer"
import VideosContainer from "./VideosContainer/VideosContainer"

const GaleryPage = () => {
  const [pickerOne, setPickerOne] = useState(0)
  const [pickerTwo, setPickerTwo] = useState(0)

  const data = useStaticQuery(graphql`
    query getMediaIcons {
      produkcije: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "produkcija" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      natjecanja: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "natjecanje" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      radionice: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "radionice" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      nastupi: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "nastupi" }
        }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const produkcijeImages = data.produkcije.edges
  const natjecanjaImages = data.natjecanja.edges
  const radioniceImages = data.radionice.edges
  const nastupiImages = data.nastupi.edges

  return (
    <div className={styles.galeryPage}>
      <div className={styles.pickerOne}>
        <button
          className={pickerOne === 0 ? styles.active : ""}
          onClick={() => setPickerOne(0)}
        >
          <img src="/photo.svg" alt="Picker 1 logo 1" />
          <span>Fotografije</span>
        </button>
        <button
          className={pickerOne === 1 ? styles.active : ""}
          onClick={() => setPickerOne(1)}
        >
          <img src="/video.svg" alt="Picker 1 logo 2" />
          <span>Videi</span>
        </button>
      </div>
      {pickerOne === 0 ? (
        <>
          <div className={styles.pickerTwo}>
            <button
              className={pickerTwo === 0 ? styles.active : ""}
              onClick={() => setPickerTwo(0)}
            >
              PRODUKCIJE
            </button>
            <button
              className={pickerTwo === 1 ? styles.active : ""}
              onClick={() => setPickerTwo(1)}
            >
              NATJECANJA
            </button>
            <button
              className={pickerTwo === 2 ? styles.active : ""}
              onClick={() => setPickerTwo(2)}
            >
              RADIONICE
            </button>
            <button
              className={pickerTwo === 3 ? styles.active : ""}
              onClick={() => setPickerTwo(3)}
            >
              NASTUPI
            </button>
          </div>

          {pickerTwo === 0 ? (
            <ImagesContainer images={produkcijeImages} />
          ) : pickerTwo === 1 ? (
            <ImagesContainer images={natjecanjaImages} />
          ) : pickerTwo === 2 ? (
            <ImagesContainer images={radioniceImages} />
          ) : (
            <ImagesContainer images={nastupiImages} />
          )}
        </>
      ) : (
        <VideosContainer />
      )}
    </div>
  )
}

export default GaleryPage
