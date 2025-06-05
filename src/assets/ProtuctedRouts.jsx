import React, { Children, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./AuthContext";
const ProtuctedRouts = () => {
  const { isLoggedIn } = useContext(UserContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtuctedRouts;
