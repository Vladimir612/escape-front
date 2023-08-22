import React, { useState } from "react"
import * as styles from "./imagesContainer.module.scss"
import Img from "gatsby-image"

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"

const ImagesContainer = ({ images }) => {
  const [showModal, setShowModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.imagesWrapper}>
      {images.map((image, index) => (
        <button
          onClick={() => {
            setActiveIndex(index)
            setShowModal(true)
          }}
          key={index}
        >
          <Img
            fluid={image.node.childImageSharp.fluid}
            className={styles.imgWrapper}
          />
        </button>
      ))}
      {showModal && (
        <div className={styles.imageModal}>
          <button
            className={styles.closeBtn}
            onClick={() => setShowModal(false)}
          >
            <AiFillCloseCircle size={35} />
          </button>
          <div className={styles.content}>
            <Img
              fluid={images[activeIndex].node.childImageSharp.fluid}
              className={styles.imgWrapperModal}
            />
            <div className={styles.controls}>
              <button
                onClick={() => {
                  if (activeIndex === 0) setActiveIndex(images.length - 1)
                  else setActiveIndex(activeIndex => activeIndex - 1)
                }}
              >
                <BsArrowLeftCircleFill size={35} />
              </button>
              <button
                onClick={() => {
                  if (activeIndex === images.length - 1) setActiveIndex(0)
                  else setActiveIndex(activeIndex => activeIndex + 1)
                }}
              >
                <BsArrowRightCircleFill size={35} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImagesContainer
