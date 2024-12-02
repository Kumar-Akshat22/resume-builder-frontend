import React, { useState } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

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

        <div className="mb-4 md:mb-0 max-w-screen-xl">
          <h3 className="font-bold text-lg pb-2">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map(item=>(
                <li className='flex gap-2 items-center'><FaChevronCircleRight/><a href="#" className="hover:text-yellow-400">{item.title}</a></li>
            ))}
          </ul>
        </div>

        <div className='max-w-screen-xl'>
          <h3 className="font-bold text-lg">Contact Info</h3>
          <p>{data?.personalInfo?.contact}</p>
          <p>{data?.personalInfo?.email}</p>
          <p>{data?.personalInfo?.location}</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="far fa-envelope"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 mx-auto max-w-screen-xl">
        <hr className='border-gray-400'/>
        <p className='pt-4'>Designed With ❤ By <strong>Team Null Pointers</strong></p>
      </div>
    </footer>
  );
};

export default Footer;