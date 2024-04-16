import React, { useEffect, useState } from 'react'
import DateSelection from "./DateSelection";


function EducationForm( { addEducations } ) {

    const [educationForm , setEducationForm] = useState({

        schoolName:'',
        city:'',
        degree:'',
        fieldOfStudy:'',
        grade:'',
        marks:'',
    });

    function handleChange(event){
        const {name, value} = event.target;

        setEducationForm({...educationForm , [name]: value});


    }

    function addDate(key, value){

        setEducationForm({...educationForm , [key] : value});
    }

    function saveEducation(){

        addEducations(educationForm);
    }

    useEffect(()=>{

        console.log(educationForm);


    }, [educationForm])

    return (
        <div className="flex flex-col gap-5">

            {/* School Name and City */}
            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">
                    <span className="">School Name</span>
                    <input
                        type="text" name='schoolName' value={educationForm.schoolName} onChange={handleChange}
                        placeholder="e.g. John"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1"
                    ></input>
                </label>

                <label className="w-[50%]">
                    <span>City</span>
                    <input
                        type="text" name='city' value={educationForm.city} onChange={handleChange}
                        placeholder="e.g. Williams"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                    ></input>
                </label>
            </div>

            {/* Degree & Field of Study */}
            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">

                    <span className="">Degree</span>
                    <select className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='degree' onChange={handleChange} value={educationForm.degree}>
                        <option value=''>Select a Degree</option>
                        <option value='Class XII'>Class XII</option>
                        <option value='Class X'>Class X</option>
                        <option value='Diploma'>Diploma</option>
                        <option value='B.A.'>B.A.</option>
                        <option value='B.Tech'>B.Tech</option>
                        <option value='BSc'>BSc</option>
                        <option value='BBA'>BBA</option>
                        <option value='M.A.'>M.A.</option>
                        <option value='M.B.A'>M.B.A</option>
                        <option value='Ph.D.'>Ph.D.</option>
                    </select>
                </label>

                <label className="w-[50%]">
                    <span>Field of Study</span>
                    <input
                        type="text"
                        placeholder="e.g. Williams" name='fieldOfStudy' value={educationForm.fieldOfStudy} onChange={handleChange}
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                    ></input>
                </label>
            </div>

            {/* Grade & Value */}
            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">

                    <span className="">Grade</span>
                    <select className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='grade' value={educationForm.grade} onChange={handleChange}>
                        <option value=''>Select type of Grade</option>
                        <option value='Percentage'>Percentage</option>
                        <option value='CGPA'>CGPA</option>

                    </select>
                </label>

                <label className="w-[50%]">
                    <span>Marks</span>
                    <input
                        type="text"
                        placeholder="e.g. Williams" name='marks' value={educationForm.marks} onChange={handleChange}
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                    ></input>
                </label>
            </div>

            {/* Date Selection Component */}
            <DateSelection addDate={addDate}/>

            <div className='flex gap-2'>

                <div className='cursor-pointer'>
                    <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={saveEducation}>Save Education</button>
                </div>

                
            </div>

        </div>
    )
}

export default EducationForm