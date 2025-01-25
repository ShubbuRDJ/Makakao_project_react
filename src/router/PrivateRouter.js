import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import routerConstants from "../constants/routerConstants";
import MainContentWrapper from "../app/pages/MainContentWrapper/MainContentWrapper";

export default function PrivateRouter() {
  const isLoggedIn = localStorage.getItem("ACCESS_TOKEN");
  return (
    <>
      {isLoggedIn ? (
        <MainContentWrapper>
          <Outlet />
        </MainContentWrapper>
      ) : (
        <Navigate to={routerConstants?.loginRoute} />
      )}
    </>
  );
}
