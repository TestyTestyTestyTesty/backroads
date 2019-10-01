import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
const Header = () => {
  const data = useStaticQuery(getSiteData)
  const { title } = data.site.siteMetadata
  console.log(title)
  return (
    <div>
      <h1>Title: {title}</h1>
    </div>
  )
}

export default Header
