import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const style = {
  width: '500px'
};
const getSiteData = graphql`
{
  fixed:file(relativePath: { eq: "defaultBcg.jpeg" }) {
    childImageSharp {
        fixed(width:300,height:400){
          ...GatsbyImageSharpFixed_tracedSVG
        }
    }
  }
    fluid:file(relativePath: { eq: "defaultBcg.jpeg" }) {
    childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
    }
  }
}
  

`

const Images = () => {
    const data = useStaticQuery(getSiteData)
    return (
        <div>
            <Img fixed={data.fixed.childImageSharp.fixed}/>
            <div style={style}>
            <Img fluid={data.fluid.childImageSharp.fluid}/>
            </div>
        </div>
    )
}

export default Images
