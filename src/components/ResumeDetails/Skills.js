import React, { useState, useEffect } from 'react'
import BulletPoint from './BulletPoint'
import { MdAddTask } from "react-icons/md";
import Save from './Save';

function Skills( {updateResumeDetails} ) {

    const [skillFormDetails , setSkillFormDetails] = useState({});

    const [skillType , setSkillType] = useState('');

    // To populate the bullet points data that can be mapped to a bullet point
    const [bulletPoints, setBulletPoints] = useState(() => {

        const savedPoints = localStorage.getItem('skillsBulletPoints');

        if (savedPoints) {

            return JSON.parse(savedPoints);

        } else {

            return [];
        }
    });

    // To handle the input text of the field
    const [text, setText] = useState('');

    console.log(text);


    // To add Bullet Points
    function addPoint(text) {

        const newPoint = {

            id: Date.now(),
            text,
        }

        setBulletPoints([...bulletPoints, newPoint]);
        setText('');

    }

    // Function to delete a point
    function deletePoint(id) {

        const newBulletPoints = bulletPoints.filter(bulletPoint => bulletPoint.id !== id);
        setBulletPoints(newBulletPoints);

    }

    // Function to update or edit a bullet point 
    function updatePoint(id, text) {

        const targetPoint = bulletPoints.filter(bulletPoint => bulletPoint.id === id);

        targetPoint.text = text;

        setBulletPoints([...bulletPoints, targetPoint]);

    }

    const saveDetails = ()=>{
        

        updateResumeDetails('skills' , bulletPoints)

    }

    // useEffect hook 
    useEffect(() => {

        localStorage.setItem("skillsBulletPoints", JSON.stringify(bulletPoints));
        console.log(bulletPoints);

    }, [bulletPoints]);



    return (
        <div className="w-full p-5 mt-6">
            <div className='max-w-[1140px] mx-auto'>
                <div className='w-full flex justify-between items-center'>

                    <div className='mb-4'>
                        <p className='uppercase text-xl'>Skills</p>
                        <span className='text-sm'>Highlight 6-8 of your top skills.</span>
                    </div>
                    
                        <Save saveDetails={saveDetails}/>



                


                </div>

                <label>



                    <div className='flex flex-col gap-6'>

                        <div className='w-full flex align-items-center gap-5'>

                            <input type='text' value={text} onChange={(e) => { setText(e.target.value) }} placeholder='e.g. React' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>

                            <div className='flex items-center cursor-pointer' onClick={() => addPoint(text)}>
                                <MdAddTask color="#3983fa" size={30} />
                            </div>

                        </div>

                        {
                            bulletPoints.map(
                                (bulletPoint) => {

                                    return <BulletPoint key={bulletPoint.id} {...bulletPoint} deletePoint={deletePoint} updatePoint={updatePoint}></BulletPoint>
                                }
                            )
                        }
                    </div>

                </label>



            </div>
        </div>
    )
}

export default Skills