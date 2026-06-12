import React, { useEffect } from 'react'
import Card from '../Cards/Card'

const Domainname = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className=' justify-center'>
        <div className='relative w-full'>
            <img src="https://static.nc-img.com/pp/cms/domain-name-search/images/banner.a6349ec79a534f740bebc287b2851abc.svg" alt="" />
        <div className='bg-accent-content w-full absolute flex  mt- h-10 justify-center p-2'>
Transfer all your domains to EWS Server. No hidden extras, no renewal scares --→ </div>
        </div>

    <div className='flex text-4xl my-10 justify-center'>Search for a domain name</div>
    <div className="flex justify-center ">
        <label className="input w-1/2 h-13 text-2xl border-accent ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
    </div>


<div className='flex mt-2 justify-center'>
    Is your domain name with a different registrar? Transfer it today
</div>

<div className='flex text-4xl mt-18 justify-center'>
    Discover a huge variety of domains
</div>


<div className='flex  justify-center mt-8 '>
    Check domain name availability and secure yours now.
</div>


<div className='flex  justify-center mt-8 '>
    <fieldset className="fieldset bg-base-100 border-accent rounded-box w-64 border p-4">
  <legend className="fieldset-legend"> options</legend>
  <label className="label">
    <input type="checkbox" defaultChecked className="toggle" />
    Popular/Deals
  </label>
</fieldset>
</div>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
</div>

    </div>
  )
}

export default Domainname
