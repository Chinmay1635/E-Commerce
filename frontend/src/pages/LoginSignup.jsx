import React from 'react'

export const LoginSignup = () => {
  return (
    <div className='container w-2/4 bg-slate-100 m-auto  flex justify-center items-center'>
      <form action="">
        <h2 className='text-2xl text-center'>Login</h2>
        <hr className='border-2 border-black w-1/4 mx-auto my-2'/>
         <div className="form-group flex flex-col justify-center gap-5 items-center">
         <input type="email" name='email' id='email' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your email' />
    
    <input type="password" name='password' id='password' className='form-control border-2 border-black rounded-full px-4 py-2' placeholder='Enter your password' />
  
    <button type='submit' className='btn btn-primary py-4 px-4 rounded-full bg-red-500 font-normal text-white w-52 lg:w-[55%]'>Login</button>
         </div>
      </form>
    </div>
  )
}
