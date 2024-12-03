import React from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa6'
import {SiLeetcode} from 'react-icons/si'
import Typewrite from 'typewriter-effect'
import bitEmoji from '../../assets/bitmoji.png'

const HeroSection = ({userInfo, socialLinks}) => {
  return (
    <div className='grid min-h-[90vh] grid-cols-2 mx-auto max-w-screen-xl'>
        <div className='flex ml-20 flex-col font-poppins text-2xl font-bold gap-6 justify-center'>
            <span className='text-5xl'>Hi There,</span>
            <span className='text-5xl'>I'm {userInfo.firstName} <span className='text-orange-500'>{userInfo.lastName}</span></span>
            <div className='flex'>I am Into &nbsp;<strong className='text-amber-700'><Typewrite
                options={{
                    strings: Array.isArray(userInfo?.jobProfiles)?userInfo?.jobProfiles:[],
                    autoStart: true,
                    loop: true,
                    delay:100
                    
                }}
                /></strong>
            </div>
            <div>
                <button className='bg-indigo-800  shadow-md shadow-indigo-600 text-xl font-medium text-white flex justify-center items-center rounded-3xl px-8 py-3 gap-1'>About Me <FaChevronCircleDown/></button>
            </div>
            <div className='flex gap-3'>
                {socialLinks.linkedin &&
                    <div className={`hover:bg-blue-600 bg-black text-cyan-500 w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaLinkedin/></div>
                }
                {socialLinks.github &&
                    <div className={`hover:bg-violet-600 bg-black text-cyan-500 w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaGithub/></div>
                }
                {socialLinks.linkedin &&
                    <div className={`hover:bg-blue-600 bg-black text-cyan-500 w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaTwitter/></div>
                }
                {socialLinks.linkedin &&
                    <div className={`hover:bg-pink-500 bg-black text-cyan-500 w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaInstagram/></div>
                }
                {socialLinks.linkedin &&
                    <div className={`hover:bg-orange-600 bg-black text-cyan-500 w-12 h-12 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><SiLeetcode/></div>
                }
                {socialLinks.linkedin &&
                    <div className={`hover:bg-black bg-black text-cyan-500 w-12 h-12 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaDev/></div>
                }
                {socialLinks.linkedin &&
                    <div className={`hover:bg-black bg-black text-cyan-500 w-12 h-12 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaMedium/></div>
                }
            </div>
        </div>
        <div className='flex mr-20 justify-center items-center'>
                <div className='rounded-full bg-yellow-500'>
                    <img src={bitEmoji}  />
                </div>
        </div>
    </div>
  )
}

export default HeroSection