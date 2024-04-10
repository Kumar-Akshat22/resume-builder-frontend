import React, { useState } from 'react'
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"


function Experience() {

    const [description , setDescription] = useState([])
    return (
        <div className='w-full p-5 mt-6'>

            <div className='max-w-[1140px] mx-auto'>

                <div className='mb-4'>
                    <p className='uppercase text-xl'>Experience</p>
                    <span className='text-sm'>List your work experience, most recent first</span>
                </div>

                <div className='flex flex-col gap-5'>

                    {/* Company Name and Job Title */}
                    <div className='flex gap-5 align-items-center justify-center'>
                        <label className='w-[50%]'>
                            <span className=''>Employer</span>
                            <input type='text' placeholder='e.g. John' className='w-full border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                        </label>

                        <label className='w-[50%]'>
                            <span>Job Title</span>
                            <input type='text' placeholder='e.g. Williams' className='w-full border p-[8px] rounded-[0.2rem] mt-1'></input>
                        </label>
                    </div>

                    {/* Duration */}
                    <label>

                        <span>Duration</span>
                        <input type='text' placeholder='e.g. Williams' className='w-full border p-[8px] rounded-[0.2rem] mt-1'></input>
                    </label>

                    {/* Bullet Points */}

                    <label>

                        <span>Bullet Points <span className='text-sm'>(Add max 4 points)</span></span>

                        <div className='flex gap-6'>
                            <input type='text' placeholder='e.g. Led a team of 10 members' className='w-full border p-[8px] rounded-[0.2rem] mt-1'></input>
                            <Fab color='primary' aria-label="add">
                                <AddIcon />
                            </Fab>
                        </div>
                    
                    </label>
                    

                </div>

            </div>

        </div>
    )
}

export default Experience