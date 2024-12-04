import React from 'react'
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa6';
import { formatDateRange } from '../../utils/dateFormatter';
import universityImage from '../../assets/university.avif'
const EducationCard = ({ institute, location, startDate, endDate, degree, specialization, imageUrl }) => {
  if(!degree)return
  return (
<div className="bg-white shadow-lg hover:shadow-gray-500 shadow-gray-400 transition-all flex rounded-2xl w-full max-w-screen-lg mx-auto overflow-hidden">
  <div className="relative h-48">
    {imageUrl && (
      <img src={imageUrl} alt={institute} className="h-full w-full max-w-64 min-w-64 object-cover" />
    )}
    <div className="absolute top-0 left-0 bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
      <div className="text-white text-center">
        {institute && <h3 className="text-2xl font-bold mb-2">{institute}</h3>}
        {location && <p className="text-lg">{location}</p>}
      </div>
    </div>
  </div>
  <div className="p-6 font-poppins">
    {degree && (
      <h4 className="text-2xl font-bold mb-2 text-indigo-900 flex gap-2 items-center">
        <FaUserGraduate /> {degree}
      </h4>
    )}
    {specialization && <p className="text-gray-800 mb-4 text-xl font-bold">{specialization}</p>}
    {startDate && endDate && (
      <p className="text-lg text-green-700 font-bold mb-2">
        {formatDateRange(startDate, endDate)}
      </p>
    )}
  </div>
</div>

  );
};

const Education = ({educationData}) => {
  return (
    <div id='education' className="flex scroll-mt-20  flex-col gap-6  m-7">
      <div className='font-bold text-4xl flex gap-2 font-poppins justify-center items-center my-4'><FaGraduationCap/><span>My</span> <span className='text-orange-500'>Education</span></div>
      {educationData.map((education, index) => (
        <EducationCard
          key={index}
          institute={education?.instituteName}
          location={education?.location}
          startDate={education?.startDate}
          endDate={education?.endDate || "Present"}
          degree={education?.degree}
          specialization={education?.specialization}
          imageUrl={education?.imageUrl || universityImage}
        />
      ))}
    </div>
  )
}

export default Education