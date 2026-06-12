import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Components/Navbar/Profile/Login';
import Body from './Body';
import Home from '/src/Components/Home Page/Home'; 
import Domainname from './Components/Navbar/Domains/Domainname';
import DomainTransfer from './Components/Navbar/Domains/DomainTransfer';
import NewTLDS from './Components/Navbar/Domains/NewTLDS';
import Sharedhosting from './Components/Navbar/Hosting/Sharedhosting';
import BusinessEmail from './Components/Navbar/E-Mail/BusinessEmail';
import HostingWordpress from './Components/Navbar/Hosting/HostingWordpress';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Domainname" element={<Domainname />} />
          <Route path="DomainTransfer" element={<DomainTransfer />} />
          <Route path="NewTLDS" element={<NewTLDS />} />
          <Route path="Sharedhosting" element={<Sharedhosting />} />
          <Route path="BusinessEmail" element={<BusinessEmail />} />
          <Route path="HostingWordpress" element={<HostingWordpress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;