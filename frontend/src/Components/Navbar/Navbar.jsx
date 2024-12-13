import React, { useState } from 'react'
import './navbar.css'
import Logo from '../Assets/Frontend_Assets/logo.png'
import Cart from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
function Navbar() {

  const [menu, setMenu] = useState("shop")
  return (
    <nav className="navbar w-screen flex py-2 px-6 justify-between">
      <div className="nav-left flex items-center">
        <img src={Logo} alt="logo" className="navbar-logo" />
        <h3 className='text-sm lg:text-xl'>SHOPPER</h3>
      </div>
      <div className="nav-center hidden items-center lg:flex">
        <ul className='flex gap-5'>
          <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link> {menu==='shop' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
          <li onClick={()=>{setMenu('men')}}><Link to='/mens'>Men</Link> {menu==='men' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
          <li onClick={()=>{setMenu('women')}}><Link to='/womens'>Women</Link> {menu==='women' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
          <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link> {menu==='kids' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
        </ul>
      </div>
      <div className="nav-right flex items-center gap-5">
        <button className='border-zinc-400 text-xs border-2 px-2 py-1 lg:px-4 lg:py-2  rounded-full active:bg-zinc-300'><Link to='/login'>Login</Link></button>
        <Link to='/cart'><img className='h-5 lg:h-7 cursor-pointer' src={Cart} alt="" /></Link>
        <div className="nav-cart-count ml-[-30px] mt-[-20px] text-white w-4 h-4 lg:w-6 lg:h-6 text-[8px] lg:text-xs bg-red-700 rounded-full flex justify-center items-center">100</div>
        <div className="hamburger block lg:hidden"><i className="ri-menu-3-line"></i></div>
      </div>
      
    </nav>
  )
}

export default Navbar