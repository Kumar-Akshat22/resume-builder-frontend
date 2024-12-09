import React from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa6'
import {SiGmail, SiLeetcode} from 'react-icons/si'
import Typewrite from 'typewriter-effect'
import bitEmoji from '../../../assets/bitmoji.png'

const HeroSection = ({userInfo, socialLinks}) => {
  return (
    <div id='home' className='text-white grid min-h-[90vh] grid-cols-2 mx-auto max-w-screen-xl'>
        <div className='flex ml-20 flex-col font-poppins text-2xl font-bold gap-6 justify-center'>
            <span className='text-5xl'>Hi There,</span>
            <span className='text-5xl'>I'm {userInfo?.firstName} <span className='text-dark-primary'>{userInfo?.lastName}</span></span>
            <div className='flex'>I am Into &nbsp;<strong className='text-dark-primary'><Typewrite
                options={{
                    strings: Array.isArray(userInfo?.jobProfiles)?userInfo?.jobProfiles:[],
                    autoStart: true,
                    loop: true,
                    delay:100
                    
                }}
                /></strong>
            </div>
            <div>
                {/* <button onClick={()=>window.location.replace('#about')} className='bg-indigo-800  shadow-md shadow-indigo-600 text-xl font-medium text-white flex justify-center items-center rounded-3xl px-8 py-3 gap-1'>About Me <FaChevronCircleDown/></button> */}
            </div>
            <div className='flex gap-3'>
                {socialLinks?.linkedin &&
                    <div onClick={()=>window.open(socialLinks?.linkedin , "_black")} className={`hover:bg-blue-600 bg-black text-dark-primary w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaLinkedin/></div>
                }
                {socialLinks?.github &&
                    <div onClick={()=>window.open(socialLinks?.github , "_black")} className={`hover:bg-violet-600 bg-black text-dark-primary w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaGithub/></div>
                }
                {socialLinks?.twitter &&
                    <div onClick={()=>window.open(socialLinks?.twitter , "_black")} className={`hover:bg-blue-600 bg-black text-dark-primary w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaTwitter/></div>
                }
                {socialLinks?.instagram &&
                    <div onClick={()=>window.open(socialLinks?.instagram , "_black")} className={`hover:bg-pink-500 bg-black text-dark-primary w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaInstagram/></div>
                }
                {socialLinks?.leetcode &&
                    <div onClick={()=>window.open(socialLinks?.leetcode , "_black")} className={`hover:bg-orange-600 bg-black text-dark-primary w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><SiLeetcode/></div>
                }
                {socialLinks?.dev &&
                    <div onClick={()=>window.open(socialLinks?.dev , "_black")} className={`hover:bg-black bg-black text-dark-primary w-12 h-12 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaDev/></div>
                }
                {socialLinks?.medium &&
                    <div onClick={()=>window.open(socialLinks?.medium , "_black")} className={`hover:bg-black bg-black text-dark-primary w-12 h-12 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaMedium/></div>
                }
                {socialLinks?.mail &&
                    <div onClick={()=>window.open(socialLinks?.mail , "_black")} className={`hover:bg-red-500 bg-black text-dark-primary w-12 h-12 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><SiGmail/></div>
                }
                {socialLinks?.youtube &&
                    <div onClick={()=>window.open(socialLinks?.youtube , "_black")} className={`hover:bg-red-500 bg-black text-dark-primary w-12 h-12 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><SiGmail/></div>
                }
            </div>
        </div>
        <div className='flex mr-20 justify-center items-center'>
            <div className="rounded-full border-dark-primary border-4 w-72 aspect-square bg-yellow-500 overflow-hidden">
                <img
                    className=" drop-shadow-[0_0_0_4px_white] outline outline-white outline-4 drops  bg-[#252525] w-full h-full object-cover"
                    src={userInfo?.profilePhoto || bitEmoji}
                    alt="Profile"
            />
            </div>

        </div>
    </div>
  )
}

export default HeroSection