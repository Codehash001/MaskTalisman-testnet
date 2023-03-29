import Image from 'next/image'
import { useState,useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-scroll/modules';
import Mint from './mint'
import Overviwe from './overview'


export default function Overview () {


  
  return (
  <>
   <div className='w-screen h-screen flex font-Archivo'>
   
    <div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[150px]'>
    	  <h1 className='text-black text-[64px] font-bold'>Overview</h1>
    	</div>
    
    
   </div>
  </>
  )
}

