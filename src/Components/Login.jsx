import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';

const Login = () => {
    
    const[isLoggedIn,setIsLoggedIn] = useState(true);
    const[validmsg,setValidmsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleToggle = () =>{
        setIsLoggedIn(!isLoggedIn);
    }

    const handleClick = () =>{
        const message =   validate(email.current.value,password.current.value);
        console.log(message);
        setValidmsg(message);
    }
     
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
            alt="bg-img" className='brightness-50 md:h-auto min-h-screen' />
        </div>

        <form className='bg-black py-8 px-10 absolute md:w-3/12 w-full my-36 mx-auto right-0 left-0 bg-opacity-80'
        onSubmit={(e)=>e.preventDefault()}>
            
            <h1 className='text-white text-4xl font-semibold my-4 py-5'> {isLoggedIn?"Sign In":"Sign Up"}</h1>
            
            {!isLoggedIn && <input type="text" placeholder='Your Name' className='px-4 py-3 my-2 w-full bg-zinc-800 outline-none rounded-lg text-white'/>}
    
            <input ref={email} type="text" placeholder='Email Address' className='px-4 py-3 my-2 w-full bg-zinc-800 outline-none rounded-lg text-white'/>
            
            <input ref={password} type="text" placeholder='Password' className='px-4 py-3 my-2 w-full  bg-zinc-800 outline-none rounded-lg text-white' />

            <p className='text-red-700 font-semibold py-2'>{validmsg}</p>
            
            <button className='bg-red-700 text-white w-full p-3 my-8 rounded-lg' onClick={handleClick}>{isLoggedIn?"Sign In":"Sign Up"}</button>

            
            <p className='text-white my-3 py-3 px-4 cursor-pointer' onClick={handleToggle}>
            {isLoggedIn?"New to Netflix? Sign up now.":"Already Registered? Sign In Here...."}</p>
        </form>
    </div>
  )
}

export default Login