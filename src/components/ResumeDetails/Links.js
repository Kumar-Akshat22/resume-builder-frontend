import React from 'react'

function Links() {
  return (

    <div className="w-full p-5 mt-6">

        <div className='max-w-[1140px] mx-auto flex flex-col gap-7'>

            <div className='mb-4'>
                <p className='uppercase text-xl'>Social Links</p>
                <span className='text-sm'>Add links to your Social Account</span>
            </div>

            <div className="flex justify-between items-center">
                
                <div>
                    <span className='text-xl'>LinkedIn</span>
                </div>

                <div className='flex gap-4 justify-between w-[78%]'>
                    <label className='w-full'>
                        <span>URL</span>

                        <input
                        type="text"
                        placeholder="e.g. John"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1"
                    ></input>
                    </label>

                </div>
            </div>

            <div className="flex justify-between items-center">
                
                <div>
                    <span className='text-xl'>Website</span>
                </div>

                <div className='flex gap-4 justify-between w-[78%]'>
                    <label className='w-full'>
                        <span>URL</span>

                        <input
                        type="text"
                        placeholder="e.g. John"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1"
                    ></input>
                    </label>

                </div>
            </div>

            <div className="flex justify-between items-center">
                
                <div>
                    <span className='text-xl'>GitHub</span>
                </div>

                <div className='flex gap-4 justify-between w-[78%]'>
                    <label className='w-full'>
                        <span>URL</span>

                        <input
                        type="text"
                        placeholder="e.g. John"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1"
                    ></input>
                    </label>

                </div>
            </div>



        </div>

    </div>
  )
}

export default Links