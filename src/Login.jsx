import React from 'react'

const Login = () => {
  return (
    <div className='flex  bg-base justify-center my-25 w-full'>
      <div className="card bg-base-300 border-3 border-accent rounded  w-96 shadow-sm">
  <div className="card-body bg-gray-300 text-black">
    <h2 className="card-title justify-center text-2xl">Log in to your account</h2>
    <fieldset className="fieldset">
  <fieldset className="fieldset">
  <legend className="fieldset-legend text-black text-xl ">Email-ID</legend>
  <input type="text" className="input text-xl bg-yellow-50 p-5 text-black" placeholder="Enter Your Email here" />
  <legend className="fieldset-legend text-black text-xl ">Password</legend>
  <input type="password" className="input text-xl bg-yellow-50 p-5 text-black" placeholder="Type here" />
  <p className='text-xl underline'>Forgot username or password?</p>
  </fieldset>
  </fieldset>
    <div className="card-actions justify-center">
      <button className="btn w-25 text-xl">Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login;

