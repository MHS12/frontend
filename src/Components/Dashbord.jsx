import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const Dashbord = () => {
  useEffect(() => {
    const token = Cookies.get("token"); // your JWT token

    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded); // decoded payload object
    }
  });

  return <>Hwllo</>;
};

export default Dashbord;
