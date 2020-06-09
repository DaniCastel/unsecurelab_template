import React from 'react'
import { graphql } from 'gatsby'
import { BlogList } from '../components/scenes'
import Layout from '../components/layout/layout'

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  return (
    <Layout>
      <BlogList
        posts={data.allMarkdownRemark.edges}
        currentPage={currentPage}
        numPages={numPages}
      />
    </Layout>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "blog" } }
        frontmatter: { published: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            tags
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
