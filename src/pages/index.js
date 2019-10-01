import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/Home/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"

export default ({data}) => (
  <div>
    <Layout>
      <StyledHero img={data.fluid.childImageSharp.fluid} home="true">
        <Banner
          title="cotinue exploring"
          info="Vice jean shorts +1 Portland aesthetic umami pork belly VHS scenester"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About/>
      <Services/>
    </Layout>
  </div>
)


export const getSiteData = graphql`
  {
    fluid: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality:90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`