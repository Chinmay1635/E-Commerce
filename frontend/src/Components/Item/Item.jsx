import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    
  return (
    <>
         <Link to={`/product/${props.id}`}><div  className="item flrx flex-col w-64 h-96  bg-gradient-to-tl from-white to-pink-200 p-2 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <img className='w-full h-[75%] object-cover rounded-lg' src={props.img} alt="" />
            <p className='text-pink-900'>{props.name}</p>
            <div className='item-price flex items-center gap-5 '>
                <div className="item-price-new text-green-600 text-xl font-bold">
                    ${props.new_price}
                </div>
                <div className="item-price-old text-red-600">
                    <del>${props.old_price}</del>
                </div>
            </div>
        </div>
        </Link>
    </>
  )
}

export default Item