import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import ProfileImage from '../assets/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png'

const TeamMember = ({memberDetail}) => {
  return (
    <div className='flex relative flex-col my-10 mx-5'>
        <div className={`${memberDetail.background} bg-gradient-to-tl m-5 w-60 relative h-60 rounded-2xl`}>
            <img src={ProfileImage} alt={memberDetail.name} className='w-60 h-60  object-cover object-center absolute bottom-[24px] scale-[120%] ' />
        </div>
        <div>
            <h2 className='font-poppins text-center text-lg font-bold'>{memberDetail.name}</h2>
            <h2 className='font-poppins text-center text-gray-500 font-semibold'>{memberDetail.position}</h2>
            <div className='flex justify-center items-center text-xl gap-3 my-1'>
                <a href={memberDetail.github} target='_blank'>
                    <FaGithub />
                </a>
                <a href={memberDetail.linkedin} target='_blank'>
                    <FaLinkedin/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TeamMember