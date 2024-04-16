import React, { useEffect, useState } from 'react'
import BulletPoint from './BulletPoint';
import { MdAddTask } from "react-icons/md";
import Save from './Save';

function Experience({ updateResumeDetails }) {

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

        contributions:[]

    });

    const handleCheckBoxChange = () => {
        
        setIsEndDateDisabled(!isEndDateDisabled);
    
    }
    

    const handleChange = (event) => {

        const { name, value } = event.target;
    
        setExperienceDetails({ ...experienceDetails, [name]: value});
    }

    const handleStartDate = (event)=>{

        const {name , value} = event.target;
    
        setExperienceDetails({...experienceDetails , startDate:{...experienceDetails.startDate , [name]:value}});
    
    }

    const handleEndDate = (event) => {

        const {name , value} = event.target;

        setExperienceDetails({...experienceDetails , endDate:{...experienceDetails.endDate , [name]:value}});
    }

    // To handle the input text of the field
    const [text, setText] = useState('');

    // To add Bullet Points
    function addPoint(text) {

        const newPoint = {

            id: Date.now(),
            text,
        }

        setExperienceDetails({...experienceDetails , contributions:[...experienceDetails.contributions , newPoint]});
        setText('');

    }

    // Function to delete a point
    function deletePoint(id) {

        const newContributions = experienceDetails.contributions.filter(contribution => contribution.id !== id);
        setExperienceDetails({...experienceDetails , contributions:[...experienceDetails.contributions , newContributions]});

    }

    const addExperience = () => {
        setExperiences([...experiences, {experienceDetails}])

    }

    const saveDetails = () => {
        updateResumeDetails("experience", experiences);
    }

    // console.log('Printing the Experiences Array:',experiences);

    return (
        <div className='w-full p-5 mt-6'>

            <div className='max-w-[1140px] mx-auto'>

                <div className='w-full flex justify-between'>

                    <div className='mb-4'>
                        <p className='uppercase text-xl'>Experience</p>
                        <span className='text-sm'>List your work experience, most recent first</span>
                    </div>

                    <Save saveDetails={saveDetails}/>

                </div>

                <div className='flex flex-col gap-5'>

                    {/* Company Name and Job Title */}
                    <div className='flex gap-5 align-items-center justify-center'>
                        <label className='w-[50%]'>
                            <span className=''>Employer</span>
                            <input type='text' name='employer' value={experienceDetails.employer} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                        </label>

                        <label className='w-[50%]'>
                            <span>Job Title</span>
                            <input type='text' name='jobTitle' value={experienceDetails.jobTitle} onChange={handleChange} placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
                        </label>
                    </div>

                    {/* Date Selection Component */}

                    <div>
                        {/* Start Date, End Date, checkbox  */}
                        <div className="flex gap-5 align-items-center justify-center">
                            <label className="w-[50%]">

                                <span className="">Start Date</span>

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
                                <span>End Date</span>
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

                                <div className='flex items-center cursor-pointer' onClick={() => addPoint(text)}>
                                    <MdAddTask color="#3983fa" size={30} />
                                </div>

                            </div>

                            {
                                experienceDetails.contributions.map(
                                    (contribution , index) => {

                                        return <BulletPoint key={index} {...contribution} deletePoint={deletePoint}></BulletPoint>
                                    }
                                )
                            }
                        </div>

                    </label>

                    <div className="cursor-pointer mt-4">
                        <button
                            className="bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200" onClick={addExperience}>
                            Add Experience
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Experience