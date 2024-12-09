import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Templates from '../components/Templates'
import Details from '../components/Details'
import OurTeam from '../components/OurTeam'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <div>
        <Navbar></Navbar>
        <div id='hero'>


        <Hero></Hero>

        </div>
        <div id='features'>

        <Features />
        </div>
        <div id='templates'>

        <Templates />
        </div>
        <div id='team'>

        <OurTeam/>
        </div>
        <Footer />

    </div>
  )
}

export default Home