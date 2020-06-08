import React, { useState } from 'react'
import HomeIntro from './home-intro'
import HomePosts from './home-posts'
import HomeProjects from './home-projects'

const Home = ({}) => {
  const [broken, setBroken] = useState(false)
  return (
    <div>
      <main>
        <HomeIntro broken={broken} setBroken={setBroken} />
      </main>
    </div>
  )
}

export default Home
