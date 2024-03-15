import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
export const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
        <nav className='navbar'>
        <h2>Supply Chain Management System</h2>   
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Admin'>Admin</NavLink>
        <NavLink to='/User'>User</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}