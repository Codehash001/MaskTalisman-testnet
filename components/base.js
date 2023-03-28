import Image from 'next/image'
import { useState,useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-scroll/modules';


export default function Base () {


const[nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav);
}



  
  return (
  <>
   <div className='w-screen h-screen flex font-Archivo'>
   
    <div className='w-[50%] h-screen p-5'>
    	<div className='w-full h-[50px] px-8 flex justify-between items-center'>
    	  <img src='/Logo.jpeg' className='h-[40px]'/>
    	  <div className='flex items-center justify-end'>
    	    <h1 className='text-[18px] font-medium mr-5'>Overview</h1>
    	    <h1 className='text-[18px] font-medium'>Mint</h1>
    	  </div>
    	</div>
    	
    	<div className='w-full h-full px-8 flex flex-col justify-center items-center'>
    	  <h1 className='text-lg text-gray-800 mb-2'>Welcome to</h1>
    	  <h1 className='text-[60px] font-bold'>MaskTailsman</h1>
    	</div>
    </div>
    
    <div className='w-[50%] h-screen  overflow-hidden rounded-lg'>
      <img src='/bg.jpeg' className='h-screen w-auto object-cover'/>
    </div>
    
   </div>
  </>
  )
}

