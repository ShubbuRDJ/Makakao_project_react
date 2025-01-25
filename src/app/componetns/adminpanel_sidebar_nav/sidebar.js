import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import routerConstants from '../../../constants/routerConstants';

function Sidebar({ isOpen }) {
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
            <li className={location.pathname === routerConstants?.dashboardRoute ? 'selected' : ''}>
              <Link to={routerConstants?.dashboardRoute}>
                <img src='/images/dashboard-icon.svg' alt='dashboard' className='not-active' />
                <img src='/images/dashboard-icon-active.svg' alt='dashboard' className='active' />
                Dashboard
              </Link>
            </li>
            <li className={location.pathname === routerConstants?.categoriesRoute ? 'selected' : ''}>
              <Link to={routerConstants?.categoriesRoute}>
                <img src='/images/categories-icon.svg' alt='categories' className='not-active' />
                <img src='/images/categories-icon-active.svg' alt='categories' className='active' />
                Categories
              </Link>
            </li>
            <li className={location.pathname === routerConstants?.sellersRoute ? 'selected' : ''}>
              <Link to={routerConstants?.sellersRoute}>
                <img src='/images/sellers-icon.svg' alt='sellers' className='not-active' />
                <img src='/images/sellers-icon-active.svg' alt='sellers' className='active' />
                Sellers
              </Link>
            </li>
            <li className={location.pathname === '/customers' ? 'selected' : ''}>
              <Link to="">
                <img src='/images/cusatomers-icon.svg' alt='customers' className='not-active' />
                <img src='/images/cusatomers-icon-active.svg' alt='customers' className='active' />
                Customers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
