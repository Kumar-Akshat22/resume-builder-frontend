import React, { useEffect, useState } from 'react'
import { NavLink,Outlet, useParams } from 'react-router-dom'

function ResumeDetails() {

    const [detailType , setDetailType] = useState('personalDetails');
    const {resumeName} = useParams()
    
  return (
    
    <div className='w-full border p-5'>

        <div className='max-w-[1140px] mx-auto text-center mb-8'>
            <p className='text-2xl'>Few more steps... </p>

        </div>

        <div className='max-w-[1140px] mx-auto flex flex-row justify-between'>
            
            <NavLink to={`/resume-details/${resumeName}/personaldetails`}>
                <span className={
                `${detailType === 'personalDetails' 
                ? 'bg-[#3983fa] text-white font-semibold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('personalDetails')}}>Personal Details</span>
            </NavLink>

            <NavLink to={`/resume-details/${resumeName}/links`}>
                <span className={
                `${detailType === 'links' 
                ? 'bg-[#3983fa] text-white font-semibold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('links')}}>Links</span>
            </NavLink>

            <NavLink to={`/resume-details/${resumeName}/education`} className=''>
                <span className={
                `${detailType === 'education' 
                ? 'bg-[#3983fa] text-white font-semibold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('education')}}>Education</span>
            </NavLink>

            <NavLink to={`/resume-details/${resumeName}/experience`}>
                <span className={
                `${detailType === 'experience' 
                ? 'bg-[#3983fa] text-white font-semibold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('experience')}}>Work Experience</span>
            </NavLink>

            <NavLink to={`/resume-details/${resumeName}/skills`}>
                <span className={
                `${detailType === 'skills' 
                ? 'bg-[#3983fa] text-white font-semibold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('skills')}}>Skills</span>
            </NavLink>
            
            <NavLink to={`/resume-details/${resumeName}/projects`}>
                <span className={
                `${detailType === 'projects' 
                ? 'bg-[#3983fa] text-white font-semibold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('projects')}}>Projects</span>
            </NavLink>

            

            <NavLink to={`/resume-details/${resumeName}/extra`}>
                <span className={
                `${detailType === 'extras' 
                ? 'bg-[#3983fa] text-white font-semibold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('extras')}}>Extras</span>
            </NavLink>

            
        </div>
        
        <Outlet />
    </div>

  )
}

export default ResumeDetails