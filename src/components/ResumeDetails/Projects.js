import React, { useEffect, useState } from 'react'
import BulletPoint from './BulletPoint';
import { MdAddTask } from "react-icons/md";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
import Save from './Save';

function Projects({ updateResumeDetails }) {

  const [projects, setProjects] = useState([]);

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    shortDescription: "",
    liveLink: "",
    githubLink: "",

    projectDescription: []

  });

  const resetFields = () => {

    setProjectDetails({
      title: "",
      shortDescription: "",
      liveLink: "",
      githubLink: "",

      projectDescription: []
    })
  }

  const [editingMode, setEditingMode] = useState(false);
  const [selectedProjectID, setSelectedProjectID] = useState(null);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setProjectDetails({ ...projectDetails, [name]: value });
  }

  const addProject = () => {

    if (projectDetails.title && projectDetails.shortDescription) {

      setProjects([...projects, { id: Date.now(), data: projectDetails }])
      resetFields();
      toast.success('Project added');

    } else {

      toast.error('Please fill out some details')
    }

  }

  const deleteProject = (id) => {

    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
    toast.success('Project removed successfully');
    console.log('Delete Icon is Clicked');
  }

  const editProject = (id) => {

    const projectToEdit = projects.find((project) => project.id === id);

    setProjectDetails(projectToEdit.data);
    setEditingMode(true);
    setSelectedProjectID(id);
    console.log('Editing Mode turned ON');


  }

  const updateProject = () => {

    console.log(`Updating the Project with the ID:${selectedProjectID}`);

    if (selectedProjectID !== null) {

      const updatedProjects = projects.map((project) => {

        if (project.id === selectedProjectID) {

          return { ...project, data: projectDetails }
        }

        return project;
      })

      setProjects(updatedProjects);
      resetFields();
      setEditingMode(false);
      setSelectedProjectID(null);
      toast.success('Deatils updated successfully');
    }

  }

  const saveDetails = () => {

    updateResumeDetails("projects", projects);
    toast.success('Education Details successfully saved')
  }

  // To handle the input text of the field
  const [text, setText] = useState('');

  console.log(text);


  // To add Bullet Points
  const addPoint = (text) => {

    const newPoint = {

      id: Date.now(),
      text,
    }

    setProjectDetails({ ...projectDetails, projectDescription: [...projectDetails.projectDescription, newPoint] });
    setText('');

  }

  // Function to delete a point
  function deletePoint(id) {

    const newProjectPoints = projectDetails.projectDescription.filter(point => point.id !== id);
    setProjectDetails({ ...projectDetails, projectDescription: [...newProjectPoints] });

  }

  console.log('Printing the Projects Array', projects)


  return (
    <div className='w-full p-5 mt-6'>

      <div className='max-w-[1140px] mx-auto font-openSans'>

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
              <input type='text' name='title' value={projectDetails.title} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
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
              <input type='text' name='liveLink' value={projectDetails.liveLink} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
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
                  (point, index) => {

                    return <BulletPoint key={index} {...point} deletePoint={deletePoint}></BulletPoint>
                  }
                )
              }
            </div>

          </label>

          {
            editingMode
              ?
              <div className='mt-5'>
                <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={updateProject}>Update Project</button>
              </div>
              :
              <div className='mt-5'>
                <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={addProject}>Add Project</button>
              </div>
          }

          {
            projects.length > 0
            &&
            (<div className='w-full mt-5 flex flex-col gap-5'>
              {
                projects.map((project) => (

                  <div key={project.id} className='w-full p-5 border rounded-[14px] flex flex-col gap-5 transition-all duration-300 hover:shadow-md'>
                    <div className='w-full flex items-center justify-between'>
                      <div>
                        <h1 className='font-openSans font-semibold text-lg'>{project.data?.title + " - " + project.data?.shortDescription}</h1>

                        {
                          project.data.projectDescription
                            ?
                            <div>
                              <ul className='list-disc font-openSans'>
                                {project.data.projectDescription.map((desc) => (
                                  <li className='ml-5 mt-0' key={desc.id}>{desc.text}</li>

                                ))
                                }
                              </ul>
                            </div>
                            :
                            ''
                        }

                      </div>

                      <div className='flex flex-col gap-2 items-center'>

                        <div className='flex gap-3'>
                          <a href={`${project.data?.liveLink}`} className='text-green-500'>Live Link</a>
                          <a href={`${project.data?.githubLink}`} className='text-yellow-500'>Github</a>
                        </div>

                        <div className='flex justify-start gap-5' >
                          <MdEdit size={19} className='cursor-pointer text-[#d2d2d2] hover:text-green-500 transition-all duration-200' onClick={() => editProject(project.id)} disabled={editingMode} />
                          <MdDelete size={19} className='cursor-pointer text-[#d2d2d2] hover:text-red-500 transition-all duration-200' onClick={() => deleteProject(project.id)} disabled={editingMode} />
                        </div>
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>)


          }

        </div>

      </div>

    </div>
  )
}

export default Projects