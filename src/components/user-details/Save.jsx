import React from 'react'
import { IoIosSave } from "react-icons/io";

function Save({saveDetails}) {
  return (
    <div>
            <button className='flex items-center gap-2 bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={saveDetails}>
            Save
            <IoIosSave size={12}/>
            </button>
    </div>
  )
}

export default Save