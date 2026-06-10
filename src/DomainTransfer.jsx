import React from 'react'
import { Link } from "react-router-dom";


const DomainTransfer = () => {
  return (
    <div>
        <div className="relative w-full">
      <img
        className="w-full "
        src="https://static.nc-img.com/pp/cms/domain-transfer/images/transfer_page.82670d4610e59462d5ebdd502467dcd0.svg"
        alt="Domain Transfer"
      />

      <div className="absolute inset-0 flex flex-col items-center  justify-center">
        <h1 className="text-5xl font-bold text-white">
          Easy Domain Transfer
        </h1>
        <h1 className="text-3xl font-bold text-white">
          Get more from your move, for less
        </h1>
       <div className='flex border-2 h-15 mt-15 ml-5'>
         <input className='p-5  h-15  w-120 ' type="text" placeholder='Enter The Domain Name You Want to Transfer' />
         <button className='flex items-center    w-20 bg-red-700 p-2'>Transfer</button>
       </div>
      </div>
     <div>
     </div>
    <div className='bg-accent-content  h-18'>
        <Link
      to="/Domainname"
      className="relative  left-4  px-4 py-2 rounded"
      >
      <div className='flex '>
        Domain →
      <p  className='ml-5'>Domain Name</p>
      </div>
     </Link>
    </div>
    </div>



<div className='flex justify-between p-5 mr-18'>
    <div>
        <img className='h-30 mt-15 ml-55' src="https://static.nc-img.com/uidomaintransfer/fe9859f4792883bd0c6f7214b95e32e4.svg" alt="" />
        <p className='ml-53 mt-5 text-2xl'>No time lost</p>
        <p className='ml-18 mt-5 text-l' >Any remaining time is added to your 1-year renewal.</p>
    </div>

    <div>
        <img className='h-30 mt-15 ml-55' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YxZjFmMTt9LmNscy0ye2ZpbGw6I2Q3ZDhkODt9LmNscy0ze2ZpbGw6I2QwNTEzNTt9LmNscy00e2ZpbGw6I2UwNjU0Mjt9LmNscy01e2ZpbGw6I2VhODA2Nzt9LmNscy02e2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDE4PC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0idmVpY2xlIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9Ijc1IiBjeT0iNzUiIHI9Ijc1Ii8+PGVsbGlwc2UgY2xhc3M9ImNscy0yIiBjeD0iNzUiIGN5PSIxMzMuODUiIHJ4PSIyOC44NSIgcnk9IjExLjU0Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTUuNDUsMTIzLjQ2YTYuMDYsNi4wNiwwLDAsMS02LjA2LTYuMDZWMzQuMzJhNi4wNiw2LjA2LDAsMCwxLDYuMDYtNi4wN0gxMzMuMzlhNi4wNyw2LjA3LDAsMCwxLDYuMDcsNi4wN1YxMTcuNGE2LjA2LDYuMDYsMCwwLDEtNi4wNyw2LjA2Ii8+PHJlY3QgY2xhc3M9ImNscy00IiB4PSI5LjM5IiB5PSIyNC4yMyIgd2lkdGg9IjEzMC4wNyIgaGVpZ2h0PSI5NS4yMSIgcng9IjUuMjYiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0xMzkuNDUsMTExLjA2YTcuMTQsNy4xNCwwLDAsMS0xLjE3LDQuMTQsNy4yMyw3LjIzLDAsMCwxLTUuNTksMy4yMmMtLjc0LDAtMS40NCwwLTIuMTcuMDdsLTQuMzEuMTEtMTcuMjYuMjljLTExLjUuMTYtMjMsLjItMzQuNTEuMjJzLTIzLS4wNi0zNC41Mi0uMjJsLTE3LjI1LS4yOS00LjMyLS4xMWMtLjcyLDAtMS40MiwwLTIuMTctLjA3YTcsNywwLDAsMS0yLjE4LS40OCw3LjEsNy4xLDAsMCwxLTQuNTctNi44OCw3LDcsMCwwLDAsNC43NSw2LjM4LDExLjMzLDExLjMzLDAsMCwwLDQuMTcuMjlsNC4zMi0uMTEsMTcuMjUtLjI5YzExLjUxLS4xNiwyMy0uMiwzNC41Mi0uMjJzMjMsLjA3LDM0LjUxLjIybDE3LjI2LjI5LDQuMzEuMTJhMTEuNTgsMTEuNTgsMCwwLDAsNC4xOC0uM0E3LDcsMCwwLDAsMTM5LjQ1LDExMS4wNloiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjE2LjA5IiB5PSI0My45NyIgd2lkdGg9IjExNi42NiIgaGVpZ2h0PSI1Ljc0IiByeD0iMS4yOCIvPjxyZWN0IGNsYXNzPSJjbHMtNiIgeD0iMTYuMDkiIHk9IjQyLjMzIiB3aWR0aD0iMTE2LjY2IiBoZWlnaHQ9IjUuNzQiIHJ4PSIxLjI4Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTYiIGN4PSIzNC44NiIgY3k9IjM2LjMiIHI9IjIuNjgiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNiIgY3g9IjI2LjgyIiBjeT0iMzYuMyIgcj0iMi42OCIvPjxjaXJjbGUgY2xhc3M9ImNscy02IiBjeD0iMTguNzciIGN5PSIzNi4zIiByPSIyLjY4Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNzQuMzgsMTEyLjgyQTI0Ljc4LDI0Ljc4LDAsMCwxLDYyLjQ3LDY2LjM0YTIuNTQsMi41NCwwLDAsMSwyLjQ1LDQuNDUsMTkuNywxOS43LDAsMSwwLDE5LjA2LDAsMi41NCwyLjU0LDAsMCwxLDIuNDYtNC40NCwyNC43NywyNC43NywwLDAsMS05Ljg3LDQ2LjM0Qzc1Ljg0LDExMi43OCw3NS4xMSwxMTIuODIsNzQuMzgsMTEyLjgyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTc0LjUxLDkzLjZBMi41MywyLjUzLDAsMCwxLDcyLDkxLjA2VjYxLjY0YTIuNTQsMi41NCwwLDAsMSw1LjA3LDBWOTEuMDZBMi41MywyLjUzLDAsMCwxLDc0LjUxLDkzLjZaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNNzQuMzgsMTA5LjM2QTI0Ljc4LDI0Ljc4LDAsMCwxLDYyLjQ3LDYyLjg4YTIuNTQsMi41NCwwLDAsMSwyLjQ1LDQuNDUsMTkuNywxOS43LDAsMSwwLDE5LjA2LDAsMi41NCwyLjU0LDAsMCwxLDIuNDYtNC40NCwyNC43NywyNC43NywwLDAsMS05Ljg3LDQ2LjM0Qzc1Ljg0LDEwOS4zMiw3NS4xMSwxMDkuMzYsNzQuMzgsMTA5LjM2WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTc0LjUxLDkwLjE0QTIuNTQsMi41NCwwLDAsMSw3Miw4Ny42VjU4LjE4YTIuNTQsMi41NCwwLDEsMSw1LjA3LDBWODcuNkEyLjU0LDIuNTQsMCwwLDEsNzQuNTEsOTAuMTRaIi8+PC9nPjwvZz48L3N2Zz4=" alt="" />
        <p className='ml-53 mt-5 text-2xl'>No time lost</p>
        <p className='ml-18 mt-5 text-l' >Any remaining time is added to your 1-year renewal.</p>
    </div>

    <div>
        <img className='h-30 mt-15 ml-55' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YxZjFmMTt9LmNscy0ye2ZpbGw6I2Q3ZDhkODt9LmNscy0ze2ZpbGw6IzgyOTdjZDt9LmNscy00e2ZpbGw6IzU0NjE4Mzt9LmNscy01e2ZpbGw6I2UwNjU0Mjt9LmNscy02e2ZpbGw6I2QwNTEzNTt9LmNscy03e2ZpbGw6I2M2ZTdmYTt9LmNscy04e2ZpbGw6I2ZmZjtvcGFjaXR5OjAuNDE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAxOTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9InZlaWNsZSI+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI3NSIgY3k9Ijc1IiByPSI3NSIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtMiIgY3g9Ijc1IiBjeT0iMTMzLjg1IiByeD0iMjguODUiIHJ5PSIxMS41NCIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iMTkuMjkiIHk9IjQ3LjkiIHdpZHRoPSIxMTAuNzIiIGhlaWdodD0iMTUuNzgiIHJ4PSIzLjU3Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTI2LjY2LDYwLjgzYTE3Ljg1LDE3Ljg1LDAsMCwxLTQuODEtMTIuOTNIMjguNGEyMiwyMiwwLDAsMS02Ljc1LDEzLjgyLDcuMzIsNy4zMiwwLDAsMCw1LDJoOTZhNy4yOSw3LjI5LDAsMCwwLDUtMS45NUMxMjcuMjksNjEuNDUsMTI3LDYxLjE1LDEyNi42Niw2MC44M1oiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0xMTkuMzYsNzguNzdjMCwyNC41NC0xOS45LDU0LjItNDQuNDMsNTQuMmgwYy0yMy42MSwwLTQyLjc1LTI4LjkxLTQyLjc1LTUyLjUxVjI3LjYyYTksOSwwLDAsMSw2LjM2LTguNTZMNzQuODgsOC4xMWwzOCwxMWE5LDksMCwwLDEsNi40Niw4LjU4WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTQ4LjU3LDkyLjkzcy05Ljc0LTUyLjgsMC03Ni44OWwtMTAsM2E5LDksMCwwLDAtNi4zNiw4LjU2VjgwLjQ2YzAsMjMuNiwxOS4xNCw1Mi41MSw0Mi43NSw1Mi41MWgwYzIxLjYtMS43NSwyOC4yNC0xNC4zNCwzNi4zMy0yNS4zNUM3NS43NywxMzcuNTcsNTEuNTUsMTA2LjE2LDQ4LjU3LDkyLjkzWiIvPjxyZWN0IGNsYXNzPSJjbHMtNyIgeD0iNDEuMzQiIHk9IjQ3LjkiIHdpZHRoPSI2Ny4wOCIgaGVpZ2h0PSIyNS43NyIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iNDEuMzQiIHk9IjQ3LjkiIHdpZHRoPSI2Ny4wOCIgaGVpZ2h0PSIyNS43NyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtOCIgcG9pbnRzPSIxMDguNDIgNzMuNjcgNDEuMzQgNzMuNjcgMTA3LjAzIDcxLjc2IDEwOC40MiA0Ny45IDEwOC40MiA3My42NyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSI0My40OCA0OS43MSA0MS4zNCA3My42NyA0MS4zNCA0Ny45IDEwOC40MiA0Ny45IDQzLjQ4IDQ5LjcxIi8+PHBvbHlnb24gY2xhc3M9ImNscy04IiBwb2ludHM9IjEwNS4yMSA3MS44MiA4OS42IDcyLjI3IDY2LjIgNDkuMDggODIuNDMgNDguNjMgMTA1LjIxIDcxLjgyIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNNzMuNDUsNzMuNjdoLTRMNTUuNCw2MC4yM2ExLjM2LDEuMzYsMCwwLDEsLjk0LTIuMzVoMGExLjM3LDEuMzcsMCwwLDEsLjk0LjM4WiIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iNDMuNDgiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iNTEuNTUiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iNTkuNjIiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iNjcuNjgiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iNzUuNzUiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iODMuODEiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iOTEuODgiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iOTkuOTUiIGN5PSIzNy45OCIgcj0iMi4xNSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iMTA4LjAxIiBjeT0iMzcuOTgiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjQzLjQ4IiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjUxLjU1IiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjU5LjYyIiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjY3LjY4IiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9Ijc1Ljc1IiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjgzLjgxIiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjkxLjg4IiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9Ijk5Ljk1IiBjeT0iODEuMzMiIHI9IjIuMTUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjEwOC4wMSIgY3k9IjgxLjMzIiByPSIyLjE1Ii8+PC9nPjwvZz48L3N2Zz4=" alt="" />
        <p className='ml-53 mt-5 text-2xl'>No time lost</p>
        <p className='ml-18 mt-5 text-l' >Any remaining time is added to your 1-year renewal.</p>

    </div>

</div>

<p className='flex justify-center mt-19 text-4xl'>How to transfer your domain</p>
<p className='flex justify-center mt-5 text-xl' >Better service, support, and savings in 3 easy steps </p>



<div className='flex justify-between p-30'>
    <div className="card bg-base-100 border-2 border-accent mt- w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">1. Complete your check</h2>
    <p>Enter your domain name into the search bar and make sure it meets our transfer requirements.</p>
  </div>
</div>

 <div className="card bg-base-100 border-2 border-accent mt- w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">2. Prepare it for transfer</h2>
    <p>Look at your domain type requirements and get your authorization code ready.Tooltip Icon</p>
  </div>
</div>

 <div className="card bg-base-100 border-2 border-accent mt- w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">3. Submit your domain</h2>
    <p>Add it to the cart and make your payment. Your transfer will complete within 30 minutes to 6 days.</p>
  </div>
</div>
</div>



</div>
    

  )
}

export default DomainTransfer
