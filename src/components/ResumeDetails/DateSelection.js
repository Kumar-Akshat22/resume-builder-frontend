import React, { useState } from 'react'


function DateSelection() {

    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    return (
        <div>
            {/* Start Date, End Date, checkbox  */}
            <div className="flex gap-5 align-items-center justify-center">
                <label className="w-[50%]">

                    <span className="">Start Date</span>

                    {/* Start Date */}
                    <div className="flex gap-3">


                        {/* Month Option  */}
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1">
                            <option>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June </option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>

                        {/* Year Option */}
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1">
                            <option>Year</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019 </option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                        </select>

                    </div>
                </label>

                {/* End Date */}
                <label className="w-[50%]">
                    <span>End Date</span>
                    <div className="flex gap-3">


                        {/* Month Option  */}
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" disabled={currentlyWorking}>
                            <option>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June </option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>

                        {/* Year Option */}
                        <select className="w-[50%] focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1" disabled={currentlyWorking}>
                            <option>Year</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019 </option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                        </select>

                    </div>
                </label>

            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 mt-4">

                <input type="checkbox" checked={currentlyWorking} onClick={() => setCurrentlyWorking(!currentlyWorking)}></input>
                <span >I presently attend here</span>
            </label>
        </div>
    )
}

export default DateSelection