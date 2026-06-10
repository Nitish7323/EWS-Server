import React from 'react'
import { Link } from 'react-router-dom'
import Card2 from './Card2'

const NewTLDS = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <div className="relative  h-[400px] w-full">
        <img
          className="w-full h-full object-cover"
          src="https://static.nc-img.com/pp/cms/hero-domains-explore/images/hero.149b368a316e4b8bdfe5db63760a743d.svg"
          alt="Hero"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Discover new TLDs
          </h1>

          <p className="text-2xl mt-3 text-white underline">
            Like .mobile, the latest online hot-spot
          </p>

          <div className="flex mt-10">
            <input
              className="h-14 w-[600px] max-w-full px-4 bg-white text-gray-700"
              type="text"
              placeholder="Find your New Domain Name"
            />
            <button className="bg-red-700 text-white px-6">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-accent-content py-4 px-6">
        <Link to="/Domainname">
          <div className="flex gap-3">
            <span>Domain</span>
            <span>{'>'}</span>
            <span>New TLD'S</span>
          </div>
        </Link>
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto text-center p-8">
        <p className="text-lg text-gray-700">
          Discover the latest top-level domains (TLDs) right here and check out
          our upcoming releases. You can also view all our domain extensions in
          a handy list.
        </p>

        <p className="text-lg text-gray-700 mt-4">
          Register the freshest TLDs in the world and be backed by our 24/7
          customer support every step of the way.
        </p>

        <p className="text-lg text-gray-700 ">
          We are trusted to manage over 10 million domains worldwide.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-15">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>

      {/* Coming Soon */}
      <div className="pb-20">
        <h2 className="text-4xl text-gray-700 font-bold text-center mt-10">
          Coming Soon
        </h2>

        <div className="w-[600px] max-w-full mx-auto flex justify-between items-center bg-base-200 rounded-lg p-5 mt-8">
          <p className="text-4xl font-bold">.si</p>
          <p className="text-xl">Launch time - 2nd quarter</p>
        </div>
      </div>

    </div>
  )
}

export default NewTLDS
