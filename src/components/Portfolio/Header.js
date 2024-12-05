import React, { useEffect, useState } from 'react'
import UserAvatar from './UserAvatar';

const Header = ({data}) => {
    const [activeSection, setActiveSection] = useState('');
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
                {
                    link: '#about',
                    title: 'About'
                },
                data?.skills && data.skills?.technicalSkills && data.skills?.technicalSkills.length > 0 &&
                { link: '#skills', title: 'Skills' },
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

    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed
          }
        );
    
        sections.forEach((section) => observer.observe(section));
    
        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
      }, []);


  return (
    <div className='w-full py-4 sticky top-0 bg-white z-[1000] '>
        <div className='max-w-screen-xl justify-between mx-auto flex'>
            <div><UserAvatar
            className='font-poppins font-bold' 
            size='xl'
                name={`${data?.personalInfo?.firstName} ${data?.personalInfo?.lastName}`}
            /></div>
            <div className='flex'>
                {
                    navItems.map((item, index) => 
                        {
                            if(!item)return
                            return (
                                <a
                                key={index}
                                href={item.link}
                                className={`ml-8 font-poppins font-semibold text-md ${
                                  activeSection === item.link.substring(1)
                                    ? 'text-blue-700 border-b-4 border-blue-700'
                                    : 'text-gray-800'
                                } hover:text-blue-700`}
                              >
                                {item.title}
                              </a>
                            )
                        }
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Header