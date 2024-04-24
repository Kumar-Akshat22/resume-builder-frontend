import React, { useState } from "react";
import Save from "./Save";
import { MdAddTask } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Tooltip } from '@mui/material';
import BulletPoint from "./BulletPoint";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Achievements({ resumeDetails , updateResumeDetails }) {

    const [achievements, setAchievements] = useState([]);

    const [achievementDetails, setAchievementDetails] = useState({

        achievementTitle: '',
        achievementPoints: [],
    })

    const resetFields = () => {

        setAchievementDetails({
            achievementTitle: '',
            achievementPoints: [],
        })
    }

    const [editingMode, setEditingMode] = useState(false);
    const [selectedAchievementID, setSelectedAchievementID] = useState(null);

    const [isAchievmentDetailsSaved , setIsAchievementDetailsSaved] = useState(false);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setAchievementDetails({ ...achievementDetails, [name]: value })
    }

    // To handle the input text of the field
    const [text, setText] = useState('');

    const addPoint = (text) => {

        console.log('Inside the addPoint function');
        const newPoint = {

            id: Date.now(),
            text,
        }

        console.log(newPoint)
        setAchievementDetails({ ...achievementDetails, achievementPoints: [...achievementDetails.achievementPoints, newPoint] })
        setText('');
    }

    const deletePoint = (id) => {

        const newAchievements = achievementDetails.achievementPoints.filter(achievementPoint => achievementPoint.id !== id);

        setAchievementDetails({ ...achievementDetails, achievementPoints: [...newAchievements] });
    }

    const addAchievement = () => {

        if (achievementDetails.achievementTitle && achievementDetails.achievementPoints) {

            setAchievements([...achievements, { id: Date.now(), data: achievementDetails }])
            resetFields();
            toast.success('Achievment added');

        } else {

            toast.error('Please fill out some details')
        }
    }

    const deleteAchievement = (id) => {

        const newAchievements = achievements.filter((achievement) => achievement.id !== id);
        setAchievements(newAchievements);
        toast.success('Achievement removed successfully');
        console.log('Delete Icon is Clicked');
    }

    const editAchievement = (id) => {

        const achievementToEdit = achievements.find((achievement) => achievement.id === id);

        setAchievementDetails(achievementToEdit.data);
        setEditingMode(true);
        setSelectedAchievementID(id);
        console.log('Editing Mode turned ON');


    }

    const updateAchievement = () => {

        console.log(`Updating the achievement with the ID:${selectedAchievementID}`);

        if (selectedAchievementID !== null) {

            const updatedAchievements = achievements.map((achievement) => {

                if (achievement.id === selectedAchievementID) {

                    return { ...achievement, data: achievementDetails }
                }

                return achievement;
            })

            setAchievements(updatedAchievements);
            resetFields();
            setEditingMode(false);
            setSelectedAchievementID(null);
            toast.success('Deatils updated successfully');
        }

    }

    const saveDetails = () => {

        updateResumeDetails('achievements', achievements);
        setIsAchievementDetailsSaved(true);
        toast.success('Achievement details saved successfully');
    }

    const navigate = useNavigate();
    const generateResume = async () => {

        const res = await axios.post('/api/v1/users/upload-details', { resumeDetails: JSON.stringify(resumeDetails), resumeName:localStorage.getItem('resumeName') }, { headers: { Authorization: localStorage.getItem('AccessToken') } })
        console.log(res);

        if (res.data.statusCode === 200) {

            toast.success('Resume Details Successfully Saved');
            navigate('/generate-resume')
        }
    }

    console.log('Printing achievement details:', achievementDetails);
    console.log('Printing the achievements array:', achievements);

    return (
        <div className="w-full p-5 mt-6">
            <div className="max-w-[1140px] mx-auto font-openSans">
                <div className="w-full flex justify-between items-center">
                    <div className="mb-4">
                        <p className="uppercase text-xl">Achievements</p>
                        <span className="text-sm">Add about your Achievements</span>
                    </div>

                    {
                        isAchievmentDetailsSaved
                        ?
                        <div>
                            <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={generateResume}>Continue</button>
                        </div>
                        :
                        <div>
                            <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={saveDetails}>Save</button>
                        </div>
                    }
                </div>

                <div className='flex flex-col gap-5'>


                    <label className=''>
                        <span className=''>Title</span>
                        <input type='text' name='achievementTitle' value={achievementDetails.achievementTitle} onChange={handleChange} placeholder='e.g. John' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>
                    </label>

                    <label>

                        <span>Bullet Points <span className='text-sm'>(Add max 4 points)</span></span>

                        <div className='flex flex-col gap-6'>

                            <div className='w-full flex align-items-center gap-5'>

                                <input type='text' value={text} onChange={(e) => { setText(e.target.value) }} placeholder='e.g. Led a team of 10 members' className='w-full focus:outline-none focus:border-[#3983fa] focus:ring-1 focus:ring-[#3983fa] border p-[8px] rounded-[0.2rem] mt-1'></input>

                                <Tooltip title="Add point" arrow placement='top' className='text-lg'>
                                    <div className='flex items-center cursor-pointer' onClick={() => { addPoint(text) }}>

                                        <MdAddTask color="#3983fa" size={30} />

                                    </div>
                                </Tooltip>
                            </div>

                            {
                                achievementDetails.achievementPoints.map(
                                    (achievementPoint, index) => {

                                        return <BulletPoint key={index} {...achievementPoint} deletePoint={deletePoint}></BulletPoint>
                                    }
                                )
                            }
                        </div>

                    </label>

                    {
                        editingMode
                            ?
                            <div className='mt-5'>
                                <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={updateAchievement}>Update Achievement</button>
                            </div>
                            :
                            <div className='mt-5'>
                                <button className='bg-[#3983fa] text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200' onClick={addAchievement}>Add Achievement</button>
                            </div>
                    }

                    {
                        achievements.length > 0 && (<div className='w-full mt-8 flex flex-col gap-5'>

                            {
                                achievements.map((achievement) => (
                                    <div key={achievement.id} className='w-full p-5 border rounded-[14px] flex items-center justify-between transition-all duration-300 hover:shadow-md'>

                                        <div>
                                            <h1 className='font-openSans font-semibold text-lg'>{achievement.data.achievementTitle}</h1>

                                            {
                                                achievement.data.achievementPoints
                                                    ?
                                                    <div>
                                                        <ul className='list-disc font-openSans'>
                                                            {achievement.data.achievementPoints.map((achievement) => (
                                                                <li className='ml-5 mt-0' key={achievement.id}>{achievement.text}</li>

                                                            ))
                                                            }
                                                        </ul>
                                                    </div>
                                                    :
                                                    ''
                                            }

                                        </div>



                                        <div className='flex justify-start gap-5' >
                                            <MdEdit size={19} className='cursor-pointer text-[#d2d2d2] hover:text-green-500 transition-all duration-200' onClick={() => editAchievement(achievement.id)} disabled={editingMode} />
                                            <MdDelete size={19} className='cursor-pointer text-[#d2d2d2] hover:text-red-500 transition-all duration-200' onClick={() => deleteAchievement(achievement.id)} disabled={editingMode} />
                                        </div>

                                    </div>))
                            }

                        </div>)
                    }


                </div>
            </div>
        </div>
    );
}

export default Achievements;
