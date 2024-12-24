import React from 'react'
import { Link } from 'react-router-dom'
import addProduct from '../../assets/Product_Cart.svg'
import listProduct from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='flex flex-row lg:flex-col gap-2 lg:gap-8 py-8 px-0 justify-center lg:justify-normal lg:py-16 items-center w-full lg:h-screen lg:w-64 bg-white'>
        <Link to={'/addproduct'}>
            <div className='flex lg:flex-row text-blue-400 w-40 lg:w-52 gap-2 lg:gap-8 px-2 py-1 lg:px-4 lg:py-2 bg-gray-100 rounded-lg hover:bg-gray-200'>
                <img src={addProduct} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'}>
            <div className='flex lg:flex-row text-blue-400 w-40 lg:w-52 gap-2 lg:gap-8 px-2 py-1 lg:px-4 lg:py-2 bg-gray-100 rounded-lg hover:bg-gray-200'>
                <img src={listProduct} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar