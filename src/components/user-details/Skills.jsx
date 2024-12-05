import React, { useState, useEffect } from 'react'
import BulletPoint from './BulletPoint'
import { MdAddTask } from "react-icons/md";
import Save from './Save';
import toast from 'react-hot-toast'

function Skills({ updateResumeDetails }) {

    

    // To populate the bullet points data that can be mapped to a bullet point
    const [bulletPoints, setBulletPoints] = useState([]);

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

    const saveDetails = () => {

            updateResumeDetails('skills', bulletPoints);

            toast.success('Skills saved successfully');
        
    }

    // useEffect hook 
    useEffect(() => {

        console.log(bulletPoints);

    }, [bulletPoints]);



    return (
        <div className="w-full p-5 mt-6">
            <div className='max-w-[1140px] flex flex-col mx-auto'>
                <div className='w-full flex justify-between items-center mb-5'>

                        <span className='text-xl'>Highlight 6-8 of your top skills.</span>
                    

                    <Save saveDetails={saveDetails} />

                </div>

                <label>



                    <div className='flex flex-col gap-8'>
                        
                        <label className='flex flex-col gap-6'>
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
                        </label>
                    </div>

                </label>



            </div>
        </div>
    )
}

export default Skills