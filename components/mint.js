import Image from 'next/image'
import { useState,useEffect } from "react"
import {Link} from 'react-scroll/modules';
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig, useAccount } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

export default function Mint () {

const account = useAccount()
  
  return (
  <>
   <div className='font-Archivo'>
   
    <div className='w-full h-full px-20 py-5 flex flex-col justify-center items-center rounded-lg border border-black-2 relative'>
    
    	  <h1 className='text-black text-[40px] font-bold mt-10'>Mint is Live!</h1>
    	  
    	  
    	  
    	  <div className='w-auto flex justify-center items-center relative mt-5'>
                <div className="z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-2 py-2 bg-black border rounded-md flex items-center justify-center text-white font-semibold">
                  <p className='text-sm'>
                    1 / 335                    
                  </p>
                </div>

                <img
		  alt="image"
                  src="/logoCL.jpeg"
                  className="object-cover sm:h-[240px] md:w-[240px] rounded-md border border-gray-100"
                />
    	  </div>
    	  
    	  <div className='w-full flex justify-between border-t border-b py-3 px-5 mt-5'>
    	  <p>Total</p>
    	    <div className="flex items-center space-x-3">
    	    <p>9.99 MATIC</p>
    	    <p>+ GAS</p>
    	    </div>
    	  </div>
    	  
    	  <div className='w-full h-full flex rounded-md border mt-2'>    	  
    	    <div className='px-5 py-3 border-r'>
    	      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#000'><path d="M5 11h14v2H5z"></path></svg>
    	    </div>
    	    
    	    <div className='py-3 px-20 border-r'><h1 className='text-lg'> 1 </h1></div>
    	    
    	    <div className='px-5 py-3 border-r'>
    	       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#000'><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
    	    </div>
    	    
    	    <div className='px-10 py-3 bg-black text-white font-semibold'> Mint </div>    	    
    	  </div>
    	  
    	  <div className="z-10 absolute top-2 left-2"><ConnectButton /></div>
    	</div>
    
    
   </div>
  </>
  )
}



