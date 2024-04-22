import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Setting = () => {
  return (
    <div className='pl-80'>
        
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Setting