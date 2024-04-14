import React, { useEffect, useState } from "react";
import EducationForm from "./EducationForm";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrFormPrevious } from "react-icons/gr";
import { Navigate } from "react-router-dom";
import Save from "./Save";

function Education({updateResumeDetails}) {

  const [currentIndex , setCurrentIndex] = useState(1);
  const [educations, setEducations] = useState([]);

  function addEducation() {

    setCurrentIndex(currentIndex+1);

  }

  useEffect(()=>{

    console.log(educations);
    
  },[educations])



  return (
    <div className="w-full p-5 mt-6">
      <div className="max-w-[1140px] mx-auto">


        <div className='w-full flex justify-between items-center'>
          
            <div className='mb-4'>
              <p className='uppercase text-xl'>Education</p>
              <span className='text-sm'>Add information about your educational background.</span>
            </div>
            

          <div className="flex items-center gap-2">

            <div className={
              `${currentIndex > 1 
              ? 'flex'
              : 'hidden' } cursor-pointer`}>
              <GrFormPrevious size={25} onClick={()=>{setCurrentIndex(currentIndex-1)}}/>
            </div>
            <div className='cursor-pointer'>
              <IoAddCircleOutline size={25} onClick={addEducation}/>
            </div>
            <Save/>
          </div>
        </div>

        <div>
          <h1 className="text-lg">Degree {currentIndex}</h1>
        </div>
          <EducationForm currentIndex={currentIndex} updateResumeDetails={updateResumeDetails}/>
      </div>
    </div>
  );
}

export default Education;
