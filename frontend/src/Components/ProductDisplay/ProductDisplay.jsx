import React, { useContext, useState } from 'react'
import { Link, Links } from 'react-router-dom'
import star_icon from '../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import ShopContextProvider from '../../Context/ShopContext'
import './productDisplay.css'
import isLoggedIn from '../../utils/isLoggedIn'
import Error from '../Alert/Error'
import Success from '../Alert/Success'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const isLoggedIN = isLoggedIn();
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const handleAddToCart = () => {
        if (!isLoggedIn()) {
            setShowError(false); // Reset the state
            setTimeout(() => {
                setShowError(true); // Set the state to true after a short delay
            }, 0);
        } else {
            // Add to cart logic
            addToCart(product.id);
            setShowSuccess(true); 

        }
    };
  return (
    <div className='constainer p-4 lg:p-16 w-screen h-[120vh] lg:h-screen flex flex-col lg:flex-row justify-between'>
        
        <div className="left w-full  lg:w-1/2 flex gap-2 justify-between lg:justify-normal">
            <div className="img-list flex flex-col gap-8 lg:gap-2">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="main-img">
                <img className='h-3/4' src={product.image} alt="" />
            </div>
        </div>
        <div className="right flex flex-col gap-5 ">
            <h1 className='text-3xl font-semibold'>{product.name}</h1>
            <div className="rating flex gap-1">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="price flex gap-2">
                <div className="old-price text-red-500 text-xl">
                    <del>${product.old_price}</del>
                </div>
                <div className="new-price text-green-500 text-3xl font-semibold">
                    ${product.new_price}
                </div>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, ratione harum consectetur itaque est a impedit? Eligendi excepturi recusandae veritatis.
            </div>
            <div className="size">
                <h3 className='font-semibold'>Size</h3>
                <div className="size-list flex gap-2">
                    <div className="size-item">S</div>
                    <div className="size-item">M</div>
                    <div className="size-item">L</div>
                    <div className="size-item">XL</div>
                </div>
            </div>
            {showSuccess ? <Link to='/cart'><button className='px-6 py-2 rounded-xl border-2 border-green-500 w-1/2 lg:w-1/5 hover:bg-green-500 hover:text-white transition-all'>View Cart</button></Link> : <button onClick={()=>{handleAddToCart()}} className='px-6 py-2 rounded-xl border-2 border-red-500 w-1/2 lg:w-1/5 hover:bg-red-500 hover:text-white transition-all'>ADD TO CART</button>}
            {showError ? <Error message="Please login to add to cart" /> : <></>}
            {showSuccess ? <Success message="Product added to cart" /> : <></>}
        </div>
    </div>
  )
}

export default ProductDisplay