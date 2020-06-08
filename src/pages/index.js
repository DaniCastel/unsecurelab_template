import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { Home } from '../components/scenes'
import './pages.css'

export default ({ data }) => (
  <Layout>
    <Home />
  </Layout>
)
