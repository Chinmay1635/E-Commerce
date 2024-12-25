import React, { useState } from 'react'
import upload_icon from '../../assets/upload_area.svg'
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {

    const notify = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
        
    };
    

    const [image, setImage] = useState(false);
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const [productDetails, setProductDetails] = useState({
        name:'',
        image:'',
        new_price:'',
        old_price:'',
        category:'women'
    });

    const changeHandler = (e) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value
        })
    }

    const Add_Product = async () => {
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product', image);

        await fetch('https://e-commerce-csrj.onrender.com/api/product/addImage' , {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData,
        }).then((response) => response.json())
        .then((data)=>responseData=data);

        if(responseData.success){
            product.image = responseData.image_url;
            await fetch('https://e-commerce-csrj.onrender.com/api/product/addProduct' , {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then((response) => response.json())
            .then((data)=>{notify(data.message)});
        }
    }

  return(
    <div className='flex items-center gap-8 flex-col w-full h-full py-16'>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
        <h1 className='text-3xl font-bold'>Add Product</h1>
        <div>
            <form className='flex flex-col gap-4 w-96'>
                <input value={productDetails.name} onChange={changeHandler} className='border-2 border-gray-200 rounded-lg p-2' type="text" name='name' placeholder='Product Name' />
                <input value={productDetails.new_price} onChange={changeHandler} className='border-2 border-gray-200 rounded-lg p-2' type="number" name='new_price' id='new_price' placeholder='Product Offer Price' />
                <input value={productDetails.old_price} onChange={changeHandler} className='border-2 border-gray-200 rounded-lg p-2' type="number" name='old_price' id='old_price' placeholder='Product Original Price' />
                <p className=''>
                    <label className='border-2 border-gray-200 rounded-lg p-2 bg-white mr-2' htmlFor="category">Category: </label>
                    <select value={productDetails.category} onChange={changeHandler} name="category" id="category" className='border-2 border-gray-200 rounded-lg p-2 bg-white mr-2'>
                    <option value="women">women</option>
                    <option value="men">men</option>
                    <option value="kid">kid</option>
                </select>
                </p>

                <label htmlFor="image" className='cursor-pointer'>
                    <img className='w-24' src={image ? URL.createObjectURL(image) : upload_icon } alt="" />
                </label>
                <input enctype="multipart/form-data" hidden onChange={imageHandler} className='border-2 border-gray-200 rounded-lg p-2' type="file" name='image' id='image' />

            </form>
                <button onClick={()=> Add_Product()} className='bg-blue-400 mt-4 text-white rounded-lg p-2'>Add Product</button>
        </div>
    </div>
  )
}

export default AddProduct