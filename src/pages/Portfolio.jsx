import React, { useState } from 'react'
import Header from '../components/Portfolio/Header'
import HeroSection from '../components/Portfolio/HeroSection'
import About from '../components/Portfolio/About'
import Education from '../components/Portfolio/Education'
import Experience from '../components/Portfolio/Experience'
import Projects from '../components/Portfolio/Projects'
import Contact from '../components/Portfolio/Contact'
import Footer from '../components/Portfolio/Footer'
import Skills from '../components/Portfolio/Skills'
import { useQuery } from 'react-query'
import { getPortfolio } from '@/services/portfolioService'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const Portfolio = () => {
  const [isLinkValid, setIsLinkValid] = useState(true)
  const {link} = useParams()
  const {data:portfolioData, isLoading, isError} = useQuery({
    queryKey: ['portfolio', link.split('#')[0]],
    queryFn: ()=> getPortfolio(link.split('#')[0]),
    onSuccess:res=>console.log(res),
    onError:(err)=>{console.log(err); setIsLinkValid(false)}
  })

  if(isLoading){
    return <div>Loading...</div>
  }
  if(!isLinkValid){
    return <div>Invalid Link</div>
  }
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

export default Portfolio