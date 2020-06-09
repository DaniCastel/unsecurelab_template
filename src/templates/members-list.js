import React from 'react'
import { graphql } from 'gatsby'
import { MemberList } from '../components/scenes'
import Layout from '../components/layout/layout'

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <MemberList data={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const query = graphql`
  query membersListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {
        fields: { collection: { eq: "members" } }
        frontmatter: { visible: { ne: false } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            name
            memberImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            academics
            email
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`
