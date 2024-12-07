import React, { useEffect, useState } from 'react';
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
        link: '#about',
        title: 'About'
    },
    data?.skills && data.skills?.technicalSkills && data.skills?.technicalSkills.length > 0 &&
    {
        link: "#skills",
        title: 'Skills'
    },
    data?.education?.length
        ? { link: '#education', title: 'Education' }
        : null,
    data?.experience?.length
        ? { link: '#word', title: 'Word' }
        : null,
    data?.projects?.length
        ? { link: '#project', title: 'Projects' }
        : null,
    {
        link: '#contact',
        title: 'Contact'
    }
]);

useEffect(() => {
    if (data) {
        setNavItems([
            { link: '#home', title: 'Home' },
            data?.skills && data.skills?.technicalSkills && data.skills?.technicalSkills.length > 0 &&
            { link: '#skills', title: 'Skills' },
            {
              link: '#about',
              title: 'About'
          },
            ...(data.education?.length > 0
                ? [{ link: '#education', title: 'Education' }]
                : []),
            ...(data.experience?.length > 0
                ? [{ link: '#work', title: 'Work' }]
                : []),
            ...(data.projects?.length > 0
                ? [{ link: '#project', title: 'Project' }]
                : []),
            { link: '#contact', title: 'Contact' }
        ]);
    }
    console.log(data)
}, [data]);

  return (
    <footer className="bg-[#090629] text-white py-6">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-3 ">
        <div className="mb-4 md:mb-0 flex flex-col gap-3 max-w-80">
          <h3 className="font-bold text-lg">{data?.personalInfo?.firstName&& `${data?.personalInfo?.firstName} 's Portfolio'`}</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
          <p className="font-bold">Keep Rising ⚡ Connect with me over live chat!</p>
        </div>

        <div className="mb-4 md:mb-0 flex justify-center max-w-screen-xl ">
          <div className='w-32'>

          <h3 className="font-bold text-lg pb-2">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item, index)=>(
              <a key={index} href={item?.link}  className='flex gap-2 items-center'>
              <FaChevronCircleRight/>{item?.title}
              </a>
            ))}
          </ul>
            </div>
        </div>

        <div className='max-w-screen-xl'>
          <h3 className="font-bold text-lg">Contact Info</h3>
          <p><a href={`mailto:${data?.personalInfo?.email}`}>{data?.personalInfo?.email}</a></p>
          <p><a href={`tel:${data?.personalInfo?.phone}`}>{data?.personalInfo?.phone}</a></p>
          <p>{data?.personalInfo?.location}</p>
          <div className='flex gap-3 my-5'>
                {data?.socialLinks?.linkedin &&
                    <div onClick={()=>window.open(data?.socialLinks?.linkedin, '_blank')} className={`hover:bg-blue-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaLinkedin/></div>
                }
                {data?.socialLinks?.github &&
                    <div onClick={()=>window.open(data?.socialLinks?.github, '_blank')}  className={`hover:bg-violet-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaGithub/></div>
                }
                {data?.socialLinks?.twitter &&
                    <div onClick={()=>window.open(data?.socialLinks?.twitter, '_blank')} className={`hover:bg-blue-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaTwitter/></div>
                }
                {data?.socialLinks?.instagram &&
                    <div onClick={()=>window.open(data?.socialLinks?.instagram, '_blank')} className={`hover:bg-pink-500 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><FaInstagram/></div>
                }
                {data?.socialLinks.leetcode &&
                    <div onClick={()=>window.open(data?.socialLinks?.leetcode, '_blank')} className={`hover:bg-orange-600 bg-gray-200 text-black  w-10 h-10 aspect-square transition-all  justify-center items-center hover:text-white flex rounded-full`}><SiLeetcode/></div>
                }
                {data?.socialLinks?.dev &&
                    <div onClick={()=>window.open(data?.socialLinks?.dev, '_blank')} className={`hover:bg-black bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaDev/></div>
                }
                {data?.socialLinks.medium &&
                    <div onClick={()=>window.open(data?.socialLinks?.medium, '_blank')} className={`hover:bg-black bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaMedium/></div>
                }
                {data?.socialLinks.mail &&
                    <div onClick={()=>window.open(data?.socialLinks?.mail, '_blank')} className={`hover:bg-red-500 bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><SiGmail/></div>
                }
                {data?.socialLinks.youtube &&
                    <div onClick={()=>window.open(data?.socialLinks?.youtube, '_blank')} className={`hover:bg-red-500 bg-gray-200 text-black  w-10 h-10 transition-all aspect-square justify-center items-center hover:text-white flex rounded-full`}><FaYoutube/></div>
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