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
   <div className='w-screen h-screen flex font-Archivo'>
   
    <div className='w-[50%] h-screen px-5 pt-5'>
    	<div className='w-full h-[50px] px-8 flex justify-between items-center'>
    	  <img src='/Logo.jpeg' className='h-[40px]'/>
    	  <div className='flex items-center justify-end'>
    	    <h1 onClick={() => toggleTab(2)} className='text-[18px] font-medium mr-5'>Overview</h1>
    	    <h1 onClick={() => toggleTab(3)} className='text-[18px] font-medium'>Mint</h1>
    	  </div>
    	</div>
    	
    	{
    	toggleState == 3 ? 
    	(
    	<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[50px]'>
    	<Mint/>
    	</div>
    	): toggleState == 2 ? 
    	(
    	<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[50px]'>
    	<Overview/>
    	</div>
    	) :
    	(<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[150px]'>
    	  <h1 className='text-lg text-gray-800'>Welcome to</h1>
    	  <h1 className='text-black text-[64px] font-bold'>MaskTailsman</h1>
    	  <h1 className='text-xl font-medium mt-3'>A must-see masterpiece that you won't want to miss!</h1>
    	  <button type="button" className="mt-10 text-white dark:text-black font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-sm text-sm px-5 py-2.5 text-center">
    	  Grab Your NFT now
    	  </button>
    	</div>)
    	}
    </div>
    
    <div className='w-[50%] h-screen  overflow-hidden rounded-lg'>
      <img src='/bg.jpeg' className='h-screen w-auto object-cover'/>
    </div>
    
   </div>
  </>
  )
}

