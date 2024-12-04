import React, { useState } from 'react';
import { FaChevronCircleRight, FaDev, FaGithub, FaInstagram, FaMedium, FaTwitter } from 'react-icons/fa';
import { FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { SiGmail, SiLeetcode } from 'react-icons/si';

const Footer = ({data}) => {
    const [navItems, setNavItems] = useState([
        {
            link: '#home',
            title: 'Home'
        },
        {
            link: '#contact',
            title: 'Contact'
        },
        {
            link: "#skills",
            title: 'Skills'
        },
        data?.education?.length
            ? { link: '#education', title: 'Education' }
            : null,
        data?.experience?.length
            ? { link: '#work', title: 'Work' }
            : null,
        {
            link: '#contact',
            title: 'Contact'
        }
    ]);

  return (
    <footer className="bg-[#090629] text-white py-6">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-3 ">
        <div className="mb-4 md:mb-0 flex flex-col gap-3 max-w-80">
          <h3 className="font-bold text-lg">Jigar's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
          <p className="font-bold">Keep Rising ⚡ Connect with me over live chat!</p>
        </div>

        <div className="mb-4 md:mb-0 flex justify-center max-w-screen-xl ">
          <div className='w-32'>

          <h3 className="font-bold text-lg pb-2">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map(item=>(
              <li className='flex gap-2 items-center'><FaChevronCircleRight/><a href="#" className="hover:text-yellow-400">{item.title}</a></li>
            ))}
          </ul>
            </div>
        </div>

        <div className='max-w-screen-xl'>
          <h3 className="font-bold text-lg">Contact Info</h3>
          <p>{data?.personalInfo?.contact}</p>
          <p>{data?.personalInfo?.email}</p>
          <p>{data?.personalInfo?.location}</p>
          <div className='flex gap-3 my-5'>
                {data?.socialLinks?.linkedin &&
                    <div className={`hover:bg-blue-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaLinkedin/></div>
                }
                {data?.socialLinks?.github &&
                    <div className={`hover:bg-violet-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaGithub/></div>
                }
                {data?.socialLinks?.twitter &&
                    <div className={`hover:bg-blue-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaTwitter/></div>
                }
                {data?.socialLinks?.instagram &&
                    <div className={`hover:bg-pink-500 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaInstagram/></div>
                }
                {data?.socialLinks.leetcode &&
                    <div className={`hover:bg-orange-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><SiLeetcode/></div>
                }
                {data?.socialLinks?.dev &&
                    <div className={`hover:bg-black bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaDev/></div>
                }
                {data?.socialLinks.medium &&
                    <div className={`hover:bg-black bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaMedium/></div>
                }
                {data?.socialLinks.mail &&
                    <div className={`hover:bg-red-500 bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><SiGmail/></div>
                }
                {data?.socialLinks.youtube &&
                    <div className={`hover:bg-red-500 bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaYoutube/></div>
                }
            </div>
            </div>
      </div>
      <div className="text-center mt-6 mx-auto max-w-screen-xl">
        <hr className='border-gray-400'/>
        <p className='pt-4'>Designed and Developed With ❤ By <strong>Team Null Pointers</strong></p>
      </div>
    </footer>
  );
};

export default Footer;