import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({icon,price,renews,description,title,button,link,badge,subtitle}) => {
  return (
    <div>
            
            <Link to={link}>
            <div className='flex justify-between '>
            <div className="card bg-base-100 border border-accent w-86 shadow-sm h-120 rounded-3xl">
            <div className="card-body bg-amber-50 border rounded-2xl shadow-gray-700 text-black">
            <h2 className="card-title bg-green-500 w-20 p-1 rounded">{badge}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <p className='text-2xl font-bold text-gray-700'>{title}</p>
            <p className='text-l font-bold text-gray-600'>{subtitle}</p>
            <p className='mt-3 text-l font-bold text-gray-700 w-full'>{description}</p>
            <p className='text-2xl font-bold -mb-5 text-gray-700'>{price}</p>
            <p className='text-l font-bold -mb-5 text-gray-600'>{renews}</p>
            <button className='text-xl border-none bg-amber-100 h-13 rounded mt-6'>{button}</button>
            </div>
            </div>
            </div>
            </Link>
    </div>
  )
}

export default HomeCard
