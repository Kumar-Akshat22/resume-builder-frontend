import React, { useEffect, useState } from 'react'
import BulletPoint from './BulletPoint';
import { MdAddTask } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import Save from './Save';

function Experience({updateResumeDetails}) {

    // To populate the bullet points data that can be mapped to a bullet point
    const [bulletPoints , setBulletPoints] = useState(()=>{

        const savedPoints = localStorage.getItem('experienceBulletPoints');

        if(savedPoints){
            
            return JSON.parse(savedPoints);

        } else{

            return [];
        }
    });

    // To handle the input text of the field
    const [text, setText] = useState('');

    // To add Bullet Points
    function addPoint(text){

        const newPoint = {

            id: Date.now(),
            text,
        }

        setBulletPoints([...bulletPoints , newPoint]);
        setText('');

    }   

    // Function to delete a point
    function deletePoint(id){

        const newBulletPoints = bulletPoints.filter(bulletPoint => bulletPoint.id !== id);
        setBulletPoints(newBulletPoints);

    }

    // Function to update or edit a bullet point 
    function updatePoint(id,text){

        const targetPoint = bulletPoints.filter(bulletPoint=> bulletPoint.id === id);

        targetPoint.text = text;

        setBulletPoints([...bulletPoints , targetPoint]);

    }

    // useEffect hook 
    useEffect(()=>{

        localStorage.setItem("experienceBulletPoints" , JSON.stringify(bulletPoints));
        
    },[bulletPoints]);

    return (
        <div className='w-full p-5 mt-6'>

            <div className='max-w-[1140px] mx-auto'>
                
                <div className='w-full flex justify-between'>

                    <div className='mb-4'>
                        <p className='uppercase text-xl'>Experience</p>
                        <span className='text-sm'>List your work experience, most recent first</span>
                    </div>
                    

                    <div className="flex items-center gap-2">

                    <div className='cursor-pointer'>
                        <IoAddCircleOutline size={20}/>
                    </div>

                    <Save />
                    </div>
                </div>

                <div className='flex flex-col gap-5'>

                    <div>
                        <h1>Job {}</h1>
                    </div>
                    {/* Company Name and Job Title */}
                    <div className='flex gap-5 align-items-center justify-center'>
                        <label className='w-[50%]'>
                            <span className=''>Employer</span>
                            <input type='text' placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] text-slate-400 mt-1'></input>
                        </label>

                        <label className='w-[50%]'>
                            <span>Job Title</span>
                            <input type='text' placeholder='e.g. Williams' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
                        </label>
                    </div>

                    {/* Date Selection Component */}
                    
                    

                    {/* Bullet Points */}

                    <label>

                        <span>Bullet Points <span className='text-sm'>(Add max 4 points)</span></span>

                        <div className='flex flex-col gap-6'>
                                
                            <div className='w-full flex align-items-center gap-5'> 
                                
                                <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='e.g. Led a team of 10 members' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>

                                <div className='flex items-center cursor-pointer' onClick={() => addPoint(text)}>
                                    <MdAddTask color="#3983fa" size={30}/>
                                </div>
                    
                            </div>
                                
                                {
                                    bulletPoints.map(
                                        (bulletPoint) => {

                                            return <BulletPoint key={bulletPoint.id} {...bulletPoint}  deletePoint={deletePoint} updatePoint={updatePoint}></BulletPoint>
                                        }
                                    )
                                }
                        </div>
                    
                    </label>
                    

                </div>

            </div>

        </div>
    )
}

export default Experience