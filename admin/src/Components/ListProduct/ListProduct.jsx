import React, { useEffect, useState } from 'react'

const ListProduct = () => {

  const [all_product, setAllProduct] = useState([]);
  let responseData;
  const fetchProducts = async () => {
    await fetch('https://e-commerce-csrj.onrender.com/api/product/all')
    .then((response) => response.json())
    .then((data) => responseData = data);
    setAllProduct(responseData.products);
  }
  
  useEffect(() => {
    fetchProducts();
  }, [])

  const removeProduct = async (id) => {
    await fetch('https://e-commerce-csrj.onrender.com/api/product/removeProduct', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    fetchProducts();
  }
  return (
    <>
      <div className='flex flex-col p-8'>
      <h1 className='text-3xl font-bold'>All Products</h1>
        <div className="lg:flex w-screen gap-56 p-8 hidden">
            <p>Products</p>
            <p>Title</p>
            <p>Offer Price</p>
            <p>Price</p>
            
            <p>Remove</p>
        </div>
        <hr />
        <div  className='flex p-2 gap-5 flex-col w-screen'>
            
            {all_product.map((item, i)=>{
                
                    return(
                        <div key={i}>
                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-44 sm:p-3 lg:py-3 rounded-lg  w-full  items-center">
                            <img src={item.image} alt="" className='rounded-md w-2/3 lg:w-[7%] '/>
                            <p className='text-lg  w-full lg:w-[10%]'>{item.name}</p>
                            <p className='text-xl text-green-500'>${item.new_price}</p>
                            <p className='text-xl text-red-500'>${item.old_price}</p>
                            <button className='flex items-center px-4 py-2 bg-red-500 justify-center text-white rounded-lg' onClick={()=>{removeProduct(item.id)}}>
                            Remove
                            </button>
                         </div>
                         <hr className='h-[2px] bg-zinc-300 border-none'/>
                        </div>
                    )
                
            })}    
        </div>
    </div>
    </>
  )
}

export default ListProduct