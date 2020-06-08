import React from 'react'

const BlogList = ({ posts, currentPage, numPages }) => (
  <div
    title="Blog & recommended"
    description="Lists of articles written by José Manuel Lucas"
  >
    <div>
      {posts.map(({ node }) => (
        <div>post</div>
      ))}
    </div>
  </div>
)

export default BlogList
