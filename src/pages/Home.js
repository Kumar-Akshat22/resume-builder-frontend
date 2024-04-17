import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StepsSection from '../components/StepsSection'
import Templates from '../components/Templates'

function Home() {
  
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <StepsSection />
        <Templates />
    </div>
  )
}

export default Home