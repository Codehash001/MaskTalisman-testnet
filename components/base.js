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
   }



  
  return (
  <>
   <div className='w-screen h-screen flex font-Archivo overflow-hidden'>
   
    <div className='w-full md:w-[50%] h-screen px-5 pt-5 filter backdrop-blur-sm md:backdrop-blur-none'>
    	<div className='w-full h-[50px] px-8 flex justify-between items-center bg-white'>
    	  <img src='/Logo.jpeg' className='h-[40px]'/>
    	  <div className='flex items-center justify-end'>
    	    <h1 onClick={() => toggleTab(2)} className='text-[18px] font-medium cursor-pointer'>Overview</h1>
    	    <h1 onClick={() => toggleTab(3)} className='text-[18px] font-medium mx-5 cursor-pointer'>Mint</h1>
    	    <AiOutlineMenu size={18} className='cursor-pointer'/>
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
    	<div className='w-full h-full px-8 flex flex-col justify-center items-center'>
    	<Overview/>
    	</div>
    	) :
    	(<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[150px]'>
    	  <h1 className='text-lg text-gray-800'>Welcome to</h1>
    	  <h1 className='text-black md:text-[64px] text-3xl font-bold'>MaskTalisman</h1>
    	  <h1 className='text-xl font-medium mt-3'>A must-see masterpiece that you won't want to miss!</h1>
    	  <button type="button" className="mt-10 text-white dark:text-black font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-sm text-sm px-5 py-2.5 text-center"
    	  onClick={() => toggleTab(3)}>
    	  Grab Your NFT now
    	  </button>
    	</div>)
    	}
    </div>
    
    <div className='hidden md:flex w-[50%] h-screen  overflow-hidden'>
    <div className='h-full p-8'>
      <img src='/bg.jpeg' className='h-full w-auto object-cover rounded-lg'/>
    </div>
    </div>
    
    <div className='hidden h-screen w-full absolute top-0 -z-20'>
      <img src='/bg.jpeg' className='h-full w-auto object-cover'/>
    </div>
   </div>
  </>
  )
}

