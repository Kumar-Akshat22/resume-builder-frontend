import React, { useState } from 'react'
import TemplateOne from '../assets/Template-1.png'
import TemplateTwo from '../assets/Template-2.png'
import { Link, useNavigate } from 'react-router-dom';

function Templates() {

    const [resumeName , setResumeName] = useState('');
    const navigate = useNavigate()
    const handleResumeChange = () =>{
        localStorage.setItem("resumeName", "RoverResume" )
        navigate(`/resume-details/${localStorage.getItem('resumeName')}/personalDetails`)
    }


  return (
    <section className='w-full bg-template-pattern bg-contain'>

        <div className='container max-w-[1140px] mx-auto flex flex-col items-center py-20'>
            {/* Title */}
            <h1 className='text-[2.2rem] font-poppins pb-12'>Start by picking a template:</h1>

            {/* Resume Cards */}
            <div className='w-full flex justify-around gap-9 py-12'>

                <div className='border-2 border-[#3983fa] w-[40%] relative group cursor-pointer'>
                    <img src={TemplateOne}></img>
                
                    <button className='absolute bottom-[9%] left-24 bg-[#f1f8fe] px-[2.5rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300 hidden group-hover:block' onClick= {handleResumeChange}>Use this Template</button>
                    
                </div>

                <div className='border-2 border-[#3983fa] w-[40%] relative group cursor-pointer'>
                    <img src={TemplateTwo}></img>

                    <button className='absolute bottom-[9%] left-24 bg-[#f1f8fe] px-[2.5rem] py-[0.6rem] rounded-full text-lg uppercase font-poppins text-[#3983fa] font-semibold hover:bg-[#3983fa] hover:text-white transition-all duration-300 hidden group-hover:block' onClick={handleResumeChange}>Use this Template</button>

                </div>
            </div>

            <div className='bg-[#4885e6] mt-9 p-4 rounded-full text-white cursor-pointer hover:bg-[#f1f8fe] hover:text-black transition-all duration-300'>
                <p className='font-poppins text-xl font-medium'>More resume templates will be added soon</p>
            </div>
        </div>

    </section>
  )
}

export default Templates