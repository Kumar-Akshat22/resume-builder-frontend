import React, { useEffect, useState } from 'react'
import UserAvatar from '../UserAvatar';

const Header = ({data, selectedTab, setSelectedTab}) => {
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
            link: "#about",
            title: 'Skills'
        },
        data?.education?.length
            ? { link: '#about', title: 'Education' }
            : null,
        data?.experience?.length
            ? { link: '#work', title: 'Word' }
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
                { link: '#about', title: 'Skills' },
                ...(data.education?.length > 0
                    ? [{ link: '#about', title: 'Education' }]
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

    // useEffect(() => {
    //     const sections = document.querySelectorAll('div[id]');
    
    //     const observer = new IntersectionObserver(
    //       (entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.target.id === "about" || entry.target.id === "education" || entry.target.id === "skills") {
    //                 if (selectedTab === "personalInfo") {
    //                   setActiveSection("about");
                      
    //                 } else if (selectedTab === "skills") {
    //                   setActiveSection("skills");
    //                 } else if (selectedTab === "education") {
    //                   setActiveSection("education");
    //                 }
    //               } else {
    //                 // Default behavior for other sections
    //                 setActiveSection(entry.target.id);
    //               }
    //                 // setActiveSection(entry.target.id);
      
    //         });
    //       },
    //       {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.7, // Adjust the threshold as needed
    //       }
    //     );
    
    //     sections.forEach((section) => observer.observe(section));
    
    //     return () => {
    //       sections.forEach((section) => observer.unobserve(section));
    //     };
    //   }, []);


  return (
    <div className='w-full py-4 sticky bg-black top-0 text-white z-[1000] '>
        <div className='max-w-screen-xl justify-between mx-auto flex'>
            <div><UserAvatar
            className='font-poppins text-dark-primary font-bold' 
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
                                onClick={()=>{
                                    if(item.title == "Skills"){
                                        setSelectedTab("skills");
                                    }else if(item.title == "Education"){
                                        setSelectedTab("education");
                                    }else if(item.title == "About"){
                                        setSelectedTab("personalInfo");
                                    }
                                }}
                                key={index}
                                href={item.link}
                                className={`ml-8 font-poppins font-semibold text-md ${
                                  activeSection === item.link.substring(1)
                                    ? 'text-dark-primary border-b-4 font-bold border-dark-primary'
                                    : 'text-white'
                                } hover:text-dark-primary`}
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