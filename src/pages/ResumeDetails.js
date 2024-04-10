import React, { useState } from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function ResumeDetails() {

    const [detailType , setDetailType] = useState('personalDetails');

  return (
    
    <div className='w-full border border-blue-500 p-5'>

        <div className='max-w-[1140px] mx-auto text-center mb-8'>
            <p className='text-2xl'>Few more steps....</p>
        </div>

        <div className='max-w-[1140px] mx-auto flex flex-row justify-between'>
            
            <NavLink to={'/resume-details/personal-details'}>
                <span className={
                `${detailType === 'personalDetails' 
                ? 'bg-[#25A05D] text-white font-bold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('personalDetails')}}>Personal Details</span>
            </NavLink>

            <NavLink to={'/resume-details/education'} className=''>
                <span className={
                `${detailType === 'education' 
                ? 'bg-[#25A05D] text-white font-bold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('education')}}>Education</span>
            </NavLink>

            <NavLink to={'/resume-details/experience'}>
                <span className={
                `${detailType === 'experience' 
                ? 'bg-[#25A05D] text-white font-bold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('experience')}}>Work Experience</span>
            </NavLink>
            
            <NavLink to={'/resume-details/projects'}>
                <span className={
                `${detailType === 'projects' 
                ? 'bg-[#25A05D] text-white font-bold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('projects')}}>Projects</span>
            </NavLink>

            

            <NavLink to={'/resume-details/extra'}>
                <span className={
                `${detailType === 'extras' 
                ? 'bg-[#25A05D] text-white font-bold border'
                : 'bg-transparent'} text-xl rounded-md px-4 py-1 transition duration-200 ease-in-out`} onClick={()=>{setDetailType('extras')}}>Extras</span>
            </NavLink>

            

        </div>
        
        <Outlet />
    </div>

  )
}

export default ResumeDetails