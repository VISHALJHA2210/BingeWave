import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import logo from "../assets/logo.png";
import account from "../assets/account.png"

export const Navbar = () => {

  const {user,logOut}=UserAuth();
  const navigate=useNavigate();

  const handleLogout = async ()=>{
    try{
      await logOut()
      navigate('/')
    }
    catch(error){
      console,log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-2 sm:p-4 z-[100] w-full fixed sm:absolute backdrop-blur-md sm:backdrop-blur-none border-b sm:border-none border-neutral-700/80'>
        <Link to='/'>
          <div className="flex items-center flex-shrink-0">
              <img className="w-10 h-10 mr-2 bg-transparent rounded-full" src={logo} alt="logo" />
              <h1 className='hidden sm:block  text-blue-700 text-4xl font-bold cursor-pointer tracking-wider'>BingeWave</h1>
          </div>
        </Link>
        {user?.email ? 
        //logged in user
        <div>
            
            <div className="flex items-center flex-shrink-0">
              <Link to='/account'>
                  <div className='flex'>
                    <img className="hidden sm:block w-10 h-10 mr-2 bg-transparent rounded-md" src={account} alt="logo" />
                    <button className='text-white pr-6'>Account</button>
                  </div>
              </Link>
              <button onClick={handleLogout} className='bg-blue-700 px-6 py-2 cursor-pointer text-white'>LogOut</button>
            </div>
        </div>    :
        //no user  
        <div>
            <Link to='/login'>
              <button className='text-white pr-6'>Log In</button>
            </Link>
            <Link to ='/signup'>
              <button className='bg-blue-700 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
        </div>
        }
    </div>
  )
}
