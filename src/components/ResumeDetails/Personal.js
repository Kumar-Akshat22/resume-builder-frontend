import React, { useState } from 'react'
import Save from './Save';
import toast from 'react-hot-toast';


function PersonalDetails( {updateResumeDetails} ) {

  const [personalDetailsFormData , setPersonalDetailsFormData] = useState({
    
    
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      summary:'',

    
  });


  function handleChange(event){

    const {name , value} = event.target;

    setPersonalDetailsFormData({...personalDetailsFormData , [name]:value})

  }

  const saveDetails = ()=>{

    updateResumeDetails('personalDetails', personalDetailsFormData);
    toast.success('Personal details successfully saved');
  }

  return (

    <div className='w-full p-5 mt-6'>

      <div className='max-w-[1140px] mx-auto font-openSans'>
        
        <div className='w-full flex justify-between'>

          <div className='mb-4'>
            <p className='uppercase text-xl'>Complete Your Resume Heading</p>
            <span className='text-sm'>Employers will use this information to contact you.</span>
          </div>

          <Save saveDetails={saveDetails}/>
        </div>

        {/* Input Form */}
        <div className='w-full min-h-[50%] flex flex-col gap-5'>

          {/* First Name & Last Name */}
          <div className='flex gap-5 align-items-center justify-center'>

            <label className='w-[50%]'>
              <span className=''>First Name</span>
              <input type='text' value={personalDetailsFormData.firstName} onChange={handleChange} name='firstName' placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>Last Name</span>
              <input type='text' value={personalDetailsFormData.lastName} onChange={handleChange} name='lastName' placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>
          </div>

          <div className='flex gap-5 align-items-center justify-center'>

            <label className='w-[50%]'>
              <span>Email</span>
              <input type='email' value={personalDetailsFormData.email} onChange={handleChange} name='email' placeholder='e.g. johnwilliams@example.com' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>Phone</span>
              <input type='text' value={personalDetailsFormData.phone} onChange={handleChange} name='phone' placeholder='9099103904' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>

          </div>

          <label className='w-full'>

            <span>Summary</span>
            <textarea name='summary' value={personalDetailsFormData.summary} onChange={handleChange} placeholder='Write about yourself' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1' rows={10}></textarea>
          </label>
        </div>


      </div>

    </div>
  )
}

export default PersonalDetails