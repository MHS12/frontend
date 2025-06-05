import React, { Children, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./AuthContext";
const AuthProtuctRouter = () => {
  const { isLoggedIn } = useContext(UserContext);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashbord" />;
};

export default AuthProtuctRouter;
