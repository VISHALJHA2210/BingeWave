import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {user, signUp}=UserAuth()

    const navigate=useNavigate()

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await signUp(email,password)
            navigate('/')
        }   
        catch(error){
            console.log(error);
        }
    }

  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/121450d3-2d2f-41a9-acd6-b050ca0e0424/IN-en-20220801-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
            <div className='w-full h-screen bg-black opacity-60 top-0 left-0 fixed'></div>
            <div className='fixed w-full px-4 py-24 z-[50]'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-md'>
                    <div className='max-w-[320px] mx-auto py-12'>
                        <h1 className='text-3xl font-bold '>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e)=> setEmail(e.target.value)} className='outline-none p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' autoComplete='email'/>
                            <input onChange={(e)=> setPassword(e.target.value)} className='outline-none p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password'/>
                            <button className='bg-blue-700 py-2 px-3 my-6 rounded font-bold'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm'>
                                <p className='text-gray-500'><input className='mr-2' type="checkbox"/>Remember me</p>
                                <p className='text-gray-500'>Need Help?</p>
                            </div>
                            <div className='mt-5'>
                                <p className='py-8'> 
                                    <span className='text-gray-600'>
                                        Already subscribed to Netflix?
                                    </span>{' '}
                                    <Link to='/login' className='underline'>Log In</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>  
        </div>
    </>

  )
}
