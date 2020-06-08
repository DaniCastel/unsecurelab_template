import React, { useState } from 'react'
import HomeIntro from './home-intro'
import HomeTalks from './home-talks'
import HomePosts from './home-posts'
import HomeProjects from './home-projects'

const Home = ({ blogPosts, talksPosts, projectsPosts }) => {
  const [broken, setBroken] = useState(false)
  return (
    <div>
      <main>
        <HomeIntro broken={broken} setBroken={setBroken} />
        <HomeTalks posts={talksPosts} />
        <HomePosts posts={blogPosts} />
        <HomeProjects posts={projectsPosts} />
      </main>
    </div>
  )
}

export default Home
