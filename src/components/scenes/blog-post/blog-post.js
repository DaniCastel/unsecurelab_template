import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPost = ({ post }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const rawTagsStr = post.frontmatter.tags.join(', ')
  const parsedTagsStr = post.frontmatter.tags.map((tag) => `#${tag}`).join(' ')
  return (
    <div>
      <main>
        <div>
          <h2>{post.frontmatter.subtitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          post
          {/* <SharePost
            postUrl={`${site.siteMetadata.siteUrl}/${post.fields.slug}`}
            postTitle={post.frontmatter.title}
            postSubtitle={post.frontmatter.subtitle}
            siteUrl={site.siteMetadata.siteUrl}
            tags={parsedTagsStr}
          /> */}
        </div>
      </main>
    </div>
  )
}

export default BlogPost
