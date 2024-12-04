// import React from 'react'
import { FaBriefcase, FaCalendar, FaMapPin } from 'react-icons/fa6';
import { formatDateRange } from '../../utils/dateFormatter'

const ExperienceCard = ({ 
  company, 
  position, 
  startDate,
  endDate, 
  location, 
  responsibilities = [], 
  technologies = [] 
}) => {
  if(!position)return;
  return (
<div className="bg-yellow-400 font-poppins mx-auto w-full max-w-screen-lg shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-300">
  <div className="flex justify-between items-start mb-4">
    <div>
      {position && <h3 className="text-xl font-bold text-gray-800">{position}</h3>}
      {company && <h4 className="text-lg text-gray-600">{company}</h4>}
    </div>
    <div className="text-right">
      {startDate && endDate && (
        <div className="flex items-center text-gray-800 mb-1">
          <FaCalendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{formatDateRange(startDate, endDate)}</span>
        </div>
      )}
      {location && (
        <div className="flex items-center text-gray-800">
          <FaMapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      )}
    </div>
  </div>
  
  {responsibilities && responsibilities.length > 0 && (
    <div className="mb-4">
      <h5 className="font-semibold text-gray-700 mb-2">Responsibilities</h5>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-sm">{responsibility}</li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
};

const Experience = ({experienceData}) => {
  return (
  <div id='work' className="flex scroll-mt-20 flex-col gap-6  m-7">
  <div className='font-bold text-4xl flex gap-2 font-poppins justify-center items-center my-4'><FaBriefcase/> <span>My</span> <span className='text-orange-500'>Experience</span></div>
  {experienceData.map((experience, index) => (
    <ExperienceCard
      key={index}
      company={experience?.companyName}
      position={experience?.jobRole}
      location={experience?.location}
      startDate={experience?.startDate}
      endDate={experience?.endDate || "Present"}
      responsibilities={experience?.responsibilities}
    />
  ))}
</div>  )
}

export default Experience