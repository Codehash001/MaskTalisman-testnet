import Image from 'next/image'
import { useState,useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-scroll/modules';


export default function Mint () {


  
  return (
  <>
   <div className='font-Archivo'>
   
    <div className='w-full h-full p-20 flex flex-col justify-center items-center rounded-lg border border-black-2'>
    	  <h1 className='text-black text-[30px] font-bold'>Mint is Live!</h1>
    	  
    	  <div className='w-auto flex justify-center items-center'>
                <div className="z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-purple rounded-md flex items-center justify-center text-white font-semibold">
                  <p>
                    1 / 335                    
                  </p>
                </div>

                <img
		  alt="image"
                  src="/logoCL.jpeg"
                  className="object-cover w-full mt-auto mb-0 sm:h-[280px] md:w-[250px] rounded-md border border-gray-100"
                />
    	  </div>
    	  
    	  <div className='w-full h-full flex rounded-md border mt-10'>    	  
    	    <div className='px-5 py-3 border-r'>
    	      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#000'><path d="M5 11h14v2H5z"></path></svg>
    	    </div>
    	    
    	    <div className='py-3 px-20 border-r'><h1 className='text-lg'> 1 </h1></div>
    	    
    	    <div className='px-5 py-3 border-r'>
    	       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#000'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
    	    </div>
    	    
    	    <div className='px-10 py-3 bg-black text-white'> Mint </div>    	    
    	  </div>
    	</div>
    
    
   </div>
  </>
  )
}



