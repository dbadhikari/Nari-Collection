import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-300 flex justify-center p-5 text-xl gap-5'>
        <NavLink to='/' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>Home</NavLink>
        <NavLink to='/product' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>Products</NavLink>
        <NavLink to='/about' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>About</NavLink>
        <NavLink to='/login' className={({isActive})=>`${isActive ? "text-blue-500":""}`}>Login</NavLink>
    </div>
  )
}

export default Navbar