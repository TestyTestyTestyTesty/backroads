import React from "react"
import { StaticQuery, graphql } from "gatsby"
const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        data {
          rower
        }
      }
    }
  }
`
const RegularHeader = () => {

  return (
    <div>
      <StaticQuery query={getSiteData} render={(data)=>{
        const {title} = data.site.siteMetadata; 
        return(
          <h1>{title}</h1>
        )
      }}></StaticQuery>
    </div>
  )
}

export default RegularHeader
