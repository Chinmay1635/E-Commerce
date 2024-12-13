import React from 'react'
import logo from '../Assets/Frontend_Assets/logo.png'
import insta_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center gap-5 w-screen h-[50vh]'>
        <div className="logo flex justify-center items-center gap-5">
          <img src={logo} alt="" />
          <h4 className='text-2xl'>SHOPPER</h4>
        </div>

        <div className="footer-links flex justify-center gap-5">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Blog</a>
        </div>

        <div className="footer-social flex justify-center gap-5">
          <img src={insta_icon} alt="" />
          <img src={whatsapp_icon} alt="" />
          <img src={pinterest_icon} alt="" />   
        </div>

        <hr className='h-[2px] bg-zinc-200 w-full border-none' />
        <p className='text-center'>Copyright @2024 - All Rights Reserved</p>
    </div>
  )
}

export default Footer