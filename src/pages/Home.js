import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StepsSection from '../components/StepsSection'

function Home() {
  
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <StepsSection />
    </div>
  )
}

export default Home