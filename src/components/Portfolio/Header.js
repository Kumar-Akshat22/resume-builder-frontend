import React, { useEffect, useState } from 'react'
import UserAvatar from './UserAvatar';

const Header = ({data}) => {
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
            ? { link: '#word', title: 'Word' }
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
                { link: '#contact', title: 'Contact' },
                { link: '#skills', title: 'Skills' },
                ...(data.education?.length > 0
                    ? [{ link: '#education', title: 'Education' }]
                    : []),
                ...(data.experience?.length > 0
                    ? [{ link: '#work', title: 'Work' }]
                    : []),
                { link: '#contact', title: 'Contact' }
            ]);
        }
        console.log(data)
    }, [data]);

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
                    navItems.map((item, index) => (
                        <a key={index} href={item?.link} className='ml-8 font-poppins font-semibold text-md text-gray-800 hover:text-blue-700 '>
                            {item?.title}
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header