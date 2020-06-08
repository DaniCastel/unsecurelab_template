import React from 'react'

import ContentGrid from '../../content-grid'
import ContentItem from '../../content-item'

const ProjectsList = ({ posts, currentPage, numPages }) => (
  <div
    title="Personal & Open Source Projects"
    description="Projects developed by José Manuel Lucas"
  >
    <ContentGrid>
      {posts.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={node.frontmatter.title}
          link={node.frontmatter.url}
          subtitle={node.excerpt}
          extra={
            <a
              href={node.frontmatter.url}
              rel="external noopener noreferrer"
              target="_blank"
            >
              {node.frontmatter.url}
            </a>
          }
          external
        />
      ))}
    </ContentGrid>
  </div>
)

export default ProjectsList
