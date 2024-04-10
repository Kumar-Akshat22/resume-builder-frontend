import React from 'react'

function PersonalDetails() {
  return (

    <div className='w-full p-5 mt-6'>
        
    <div className='max-w-[1140px] mx-auto'>
        <div className='mb-4'>
            <p className='uppercase text-xl'>Complete Your Resume Heading</p>
            <span className='text-sm'>Employers will use this information to contact you.</span>
        </div>

        {/* Input Form */}
        <div className='w-full min-h-[50%] flex flex-col gap-5'>
            
            {/* First Name & Last Name */}
            <div className='flex gap-5 align-items-center justify-center'>

                <label className='w-[50%]'>
                    <span className=''>First Name</span>
                    <input type='text' placeholder='e.g. John' className='w-full border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                </label>

                <label className='w-[50%]'>
                    <span>Last Name</span>
                    <input type='text' placeholder='e.g. Williams' className='w-full border p-[8px] rounded-[0.2rem] mt-1'></input>
                </label>
            </div>
            
            <div className='flex gap-5 align-items-center justify-center'>

                <label className='w-[50%]'>
                    <span>Email</span>
                    <input type='email' placeholder='e.g. johnwilliams@example.com' className='w-full border p-[8px] rounded-[0.2rem] mt-1'></input>
                </label>

                <label className='w-[50%]'>
                    <span>Phone</span>
                    <input type='text' placeholder='9099103904' className='w-full border p-[8px] rounded-[0.2rem] mt-1'></input>
                </label>

            </div>

            <label className='w-full'>
                
                <span>Summary</span>
                <textarea placeholder='Write about yourself' className='w-full border mt-1 p-[8px]' rows={10}></textarea>
            </label>
        </div>


    </div>

</div>
  )
}

export default PersonalDetails