import React from 'react'
import { FaCode } from 'react-icons/fa6'

const Skills = ({skills}) => {
  return (
    <div id='skills' className=' scroll-mt-20 bg-gradient-to-r   scroll-smooth gap-3 min-h-[90vh] flex flex-col justify-between p-4 items-stretch text-white  from-violet-800 to-indigo-700'>
        <div className='flex text-4xl pt-5 font-extrabold justify-center items-center font-poppins gap-3 '><FaCode strokeWidth={32} size={32}/>Skills</div>
        <div className='glass-bg-2 mx-auto max-w-screen-xl w-full grid grid-cols-6 gap-4 p-7'>
            {/* <div className='col-span-6 justify-center items-center text-center font-poppins font-extrabold'>Technical Skills</div> */}
            {
                skills?.technicalSkills?.map(skill=>(
                    <div className='flex my-1 h-28 gap-5 hover:shadow-lg hover:shadow-black/50 w-44 bg-[#170625] rounded-xl px-6 flex-grow max-h-40  hover:bg-[#020103] cursor-pointer transition-all justify-center items-center flex-col  '>
                        <div className='text-4xl'>{skill.emoji}</div>
                        <div className='font-bold text-xl font-poppins'>{skill.label}</div>
                    </div>
                ))
            }
        </div>
        <div>&nbsp;</div>
    </div>
  )
}

export default Skills