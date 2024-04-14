import React, { useState, useEffect } from 'react'
import { MdAddTask } from "react-icons/md";
import BulletPoint from './BulletPoint';

function Extra( { updateResumeDetails } ) {

  const [extraDetailsForm, setExtraDetailsForm] = useState({

    certifications: {

      title1: '',
      link1: '',

      title2: '',
      link2: '',

    },

    achievements: {

    }
  });

  

  function handleChange(event) {

    const {name , value} = event.target;

    setExtraDetailsForm({...extraDetailsForm , certifications:{...extraDetailsForm.certifications , [name]:value}})
  }

  const saveDetails = ()=>{

    updateResumeDetails('extras', extraDetailsForm);
  }

  return (


    <div className='w-full p-5 mt-6'>

      <div className='max-w-[1140px] mx-auto'>

        <div className='w-full flex justify-between items-center'>
          <div className='mb-4'>
            <p className='uppercase text-xl'>Extra Details</p>
            <span className='text-sm'>Add about your Certifications and Achievements</span>
          </div>

          <div>
            <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={saveDetails}>Save & Continue</button>
          </div>
        </div>

        {/* Certifications */}
        <div>

          <div>
            <h1>Certifications</h1>
          </div>

          {/* Certification 1 title and Link */}
          <div className='flex gap-5 align-items-center justify-center mt-4'>
            <label className='w-[50%]'>
              <span className=''>Title</span>
              <input type='text' name='title1' value={extraDetailsForm.certifications.title1} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>Link</span>
              <input type='text' name='link1' value={extraDetailsForm.certifications.link1} onChange={handleChange} placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>
          </div>

          {/* Certification 2 title and Link */}
          <div className='flex gap-5 align-items-center justify-center mt-4'>
            <label className='w-[50%]'>
              <span className=''>Title</span>
              <input type='text' name='title2' value={extraDetailsForm.certifications.title2} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>Link</span>
              <input type='text' name='link2' value={extraDetailsForm.certifications.link2} onChange={handleChange} placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>
          </div>
        </div>

        {/* Achievements */}
        <div className='mt-5'>

          <div>
            <h1 className='text-lg'>Achievements <span className='text-sm'>(Add your top 2 achievements)</span></h1>
          </div>

          <label>
            <div className='flex flex-col gap-6'>

              <div className='w-full flex align-items-center gap-5'>

                <input type='text' placeholder='e.g. React' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>

                <div className='flex items-center cursor-pointer'>
                  <MdAddTask color="#3983fa" size={30}/>
                </div>

              </div>
            </div>
          </label>

        </div>

      </div>

    </div>
  )
}

export default Extra