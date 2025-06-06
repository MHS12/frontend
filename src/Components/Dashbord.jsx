import React, { useEffect, useContext } from "react";

import Cookies from "js-cookie";
import { UserContext } from "../assets/AuthContext";
import Qr from "./Qr";

const Dashbord = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      {userData.name}
      
    </>
  );
};

export default Dashbord;
