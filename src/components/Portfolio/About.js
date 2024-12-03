import React from 'react'
import { FaPerson, MdPerson } from 'react-icons/md'
import bitEmoji from '../../assets/bitmoji.png'

const About = ({userInfo}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='font-poppins font-extrabold text-4xl flex gap-3 mb-5'><MdPerson/> <span>About <span className='text-orange-500'>Me</span></span></div>
      <div className='w-full flex max-w-screen-xl mx-auto my-8 '>
        <div className='w-1/3'>
          <img src={bitEmoji}/>
        </div>
        <div className='text-xl w-2/3 gap-3 flex flex-col font-semibold font-poppins '>
          <div>I'm {userInfo.firstName} {userInfo.lastName}</div>
          <div className='font-bold'>{userInfo.majorProfile}</div>
          <div className='text-base'>{userInfo.userSummery}</div>
          <div  className='text-base'><span className='text-blue-500'>Email: </span>{userInfo.email}</div>
          <div  className='text-base'><span className='text-blue-500'>Phone: </span>{userInfo.phone}</div>
        </div>
      </div>
    </div>
  )
}

export default About