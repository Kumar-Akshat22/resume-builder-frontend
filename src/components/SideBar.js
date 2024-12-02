import axios from 'axios'
import React from 'react'
import { BsPerson, BsSave2 } from 'react-icons/bs'
import { PiSignOut } from 'react-icons/pi'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const SideBar = () => {
    const navigate = useNavigate()
    const sideBarStyle = ({isActive}) =>{
        return {
            backgroundColor: isActive? 'white' : '#3276c9',
            color: isActive? 'black' : 'white',
            // border: isActive? '' : '2px solid rgba(255, 255, 255, 0.9)',
            borderRadius: isActive? '18px 0% 0% 18px' : "",
        }
    }

    const handleSignOut = async () => {
        const res = await axios.post('/api/v1/users/signout',{headers:{Authorization:localStorage.getItem('AccessToken')}})
        if(res.data.statusCode===202){
            localStorage.removeItem('AccessToken')
            localStorage.removeItem('RefreshToken')
            toast.success('Logged Out !!! ')
            navigate('/')
        }

    }
  return (
    <div className='w-80 fixed top-0 left-0  bg-[#3276c9] h-screen  py-16'>
        
        <NavLink to={'/setting/profile'} style={sideBarStyle} className='bg-yellow-400 py-3 font-semibold flex items-center text-xl gap-2 px-6 '>
            <BsPerson />
            My Profile
        </NavLink>
        
        <NavLink to={'/setting/saved-resume'} style={sideBarStyle} className='bg-yellow-400 py-3 font-semibold flex items-center text-xl gap-2 px-6 '>
            <BsSave2 />
            Saved Resumes
        </NavLink>

        <p onClick={handleSignOut}  className='text-white py-3 font-semibold flex items-center text-xl gap-2 px-6 '>
            <PiSignOut />
            Sign Out
        </p>
    </div>
  )
}

export default SideBar