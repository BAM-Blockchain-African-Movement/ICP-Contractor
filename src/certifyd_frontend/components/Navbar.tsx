import React from 'react'
import logo from "./../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className="navbar px-10 bg-gradient-to-t from-blue-700 to-blue-800">
        <div className="flex-1">
          <img src={ logo } className='size-12 rounded-full' alt="" />
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a className='text-gray-200 hover:font-bold text-lg hover:text-white '>Home</a></li>
            <li><a className='text-gray-200 hover:font-bold text-lg hover:text-white '>My Desk</a></li>
            <li><a className='text-gray-200 hover:font-bold text-lg hover:text-white '>Network</a></li>
            <li><a className='text-gray-200 hover:font-bold text-lg hover:text-white '>About Us</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar