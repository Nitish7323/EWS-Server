
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className=''>

      <div className='bg-accent-content w-full hover:underline  flex  h-10 justify-center p-2'>
      Grab your first .online domain for just $0.98 and any additional ones for $2.88  --→ 
      </div >
      <div className=''>
        <div className='relative  h-150 w-full '>
        <img className='h-full w-full object-cover' src="https://static.nc-img.com/pp/cms/home-reskinned/images/hero-decor-img.1b428d4dbf6eadc91ac4514250396213.svg" alt="" />
        <div className='absolute inset-0 flex justify-center '>
            <div>
                <p className='mt-45 text-6xl ml-18'>Make more online, for less</p>
                <div className='mt-10 ml-75 border-2 w-66 border-accent  flex  '>
                    <button className="btn btn-xs h-10 bg-amber-50  sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ">Register</button>
                    <button className="btn btn-xs h-10 sm:btn-sm  bg-amber-50 md:btn-md lg:btn-lg xl:btn-xl">Transfer</button>
                </div>

                <div className='flex border-2 h-13 w-210 mt-15 justify-between rounded ml-5'>
                <input className='p-5 w-full text-2xl ' type="text" placeholder='Register a Domain Name to Start' />
                <button className='w-20 bg-red-700 p-2'>Search</button>
                </div>

                <div className='flex justify-center gap-5 mt-5'>
                    <p className='bg-white/10 rounded hover:underline'>.COM only Rs644.71* </p>
                    <p className='bg-white/10 rounded hover:underline'>.NET Rs1184.97</p>
                </div>

            </div>
           
        </div>

        <div className='bg-white'>
          <div className='flex justify-center '>
          <p className='text-gray-700 text-3xl font-bold'>Buy a domain and everything else you need</p>
          </div>
          <div className='flex justify-center'>
            <p className='text-gray-700 text-2xl font-bold mt-10'>Explore current top deals</p>
          </div>
          <p className='text-gray-500 text-xl ml-100 mt-3'>Check out our best deals across our product range, and get what your website needs.</p>


          <div className='grid grid-cols-3 gap-7 p-50 -mt-20'>



            <Link to="/Sharedhosting">
            <div className='flex justify-between  '>
            <div className="card bg-base-100 border-2 border-accent w-86 shadow-sm h-120 rounded-3xl">
            <img className='object-cover w-full h-120 relative rounded-2xl' src="https://static.nc-img.com/pp/cms/home-reskinned/images/promo-card.00bd047838b0328804cecac7222a8e97.svg" alt="" />
            <div className="card-body absolute">
            <h2 className="card-title bg-green-500  w-20 p-1 rounded">Free trial</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hard-drive-icon lucide-hard-drive"><path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/></svg>
            <p className='mt-5 text-2xl font-bold'>Launch your website today with 1 month of FREE Shared Hosting.</p>
            <button className='text-xl bg-white/5 border-2 h-13 rounded mt-35'>Start Trail</button>
            </div>
            </div>
            </div>
            </Link>


            


            <Link to = "/BusinessEmail">
            <div className='flex justify-between '>
            <div className="card bg-base-100 border border-accent w-86 shadow-sm h-120 rounded-3xl">
            <div className="card-body bg-amber-50 border rounded-2xl shadow-gray-700 text-black">
            <h2 className="card-title bg-green-500 w-20 p-1 rounded">Free trial</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <p className='text-2xl font-bold text-gray-700'>Private Email</p>
            <p className='text-l font-bold text-gray-600'>Professional Email</p>
            <p className='mt-3 text-l font-bold text-gray-700 w-full'> Send your brand out there with an email address that matches your domain. Get perfect email plan for individuals and small teams and use it free for a month!</p>
            <p className='text-2xl font-bold -mb-5 text-gray-700'>Rs0.00/1 mo</p>
            <p className='text-l font-bold -mb-5 text-gray-600'>Renews from Rs118.68/mo</p>
            <button className='text-xl border-none bg-amber-100 h-13 rounded mt-6'>Get it Free</button>
            </div>
            </div>
            </div>
            </Link>


            <div className='flex justify-between '>
            <div className="card bg-base-100 border border-accent w-86 shadow-sm h-120 rounded-3xl">
            <div className="card-body bg-amber-50 border rounded-2xl shadow-gray-700 text-black">
            <h2 className="card-title bg-red-500 w-20 p-2 rounded">17%off</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <p className='text-2xl -mt-2 font-bold text-gray-700'>.NYC</p>
            <p className='text-l font-bold text-gray-600'>Domains</p>
            <p className='mt-3 text-l font-bold text-gray-700 w-full'>  Take your Big Apple brand to the next level online.</p>
            <p className='text-2xl mt-6 -mb-5 font-bold text-gray-700'>Rs668.04/yr</p>
            <p className='text-l font-bold -mb-5 text-gray-600'>Instead of Rs3156.46/yr</p>
            <button className='text-xl border-none bg-amber-100 h-13 rounded mt-6'>Get offer</button>
            </div>
            </div>
            </div>


            <div className='flex justify-between '>
            <div className="card bg-base-100 border border-accent w-86 shadow-sm h-120 rounded-3xl">
            <div className="card-body bg-amber-50 border rounded-2xl shadow-gray-700 text-black">
            <div className='flex gap-3'>
              <h2 className="card-title bg-green-500 w-20 p-1 rounded">US only</h2>
              <h2 className="card-title bg-red-500 w-20 p-1 rounded">Free LLC</h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            <p className='text-2xl font-bold text-gray-700'>Business Starter Kit</p>
            <p className='text-l font-bold text-gray-600'>Business Tool</p>
            <p className='mt-3 text-l font-bold text-gray-700 w-full'> Everything you need to start your business — LLC, domain, website, and marketing tools, all for FREE. It's never been easier to take the first step.</p>
            <p className='text-2xl -mb-5 font-bold text-gray-700'>Free </p>
            <p className='text-l -mb-5 font-bold text-gray-600'>Just Pay State Fee</p>
            <button className='text-xl border-none bg-amber-100 h-13 rounded mt-6'>Get Started</button>
            </div>
            </div>
            </div>


            <Link to="/HostingWordpress">
            <div className='flex justify-between '>
            <div className="card bg-base-100 border border-accent w-86 shadow-sm h-120 rounded-3xl">
            <div className="card-body bg-amber-50 border rounded-2xl shadow-gray-700 text-black">
            <h2 className="card-title bg-green-500 w-20 p-1 rounded">Free trial</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-whole-word-icon lucide-whole-word"><circle cx="7" cy="12" r="3"/><path d="M10 9v6"/><circle cx="17" cy="12" r="3"/><path d="M14 7v8"/><path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/></svg>
            <p className='text-2xl font-bold text-gray-700'>EasyWP Starter</p>
            <p className='text-l font-bold text-gray-600'>Hosting For Wordpress</p>
            <p className='mt-3 text-l font-bold text-gray-700 w-full'> Get a month of FREE web hosting with our EasyWP Starter trial offer.</p>
            <p className='text-2xl font-bold -mb-7 text-gray-700'>Rs0.00/1st mo</p>
            <p className='text-l font-bold -mb-7 text-gray-600'>Renews for Rs945.60/mo</p>
            <button className='text-xl border-none bg-amber-100 h-13 rounded mt-6'>Try Now</button>
            </div>
            </div>
            </div>
            </Link>


            <Link to="/Domainname">
            <div className='flex justify-between '>
            <div className="card bg-base-100 border border-accent w-86 shadow-sm h-120 rounded-3xl">
            <div className="card-body bg-amber-50 border rounded-2xl shadow-gray-700 text-black">
            <h2 className="card-title bg-green-500 w-30 p-1 rounded">NEWCOM679</h2>
             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <p className='text-2xl font-bold text-gray-700'>.COM</p>
            <p className='text-l font-bold text-gray-600'>Domains</p>
            <p className='mt-3 text-l font-bold text-gray-700 w-full'>Claim a .COM for just $6.79. New customers only.</p>
            <p className='text-2xl font-bold -mb-7 text-gray-700'>Rs649.86/yr </p>
            <p className='text-l font-bold -mb-7 text-gray-600'>Instead of Rs1433.71/yr</p>
            <button className='text-xl border-none bg-amber-100 h-13 rounded mt-6'>Get offer</button>
            </div>
            </div>
            </div>
            </Link>


          </div>

          <div className='flex justify-center'>
            <div >
            <img className='ml-20' src="data:image/jpeg;base64,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" alt="" />
            <span className='text-gray-700 font-bold text-3xl'>Rated 4.5 out of 5 by 2M+ customers</span>
            <span className='text-xl flex -ml-15 gap-1 text-gray-600 mt-3'>Real customer ratings and reviews at Shopper Approved. <span className='text-red-500'>Read them →</span></span>
            <img className='ml-45 mt-5' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMTQuNiA5Ni40Ij48c3R5bGU+LnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMDI2M2F9LnN0MXtmaWxsOiNmODhkMmJ9LnN0MntmaWxsOiMwMDI2M2F9PC9zdHlsZT48ZyBpZD0iSXNvbGF0aW9uX01vZGUiPjxnIGlkPSJMYXllcl8xXzFfIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTUuOCA3OS4yYzQuMiAwIDcuNiAzLjQgNy42IDcuNnMtMy40IDcuNi03LjYgNy42Yy00LjIgMC03LjYtMy40LTcuNi03LjYgMC00LjIgMy40LTcuNiA3LjYtNy42ek00NC42IDc5LjJjNC4yIDAgNy42IDMuNCA3LjYgNy42cy0zLjQgNy42LTcuNiA3LjZjLTQuMiAwLTcuNi0zLjQtNy42LTcuNi0uMS00LjIgMy40LTcuNiA3LjYtNy42ek0zNC44IDc1LjFoMTguN0M1Ny42IDQ3LjYgNjkuMSAyMi41IDg2IDEuOSA2Mi4yIDIwLjQgNDQuMSA0NS44IDM0LjggNzUuMXpNMTMuMiA3NS4xaDEyLjNjLTQuNi0yOC40LTEzLTQ1LjItMTMtNDUuMmgxMC45YzIuMyAwIDIuOCAxLjggMy40IDMgLjkgMiAzLjQgOC43IDUuMSAxMy41IDYuMS05LjEgMTMuMy0xNy42IDIxLjItMjUuMWgtNDVDMy41IDIxLjMtLjEgMjUuNC41IDMwbDUgMzguNWMuNiAzLjcgMy44IDYuNiA3LjcgNi42eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDggMjguOGg5LjV2M0gxNDh6TTI1Mi4zIDI0LjNsLjUtMy4xaC05LjRzLTQtLjEtNC40IDQuMWMtLjMgMy42LTEuNiAxMC4yLTEuNiAxMC4ycy0uNiAzLjEgMi45IDMuMmg5LjZsLjUtMy4yaC04LjJjLS42IDAtLjktLjUtLjktLjlsLjUtMy4xaDguMWwuNS0zLjJoLThsLjUtMy4zYy4xLS4zLjQtLjggMS4xLS44bDguMy4xek0yNzEuMSAyMS4yaC05LjJsLTIuOCAxNy42aDMuN2wxLjEtNi42aDMuM2wyLjIgNi42aDQuM2wtMi43LTdjMi44LS4xIDQuMi0zLjcgNC4yLTYuMnYtLjdjLjEtMi0xLjUtMy43LTQuMS0zLjd6bTAgNi42Yy0uMy45LTEgMS40LTEuNyAxLjRoLTQuOWwuOC01SDI3MC4yYzEuNCAwIDEuNCAxLjYgMS4zIDIuMmwtLjQgMS40eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDQuMiAzOC44bDIuOC0xNy42aDMuOEwxNDggMzguOHpNMTU0LjggMzguOGwyLjgtMTcuNmgzLjhsLTIuOCAxNy42ek0xNjkuNCAyOC4xbC0uNiAzLjZjLS40IDIuNS0uNCA3IDUuMSA3LjFoMy41YzMuNiAwIDYuNC0yLjUgNy4zLTYuOWwuNS0zLjRjLjctNC45LTEuMS02LjgtMy45LTcuMy0uOS0uMi0yLS4yLTMuOC0uMi00LjMtLjEtNyAyLjEtOC4xIDcuMXptMy4yIDMuOGwuNi0zLjVjLjYtMy4xIDItNC4yIDMuOC00LjJoMi4yYzEuNyAwIDIuNiAxLjEgMi40IDQuMS0uMSAxLjMtLjYgMy43LS42IDMuNy0uNSAyLjYtMi4xIDMuOC00IDMuOGgtMS42Yy0yLjEgMC0zLjMtMS4zLTIuOC0zLjl6TTIwNC44IDIxLjJoLTkuNGwtMi44IDE3LjZoMy44bDEuMS02LjUgNi4xLS4xYzIuOC0uMSA1LTIuNyA1LjItNi4zdi0xLjJjLS4xLTItMS43LTMuNS00LTMuNXptMCA1LjRsLS4yLjljLS4yIDEuMi0xLjIgMS44LTIgMS44aC00LjdsLjgtNS4yaDQuN2MxLjUgMCAxLjYgMS45IDEuNCAyLjV6TTIyNy4yIDIxLjJoLTkuNEwyMTUgMzguOGgzLjhsMS4xLTYuNSA2LjEtLjFjMi44LS4xIDUtMi43IDUuMi02LjN2LTEuMmMwLTItMS42LTMuNS00LTMuNXptLjEgNS40bC0uMi45Yy0uMiAxLjItMS4yIDEuOC0yIDEuOGgtNC43bC44LTUuMmg0LjdjMS41IDAgMS41IDEuOSAxLjQgMi41ek0xMjguMyAyNC4zaDcuOWwuNC0zLjFoLTguNWMtMi44IDAtNC44IDEuOC01LjMgNC4xbC0uMiAxLjgtLjEuOGMtLjIgMS45LjkgMy43IDQuMyAzLjdsMy44LjFjLjUgMCAuOS40LjkuOWwtLjIgMS43YzAgLjctLjggMS40LTEuNyAxLjRsLTUuNi4xaC0yLjNsLS41IDMuMWgzbDUuNi0uMWMyLjggMCA0LjktMS45IDUuMy00LjVsLjMtMi41YzAtMS45LTEuMS0zLjQtMy41LTMuNWgtNC41cy0xLjItLjEtMS4yLTFsLjItMS42Yy41LS45IDEuMi0xLjQgMS45LTEuNHoiLz48Zz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzEzLjYgMzkuMWMwIDIuMi0xLjcgMy45LTQgMy45LTIuMiAwLTQtMS43LTQtMy45IDAtMi4xIDEuOC0zLjkgNC0zLjkgMi4zIDAgNCAxLjggNCAzLjl6bS03IDBjMCAxLjcgMS4zIDMuMSAzIDMuMXMyLjktMS40IDIuOS0zLjFjMC0xLjctMS4yLTMuMS0zLTMuMS0xLjYgMC0yLjkgMS40LTIuOSAzLjF6bTIuNCAyaC0uOXYtMy45Yy40LS4xLjgtLjEgMS41LS4xczEuMS4xIDEuMy4zYy4yLjIuNC41LjQuOCAwIC40LS4zLjgtLjguOS40LjEuNi40LjcuOS4xLjYuMi44LjMgMWgtMWMtLjEtLjEtLjItLjUtLjMtLjktLjEtLjQtLjMtLjYtLjgtLjZoLS40djEuNnptMC0yLjJoLjRjLjUgMCAuOS0uMi45LS42IDAtLjQtLjMtLjYtLjgtLjZoLS41djEuMnoiLz48L2c+PC9nPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05Ni40IDY0LjFsMS40IDExaDcuMWMtLjEtNC4zLTQuMi0zOS4zLTQuMi0zOS4zaC0zLjZjLTQuMiAwLTcuNyAxLjMtMTEuMyA3LjQtOCAxMy41LTE2LjMgMjguMi0xOC40IDMxLjloNy4yYzEuMy0yLjMgMS40LTMgMi40LTQuNiAzLTQuOCA2LjgtNi40IDExLjYtNi40aDcuOHptLTIuMi0yMS40TDk2IDYwSDgyLjlzOS4yLTE0LjkgOS44LTE2Yy42LTEuMSAxLjUtMS4zIDEuNS0xLjN6TTI0NC4xIDQ1LjhsLjEtLjFoLTcuNmwtMTAuOCAyMi41LTIuOC0yMi41aC03LjNjLjUgMyA0LjUgMjkuNCA0LjUgMjkuNEgyMjguOHMxMy40LTI1LjggMTUuMy0yOS4zek0zMDAuOSAzNS43SDI5NGwtMS41IDEwaC03LjNjLTguMyAwLTExLjggMy42LTEzLjQgMTMuNy0xIDYtLjMgMTAuNCAxLjkgMTIuOSAxLjYgMS44IDQgMi44IDcuMiAyLjhoMTMuOGw2LjItMzkuNHpNMjg4LjcgNzBoLTUuOWMtMS43IDAtMi44LS40LTMuNS0xLjMtMS4yLTEuNC0xLjQtNC0uNi04LjUgMS02LjUgMy4xLTkuNSA2LjgtOS41aDYuNEwyODguNyA3MHpNMjY3LjcgNDhjLTEuMy0xLjYtMy42LTIuNC02LjQtMi40aC01LjljLTcuNy4zLTEwLjkgMy45LTEyLjUgMTMuNy0xIDYtLjMgMTAuNCAxLjkgMTIuOSAxLjYgMS44IDQgMi44IDcuMiAyLjhoMTIuOWwxLTUuMWgtMTJjLTEuNyAwLTIuOC0uNC0zLjUtMS4zLS45LTEtMS4yLTItMS00LjZoMTIuOWwuOC0uMWMxLjQtLjIgNS0xLjQgNi4xLTguNS40LTMuMiAwLTUuNy0xLjUtNy40em0tNS42IDcuN2MtLjMgMi41LTEuMiA0LjItNC4xIDQuMmgtOC4zYy4xLS42LjQtMS43LjUtMi4yIDEuMS00LjcgMy4xLTYuOSA2LjMtNi45aDMuNGMuOC4xIDEuNC4zIDEuOC43LjYuNi42IDIuNS40IDQuMnpNMTg5LjEgNDUuNGMtLjUtLjEtMS4xLS4xLTEuOC0uMS0xLjUgMC0yLjkuMi00LjIuNy0xLjMuNC0yLjMuOS0zLjEgMS40LS43LjQtMS43IDEtMi44IDEuOGwuNi0zLjZIMTcxbC00LjYgMjkuNmg2LjlMMTc2IDU4Yy40LTIuNSAyLjEtNC43IDQuNi01LjUgMS4zLS40IDIuNy0uNiA0LjQtLjcuOS0yLjggMi4zLTQuOSA0LjEtNi40ek0yMTMuMSA2MS4zYzEtNi4yLjUtMTAuNS0xLjYtMTIuOS0yLjItMi42LTYtMy05LjUtMy04LjQgMC0xMy43IDEtMTUuOSAxNC40LTEgNi0uNSAxMC4xIDEuNSAxMi41IDIuMiAyLjYgNi4xIDIuOSA5LjcgMi45IDguMiAwIDEzLjgtLjkgMTUuOC0xMy45em0tMTkuNiA3LjJjLTEuMS0xLjItMS4yLTMuMy0uNC04IDEuNC04LjQgMy05LjcgOC4xLTkuNyAyLjEgMCAzLjcuMiA0LjYgMS4zIDEuMSAxLjMgMS4zIDMuNy41IDguNS0xLjIgNy4yLTIuOSA5LjItOC4xIDkuMi0yLjYuMS0zLjktLjMtNC43LTEuM3pNMTMzLjQgNDguNGMtMS42LTEuOC00LTIuOC03LjItMi44aC0xMy44TDEwNi4zIDg1aDYuOWwxLjUtMTBoNy4zYzguMyAwIDExLjgtMy42IDEzLjQtMTMuNy45LTYgLjItMTAuMy0yLTEyLjl6bS00LjkgMTJjLTEgNi41LTMuMSA5LjUtNi44IDkuNWgtNi40bDMuMS0xOS4yaDUuOWMxLjcgMCAyLjguNCAzLjUgMS4zIDEuMiAxLjMgMS40IDQgLjcgOC40ek0xNjIuNiA0OC40Yy0xLjYtMS44LTQtMi44LTcuMi0yLjhoLTEzLjhMMTM1LjQgODVoNi45bDEuNS0xMGg3LjNjOC4zIDAgMTEuOC0zLjYgMTMuNC0xMy43LjktNiAuMy0xMC4zLTEuOS0xMi45em0tNSAxMmMtMSA2LjUtMy4xIDkuNS02LjggOS41aC02LjRsMy4xLTE5LjJoNS45YzEuNyAwIDIuOC40IDMuNSAxLjMgMS4yIDEuMyAxLjQgNCAuNyA4LjR6Ii8+PC9nPjwvc3ZnPgo=" alt="" />
            </div>
          </div>



          <div className='flex justify-center mt-20'>
            <div>
              <p className='text-3xl  items-center text-gray-700 font-bold mb-4 '>Every step to online success</p>
              <span className='text-xl text-gray-600 -ml-7 font-bold'>Domain name registration is only the beginning</span>
            </div>
          </div>


          <div className='-mt-15 ml-15 flex gap-18 p-40'>
              <img src="https://static.nc-img.com/pp/cms/home-reskinned/images/buy-a-domain.687c1ba7ac761396bc11e0151ef51c3a.svg" alt="" />
              <div className=' w-120'>
                <p className='text-gray-700 font-bold mb-5 text-2xl'>Buy a domain</p>
                <span className='text-gray-600 text-xl font-bol '>Register a domain name and create your online identity. Use our advanced domain name generator to get your ideal choice right away. Already have a domain registered somewhere else? No problem — domain transfers are free and easy.</span>
                <div className='text-red-600 text-xl hover:underline mt-5'>Discover all domain extensions →</div>
              </div>
            </div>


            <div className='-mt-45 ml-20 flex gap-18 p-40'>
              <div className=' w-120'>
                <p className='text-gray-700 font-bold mb-5 text-2xl'>Find the right hosting for your domain</p>
                <span className='text-gray-600 text-xl font-bol '>Whether you want speed, simplicity, space, or super-power, we’ve got you covered. Choose from shared, VPS, dedicated, and Managed hosting for WordPress options. Or, try Site Maker to get a personal site online.</span>
                <div className='text-red-600 text-xl hover:underline mt-5'>Choose a hosting package →</div>
              </div>
              <img src="https://static.nc-img.com/pp/cms/home-reskinned/images/find-a-hosting.eeb44f3d099d4a05b9a9f105efc12d46.svg" alt="" />
            </div>


            <div className='-mt-15 ml-15 flex gap-18 p-40'>
              <img className='-mt-18' src="https://static.nc-img.com/pp/cms/home-reskinned/images/add-email.29cf403e4bf786cddb6c9da52bc11548.svg" alt="" />
              <div className=' w-120'>
                <p className='text-gray-700 font-bold mb-5 text-2xl'>Add professional email</p>
                <span className='text-gray-600 text-xl font-bol '>Look pro and start sending emails from @yourwebsite.com. Get secure, reliable business email, complete with built-in calendar and AI email assistant, from just $11.88 a year.</span>
                <div className='text-red-600 text-xl hover:underline mt-5'>See email plans →</div>
              </div>
            </div>


            <div className='-mt-30 ml-20 flex gap-18 p-40'>
              <div className=' w-120'>
                <p className='text-gray-700 font-bold mb-5 text-2xl'>Security for you and your customers</p>
                <span className='text-gray-600 text-xl font-bol '>Take the stress out of security with low-cost SSL Certificates, PremiumDNS, VPN and more. Plus a range of features — like 2-Factor Authentication — included completely free with your account.</span>
                <div className='text-red-600 text-xl hover:underline mt-5'>Secure yourself →</div>
              </div>
              <img className='-mt-18' src="https://static.nc-img.com/pp/cms/home-reskinned/images/security.2216317a5494176d8008d0a518180ac5.svg" alt="" />
            </div>


            <div className='-mt-20 ml-15 flex gap-18 p-40'>
              <img className='-mt-18' src="https://static.nc-img.com/pp/cms/home-reskinned/images/boost-performance.43950268dc2c215d552d4233f51593cc.svg" alt="" />
              <div className=' w-120'>
                <p className='text-gray-700 font-bold mb-5 text-2xl'>Boost performance with our apps</p>
                <span className='text-gray-600 text-xl font-bol '>Power-up your business with our range of apps. From Logo Maker and our Visual Suite to Supersonic CDN, we have the tools ready-and-waiting to aid your business’ performance.</span>
                <div className='text-red-600 text-xl hover:underline mt-5'>Select apps →</div>
              </div>
            </div>


            <div className='flex justify-center mt-10'>
            <div>
              <p className='text-3xl  items-center text-gray-700 font-bold mb-4 '>Unleash your full potential</p>
              <span className='text-xl text-gray-600 -ml-7 font-bold'>Extra support and knowledge is waiting for you</span>
            </div>
            </div>


            <div className=' grid grid-cols-3 p-60 -mt-28'>


              <div className='w-78 h-100 rounded bg-amber-100'>
              <div className='bg-red-500 h-30 rounded' ><img src="https://static.nc-img.com/pp/cms/home-reskinned/images/card-support.76a219827154969af31af4f9f21aee0d.svg" alt="" /></div>
              <p className='text-gray-700 text-2xl mt-10 mb-3 ml-2 font-bold'>First site support</p>
              <p className='text-gray-600 ml-2'>Learn while you build as we talk you through everything from your first domain onwards. Our Guru Guides have the answers.</p>
              <button className='text-xl text-white font-bold bg-red-600 border-2 h-13 rounded w-70 ml-4 mt-8'>Get Started</button>
              </div>

              <div className='w-78 h-100 rounded bg-amber-100'>
              <div className='bg-red-500 h-30 rounded' ><img src="https://static.nc-img.com/pp/cms/home-reskinned/images/card-discover.df9d05a5e476dc82254d0959cf377f06.svg" alt="" /></div>
              <p className='text-gray-700 text-2xl mt-10 mb-3 ml-2 font-bold'>Discover our blog</p>
              <p className='text-gray-600 ml-2'>See the latest industry news, get inspirational business tips, find our latest promos, and much more in our extensive blog.</p>
              <button className='text-xl text-white font-bold bg-red-600 border-2 h-13 rounded w-70 ml-4 mt-8'>Get learning</button>
              </div>

              <div className='w-78 h-100 rounded bg-amber-100'>
              <div className='bg-red-500 h-30 rounded' ><img src="https://static.nc-img.com/pp/cms/home-reskinned/images/card-transfer.08e78f9b17ee994aeb67734f279cfb68.svg" alt="" /></div>
              <p className='text-gray-700 text-2xl mt-10 mb-3 ml-2 font-bold'>Transfer to more</p>
              <p className='text-gray-600 ml-2'>Get extra support and savings by transferring your domain to us. Plus, carry over any time your domain has left.</p>
              <button className='text-xl text-white font-bold bg-red-600 border-2 h-13 rounded w-70 ml-4 mt-14'>Transfer today</button>
              </div>

            </div>

            <div className='flex border-2 text-black'>
              <img className='ml-30 size-60 -mt-30' src="https://static.nc-img.com/pp/home-page/client/assets/images/subscription-section-img.4217afdc.svg" alt="" />
              <div>
                <p className='text-2xl font-bold text-gray-700'>Stay inspired </p>
                <p className='text-xl text-gray-600 font-bold w-100'>Get all the latest offers, articles, and industry news straight to your mailbox every month.</p>
              </div>

              <div className='flex ml-25 '>
                <input className=' p-2 mt-8 border h-12 mb-5 rounded w-100  ' type="text" placeholder='Enter Your Email Here' />
                <button className=' p-2 mt-8 border h-12 mb-5 text-gray-700 rounded w-20 font-bold text-xl border-l-0'>Join</button>
              </div>

            </div>
              
            







        </div>
        
        

      </div>
      </div>
    </div>
    
  )
}

export default Home
