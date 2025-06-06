// src/assets/ProtectedRoutes.js
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./AuthContext";

const ProtectedRoutes = () => {
  const { isLoggedIn, loading } = useContext(UserContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
