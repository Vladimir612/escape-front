import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import * as styles from "./videosContainer.module.scss"

const VideosContainer = () => {
  const data = useStaticQuery(graphql`
    query getVideos {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(markdown/videos)/" } }
        sort: { fields: frontmatter___id }
      ) {
        nodes {
          frontmatter {
            title
            link
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

  const videos = data.allMarkdownRemark.nodes

  return (
    <div className={styles.videosContainer}>
      {videos.map((video, index) => (
        <a
          key={index}
          href={video.frontmatter.link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          className={styles.videoWrapper}
        >
          <Img
            fluid={video.frontmatter.thumb.childImageSharp.fluid}
            className={styles.imgWrapper}
          />
          <h4>{video.frontmatter.title}</h4>
        </a>
      ))}
    </div>
  )
}

export default VideosContainer
