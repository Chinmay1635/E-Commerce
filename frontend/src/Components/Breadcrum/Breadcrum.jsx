import React from 'react'
import arrow_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className='Breadcrum flex gap-2 h-10 lg:h-1 flex-wrap mb-10'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum