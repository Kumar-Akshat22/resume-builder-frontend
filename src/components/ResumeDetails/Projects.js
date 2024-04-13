import React, { useEffect, useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import BulletPoint from './BulletPoint';
import { MdAddTask } from "react-icons/md";

function Projects() {

  // To populate the bullet points data that can be mapped to a bullet point
  const [bulletPoints, setBulletPoints] = useState(() => {

    const savedPoints = localStorage.getItem('projectBulletPoints');

    if (savedPoints) {

      return JSON.parse(savedPoints);

    } else {

      return [];
    }
  });

  // To handle the input text of the field
  const [text, setText] = useState('');

  console.log(text);


  // To add Bullet Points
  function addPoint(text) {

    const newPoint = {

      id: Date.now(),
      text,
    }

    setBulletPoints([...bulletPoints, newPoint]);
    setText('');

  }

  // Function to delete a point
  function deletePoint(id) {

    const newBulletPoints = bulletPoints.filter(bulletPoint => bulletPoint.id !== id);
    setBulletPoints(newBulletPoints);

  }

  // useEffect hook 
  useEffect(() => {

    localStorage.setItem("projectBulletPoints", JSON.stringify(bulletPoints));

  }, [bulletPoints]);

  return (
    <div className='w-full p-5 mt-6'>

      <div className='max-w-[1140px] mx-auto'>

        <div className='w-full flex justify-between'>

          <div className='mb-4'>
            <p className='uppercase text-xl'>Projects</p>
            <span className='text-sm'>Add information about your Projects</span>
          </div>

          <div className='cursor-pointer'>
            <IoAddCircleOutline size={20} />
          </div>
        </div>


        <div className='flex flex-col gap-5'>

          <div>
            <h1>Project { }</h1>
          </div>

          {/* Project Name */}
          <div className='flex gap-5 align-items-center justify-center'>
            <label className='w-[50%]'>
              <span className=''>Name</span>
              <input type='text' placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>Short Description</span>
              <input type='text' placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>
          </div>

          {/* Project Links */}
          <div className='flex gap-5 align-items-center justify-center'>
            <label className='w-[50%]'>
              <span className=''>Live Link</span>
              <input type='text' placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>GitHub Link</span>
              <input type='text' placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>
          </div>


          <label>

            <span>Project Description <span className='text-sm'>(Add max 4 points)</span></span>

            <div className='flex flex-col gap-6'>

              <div className='w-full flex align-items-center gap-5'>

                <input type='text' value={text} onChange={(e) => { setText(e.target.value) }} placeholder='e.g. Led a team of 10 members' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>

                <div className='flex items-center cursor-pointer' onClick={() => addPoint(text)}>
                  <MdAddTask color="#3983fa" size={30} />
                </div>

              </div>

              {
                bulletPoints.map(
                  (bulletPoint) => {

                    return <BulletPoint key={bulletPoint.id} {...bulletPoint} deletePoint={deletePoint}></BulletPoint>
                  }
                )
              }
            </div>

          </label>



        </div>

      </div>

    </div>
  )
}

export default Projects