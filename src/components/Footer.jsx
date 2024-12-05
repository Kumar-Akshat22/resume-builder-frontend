import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className='w-full'>

            <div className='container max-w-[1140px] mx-auto flex justify-between py-20'>

                {/* Column 1 */}
                <div className='w-[20%] h-auto flex flex-col gap-5 font-poppins'>

                    <h1 className='text-lg font-bold'>Resume Builder</h1>

                    <div>
                        <p className='text-sm text-[#233143]'>Resume builder is a site that helps user to create resumes with just some clicks.</p>
                    </div>

                    <button className='bg-[#4885e6] mt-9 p-4 rounded-full text-white cursor-pointer hover:bg-[#f1f8fe] hover:text-black transition-all duration-300 uppercase font-semibold'>
                        Create My Resume
                    </button>

                    {/* Social Links */}
                    <div className='mx-auto flex gap-5 mt-5'>
                    <FaGithub size={30} className='cursor-pointer'/>
                    <FaLinkedin size={30} className='cursor-pointer'/>
                    <FaXTwitter size={30} className='cursor-pointer'/>
                    </div>
                </div>

                {/* Column 2 */}
                <div className='w-[20%] h-auto flex flex-col gap-5 font-poppins'>
                    <h1 className='text-lg font-bold'>Resume</h1>

                    <div>
                        <ul className='flex flex-col gap-3 cursor-pointer'>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>Resume Builder</li>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>Resume Templates</li>
                        </ul>
                    </div>
                </div>

                {/* Column 3 */}
                <div className='w-[20%] h-auto flex flex-col gap-5 font-poppins'>

                    <h1 className='text-lg font-bold'>Support</h1>

                    <div>
                        <ul className='flex flex-col gap-3 cursor-pointer'>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>About</li>
                            <li className='text-sm text-[#233143] hover:text-[#6096ed]'>Contact</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='flex justify-center border-t-2 p-4'>

                <p className='font-poppins font-semibold'>© 2024 All rights reserved</p>

            </div>
        </footer>
    )
}

export default Footer