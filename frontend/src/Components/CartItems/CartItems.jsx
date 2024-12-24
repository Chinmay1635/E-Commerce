import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const CartItems = () => {
    const {removeFromCart, all_product, cartItems, getTotalCartAmount, getTotalCartItems, loading} = useContext(ShopContext);
    const totalCartAmount = getTotalCartAmount();
    let shippingAmount;
    if(totalCartAmount<100 && totalCartAmount>0){
        shippingAmount = 10;
    }else{
        shippingAmount = null;
    }

    if (loading) {
        return <div>Loading...</div>;
    }else{
        return (
            <div className='cartItems'>
                <div className="cartItems-format-main lg:flex w-screen gap-56 p-8 hidden">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div  className='flex p-2 gap-5 flex-col w-screen'>
                    <div className='text-center text-red-500 my-5 text-xl'>{getTotalCartItems()==0 ? `Cart is empty` : null}</div>
                    {Array.isArray(cartItems) && all_product.map((item, i)=>{
                        const cartItem = cartItems.find(ci => ci.id === item.id);
              
                      
                  
                       if (cartItem && cartItem.value > 0) {
                            return(
                                <div key={i}>
                                    <div className="cartItems-format flex flex-col lg:flex-row gap-5 lg:gap-44 sm:p-3 lg:py-3 rounded-lg  w-full  items-center">
                                    <img src={item.image} alt="" className='carticon-product-icon rounded-md w-2/3 lg:w-[7%] '/>
                                    <p className='text-lg  w-full lg:w-[10%]'>{item.name}</p>
                                    <p className='text-xl text-green-500'>${item.new_price}</p>
                                    <button className='px-4 py-2 bg-gray-300 rounded-lg'>{cartItem.value}</button>
                                    <p>Total: ${item.new_price*cartItem.value}</p>
                                    <button className='flex items-center mb-4 lg:mb-0 px-4 py-2 bg-red-500 justify-center text-white rounded-lg' onClick={()=>{removeFromCart(item.id)}}>
                                    Remove
                                    </button>
                                 </div>
                                 <hr className='h-[2px] bg-zinc-300 border-none'/>
                                </div>
                            )

                          
                        }
                        return null;
                    })}

                    
                    
                    <div className="cartitems-down p-8">
                        <h1 className='font-semibold text-2xl lg:text-4xl'>Cart Totals</h1>
                        <div className='p-8 gap-5 flex flex-col w-full lg:w-1/2'>
                            <div className="flex justify-between w-full">
                                <p>Subtotal</p>
                                <p className='font-semibold'>${totalCartAmount}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between w-full">
                                <p>Shipping Fee</p>
                                <p className='font-semibold text-green-500'>{shippingAmount == null || totalCartAmount==0 ? "Free" : `$${shippingAmount}`}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between w-full">
                                <h3>Total</h3>
                                <h3 className='font-semibold'>${totalCartAmount+shippingAmount}</h3>
                            </div>
                                <hr />
                    <button className='px-6 py-2 w-full lg:w-1/2 bg-green-400 hover:bg-green-600 rounded-lg text-white'>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
                <hr className='h-[1px] border-none bg-zinc-400 mt-4 '/>
            </div>
          )
    }
 
}

export default CartItems