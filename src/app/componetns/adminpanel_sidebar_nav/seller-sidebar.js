import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import routerConstants from '../../../constants/routerConstants';

function SellerSidebar({ isOpen }) {
  // State to manage sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Get the current location
  const location = useLocation();

  return (
    <>


      {/* Sidebar panel */}
      <div className={`sidebar_panel ${isSidebarOpen ? 'open' : ''}`}>

        {/* Mobile menu icon */}
        <div className={`mobile_menu_icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <img className='burger' src='/images/menu-icon.svg' alt='menu-icon' />
          <img className='close' src='/images/mobile_menu_close.svg' alt='mobile_menu_close' />
        </div>

        <div className='logo'>
          <img src='/images/logo.png' alt='logo' />
        </div>
        <div className='admin_nav'>
          <ul>
            <li className={location.pathname === routerConstants?.bussinessInfoRoute ? 'selected' : ''}>
              <Link to={routerConstants?.bussinessInfoRoute}>
                <img src='/images/dashboard-icon.svg' alt='dashboard' className='not-active' />
                <img src='/images/dashboard-icon-active.svg' alt='dashboard' className='active' />
                Business Info
              </Link>
            </li>
            <li className={location.pathname === routerConstants?.myProductRoute ? 'selected' : ''}>
              <Link to={routerConstants?.myProductRoute}>
                <img src='/images/categories-icon.svg' alt='categories' className='not-active' />
                <img src='/images/categories-icon-active.svg' alt='categories' className='active' />
                My Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SellerSidebar;
