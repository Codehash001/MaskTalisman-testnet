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
   <div className='w-screen h-screen flex'>
   
    <div className='w-[50%] h-screen p-10'>
    	<div className='w-full h-[50px] px-8 flex justify-between items-center'>
    	  <img src='/Logo.jpeg' className='h-[40px]'/>
    	  <div className='flex items-center justify-end'>
    	    <h1 className='text-[18px] font-medium mr-5'>Overview</h1>
    	    <h1 className='text-[18px] font-medium'>Mint</h1>
    	  </div>
    	</div>
    </div>
    
    <div className='w-[50%] h-screen  overflow-hidden p-10 rounded-lg border'>
      <img src='/bg.jpeg' className='h-screen w-auto object-cover'/>
    </div>
    
   </div>
  </>
  )
}

