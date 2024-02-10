// AllRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginFarmerPage from '../Pages/LoginFarmerPage';
import LoginAdminPage from '../Pages/LoginAdminPage';
import LoginVendorPage from '../Pages/LoginVendorPage';
import SignupFarmerPage from '../Pages/SignupFarmerPage';
import SignupVendorPage from '../Pages/SignupVendorPage';
<<<<<<< HEAD
import Productuserpage from '../Pages/Productuserpage';
import Produtvendorpage from '../Pages/Productvendorpage'
=======
import VendorDashboardPage from '../Pages/VendorDashboardPage'; 

>>>>>>> 8e3dc8badfac86d5db4ac85b940c19cc8f9bf499

const AllRoutes = () => {
  return (
    <Routes>
      <Route  path="/" element={<LandingPage/>}></Route>
      <Route path="/login/farmer" element={<LoginFarmerPage/>}></Route>
      <Route path="/login/admin" element={<LoginAdminPage/>}></Route>
      <Route path="/login/vendor" element={<LoginVendorPage/>}></Route>
      <Route path="/signup/farmer" element={<SignupFarmerPage/>}></Route>
      <Route path="/signup/vendor" element={<SignupVendorPage/>}></Route>
<<<<<<< HEAD
      <Route path="/farmer/products" element={<Productuserpage/>}></Route>
      <Route path="/vendor/products" element={<Produtvendorpage/>}></Route>
=======
      <Route path="/vendor/dashboard/:vendorID" element={<VendorDashboardPage/>}></Route>
>>>>>>> 8e3dc8badfac86d5db4ac85b940c19cc8f9bf499

    </Routes>
  );
};

export default AllRoutes;
