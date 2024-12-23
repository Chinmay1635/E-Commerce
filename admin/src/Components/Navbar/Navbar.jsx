import React from 'react'
import logo from '../../assets/nav-logo.svg'
import profile_img from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-8 py-4 border-b-2 border-gray-200">
        <div>
            <img className='w-32 lg:w-64' src={logo} alt="logo" />
        </div>
        <div>
            <img className='w-16' src={profile_img} alt="" />
        </div>
    </div>
  )
}

export default Navbar