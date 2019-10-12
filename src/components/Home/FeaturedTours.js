import React from "react"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../StyledTitle"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getSiteData = graphql`
  query {
    FeaturedTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          price
          name
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const FeaturedTours = () => {
  const data = useStaticQuery(getSiteData)
  const featuredData = data.FeaturedTours.edges
  return (
    <section className={styles.tours}>
      <Title title="Featured" subtitle="tours"></Title>
      <div className={styles.center}>
      {featuredData.map(({ node }) => {
        return <Tour key={node.contentful_Id} tour={node}/>
      })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
