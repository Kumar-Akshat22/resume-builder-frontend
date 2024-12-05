import React, { useEffect, useState } from 'react'
import BulletPoint from './BulletPoint';
import { MdAddTask } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Save from './Save';
import toast from 'react-hot-toast';
import { Tooltip } from '@mui/material';


function WorkExp({ updateResumeDetails }) {

    const [experiences, setExperiences] = useState([]);
    const [isEndDateDisabled, setIsEndDateDisabled] = useState(false);

    const [experienceDetails, setExperienceDetails] = useState({
        employer: "",
        jobTitle: "",
        startDate: {
            month: '',
            year: '',
        },
        endDate: {

            month: '',
            year: '',
        },

        contributions: []

    });

    const [editingMode, setEditingMode] = useState(false);

    const [selectedExperienceID , setSelectedExperienceID] = useState(null);

    const handleCheckBoxChange = () => {

        setIsEndDateDisabled(!isEndDateDisabled);

    }


    const handleChange = (event) => {

        const { name, value } = event.target;

        setExperienceDetails({ ...experienceDetails, [name]: value });
    }

    const handleStartDate = (event) => {

        const { name, value } = event.target;

        setExperienceDetails({ ...experienceDetails, startDate: { ...experienceDetails.startDate, [name]: value } });

    }

    const handleEndDate = (event) => {

        const { name, value } = event.target;

        setExperienceDetails({ ...experienceDetails, endDate: { ...experienceDetails.endDate, [name]: value } });
    }

    // To handle the input text of the field
    const [text, setText] = useState('');

    // To add Bullet Points
    function addPoint(text) {

        const newPoint = {

            id: Date.now(),
            text,
        }

        setExperienceDetails({ ...experienceDetails, contributions: [...experienceDetails.contributions, newPoint] });
        setText('');

    }

    // Function to delete a point
    function deletePoint(id) {

        const newContributions = experienceDetails.contributions.filter(contribution => contribution.id !== id);
        setExperienceDetails({ ...experienceDetails, contributions: [...newContributions] });

    }

    const addExperience = () => {

        console.log('Inside addExperience function')
        if(experienceDetails.employer && experienceDetails.jobTitle){

            setExperiences([...experiences, { id: Date.now(), data: experienceDetails }]);
            setExperienceDetails({
                employer: "",
                jobTitle: "",
                startDate: {
                    month: '',
                    year: '',
                },
                endDate: {
    
                    month: '',
                    year: '',
                },
    
                contributions: []
            });
            setIsEndDateDisabled(false);
            toast.success('Experience added successfully');

        } else{

            toast.error('Please fill out some details to continue');
        }

        

    }

    const deleteExperience = (id) => {

        const newExperience = experiences.filter((experience) => experience.id !== id);
        setExperiences(newExperience);
        toast.success('Experience removed successfully');
        console.log('Delete Icon is Clicked');


    }

    const editExperience = (id) => {

        const experienceToEdit = experiences.find((experience) => experience.id === id);

        setExperienceDetails(experienceToEdit.data);
        setEditingMode(true);
        setSelectedExperienceID(id);
        console.log('Editing Mode turned ON');
    }

    const updateExperience = ()=>{

        console.log('Inside updateExperience method');
        console.log(`Updating the experience with the ID:${selectedExperienceID}`);

        if(selectedExperienceID !== null){

            const updatedExperiences = experiences.map((experience)=> {

                if(experience.id === selectedExperienceID){

                    return {...experience , data:experienceDetails}
                }

                return experience;
            })

            setExperiences(updatedExperiences);
            setExperienceDetails({
                employer: "",
                jobTitle: "",
                startDate: {
                    month: '',
                    year: '',
                },
                endDate: {
    
                    month: '',
                    year: '',
                },
    
                contributions: []
            });
            setIsEndDateDisabled(false);
            setEditingMode(false);
            setSelectedExperienceID(null)
            toast.success('Deatils updated successfully');
        }

    }

    const saveDetails = () => {

            updateResumeDetails("experience", experiences);
            toast.success('Experience Details successfully saved')
        
        
    }


    console.log('Printing the Experiences array:', experiences);

    // console.log('Before clicking the Delete Icon Printing the Experiences Array:', experiences);

    return (
        <div className='w-full p-5 mt-6'>

            <div className='max-w-[1140px] mx-auto'>

                <div className='w-full flex justify-between mb-5'>

                        <span className='text-xl'>List your work experience, most recent first</span>


                    <Save saveDetails={saveDetails} />

                </div>

                <div className='flex flex-col gap-5 mt-3'>

                    {/* Company Name and Job Title */}
                    <div className='flex gap-5 align-items-center justify-center'>
                        <label className='w-[50%]'>
                            <span className='text-[17px] font-medium'>Employer</span>
                            <input type='text' name='employer' value={experienceDetails.employer} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
                        </label>

                        <label className='w-[50%]'>
                            <span className='text-[17px] font-medium'>Job Title</span>
                            <input type='text' name='jobTitle' value={experienceDetails.jobTitle} onChange={handleChange} placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
                        </label>
                    </div>

                    {/* Date Selection Component */}

                    <div>
                        {/* Start Date, End Date, checkbox  */}
                        <div className="flex gap-5 align-items-center justify-center">
                            <label className="w-[50%]">

                                <span className="text-[17px] font-medium">Start Date</span>

                                {/* Start Date */}
                                <div className="flex gap-3">


                                    {/* Month Option  */}
                                    <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='month' onChange={handleStartDate} value={experienceDetails.startDate.month}>
                                        <option value=''>Month</option>
                                        <option value='January'>January</option>
                                        <option value='February'>February</option>
                                        <option value='March'>March</option>
                                        <option value='April'>April</option>
                                        <option value='May'>May</option>
                                        <option value='June'>June </option>
                                        <option value='July'>July</option>
                                        <option value='August'>August</option>
                                        <option value='September'>September</option>
                                        <option value='October'>October</option>
                                        <option value='November'>November</option>
                                        <option value='December'>December</option>
                                    </select>

                                    {/* Year Option */}
                                    <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='year' onChange={handleStartDate} value={experienceDetails.startDate.year}>
                                        <option value=''>Year</option>
                                        <option value='24'>2024</option>
                                        <option value='23'>2023</option>
                                        <option value='22'>2022</option>
                                        <option value='21'>2021</option>
                                        <option value='20'>2020</option>
                                        <option value='19'>2019 </option>
                                        <option value='18'>2018</option>
                                        <option value='17'>2017</option>
                                        <option value='16'>2016</option>
                                        <option value='15'>2015</option>
                                        <option value='14'>2014</option>
                                        <option value='13'>2013</option>
                                    </select>

                                </div>
                            </label>

                            {/* End Date */}
                            <label className="w-[50%]">
                                <span className='text-[17px] font-medium'>End Date</span>
                                <div className="flex gap-3">


                                    {/* Month Option  */}
                                    <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='month' onChange={handleEndDate} value={experienceDetails.endDate.month} disabled={isEndDateDisabled}>
                                        <option value=''>Month</option>
                                        <option value='January'>January</option>
                                        <option value='February'>February</option>
                                        <option value='March'>March</option>
                                        <option value='April'>April</option>
                                        <option value='May'>May</option>
                                        <option value='June'>June </option>
                                        <option value='July'>July</option>
                                        <option value='August'>August</option>
                                        <option value='September'>September</option>
                                        <option value='October'>October</option>
                                        <option value='November'>November</option>
                                        <option value='December'>December</option>
                                    </select>

                                    {/* Year Option */}
                                    <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='year' onChange={handleEndDate} value={experienceDetails.endDate.year} disabled={isEndDateDisabled}>
                                        <option value=''>Year</option>
                                        <option value='24'>2024</option>
                                        <option value='23'>2023</option>
                                        <option value='22'>2022</option>
                                        <option value='21'>2021</option>
                                        <option value='20'>2020</option>
                                        <option value='19'>2019 </option>
                                        <option value='18'>2018</option>
                                        <option value='17'>2017</option>
                                        <option value='16'>2016</option>
                                        <option value='15'>2015</option>
                                        <option value='14'>2014</option>
                                        <option value='13'>2013</option>
                                    </select>

                                </div>
                            </label>

                        </div>

                        {/* Checkbox */}
                        <label className="flex items-center gap-2 mt-4">

                            <input type="checkbox" checked={isEndDateDisabled} onChange={handleCheckBoxChange}></input>
                            <span >I presently attend here</span>
                        </label>
                    </div>



                    {/* Bullet Points */}

                    <label>

                        <span>Bullet Points <span className='text-sm'>(Add max 4 points)</span></span>

                        <div className='flex flex-col gap-6'>

                            <div className='w-full flex align-items-center gap-5'>

                                <input type='text' value={text} onChange={(e) => { setText(e.target.value) }} placeholder='e.g. Led a team of 10 members' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>

                                <Tooltip title="Add point" arrow placement='top' className='text-lg'>
                                <div className='flex items-center cursor-pointer' onClick={() => addPoint(text)}>
                                    
                                    <MdAddTask color="#3983fa" size={30} />
                                    
                                </div>
                                </Tooltip>
                            </div>

                            {
                                experienceDetails.contributions.map(
                                    (contribution, index) => {

                                        return <BulletPoint key={index} {...contribution} deletePoint={deletePoint}></BulletPoint>
                                    }
                                )
                            }
                        </div>

                    </label>

                    {
                        editingMode
                            ? <div className="cursor-pointer mt-4">
                                <button
                                    className="bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200" onClick={updateExperience}>
                                    Update Experience
                                </button>
                            </div>
                            :
                            <div className="cursor-pointer mt-4">
                                <button
                                    className="bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200" onClick={addExperience}>
                                    Add Experience
                                </button>
                            </div>
                    }


                </div>


                {
                    experiences.length > 0
                        &&
                        (<div className='w-full mt-8 flex flex-col gap-5'>
                            {
                                experiences.map((experience) => (

                                    <div key={experience.id} className='w-full p-5 border rounded-[14px] flex flex-col gap-5 transition-all duration-300 hover:shadow-md'>
                                        <div className='w-full flex items-center justify-between'>
                                            <div>
                                                <h1 className='font-openSans font-semibold text-lg'>{experience.data?.employer}</h1>
                                                <p className='font-openSans font-normal'>{experience.data?.jobTitle}</p>

                                            </div>

                                            <div className='flex flex-col gap-2'>


                                                <p className='font-openSans'>
                                                    {experience.data.startDate?.month}
                                                    '
                                                    {experience.data.startDate?.year} -
                                                    {
                                                        (experience.data.endDate?.month && experience.data.endDate?.year) === ''
                                                            ?
                                                            ' Present '
                                                            :
                                                            ` ${experience.data.endDate?.month}'${experience.data.endDate?.year} `

                                                    }
                                                </p>
                                                <div className='flex justify-start gap-5' >
                                                    <MdEdit size={19} className='cursor-pointer text-[#d2d2d2] hover:text-green-500 transition-all duration-200' onClick={()=> editExperience(experience.id)} disabled={editingMode}/>
                                                    <MdDelete size={19} className='cursor-pointer text-[#d2d2d2] hover:text-red-500 transition-all duration-200' onClick={() => deleteExperience(experience.id)} disabled={editingMode}/>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            experience.data.contributions
                                                ?
                                                <div>
                                                    <ul className='list-disc font-openSans'>
                                                        {experience.data.contributions.map((contribution) => (
                                                            <li className='ml-5 mt-0' key={contribution.id}>{contribution.text}</li>

                                                        ))
                                                        }
                                                    </ul>
                                                </div>
                                                :
                                                ''
                                        }

                                    </div>
                                ))
                            }
                        </div>)

                        
                }

            </div>

        </div>
    )
}

export default WorkExp