import React from 'react'

import Layout from '../components/layout'
import Members from '../components/members'

export default ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout>
      <h1>Posts about {tagName}</h1>
      <Members data={posts} />
    </Layout>
  )
}
