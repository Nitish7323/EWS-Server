import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white h-23 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-3xl">
          EWS Server
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 mx-15 text-xl">

          {/* Domains */}
          <li className="relative group">
            <span className="cursor-pointer p-2">Domains</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-64 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/Domainname">Domain Name Search</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/DomainTransfer">Domain Transfer</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/NewTLDS">New TLD'S</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Handshake Domains</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Bulk Domain Search</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">TLD List</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">EWS Market</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Premium DNS</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Free DNS</Link></li>
            </ul>
          </li>

          {/* Hosting */}
          <li className="relative group">
            <span className="cursor-pointer p-2">Hosting</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-64 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/Sharedhosting">Shared Hosting</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Hosting for WordPress</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Reseller Hosting</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Dedicated Servers</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Migrate to EWS Server</Link></li>
            </ul>
          </li>

          {/* WordPress */}
          <li className="relative group">
            <span className="cursor-pointer p-2">WordPress</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-84 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/HostingWordpress">Managed Hosting for WordPress</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Migrate To WordPress</Link></li>
            </ul>
          </li>

          {/* Email */}
          <li className="relative group">
            <span className="cursor-pointer p-2">Email</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-64 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/BusinessEmail">Business Email</Link></li>
            </ul>
          </li>

          {/* Marketing Tools */}
          <li className="relative group">
            <span className="cursor-pointer p-2">Marketing Tools</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-64 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">How To Get Started</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Business Starter Kit</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">LLC Registration</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Growth Tools</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Design Tools</Link></li>
            </ul>
          </li>

          {/* Security */}
          <li className="relative group">
            <span className="cursor-pointer p-2">Security</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-64 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">SSL Certificates</Link></li>
            </ul>
          </li>

          {/* Help Center */}
          <li className="relative group">
            <span className="cursor-pointer p-2">Help Center</span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-64 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Knowledgebase</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Fix Hacked Website</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Guru Guides</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Blog</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Build + Growth Hub</Link></li>
            </ul>
          </li>

          {/* Account */}
          <li className="relative group">
            <span className="cursor-pointer p-2">Account</span>

            <ul className="absolute right-0 top-full hidden group-hover:block bg-base-100 shadow-lg rounded-md w-64 z-50">
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/login">Dashboard</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Expiring Soon</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Hosting List</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">Private Email</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">SSL Certificates</Link></li>
              <li><Link className="block p-2 hover:bg-blend-soft-light" to="/">My Offers</Link></li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;