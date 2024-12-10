import React from 'react'
import AkshatImage from '../assets/Akshat.jpg'
import Muzzamil from '../assets/Muzzamil.png'
import Sameer from '../assets/Sameer.jpg'
import { FaGithub } from 'react-icons/fa'

const OurTeam = () => {
    const teamMember = [
        {
            name:'Kumar Akshat',
            position:'Frontend Developer',
            github:'https://github.com/kumar-akshat22',
            linkedin:'https://www.linkedin.com/in/kumar-akshat-758943220/',
            profilePicture: AkshatImage,
        },
        {
            name:'Md Muzzammil Rashid',
            position:'Full-Stack Developer',
            github:'https://github.com/md-muzzammil-rashid',
            linkedin:'https://www.linkedin.com/in/md-muzzammil-rashid/',
            profilePicture: Muzzamil,
        },
        {
            name:'Sameer Sony',
            position:'Frontend Developer',
            github:'https://github.com/SameerSony',
            linkedin:'https://www.linkedin.com/in/sameer-sony-a41207305',
            profilePicture: Sameer,
        },
    ]
  return (
    <div className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the developers behind this AI powered website
            </p>
          </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {teamMember.map((member, index) => (
            <div key={index}>
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-48 mx-auto">
                    <img
                      src={member.profilePicture}
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded-full ring-1 ring-blue-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">
                {member.position}
                </p>
              
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default OurTeam