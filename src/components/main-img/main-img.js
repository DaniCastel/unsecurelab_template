import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { styles } from './main-img-styles'
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <styles.Wrapper>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </styles.Wrapper>
  )
}

export default Image
