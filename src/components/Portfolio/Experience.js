// import React from 'react'
import { FaBriefcase, FaCalendar, FaMapPin } from 'react-icons/fa6';



const ExperienceCard = ({ 
  company, 
  position, 
  duration, 
  location, 
  responsibilities = [], 
  technologies = [] 
}) => {
  return (
    <div className="bg-white mx-auto w-full max-w-screen-lg shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{position}</h3>
          <h4 className="text-lg text-gray-600">{company}</h4>
        </div>
        <div className="text-right">
          <div className="flex items-center text-gray-500 mb-1">
            <FaCalendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaMapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h5 className="font-semibold text-gray-700 mb-2">Responsibilities</h5>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">{responsibility}</li>
          ))}
        </ul>
      </div>
      
      <div>
        {/* <h5 className="font-semibold text-gray-700 mb-2">Technologies</h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

const Experience = ({experienceData}) => {
  return (
  <div className="flex flex-col gap-6  m-7">
  <div className='font-bold text-4xl flex gap-2 font-poppins justify-center items-center my-4'><FaBriefcase/> <span>Experience</span></div>
  {experienceData.map((experience, index) => (
    <ExperienceCard
      key={index}
      company={experience.companyName}
      position={experience.jobRole}
      location={experience.location}
      startDate={experience.startDate}
      endDate={experience.endDate}
      responsibilities={experience.responsibilities}
    />
  ))}
</div>  )
}

export default Experience