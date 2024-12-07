import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const PortfolioLight = ({portfolioData}) => {
  return (
    <div>
    <Header data={portfolioData}/>
    <HeroSection userInfo={portfolioData.personalInfo} socialLinks = {portfolioData.socialLinks}/>
    <About  userInfo={portfolioData.personalInfo}/>
    {
      portfolioData?.skills && 
      portfolioData.skills.technicalSkills &&
      portfolioData.skills.technicalSkills.length > 0 &&
      <Skills skills = {portfolioData.skills}/>
    }
    {
      portfolioData?.education && 
      portfolioData.education.length > 0 && 
      <Education educationData={portfolioData.education}/>
    }
    {
      portfolioData?.experience && 
      portfolioData.experience.length > 0 && 
      <Experience experienceData={portfolioData.experience}/>
    }
    {
      portfolioData?.projects && 
      portfolioData.projects.length > 0 && 
      <Projects projectData={portfolioData.projects}/>  
    }
    <Contact email={portfolioData?.personalInfo?.email}/>
    <Footer data={portfolioData}/>
</div>
)
}

export default PortfolioLight