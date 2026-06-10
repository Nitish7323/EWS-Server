import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Login';
import Body from './Body';
import Home from './Home'; 
import Domainname from './Domainname';
import DomainTransfer from './DomainTransfer';
import NewTLDS from './NewTLDS';
import Sharedhosting from './Sharedhosting';
import BusinessEmail from './BusinessEmail';
import HostingWordpress from './HostingWordpress';

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