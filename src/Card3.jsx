import React, { useState } from 'react'


const Card3 = () => {
    const [clicked1, setClicked1] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [clicked3, setClicked3] = useState(false)
  return (
    <div>
      <div className='mr-8'>
       <div className="card w-86 bg-base-300 border-accent border-2 shadow-sm">
  <div className="card-body">
    <div className='flex'>
        <span className="badge badge-s badge-warning">55%off</span>
    </div>
    <div className=" mt-6 justify-between">
      <h2 className="text-3xl font-bold mb-5">Stellar</h2>
      <span className="text-4xl font-light ">Rs216.49/mo Billed yearly</span>
    </div>
    


    <div className='flex mt-10 gap-5 '>
    <div className='w-full  p-1 justify-between rounded bg-white/50 text-black  flex cursor-pointer '>
    <button onClick={()=>{setClicked1(!clicked1)}} className={`h-10 w-1/3 rounded ${clicked1 ? "bg-transparent":"bg-white"}`}>Monthly</button>
    <button onClick={()=>{setClicked2(!clicked2)}} className={`h-10 w-1/3 rounded ${clicked2 ? "bg-transparent":"bg-white"}`}>Yearly</button>
    <button onClick={()=>{setClicked3(!clicked3)}} className={`h-10 w-1/3 rounded ${clicked3 ? "bg-transparent":"bg-white"}`}>Bi-Yearly</button>
  </div>
  </div>





    <div className="my-6">
      <button className="btn bg-red-700 btn-block text-xl ">Buy Now</button>
    </div>
    <ul className="my-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>3 websites</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Free domain name for 1 year</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>20 GB SSD storag</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>30 mailboxes</span>
      </li>
      <p className='text-gray-500 text-xl'>Build with</p>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI for WordPress</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI Website Builde</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Sitejet AI Builder</span>
      </li>
    </ul>
  </div>
</div>
    </div>
    </div>
  )
}

export default Card3
