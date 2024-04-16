import React, { useEffect, useState } from "react";
import EducationForm from "./EducationForm";
import { GrFormPrevious } from "react-icons/gr";
import Save from "./Save";

function Education({updateResumeDetails}) {

  const [currentIndex , setCurrentIndex] = useState(1);
  const [educations, setEducations] = useState([]);

  function addEducations(educationData){

    setEducations([...educations , {educationData}]);

  }

  function addDegree(){

    setCurrentIndex(currentIndex=>currentIndex+1);
  }

  function saveDetails(){

    updateResumeDetails('educationDetails' , educations);
  }

  useEffect(()=>{

    console.log(educations);
    console.log(currentIndex);


  }, [educations])


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
              <GrFormPrevious size={25}/>
            </div>

            <Save saveDetails={saveDetails}/>
          </div>
        </div>

        <div>
          <h1 className="text-lg">Degree {currentIndex}</h1>
        </div>

          
          <EducationForm addEducations={addEducations} updateResumeDetails={updateResumeDetails}/>

          <div className='cursor-pointer mt-4'>
                    <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={addDegree}>Add more</button>
          </div>
      </div>
    </div>
  );
}

export default Education;
