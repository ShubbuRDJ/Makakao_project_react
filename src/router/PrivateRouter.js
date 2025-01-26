import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import routerConstants from "../constants/routerConstants";
import MainContentWrapper from "../app/pages/MainContentWrapper/MainContentWrapper";
import CryptoJS from "crypto-js";
import SellerWrapper from "../app/pages/MainContentWrapper/SellerWrapper";

export default function PrivateRouter() {
  const isLoggedIn = localStorage.getItem("ACCESS_TOKEN");
  const location = useLocation();
  const navigate = useNavigate();

  const checkuser = () => {
    const userType = localStorage.getItem("USER_TYPE");
    let decryptedUserType = '';
    if (userType) {
      decryptedUserType = CryptoJS.AES.decrypt(userType, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    }
    return decryptedUserType;
  }

  useEffect(() => {
    if (isLoggedIn && (checkuser() === 'INDIVIDUAL_SELLER' || checkuser() === 'ORG_SELLER')) {
      if (!location.pathname.includes('/seller/')){
        navigate(routerConstants?.bussinessInfoRoute);
      }
    }
  // eslint-disable-next-line
  }, [location?.pathname])
  return (
    <>
      {(isLoggedIn && (checkuser() === 'INDIVIDUAL_SELLER' || checkuser() === 'ORG_SELLER')) ? (
        <SellerWrapper>
          <Outlet />
        </SellerWrapper>
      ) :
        (isLoggedIn && (checkuser() === 'SUPER_ADMIN')) ?
          (
            <MainContentWrapper>
              <Outlet />
            </MainContentWrapper>
          )

          : (
            <Navigate to={routerConstants?.loginRoute} />
          )
      }
    </>
  );
}
