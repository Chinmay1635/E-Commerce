import React, { useState } from 'react'
import './navbar.css'
import Logo from '../Assets/Frontend_Assets/logo.png'
import Cart from '../Assets/Frontend_Assets/cart_icon.png'
function Navbar() {

  const [menu, setMenu] = useState("shop")
  return (
    <nav className="navbar w-screen flex py-2 px-6 justify-between">
      <div className="nav-left">
        <img src={Logo} alt="logo" className="navbar-logo" />
        <h3>SHOPPER</h3>
      </div>
      <div className="nav-center flex items-center">
        <ul className='flex gap-5'>
          <li onClick={()=>{setMenu('shop')}}>Shop {menu==='shop' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
          <li onClick={()=>{setMenu('men')}}>Men {menu==='men' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
          <li onClick={()=>{setMenu('women')}}>Women {menu==='women' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
          <li onClick={()=>{setMenu('kids')}}>Kids {menu==='kids' ? <hr className='border-none w-[80%] h-[3px] bg-red-700 rounded-lg'/> : <></>}</li>
        </ul>
      </div>
      <div className="nav-right flex items-center gap-5">
        <button className='border-zinc-400 border-2 px-4 py-2 rounded-full active:bg-zinc-300'>Log In</button>
        <img className='h-1/3' src={Cart} alt="" />
        <div className="nav-cart-count ml-[-30px] mt-[-20px] text-white w-5 h-5 text-sm bg-red-700 rounded-full flex justify-center items-center">0</div>
      </div>
      
    </nav>
  )
}

export default Navbar