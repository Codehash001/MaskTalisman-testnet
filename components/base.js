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
    <div className='w-[50%] h-screen'></div>
    <div className='w-[50%] h-screen  overflow-hidden'>
      <img src='/bg.jpeg' className='h-screen w-auto object-cover'/>
    </div>
   </div>
  </>
  )
}

