import Image from 'next/image'
import { useState,useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-scroll/modules';
import Mint from './mint'
import Overview from './overview'


export default function Base () {


const[nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav);
}

const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
    setNav(false);
   }



  
  return (
  <>
   <div className='w-screen h-screen flex font-Archivo overflow-x-hidden relative'>
   
       	  <div className={nav? 'absolute top-0 z-20 filter backdrop-blur-lg md:w-[50%] w-full h-screen flex flex-col items-end' : 'hidden'}>
    	  	<div className='flex flex-col items-center bg-white w-[70%] h-screen md:p-8 p-5'>
    	  	   <div className='w-full h-auto flex items-center justify-between'> 
    	  	     <img onClick={() => toggleTab(1)} src='/Logo.jpeg' className='h-[40px]'/>
    	  	     <AiOutlineClose size={18} className='cursor-pointer' onClick={handleNav}/>
    	  	   </div>
    	  	   <h1 onClick={() => toggleTab(1)} className='md:text-[25px] text-[15px] mt-5 cursor-pointer'>Home</h1>
    	  	   <a href='/disclaimer'><h1 className='md:text-[25px] text-[15px] mt-5'>Disclaimer</h1></a>
    	  	   <a href='/policy'><h1 className='md:text-[25px] text-[15px] mt-5'>Privacy Policy</h1></a>
    	  	   <a href='/terms'><h1 className='md:text-[25px] text-[15px] mt-5'>Terms Condition</h1></a>
    	  	   <button type="button" className="mt-10 text-white dark:text-black font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-sm text-sm px-5 py-2.5 text-center"
    	  onClick={() => toggleTab(3)}>
    	  Mint an NFT
    	  </button>
    	  	</div>
    	  </div>
   
    <div className='w-full md:w-[50%] h-screen px-5 pt-5 filter backdrop-blur-sm md:backdrop-blur-none'>
    	<div className='w-full h-[50px] md:px-8 px-2 flex justify-between items-center bg-white '>
    	  <img onClick={() => toggleTab(1)} src='/Logo.jpeg' className='h-[40px]'/>
    	  <div className='flex items-center justify-end'>
    	    <h1 onClick={() => toggleTab(2)} className='text-[18px] font-medium cursor-pointer'>Overview</h1>
    	    <h1 onClick={() => toggleTab(3)} className='text-[18px] font-medium mx-5 md:mx-8 cursor-pointer'>Mint</h1>
    	    <AiOutlineMenu size={18} className='cursor-pointer' onClick={handleNav}/>
    	  </div>
    	  
    	</div>
    	
    	{
    	toggleState == 3 ? 
    	(
    	<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[10px]'>
    	<Mint/>
    	</div>
    	): toggleState == 2 ? 
    	(
    	<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-6'>
    	<Overview/>
    	</div>
    	) :
    	(<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[10px] overflow-hidden'>
    	  <h1 className='text-lg text-gray-800'>Welcome to</h1>
    	  <h1 className='text-black md:text-[64px] text-3xl font-bold md:mt-6'>MaskTalisman</h1>
    	  <h1 className='text-xl font-medium mt-5 text-center'>A must-see masterpiece that you won't want to miss!</h1>
    	  
    	   <div className='md:hidden h-auto w-full'>
      <img src='/bg.jpeg' className='w-full h-auto object-cover rounded-md'/>
    </div>
    
    	  <button type="button" className="mt-10 text-white dark:text-black font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-sm text-sm px-5 py-2.5 text-center"
    	  onClick={() => toggleTab(3)}>
    	  Grab Your NFT now
    	  </button>
    	</div>)
    	}
    </div>
    
    <div className='hidden md:flex w-[50%] h-screen  overflow-hidden stickey top-0 right-0 z-30'>
    <div className='h-full p-8'>
      <img src='/bg.jpeg' className='h-full w-auto object-cover rounded-lg'/>
    </div>
    </div>
    
   
   </div>
  </>
  )
}

