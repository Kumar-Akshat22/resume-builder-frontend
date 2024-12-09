// import React from 'react'
import { FaBriefcase, FaCalendar, FaMapPin } from 'react-icons/fa6';
import { formatDateRange } from '../../../utils/dateFormatter'

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
<div className="bg-dark-primary  cursor-pointer hover:-translate-y-4 transition-all text-white font-poppins mx-auto w-full max-w-screen-lg shadow-lg rounded-lg p-6 hover:shadow-xl  duration-300 ">
  <div className="flex justify-between flex-col gap-5  items-start mb-4">
    <div>
      {position && <h3 className="text-2xl font-bold ">{position}</h3>}
      {company && <h4 className="text-lg ">{company}</h4>}
    </div>
    <div className="">
      {startDate && endDate && (
        <div className="flex items-center mb-1">
          <FaCalendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{formatDateRange(startDate, endDate)}</span>
        </div>
      )}
      {location && (
        <div className="flex items-center ">
          <FaMapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      )}
    </div>
  </div>
  
  {responsibilities && responsibilities.length > 0 && (
    <div className="mb-4">
      <h5 className="font-semibold  mb-2">Responsibilities</h5>
      <ul className="list-disc list-inside font-light space-y-1">
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
  <div id='work' className="flex scroll-mt-20 flex-col gap-6  m-7 my-32">
  <div className='font-bold  text-4xl text-white gap-2 flex font-poppins justify-center items-center my-4'><FaBriefcase/> <span>My</span> <span className=''>Experience</span></div>
  <div className={`grid ${Array.isArray(experienceData) && experienceData.length ==1?"grid-cols-1": experienceData?.length%3 == 0 ? "grid-cols-3":"grid-cols-2"} max-w-screen-xl gap-5 mx-auto`}>
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
  </div>
</div>  )
}

export default Experience