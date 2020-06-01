import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Sidebar from './sidebar'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  padding: 20px;
  background-color: var(--color-grey-light-2);
  color: #333;
`

const Query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteDescription
      }
    }
  }
`

export default ({ children }) => (
  <StaticQuery
    query={Query}
    render={(data) => {
      const { title, siteDescription } = data.site.siteMetadata
      return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={siteDescription} />
            <title>{title}</title>
          </Helmet>
          <Container>
            <Sidebar title={title} siteDescription={siteDescription} />
            <Content>{children}</Content>
          </Container>
        </>
      )
    }}
  />
)
