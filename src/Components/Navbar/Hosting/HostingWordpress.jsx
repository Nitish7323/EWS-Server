import React, { useEffect, useState } from 'react'
import Card4 from '../Cards/Card4'

const HostingWordpress = () => {
      const [clicked1, setClicked1] = useState(false)
      const [clicked2, setClicked2] = useState(false)
      const [clicked3, setClicked3] = useState(false)

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      
  return (
    <div className=''>
      <p className='bg-accent-content w-full flex  mt- h-10 justify-center p-2'>Get a mighty .COM domain for just $6.79 for a limited time only →</p>
      <div className='bg-white  w-full flex  justify-center '>
        <div className=' w-1/2'>
            <img className='size-40 mt-20 ml-75 ' src="https://easywp-pages.namecheapcloud.net/_next/static/media/wordpress-easywp-logo-green.43ce01a3.svg" alt="" />
            <p className='text-black font-bold ml-18 text-6xl'>Hosting for WordPress</p>
            <p className='mt-5 text-xl text-gray-500 ml-22'>EasyWP is the fast, affordable Managed Hosting for WordPress <p className='ml-38'> solution for everyone.</p></p>
            <div className='mt-15 ml-25 font-bold'>
                <button className='border bg-red-600 h-15 w-55 text-2xl'>Try For Free</button>
                <button className='border h-15 w-55 text-2xl text-gray-500 bg-white/70 ml-10'>See Pricing Plans</button>
                <p className='text-gray-500 mt-2 ml-10'>1st month free trial.
                  <p className='ml-2'> No commitment.*</p> </p>
            </div>
            <img className='mt-10 -ml-10' src="https://easywp-pages.namecheapcloud.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwordpress-hero-free-trial%402x.2b54cdc2.png&w=640&q=95" alt="" />
            <p className='text-3xl mt-5 ml-10 font-bold text-gray-800'>Highly rated by the WordPress community</p>
            <p className='text-2xl mt-10 ml-20 font-bold  text-gray-500'>Join thousands of users that love EasyWP</p>
          <div className='flex justify-between'>
                <div className='text-black h-45 w-1/3'>
                <div className='flex mt-15 mb-2'>
                    <p className='mr-3 '>Review us on </p>
                    <img src="https://easywp-pages.namecheapcloud.net/_next/static/media/trustpilot-label.ebc95375.svg" alt="" />
                </div>
                  <p> Join many satisfied customers on Trustpilot and share your experience.</p>
            </div>

            <div className='text-black h-45 w-1/3 '>
                <div className='flex mt-15 mb-2'>
                    <p className='mr-3 '>Review us on </p>
                    <img src="https://easywp-pages.namecheapcloud.net/_next/static/media/reviewSignalLogo.b62807d6.svg" alt="" />
                </div>
                  <p> EasyWP ranked
                      a Top Tier WordPress Provider for 3 years in a row.</p>
            </div>
            </div>
            <p className='text-gray-600 font-normal text-6xl mt-10 ml-20 mb-8'>Get started from Rs0</p>
            <p className='text-2xl text-gray-400 ml-38 '>Simple, flexible pricing, no excuses.</p>
        <div className=' mt-10 ml-48 w-65 mb-20 border-2 border-accent '>
        <div className=' justify-between rounded bg-white/20 text-black  flex cursor-pointer '>
        <button onClick={()=>{setClicked1(!clicked1)}} className={`h-10 w-1/3 rounded ${clicked1 ? "bg-transparent":"bg-gray-400"}`}>Monthly</button>
        <button onClick={()=>{setClicked2(!clicked2)}} className={`h-10 w-1/3  rounded ${clicked2 ? "bg-gray-400":"bg-transparent"}`}>Yearly</button>
        <button onClick={()=>{setClicked3(!clicked3)}} className={`h-10 w-1/3  rounded ${clicked3 ? "bg-gray-400":"bg-transparent"}`}>Bi-Yearly</button>
        </div>
        </div>

        <Card4/>




        </div>
      </div>
    </div>
  )
}

export default HostingWordpress
