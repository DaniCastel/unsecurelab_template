import React from 'react'

import ContentGrid from '../../content-grid'
import ContentItem from '../../content-item'

const TalksList = ({ futureTalks, pastTalks, currentPage, numPages }) => (
  <div>
    <ContentGrid>
      {futureTalks.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={`⏰ ${node.frontmatter.conference}`}
          link={node.frontmatter.url}
          subtitle={node.frontmatter.title}
          lang={node.frontmatter.language}
          extra={
            <time dateTime={node.frontmatter.rawDate}>
              {node.frontmatter.date}
            </time>
          }
          external
        />
      ))}
      {pastTalks.map(({ node }) => (
        <ContentItem
          key={node.id}
          title={node.frontmatter.conference}
          link={node.frontmatter.url}
          subtitle={node.frontmatter.title}
          lang={node.frontmatter.language}
          extra={
            <>
              <time dateTime={node.frontmatter.rawDate}>
                {node.frontmatter.date}
              </time>
              {node.frontmatter.type === 'workshop' && (
                <span style={{ opacity: 0.5 }}>*workshop</span>
              )}
              {node.frontmatter.slides && (
                <a href={node.frontmatter.slides}>Slides</a>
              )}
              {node.frontmatter.video && (
                <a href={node.frontmatter.video}>Video</a>
              )}
              {node.frontmatter.demo && (
                <a href={node.frontmatter.demo}>Demo</a>
              )}
            </>
          }
          external
        />
      ))}
    </ContentGrid>
  </div>
)

export default TalksList
