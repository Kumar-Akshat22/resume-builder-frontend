import React from 'react'
import { FaCode } from 'react-icons/fa6'

const Skills = ({skills}) => {
  return (
    <div className='bg-gradient-to-r gap-3 flex flex-col justify-center p-4 text-white from-violet-600 to-indigo-600'>
        <div className='flex justify-center items-center font-bold font-poppins gap-3 '><FaCode strokeWidth={32} size={24}/>Skills</div>
        <div className='glass-bg-2 mx-auto max-w-screen-xl grid grid-cols-6 gap-4 p-5'>
            {/* <div className='col-span-6 justify-center items-center text-center font-poppins font-extrabold'>Technical Skills</div> */}
            {
                skills?.technicalSkills?.map(skill=>(
                    <div className='flex bg-[#170625] rounded-xl py-3 px-2 hover:shadow-md hover:bg-black cursor-pointer transition-all justify-center items-center flex-col gap-1 '>
                        <div className='text-2xl'>{skill.emoji}</div>
                        <div className='font-bold text-lg'>{skill.label}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills