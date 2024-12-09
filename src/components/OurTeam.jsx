import React from 'react'
import ProfileImage from '../assets/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png'

const OurTeam = () => {
    const teamMember = [
        {
            name:'Kumar Akshat',
            position:'Frontend Developer',
            github:'https://github.com/kumar-akshat22',
            linkedin:'https://www.linkedin.com/in/kumar-akshat-758943220/',
            profilePicture: ProfileImage,
        },
        {
            name:'Md Muzzammil Rashid',
            position:'Backend Developer',
            github:'https://github.com/md-muzzammil-rashid',
            linkedin:'https://www.linkedin.com/in/md-muzzammil-rashid/',
            profilePicture: ProfileImage,
        },
        {
            name:'Sameer Sony',
            position:'Frontend Developer',
            github:'https://github.com/SameerSony',
            linkedin:'https://www.linkedin.com/in/sameer-sony-a41207305',
            profilePicture: ProfileImage,
        },
    ]
  return (
    <div className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-indigo-600">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the developers behind this AI powered website
            </p>
          </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMember.map((member, index) => (
            <div key={index}>
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-48 mx-auto">
                    <img
                      src={member.profilePicture}
                      alt={member.name}
                      className="w-full object-cover rounded-full ring-1 ring-blue-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam