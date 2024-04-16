import React, { useEffect, useState } from 'react'


function DateSelection({addDate}) {

    const [isEndDateDisabled, setIsEndDateDisabled] = useState(false);

    const [dateForm , setDateForm] = useState({

        startDate:{
            month:'',
            year:'',

        },

        endDate:{

            month:'',
            year:'',
        },

    })

    function handleCheckBoxChange(){
        
        setIsEndDateDisabled(!isEndDateDisabled);


    }

    function handleStartDateChange(event){

        const {name , value} = event.target;

        setDateForm({...dateForm , startDate:{...dateForm.startDate , [name] : value}});

    }

    function handleEndDateChange(event){

        const {name , value} = event.target;

        if(isEndDateDisabled){

            setDateForm({...dateForm , endDate:{...dateForm.endDate}});
        }

        setDateForm({...dateForm , endDate:{...dateForm.endDate , [name] : value}});


    }
    
    addDate('duration' , dateForm);
    useEffect(()=>{

        console.log(dateForm);

    } , [dateForm])

    return (
        <div>
            {/* Start Date, End Date, checkbox  */}
            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">

                    <span className="">Start Date</span>

                    {/* Start Date */}
                    <div className="flex gap-3">


                        {/* Month Option  */}
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='month' onChange={handleStartDateChange} value={dateForm.startDate.month}>
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
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='year' onChange={handleStartDateChange} value={dateForm.startDate.year}>
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
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='month' onChange={handleEndDateChange} value={dateForm.endDate.month} disabled={isEndDateDisabled}>
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
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" name='year' onChange={handleEndDateChange} value={dateForm.endDate.year} disabled={isEndDateDisabled}>
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
    )
}

export default DateSelection