import React from 'react'

const Card2 = () => {
  return (
    <div>
     <div className='mr-8'>
       <div className="card w-86 bg-base-100/95 border-accent border-2 shadow-sm">
  <div className="card-body ">
    <div className='flex'>
        <span className="badge bg-green-600 badge-s  mr-2">NEW</span>
    </div>
    <div className="flex mt-6 justify-between">
      <h2 className="text-3xl font-bold underline">.mobile</h2>
      <div className='flex flex-col'>
        <span className="text-xl font-bold">Rs2,181.95</span>
        
      </div>
    </div>
    <ul className="my-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Charge your brand to Max</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Claim a .COM for just $6.79. New customers only.</span>
      </li>
    </ul>
    <div className="my-6">
      <button className="btn bg-red-50 btn-block text-xl">Check Avibility</button>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Card2
