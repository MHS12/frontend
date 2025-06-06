// src/assets/PublicRoutes.js
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./AuthContext";

const PublicRoutes = () => {
  const { isLoggedIn, loading } = useContext(UserContext);

  if (loading) return <p>Loading...</p>; // Optional

  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoutes;
