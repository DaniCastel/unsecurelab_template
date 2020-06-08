import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
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
  max-width: 45%;
  background-color: var(--color-grey-light-1);
  box-shadow: var(--shadow-light);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  /* Device = Tablets, iPads (portrait) */
  @media (max-width: 1024px) {
    max-width: 100%;
  }
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
const MemberHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  font-weight: 600;
  justify-content: center;
  margin: 10px;
  text-align: center;
`
const MemberEmail = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: normal;
  justify-content: center;
`

const TagsContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const MemberTag = styled.div`
  display: flex;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: #d7b43e;
  color: white;
  width: fit-content;
  padding: 2px 10px;
  border-radius: 5px;
  margin-right: 10px;
`
export default ({ data }) => {
  return (
    <Masonry
      className={'members-massonry'} // default ''
    >
      {data.map(({ node }) => {
        let memberImgFluid = node.frontmatter.memberImage.childImageSharp.fluid
        console.log(node.frontmatter.tags)
        return (
          <MemberCard key={node.id}>
            <MemberDivImage>
              <MemberImage fluid={memberImgFluid} />
            </MemberDivImage>

            <MemberInfo>
              <MemberHeader>
                <div>{node.frontmatter.name}</div>
                <MemberEmail>{node.frontmatter.email}</MemberEmail>
              </MemberHeader>

              <TagsContent>
                {node.frontmatter.tags.map((tag) => {
                  return <MemberTag>{tag}</MemberTag>
                })}
              </TagsContent>
              <p>
                <br></br>
                {node.frontmatter.description}
              </p>
              <p>
                <strong>Academics: </strong>
                {node.frontmatter.academics}
              </p>
              {/* <PostTitle>{node.frontmatter.name} </PostTitle>
              <PostDate>{node.frontmatter.date}</PostDate>{' '}
              <PostTags tags={node.frontmatter.tags} />
              <PostLink to={node.fields.slug}>
                <PostTitle>{node.frontmatter.name} </PostTitle>
              </PostLink>
              <p></p>
              <hr /> */}
            </MemberInfo>
          </MemberCard>
        )
      })}
    </Masonry>
  )
}
