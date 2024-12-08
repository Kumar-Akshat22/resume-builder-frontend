import React, { useState } from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import portfolioData0 from '@/utils/portfolioDummy.json'
const PortfolioDark = ({portfolioData}) => {
  const [selectedTab, setSelectedTab] = useState("personalInfo")
  return (
    <div className='bg-black'>
    <Header
      setSelectedTab={setSelectedTab}
      selectedTab={selectedTab}
      data={portfolioData}/>
    <HeroSection userInfo={portfolioData?.personalInfo} socialLinks = {portfolioData?.socialLinks}/>
    <About 
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      education={portfolioData?.education}  
      userInfo={portfolioData?.personalInfo}
      skills={portfolioData?.skills}  
    />
    {
      portfolioData?.experience && 
      portfolioData.experience.length > 0 && 
      <Experience experienceData={portfolioData?.experience}/>
    }
    {
      portfolioData?.projects && 
      portfolioData.projects.length > 0 && 
      <Projects projectData={portfolioData?.projects}/>  
    }
    <Contact email={portfolioData?.personalInfo?.email}/>
    <Footer data={portfolioData}/>
</div>
)
}

export default PortfolioDark