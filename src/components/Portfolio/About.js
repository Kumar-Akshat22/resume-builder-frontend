import React from 'react'
import { FaPerson, MdPerson } from 'react-icons/md'
import bitEmoji from '../../assets/bitmoji.png'
import { FaDownload } from 'react-icons/fa6'

const About = ({userInfo}) => {
  return (
    <div id='about' className='flex scroll-mt-20 flex-col items-center justify-center'>
      <div className='font-poppins font-extrabold text-4xl flex gap-3 mb-5'><MdPerson/> <span>About <span className='text-orange-500'>Me</span></span></div>
      <div className='w-full flex gap-5 max-w-screen-xl mx-auto my-8 '>
        <div className='w-1/3 '>
          <img className='rounded-lg overflow-hidden' src={userInfo?.profilePhoto || bitEmoji}
          />
        </div>
        <div className='text-xl w-2/3 gap-3 flex flex-col font-semibold font-poppins'>
  {userInfo?.firstName && userInfo?.lastName && (
    <div>I'm {userInfo.firstName} {userInfo.lastName}</div>
  )}
  
  {userInfo?.majorJobProfile && (
    <div className='font-bold'>{userInfo.majorJobProfile}</div>
  )}
  
  {userInfo?.userSummery && (
    <div className='text-base'>{userInfo.userSummery}</div>
  )}
  
  {userInfo?.email && (
    <div className='text-base'>
      <span className='text-blue-500'>Email: </span>{userInfo.email}
    </div>
  )}
  
  {userInfo?.phone && (
    <div className='text-base'>
      <span className='text-blue-500'>Phone: </span>{userInfo.phone}
    </div>
  )}
  
  {userInfo?.gDriveResumeLink && (
    <div
      onClick={() => window.open(userInfo.gDriveResumeLink, "_blank")}
      className='cursor-pointer font-semibold text-base py-2 bg-black justify-center items-center rounded-xl text-white flex w-32 text-center gap-2 py-3'
    >
      <FaDownload /> Resume
    </div>
  )}
</div>

      </div>
    </div>
  )
}

export default About