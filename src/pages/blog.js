import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/Home/StyledHero"
import { graphql } from "gatsby"
const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.fluid.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export default blog
export const getSiteData = graphql`
  {
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
