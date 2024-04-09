import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { StyleSheet } from '@react-pdf/renderer'

function Home() {
  
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
    </div>
  )
}

export default Home