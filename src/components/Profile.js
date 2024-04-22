import React, { useEffect, useState } from 'react'
import { FaEdit, FaExchangeAlt, FaSave } from 'react-icons/fa'
import SideBar from './SideBar'
import axios from 'axios'

const Profile = () => {
    const [password, setPassword] = useState({oldPassword:"", newPassword:""})
    const [isEditable, setIsEditable] = useState(false)
    const [userDetailForm, setUserDetailForm] = useState({firstName:"Pranav", lastName:"Gupta", email:"pranav.gupta@resumebuilder.com", contact:"+91 98765 43210",profession:"", about:"hey there i am using resume builder", username:"user234", profession:"Engineer"})

    const formHandler = (e) => {
        setUserDetailForm((prev)=>({
            ...prev, [e.target.name]:e.target.value
        }))
    }
    
    const updateDetail = async ()=>{
        if(isEditable){
            const res = await axios.post('/update-account-details', userDetailForm,{headers:{Authorization:localStorage.getItem('AccessToken')}})
            console.log(res);
        }
    }
    const changePassword = async()=>{
        if( password?.newPassword.trim()=="" || password.oldPassword.trim()=="" ){
            return
        }
        
        console.log('send');
    }
    const getUserInfo = async () => {
        const res = await axios.get('/get-user-info', {headers:{Authorization:localStorage.getItem('AccessToken')}})

        console.log(res);
        setUserDetailForm(prev=>({
            ...prev, 
            firstName: res.data.data.profileInfo.firstName,
            lastName: res.data.data.profileInfo.lastName,
            email: res.data.data.email,
            contact: res.data.data.profileInfo.contact,
            profession: res.data.data.profileInfo.profession,
            about: res.data.data.profileInfo.about,
            username: res.data.data.username
        }))
    }

    
    useEffect(()=>{
        // getUserInfo()
    
    },[])
  return (
    <div className='flex min-w-full  '>
        <div className='w-full'>
            <div className='max-w-[1180px]  w-full mx-auto'>
            <h2 className='text-3xl font-semibold mt-10'>My Profile</h2>
                <div className=' flex border  bg-[#f1f8fe]  bg-opacity-40 rounded-lg m-12  p-6  '>
                    <div>
                        <img className='aspect-square w-20 object-cover rounded-full' src='https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' alt='profile'/>
                    </div>
                    <div className='flex items-center justify-between w-full '>
                        <div className='flex flex-col justify-center p-3'>
                            <h4 className='font-semibold text-xl '>Pranay Gupta</h4>
                            <h4>pranay.gupta@resumebuilder.com</h4>
                        </div>
                    </div>
                    
                </div>

                <div className=' flex border flex-col bg-[#f1f8fe]  rounded-lg m-12  p-6  '>
                    <div className='flex justify-between w-full border-b-2 pb-6 border-stone-200 items-center'>
                        <h2 className='text-xl font-semibold'> Personal Details</h2>
                        <button onClick={()=>setIsEditable(prev=>!prev)} className='bg-yellow-400 flex items-center gap-2 font-semibold px-4 py-2 rounded-xl h-min'>{isEditable? <div className='flex font-semibold items-center gap-2'> <FaEdit/> Save </div> : <div className='flex font-semibold items-center gap-2'> <FaSave/> Edit </div>}</button>
                    </div>

                    <div className='p-2 grid grid-cols-2 gap-8'>
                        {/* First Name */}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                First Name
                            </label>
                            <input onChange={formHandler} name='firstName' className={`bg-transparent font-semibold p-2 m-1 flex w-full ${isEditable?"bg-white rounded-xl":""}`} disabled={!isEditable} type='text' id='firstName' placeholder='First Name' value={userDetailForm.firstName}/>
                        </div>

                        {/* Last Name */}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                Last Name
                            </label>
                            <input name='lastName' onChange={formHandler} className={`bg-transparent font-semibold p-2 m-1 flex w-full ${isEditable?"bg-white rounded-xl":""}`} disabled={!isEditable} type='text' id='firstName' placeholder='First Name' value={userDetailForm.lastName}/>
                        </div>

                        {/* Email */}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                Email
                            </label>
                            <input name='email' onChange={formHandler} className={`bg-transparent font-semibold p-2 m-1 flex w-full ${isEditable?"bg-white rounded-xl":""}`} disabled={!isEditable} type='text' id='firstName' placeholder='First Name' value={userDetailForm.email}/>
                        </div>

                        {/* Username */}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                Username
                            </label>
                            <input name='username' onChange={formHandler} className={`bg-transparent font-semibold p-2 m-1 flex w-full ${isEditable?"bg-white rounded-xl":""}`} disabled type='text' id='firstName' placeholder='First Name' value={userDetailForm.username}/>
                        </div>

                        {/* Last Name */}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                Contact Number
                            </label>
                            <input name='contact' onChange={formHandler} className={`bg-transparent font-semibold p-2 m-1 flex w-full ${isEditable?"bg-white rounded-xl":""}`} disabled={!isEditable} type='text' id='firstName' placeholder='First Name' value={userDetailForm.contact}/>
                        </div>

                        {/* Profession */}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                Profession
                            </label>
                            <input name='profession' onChange={formHandler} className={`bg-transparent font-semibold p-2 m-1 flex w-full ${isEditable?"bg-white rounded-xl":""}`} disabled={!isEditable} type='text' id='firstName' placeholder='First Name' value={userDetailForm.profession}/>
                        </div>

                        <div className='fex flex-col col-span-2 '>
                            <label htmlFor='firstName'>
                                About
                            </label>
                            <input name='about' onChange={formHandler} className={`bg-transparent font-semibold p-2 m-1 flex w-full ${isEditable?"bg-white rounded-xl":""}`} disabled={!isEditable} type='text' id='firstName' placeholder='First Name' value={userDetailForm.about}/>
                        </div>
                    </div>
                </div>


                <div className=' flex border flex-col  bg-[#f1f8fe]  bg-opacity-40 rounded-lg m-12  p-6  '>
                    <div className='flex justify-between w-full border-b-2 pb-6 border-stone-200 items-center'>
                        <h2 className='text-xl font-semibold'> Change Password</h2>
                        <button onClick={changePassword}  className='bg-yellow-400 flex items-center gap-2 font-semibold px-4 py-2 rounded-xl h-min  hover:bg-yellow-500 '><div className='flex font-semibold items-center gap-2'> <FaExchangeAlt/> Change </div></button>
                    </div>

                    <div className='p-2 grid grid-cols-2 gap-8'>
                        {/* New Password */}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                Old Password
                            </label>
                            <input onChange={e=>setPassword(prev=>({...prev, oldPassword:e.target.value}))} className=" font-semibold p-2 m-1 flex w-full bg-white rounded-xl"  type='password' id='firstName' placeholder='Old Password' />
                        </div>

                        {/* Old Password*/}
                        <div className='fex flex-col  '>
                            <label htmlFor='firstName'>
                                New Password
                            </label>
                            <input  onChange={e=>setPassword(prev=>({...prev, newPassword:e.target.value}))} className=" font-semibold p-2 m-1 flex w-full bg-white rounded-xl"  type='password' id='firstName' placeholder='New Password' />
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Profile