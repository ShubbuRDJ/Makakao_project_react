import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import routerConstants from '../constants/routerConstants';

export default function PublicRouter() {
  const isLoggedIn = localStorage.getItem("ACCESS_TOKEN");
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const otpToken = localStorage.getItem("OTP_TOKEN");
    const tokenType = localStorage.getItem("TOKEN_TYPE");
    const protectedRoutes = [
      routerConstants?.resetPasswordRoute,
    ];

    const isProtectedRoute = protectedRoutes.includes(location.pathname);

    if (isProtectedRoute && !otpToken && tokenType !== 'reset-password') {
      localStorage.clear();
      navigate(routerConstants?.loginRoute);
    }

    else if (!isProtectedRoute && otpToken) {
      localStorage.clear();
      navigate(routerConstants?.loginRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {
        !isLoggedIn ? (
          <Outlet />
        ) : (<Navigate to={"/"} />)
      }
    </>
  )
}
