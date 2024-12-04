import React from 'react'
import dummyData from '../utils/portfolioDummy2.json'
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
        {
          dummyData?.skills && 
          dummyData.skills.technicalSkills &&
          dummyData.skills.technicalSkills.length > 0 &&
          <Skills skills = {dummyData.skills}/>
        }
        {
          dummyData?.education && 
          dummyData.education.length > 0 && 
          <Education educationData={dummyData.education}/>
        }
        {
          dummyData?.experience && 
          dummyData.experience.length > 0 && 
          <Experience experienceData={dummyData.experience}/>
        }
        {
          dummyData?.projects && 
          dummyData.projects.length > 0 && 
          <Projects projectData={dummyData.projects}/>  
        }
        <Contact email={dummyData?.personalInfo?.email}/>
        <Footer data={dummyData}/>
    </div>
  )
}

export default Portfolio