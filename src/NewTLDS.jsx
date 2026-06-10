import React from 'react'
import { Link } from 'react-router-dom'
import Card2 from './Card2'

const NewTLDS = () => {
  return (
    <div>
  <div className="relative h-90 w-full">
    <img
      className="w-full h-full object-cover"
      src="https://static.nc-img.com/pp/cms/hero-domains-explore/images/hero.149b368a316e4b8bdfe5db63760a743d.svg"
      alt=""
    />

<div className='absolute inset-0 flex flex-col items-center justify-center'>
      <p className="  text-white text-5xl font-bold">
      Discover new TLDs
    </p>
    <p className='text-2xl mt-3 underline'>Like .mobile, the latest online hot-spot</p>
     <div className='flex border-2 h-15 mt-15 ml-5'>
         <input className='p-5  h-15  w-160 bg-white text-2xl text-gray-500 ' type="text" placeholder='Find your New Domain Name' />
         <button className='flex items-center    w-20 bg-red-700 p-2'>Search</button>
       </div>
    </div>
    <div className='bg-accent-content  h-18'>
        <Link
      to="/Domainname"
      className="relative  left-4  px-4 py-2 rounded"
      >
      <div className='flex '>
        Domain  >
      <p  className='ml-5'>New TLD'S</p>
      </div>
     </Link>
    </div>
  
  <div className='flex justify-center  mt-5 p-5'>
    <p className='  text-white h-50 w-138 items-stretch '> <p className='ml-2'>Discover the latest top-level domains (TLDs) right here, and check out our </p> upcoming releases – they’ll be coming to a screen near you soon. You can also view all our domain extensions in a handy list. Register the freshest TLDs in the world, and be backed by our 24/7 customer support every step of the way. It’s why we’re trusted to manage over 10 million domains worldwide. So,<p className='flex justify-center'> what are you waiting for? Start exploring...</p></p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5 ">
  <Card2 />
  <Card2 />
  <Card2 />
  <Card2 />
  <Card2 />
  <Card2 />
  <Card2 />
  <Card2/>
</div>
<p className='text-4xl mt-40 flex justify-center font-black '>Coming Soon</p>
<div className='flex justify-between w-1/2 ml-90 h-13 rounded items-center  bg-accent-content p-5 mt-10'>
  <p className='text-4xl'>.si </p>
  <p className='text-xl'>Launch time - 2nd quarter</p>
</div>
</div>
</div>
  )
}

export default NewTLDS
