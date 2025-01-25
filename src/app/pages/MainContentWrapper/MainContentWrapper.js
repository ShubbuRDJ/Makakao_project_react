import React from 'react';
import { Outlet } from 'react-router-dom';  // Import Outlet from react-router-dom
import Header from '../../componetns/admin_header/header';
import Sidebar from '../../componetns/adminpanel_sidebar_nav/sidebar';

function MainContentWrapper() {
  return (
    <>
        <Header/>
        <Sidebar/>
        <Outlet />
        
    </>
  )
}

export default MainContentWrapper