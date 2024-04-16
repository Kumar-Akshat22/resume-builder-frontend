import React, { useEffect, useState } from "react";
import Save from "./Save";

function Education({ updateResumeDetails }) {
  
  const [educations, setEducations] = useState([]);

  const [isEndDateDisabled, setIsEndDateDisabled] = useState(false);

  const [educationDetails, setEducationDetails] = useState({
    schoolName: "",
    city: "",
    degree: "",
    fieldOfStudy: "",
    grade: "",
    marks: "",
    startDate:{
      month:'',
      year:'',
    },
    endDate:{

      month:'',
      year:'',
    },

  });
  
  const handleCheckBoxChange = () => {
        
    setIsEndDateDisabled(!isEndDateDisabled);

  }

  const handleChange = (event) => {

    const { name, value } = event.target;

    setEducationDetails({ ...educationDetails, [name]: value});
  }

  const handleStartDate = (event)=>{

    const {name , value} = event.target;

    setEducationDetails({...educationDetails , startDate:{...educationDetails.startDate , [name]:value}});

  }

  const handleEndDate = (event) => {

    const {name , value} = event.target;

    if(isEndDateDisabled){

      setEducationDetails({...educationDetails , endDate:{month:'' , year:''}});
    }

    else{
      
      setEducationDetails({...educationDetails , endDate:{...educationDetails.endDate , [name]:value}});
    }
  }

  const addEducation = () => {

    setEducations([...educations , {educationDetails}])

  }

  const saveDetails = () => {
    updateResumeDetails("educationDetails", educations);
  }

  console.log("Printing the Education Array:", educations);

  return (
    <div className="w-full p-5 mt-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="w-full flex justify-between items-center">
          <div className="mb-4">
            <p className="uppercase text-xl">Education</p>
            <span className="text-sm">
              Add information about your educational background.
            </span>
          </div>

          <Save saveDetails={saveDetails} />
        </div>

        <div className="flex flex-col gap-5">
          {/* School Name and City */}
          <div className="flex gap-5 align-items-center justify-center">
            <label className="w-[50%]">
              <span className="">School Name</span>
              <input
                type="text"
                name="schoolName"
                value={educationDetails.schoolName}
                onChange={handleChange}
                placeholder="e.g. John"
                className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1"
              ></input>
            </label>

            <label className="w-[50%]">
              <span>City</span>
              <input
                type="text"
                name="city"
                value={educationDetails.city}
                onChange={handleChange}
                placeholder="e.g. Williams"
                className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
              ></input>
            </label>
          </div>

          {/* Degree & Field of Study */}
          <div className="flex gap-5 align-items-center justify-center">
            <label className="w-[50%]">
              <span className="">Degree</span>
              <select
                className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                name="degree"
                onChange={handleChange}
                value={educationDetails.degree}
              >
                <option value="">Select a Degree</option>
                <option value="Class XII">Class XII</option>
                <option value="Class X">Class X</option>
                <option value="Diploma">Diploma</option>
                <option value="B.A.">B.A.</option>
                <option value="B.Tech">B.Tech</option>
                <option value="BSc">BSc</option>
                <option value="BBA">BBA</option>
                <option value="M.A.">M.A.</option>
                <option value="M.B.A">M.B.A</option>
                <option value="Ph.D.">Ph.D.</option>
              </select>
            </label>

            <label className="w-[50%]">
              <span>Field of Study</span>
              <input
                type="text"
                placeholder="e.g. Williams"
                name="fieldOfStudy"
                value={educationDetails.fieldOfStudy}
                onChange={handleChange}
                className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
              ></input>
            </label>
          </div>

          {/* Grade & Value */}
          <div className="flex gap-5 align-items-center justify-center">
            <label className="w-[50%]">
              <span className="">Grade</span>
              <select
                className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
                name="grade"
                value={educationDetails.grade}
                onChange={handleChange}
              >
                <option value="">Select type of Grade</option>
                <option value="Percentage">Percentage</option>
                <option value="CGPA">CGPA</option>
              </select>
            </label>

            <label className="w-[50%]">
              <span>Marks</span>
              <input
                type="text"
                placeholder="e.g. Williams"
                name="marks"
                value={educationDetails.marks}
                onChange={handleChange}
                className="w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1"
              ></input>
            </label>
          </div>

          <div>
            {/* Start Date, End Date, checkbox  */}
            <div className="flex gap-5 align-items-center justify-center">
              <label className="w-[50%]">

                <span className="">Start Date</span>

                {/* Start Date */}
                <div className="flex gap-3">


                  {/* Month Option  */}
                  <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='month' onChange={handleStartDate} value={educationDetails.startDate.month}>
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
                  <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='year' onChange={handleStartDate} value={educationDetails.startDate.year}>
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
                  <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='month' onChange={handleEndDate} value={educationDetails.endDate.month} disabled={isEndDateDisabled}>
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
                  <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='year' onChange={handleEndDate} value={educationDetails.endDate.year} disabled={isEndDateDisabled}>
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

          <div className="flex gap-2">
            <div className="cursor-pointer mt-4">
              <button
                className="bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={addEducation}
              >
                Add Education
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
