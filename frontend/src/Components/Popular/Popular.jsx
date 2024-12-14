import React from 'react'
import './popular.css'
import Item from '../Item/Item'
import item_data from '../Assets/Frontend_Assets/data.js'



const Popular = () => {
  return (
    <div className='popular-items p-6 flex flex-col items-center w-screen gap-4'>
        <h2 className='text-center text-2xl lg:text-4xl'>Popular in Women</h2>
        <hr className='w-[30%] lg:w-[10%] border-none bg-black h-1 rounded-full' />
        
        <div className="popular-items-container items-center flex gap-8 justify-center mt-4 flex-col lg:flex-row">
            {item_data.map((item, index) => {
                return <Item key={index} img={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })} 
        </div>

    </div>
  )
}

export default Popular
