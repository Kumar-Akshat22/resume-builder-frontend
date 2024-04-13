import React from 'react'

function Save({saveDetails}) {
  return (
    <div>
            <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={saveDetails}>Save</button>
    </div>
  )
}

export default Save