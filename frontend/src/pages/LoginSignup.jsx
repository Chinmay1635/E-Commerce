import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';


export const LoginSignup = () => {

  const navigate = useNavigate();
  let [formData, setFormData] = useState({  
          email: '',
          password: '',
          });
      
      const changeHandler = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
      const loginForm =  () => {
          fetch('https://e-commerce-csrj.onrender.com/api/users/login', {
              body: JSON.stringify(formData),
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: "include",
          })
          .then((response) => response.json())
          .then((data) => {
             if(data.status === 'success'){
              console.log('login successfull')
              Cookies.set('token', data.token, { expires: 7 });
              navigate('/');
             }else{
                console.log(data.message);
             }
          });
  
          
        
      };

  return (
    <div className='container p-16 w-full lg:w-2/4 bg-slate-100 m-auto  flex flex-col gap-8 justify-center items-center'>
      <form action="">
        <h2 className='text-2xl text-center'>Login</h2>
        <hr className='border-2 border-black w-1/4 mx-auto my-2'/>
         <div className="form-group flex flex-col justify-center gap-5 items-center">
         <input type="email" name='email' value={formData.email} onChange={changeHandler} id='email' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your email' />
    
    <input type="password" name='password' value={formData.password} onChange={changeHandler} id='password' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your password' />
  
    
         </div>
      </form>
      <button onClick={() => loginForm()} className='btn btn-primary py-4 px-4 rounded-full bg-red-500 font-normal text-white w-52 lg:w-[55%]'>Login</button>
      <p>Don't have account? <Link to="/signup" className='text-blue-400'>Sign Up</Link> </p>
    </div>
  )
}
