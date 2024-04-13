import React from 'react'
import DateSelection from "./DateSelection";

function EducationForm( { currentIndex, updateResumeDetails } ) {
    return (
        <div className="flex flex-col gap-5">

            {/* School Name and City */}
            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">
                    <span className="">School Name</span>
                    <input
                        type="text"
                        placeholder="e.g. John"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1"
                    ></input>
                </label>

                <label className="w-[50%]">
                    <span>City</span>
                    <input
                        type="text"
                        placeholder="e.g. Williams"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                    ></input>
                </label>
            </div>

            {/* Degree & Field of Study */}

            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">

                    <span className="">Degree</span>
                    <select className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1">
                        <option>Select a Degree</option>
                        <option>Class XII</option>
                        <option>Class X</option>
                        <option>Diploma</option>
                        <option>B.A.</option>
                        <option>B.Tech</option>
                        <option>BSc</option>
                        <option>BBA</option>
                        <option>M.A.</option>
                        <option>M.B.A</option>
                        <option>Ph.D.</option>
                    </select>
                </label>

                <label className="w-[50%]">
                    <span>Field of Study</span>
                    <input
                        type="text"
                        placeholder="e.g. Williams"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                    ></input>
                </label>
            </div>

            {/* Grade & Value */}
            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">

                    <span className="">Grade</span>
                    <select className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1">
                        <option>Select type of Grade</option>
                        <option>Percentage</option>
                        <option>CGPA</option>

                    </select>
                </label>

                <label className="w-[50%]">
                    <span>Marks</span>
                    <input
                        type="text"
                        placeholder="e.g. Williams"
                        className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                    ></input>
                </label>
            </div>

            {/* Date Selection Component */}
            <DateSelection />

        </div>
    )
}

export default EducationForm