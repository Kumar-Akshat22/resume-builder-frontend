import React from 'react'
import { BsPerson, BsSave2 } from 'react-icons/bs'
import { PiSignOut } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    const sideBarStyle = ({isActive}) =>{
        return {
            backgroundColor: isActive? 'white' : '#3276c9',
            color: isActive? 'black' : 'white',
            // border: isActive? '' : '2px solid rgba(255, 255, 255, 0.9)',
            borderRadius: isActive? '18px 0% 0% 18px' : "",
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
            Saved Resumés
        </NavLink>

        <NavLink to={'/signout'} style={sideBarStyle} className='bg-yellow-400 py-3 font-semibold flex items-center text-xl gap-2 px-6 '>
            <PiSignOut />
            Sign Out
        </NavLink>
    </div>
  )
}

export default SideBar