import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export const SignUp = () => {

    let [formData, setFormData] = useState({  
        name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        address: '',
        phone: ''
        });
    
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const signUpForm =  () => {
        fetch('https://e-commerce-csrj.onrender.com/api/users/signup', {
            body: JSON.stringify(formData),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

        
        console.log('Sign Up successful');
    };

  return (
    <div className='container p-16 w-full lg:w-2/4 bg-slate-100 m-auto flex-col gap-8  flex justify-center items-center'>
      <form action="">
        <h2 className='text-2xl text-center'>Sign Up</h2>
        <hr className='border-2 border-black w-1/4 mx-auto my-2'/>
        <div className="form-group flex flex-col justify-center gap-5 items-center">
            <input type="text" name='name' value={formData.name} onChange={changeHandler} id='name' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your name' />
            <input type="text" name='username' value={formData.username} onChange={changeHandler} id='username' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your username' />
            <input type="email" name='email' value={formData.email} onChange={changeHandler} id='email' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your email' />
            <input type="password" name='password' value={formData.password} onChange={changeHandler} id='password' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your password' />
            <input type="password" name='confirm_password' value={formData.confirm_password} onChange={changeHandler} id='confirm_password' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Confirm your password' />
            <input type="text" name='address' id='address' value={formData.address} onChange={changeHandler} className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your address' />
            <input type="number" name='phone' value={formData.phone} onChange={changeHandler} maxLength={10} minLength={10} id='phone' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter phone number' />

            
         </div>
      </form>
      <button onClick={()=> signUpForm()}  className='btn btn-primary py-4 px-4 rounded-full bg-red-500 font-normal text-white w-52 lg:w-[55%]'>Sign Up</button>
      <p>Already have account?  <Link className='text-blue-400' to="/login">Log In</Link> </p>
    </div>
  )
}
