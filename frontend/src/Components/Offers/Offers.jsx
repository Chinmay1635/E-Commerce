import React from 'react'
import exclusive_img from '../Assets/Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers flex flex-col-reverse lg:flex-row w-screen lg:w-[75%] m-auto h-screen lg:h-[80vh] p-16 lg:p-32 bg-gradient-to-tl from-white to-pink-200'>
        <div className="left w-full lg:w-1/2 flex flex-col gap-4 justify-center">
            <h1 className='text-4xl lg:text-6xl font-semibold'>Exclusive</h1>
            <h1 className='text-3xl lg:text-6xl font-semibold'>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='px-4 py-2 bg-red-500 text-white rounded-full w-full lg:w-1/3'>Check Now</button>
        </div>
        <div className="right flex items-center w-full lg:w-1/2 h-full justify-center">
            <img className='h-[75%] lg:h-[150%]' src={exclusive_img} alt="" />
        </div>    
        
    </div>
  )
}

export default Offers