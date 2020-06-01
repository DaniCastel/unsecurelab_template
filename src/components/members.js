import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'
import Masonry from 'react-masonry-component'

const MembersGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 200px;
`

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  background-color: var(--color-grey-light-1);
  box-shadow: var(--shadow-light);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`
const MemberDivImage = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`

const MemberImage = styled(Img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const MemberName = styled.div`
  display: flex;
  font-weight: 500;
`

export default ({ data }) => {
  return (
    <Masonry
      className={'members-massonry'} // default ''
    >
      {data.map(({ node }) => {
        let memberImgFluid = node.frontmatter.memberImage.childImageSharp.fluid

        return (
          <MemberCard key={node.id}>
            <MemberDivImage>
              <MemberImage fluid={memberImgFluid} />
            </MemberDivImage>

            <MemberInfo>
              <MemberName>{node.frontmatter.name}</MemberName>

              {/* <PostTitle>{node.frontmatter.name} </PostTitle>
              <PostDate>{node.frontmatter.date}</PostDate>{' '}
              <PostTags tags={node.frontmatter.tags} />
              <PostLink to={node.fields.slug}>
                <PostTitle>{node.frontmatter.name} </PostTitle>
              </PostLink>
              <p>{node.excerpt}</p>
              <hr /> */}
            </MemberInfo>
          </MemberCard>
        )
      })}
    </Masonry>
  )
}
