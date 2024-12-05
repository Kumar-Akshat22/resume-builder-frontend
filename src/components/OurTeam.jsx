import React from 'react'
import TeamMember from './TeamMember'

const OurTeam = () => {
    const teamMember = [
        {
            name:'Kumar Akshat',
            position:'Frontend Developer',
            github:'https://github.com/kumar-akshat22',
            linkedin:'https://www.linkedin.com/in/kumar-akshat-758943220/',
            background: 'bg-cyan-500',
            profilePicture: "",
        },
        {
            name:'Md Muzzammil Rashid',
            position:'Backend Developer',
            github:'https://github.com/md-muzzammil-rashid',
            linkedin:'https://www.linkedin.com/in/md-muzzammil-rashid/',
            background: 'bg-yellow-400',
            profilePicture: "",
        },
        {
            name:'Sameer Sony',
            position:'Android Developer',
            github:'https://github.com/SameerSony',
            linkedin:'https://www.linkedin.com/in/sameer-sony-a41207305',
            background: 'bg-lime-500',
            profilePicture: "",
        },
    ]
  return (
    <div className='w-full flex flex-col items-center justify-center font-poppins my-5'>
        <h2 className='font-bold m-2 text-4xl '>Our Team</h2>
        <div className='flex gap-5'>
            {
                teamMember.map(member => <TeamMember memberDetail = {member}/>)
            }
        </div>

    </div>
  )
}

export default OurTeam