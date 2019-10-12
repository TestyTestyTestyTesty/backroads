import React from "react"
import Img from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
const getSiteData = graphql`
  {
    fluid: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Tour = ({ tour }) => {
  const data = useStaticQuery(getSiteData)
  const { name, price, country, days, slug, images, contentful_id } = tour
  let mainImage = images[0].fuid
  return (
    <article key={contentful_id} className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={data.fluid.childImageSharp.fluid} alt="awesome landscape" />
      
      <AniLink fade className={styles.link} to={`/tours/${slug}`}>
        details
      </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour
