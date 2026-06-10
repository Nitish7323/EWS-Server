import React, { useEffect, useState } from 'react'
import Card3 from './Card3'

const Sharedhosting = () => {
    const [clicked1, setClicked1] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [clicked3, setClicked3] = useState(false)
   
  useEffect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
<div>
    <p className='flex justify-center items-center h-10 bg-accent '>Don't wait. Get Shared Hosting FREE for 30 days. Limited time only.</p>
<div className="relative h-115 w-full">
    <img
      className="w-full h-full object-cover"
      src="https://static.nc-img.com/hosting/frontend/07a0f36a-5ea2969460a6/modules/shared-landing/assets/images/shared-hero-banner.4981c973739c209429093cbe4ee2732c.svg"
      alt=""
    />

 <div className='absolute inset-0 flex flex-col items-center justify-center'>
      <p className="  text-white text-5xl font-bold">
      Shared Hosting
    </p>
    <p className='text-xl mt-3 '>Fast, secure, and affordable hosting plans for any budget</p>


    <div className='flex mt-10 gap-5 '>
        <div className='w-60 -ml-10 p-1 justify-between rounded bg-white/20 text-black  flex cursor-pointer '>
    <button onClick={()=>{setClicked1(!clicked1)}} className={`h-10 w-1/3 rounded ${clicked1 ? "bg-transparent":"bg-white"}`}>Monthly</button>
    <button onClick={()=>{setClicked2(!clicked2)}} className={`h-10 w-1/3  rounded ${clicked2 ? "bg-transparent":"bg-white"}`}>Yearly</button>
    <button onClick={()=>{setClicked3(!clicked3)}} className={`h-10 w-1/3  rounded ${clicked3 ? "bg-transparent":"bg-white"}`}>Bi-Yearly</button>
  </div>
  <div>
    {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn w-40 h-12 bg-white text-black" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Data Center
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>US United States</a></li>
  <li><a>Singapore (Asia)</a></li>
  <li><a>European Union</a></li>
  <li><a>United Kingdom</a></li>
</ul>
  </div>
    </div>

    <div className='mt-3 -ml-10'>
        <p >Save up to 71% with yearly and bi-yearly billing.</p>
    </div>

 </div>
 <div className='grid grid-cols-3 p-20'>
    <Card3/>
    <Card3/>
    <Card3/>
 </div>
</div>
</div>
  )
}

export default Sharedhosting
