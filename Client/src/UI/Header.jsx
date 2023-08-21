import React from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from '../assets'

const Header = (props) => {
  return (
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
    <NavLink to="/">
      <img src={logo} alt="logo" className='w-28 object-contain' />
    </NavLink>
    <NavLink to="/create-post" className="font-inter bg-[#6469ff] text-white px-4 py-2 rounded-md font-medium">
      Create
    </NavLink>
  </header>
  )
}

export default Header