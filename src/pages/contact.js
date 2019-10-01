import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/Home/StyledHero"
import { graphql } from "gatsby"
const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.fluid.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export default contact
export const getSiteData = graphql`
  {
    fluid: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
