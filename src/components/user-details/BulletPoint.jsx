import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


function BulletPoint( { id, text , deletePoint } ) {

    const [pointInputText , setPointInputText] = useState(text);
 
  return (
    <div className='flex items-center gap-5'>
        
        <input type='text' value={pointInputText} onChange={(e)=>{setPointInputText(e.target.value)}} placeholder='e.g. Led a team of 10 members' className='w-full border p-[8px] rounded-[0.2rem] mt-1'></input>
        
        <div className='cursor-pointer'>
            <MdEdit />
        </div>
        <div className='cursor-pointer' onClick={()=>deletePoint(id)}>
            <MdDelete color='red' size={20}/>
        </div>

    </div>
  )
}

export default BulletPoint