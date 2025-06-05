import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../assets/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  const { isLoggedIn } = useContext(UserContext);
  
  return <div>Register</div>;
};

export default Register;
