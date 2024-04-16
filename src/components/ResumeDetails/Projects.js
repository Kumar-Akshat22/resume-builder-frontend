import React, { useEffect, useState } from 'react'
import BulletPoint from './BulletPoint';
import { MdAddTask } from "react-icons/md";
import Save from './Save';

function Projects({updateResumeDetails}) {

  const [projects , setProjects] = useState([]);

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    shortDescription: "",
    liveLink: "",
    githubLink: "",
    
    projectDescription:[]

  });

  const handleChange = (event) => {

    const { name, value } = event.target;

    setProjectDetails({ ...projectDetails, [name]: value});
  }

  const addProject = ()=>{
    setProjects([...projects, {projectDetails}])

  }

  const saveDetails = ()=>{

    updateResumeDetails("project", {projects});
  }

  // To populate the bullet points data that can be mapped to a bullet point
  const [bulletPoints, setBulletPoints] = useState([]);

  // To handle the input text of the field
  const [text, setText] = useState('');

  console.log(text);


  // To add Bullet Points
  function addPoint(text) {

    const newPoint = {

      id: Date.now(),
      text,
    }

    setProjectDetails({...projectDetails , projectDescription:[...projectDetails.projectDescription , newPoint]});
    setText('');

  }

  // Function to delete a point
  function deletePoint(id) {

    const newBulletPoints = bulletPoints.filter(bulletPoint => bulletPoint.id !== id);
    setBulletPoints(newBulletPoints);

  }

  console.log('Printing the Projects Array',projects)


  return (
    <div className='w-full p-5 mt-6'>

      <div className='max-w-[1140px] mx-auto'>

        <div className='w-full flex justify-between'>

          <div className='mb-4'>
            <p className='uppercase text-xl'>Projects</p>
            <span className='text-sm'>Add information about your Projects</span>
          </div>

          <Save saveDetails={saveDetails} />
          
        </div>


        <div className='flex flex-col gap-5'>


          {/* Project Name */}
          <div className='flex gap-5 align-items-center justify-center'>
            <label className='w-[50%]'>
              <span className=''>Name</span>
              <input type='text' name='title' value={projectDetails.title} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>Short Description</span>
              <input type='text' name='shortDescription' value={projectDetails.shortDescription} onChange={handleChange} placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
            </label>
          </div>

          {/* Project Links */}
          <div className='flex gap-5 align-items-center justify-center'>
            <label className='w-[50%]'>
              <span className=''>Live Link</span>
              <input type='text' name='liveLink' value={projectDetails.liveLink} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
            </label>

            <label className='w-[50%]'>
              <span>GitHub Link</span>
              <input type='text' name='githubLink' value={projectDetails.githubLink} onChange={handleChange} placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
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
                projectDetails.projectDescription.map(
                  (point , index) => {

                    return <BulletPoint key={index} {...point} deletePoint={deletePoint}></BulletPoint>
                  }
                )
              }
            </div>

          </label>

          <div className="cursor-pointer mt-4">
              <button
                className="bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={addProject}
              >
                Add Project
              </button>
            </div>   

        </div>

      </div>

    </div>
  )
}

export default Projects