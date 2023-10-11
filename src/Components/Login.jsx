import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    
    const[isLoggedIn,setIsLoggedIn] = useState(true);
    const handleToggle = () =>{
        setIsLoggedIn(!isLoggedIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
            alt="bg-img" className='brightness-50' />
        </div>

        <form className='bg-black py-8 px-10 absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80'>
            <h1 className='text-white text-4xl font-semibold my-4 py-5'> {isLoggedIn?"Sign In":"Sign Up"}</h1>
            {!isLoggedIn && <input type="text" placeholder='Your Name' className='px-4 py-3 my-2 w-full bg-gray-800 outline-none rounded-lg text-white'/>}
    
            <input type="text" placeholder='Email Address' className='px-4 py-3 my-2 w-full bg-gray-800 outline-none rounded-lg text-white'/>
            <input type="text" placeholder='Password' className='px-4 py-3 my-2 w-full  bg-gray-800 outline-none rounded-lg text-white' />
            <button className='bg-red-700 text-white w-full p-3 my-8 rounded-lg'>{isLoggedIn?"Sign In":"Sign Up"}</button>
            <p className='text-white my-3 py-3 px-4 cursor-pointer' onClick={handleToggle}>
            {isLoggedIn?"New to Netflix? Sign up now.":"Already Registered? Sign In Here...."}</p>
        </form>
    </div>
  )
}

export default Login