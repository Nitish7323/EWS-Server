import React, { useEffect, useState } from 'react'
import Card3 from './Card3'

const Sharedhosting = () => {
  const [billing, setBilling] = useState("monthly")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-full">

      <p className="flex justify-center items-center h-10 bg-accent">
        Don't wait. Get Shared Hosting FREE for 30 days. Limited time only.
      </p>

      <div className="relative min-h-[500px] w-full">
        <img
          className="w-full h-full object-cover absolute inset-0"
          src="https://static.nc-img.com/hosting/frontend/07a0f36a-5ea2969460a6/modules/shared-landing/assets/images/shared-hero-banner.4981c973739c209429093cbe4ee2732c.svg"
          alt="Shared Hosting"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h1 className="text-white text-5xl font-bold">
            Shared Hosting
          </h1>

          <p className="text-xl mt-3 text-white">
            Fast, secure, and affordable hosting plans for any budget
          </p>

          <div className="flex mt-10 gap-5 flex-wrap justify-center">

            {/* Billing Buttons */}
            <div className="w-64 p-1 rounded bg-white/20 flex">

              <button
                onClick={() => setBilling("monthly")}
                className={`h-10 w-1/3 rounded ${
                  billing === "monthly"
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`h-10 w-1/3 rounded ${
                  billing === "yearly"
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                Yearly
              </button>

              <button
                onClick={() => setBilling("biyearly")}
                className={`h-10 w-1/3 rounded ${
                  billing === "biyearly"
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                Bi-Yearly
              </button>

            </div>

            {/* Data Center Dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-white text-black w-40"
              >
                Data Center
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow"
              >
                <li><a>US United States</a></li>
                <li><a>Singapore (Asia)</a></li>
                <li><a>European Union</a></li>
                <li><a>United Kingdom</a></li>
              </ul>
            </div>

          </div>

          <p className="mt-4 text-white">
            Save up to 71% with yearly and bi-yearly billing.
          </p>

        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <Card3 />
        <Card3 />
        <Card3 />
      </div>

    </div>
  )
}

export default Sharedhosting
