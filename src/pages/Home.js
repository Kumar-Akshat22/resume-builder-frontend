import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// <<<<<<< HEAD
import { StyleSheet } from '@react-pdf/renderer'
import OurTeam from '../components/OurTeam'
// =======
import StepsSection from '../components/StepsSection'
import Templates from '../components/Templates'
import Details from '../components/Details'
import Footer from '../components/Footer'
// >>>>>>> origin/main

function Home() {
  
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
{/* <<<<<<< HEAD */}
{/* ======= */}
        <StepsSection />
        <Templates />
        <Details />
        <OurTeam/>
        <Footer />
{/* >>>>>>> origin/main */}
    </div>
  )
}

export default Home