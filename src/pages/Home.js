import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StepsSection from '../components/StepsSection'
import Templates from '../components/Templates'
import Details from '../components/Details'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <StepsSection />
        <Templates />
        <Details />
        <Footer />
    </div>
  )
}

export default Home