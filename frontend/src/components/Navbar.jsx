import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLogout } from '../Redux/features/userSlice'
import axios from 'axios'
import { useEffect } from 'react'
const backend_url=import.meta.env.VITE_Backend_URL

const Navbar = () => {
  const token = useSelector((state) => state.Auth.token);
  // const [token, setToken] = useState(localStorage.getItem("token"))
  const dispatch=useDispatch()

  const handleLogout=async()=>{
    const req=await axios.post(`${backend_url}/api/user/logout`,{},{withCredentials: true})
    dispatch(setLogout())
  }


  return (
    <div className='bg-gray-300 flex justify-center p-5 text-xl gap-5'>
        <NavLink to='/' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>Home</NavLink>
        <NavLink to='/product' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>Products</NavLink>
        <NavLink to='/about' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>About</NavLink>
        {token ? (<NavLink to='/login' onClick={handleLogout} className={({isActive})=>`${isActive ? "text-blue-500":""}`}>Log Out</NavLink>):(<NavLink to='/login' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>Login</NavLink>)}
    </div>
  )
}

export default Navbar