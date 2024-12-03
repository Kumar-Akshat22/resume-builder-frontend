import React from 'react'
import dummyData from '../utils/portfolioDummy.json'
import Header from '../components/Portfolio/Header'
import HeroSection from '../components/Portfolio/HeroSection'
import About from '../components/Portfolio/About'
import Education from '../components/Portfolio/Education'
import Experience from '../components/Portfolio/Experience'
import Projects from '../components/Portfolio/Projects'
import Contact from '../components/Portfolio/Contact'
import Footer from '../components/Portfolio/Footer'
import Skills from '../components/Portfolio/Skills'

const Portfolio = () => {
  return (
    <div>
        <Header data={dummyData}/>
        <HeroSection userInfo={dummyData.personalInfo} socialLinks = {dummyData.socialLinks}/>
        <About  userInfo={dummyData.personalInfo}/>
        <Skills skills = {dummyData.skills}/>
        <Education educationData={dummyData.education}/>
        <Experience experienceData={dummyData.experience}/>
        <Projects />
        <Contact/>
        <Footer data={dummyData}/>
    </div>
  )
}

export default Portfolio