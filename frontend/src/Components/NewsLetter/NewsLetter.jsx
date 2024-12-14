import React from 'react'

const NewsLetter = () => {
  return (
    <div className='news-letter mt-5 w-full lg:w-[75%] h-[60vh] lg:h-[50vh] gap-10 px-10 lg:px-0 py-20 m-auto flex flex-col items-center bg-gradient-to-tl from-white to-pink-200'>
        <h1 className='text-4xl font-medium'>Get Exclusive Offers On Your Email</h1>
        <p className='text-xl'>Subscribe to our newsletter and stay updated</p>
        <div>
            <input className='bg-transparent text-sm lg:text-base px-2 py-2 lg:px-10 lg:py-4 border-2 border-gray-300 rounded-full' type="email" placeholder='Enter your Email id' />
            <button className='px-2 py-2 text-sm lg:text-base lg:px-10 lg:py-4 rounded-full bg-black ml-[-44px] text-white'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter