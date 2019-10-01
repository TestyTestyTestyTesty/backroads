import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/Home/StyledHero"
import { graphql } from "gatsby"
const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.fluid.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export default tours
export const getSiteData = graphql`
  {
    fluid: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
