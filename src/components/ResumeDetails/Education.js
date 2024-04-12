import React, { useState } from "react";
import EducationForm from "./EducationForm";
import { IoAddCircleOutline } from "react-icons/io5";


function Education() {

  const [currentIndex , setCurrentIndex] = useState(0);
  const [educations, setEducations] = useState([]);

  function addEducation() {


  }

  return (
    <div className="w-full p-5 mt-6">
      <div className="max-w-[1140px] mx-auto">


        <div className='w-full flex justify-between'>

          <div className='mb-4'>
            <p className='uppercase text-xl'>Education</p>
            <span className='text-sm'>Add information about your educational background.</span>
          </div>

          <div className='cursor-pointer'>
            <IoAddCircleOutline size={20} />
          </div>
        </div>

        <div>
          <h1 className="text-lg">Education {currentIndex}</h1>
        </div>
          <EducationForm />
      </div>
    </div>
  );
}

export default Education;
