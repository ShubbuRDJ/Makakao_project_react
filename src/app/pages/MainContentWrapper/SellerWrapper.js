import React from 'react';
import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom
import Header from '../../componetns/admin_header/header';
import SellerSidebar from '../../componetns/adminpanel_sidebar_nav/seller-sidebar';

function SellerWrapper() {
  return (
    <>
        <Header/>
        <SellerSidebar/>
        <Outlet />
        
    </>
  )
}

export default SellerWrapper