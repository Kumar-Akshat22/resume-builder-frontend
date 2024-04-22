import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { StyleSheet } from '@react-pdf/renderer'
import OurTeam from '../components/OurTeam'

function Home() {
  
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <OurTeam/>
    </div>
  )
}

export default Home