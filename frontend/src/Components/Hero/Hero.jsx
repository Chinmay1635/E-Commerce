import React from 'react'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Frontend_Assets/arrow.png'
import hero_img from '../Assets/Frontend_Assets/hero_image.png'
import './hero.css'


const Hero = () => {
  return (
    <>
        <div className="hero flex justify-centre w-screen min-h-screen  bg-gradient-to-tl from-white to-pink-200 flex-col items-center pt-10 lg:flex-row lg:justify-between">
            <div className="hero-left flex flex-col justify-center gap-5  font-semibold lg:pl-32">
                <h2 className='text-xl'>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hand-icon flex items-center'>
                        <p>new</p>
                        <img className='w-10 h-10' src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn flex justify-center items-center gap-4 py-4 px-4 rounded-full bg-red-500 font-normal text-white w-52 lg:w-[55%]">
                    <div>Latest Collection</div>
                    <img className='w-5' src={arrow_icon} alt="" />
                </div>
                
            </div>
            <div className="hero-right flex justify-center">
                    <img className='w-[60%]' src={hero_img} alt="" />
                </div>
        </div>
    </>
  )
}

export default Hero