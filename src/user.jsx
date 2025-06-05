import React from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("res.data[0].role");
    if (!data && !data.role === "user") {
      navigate("/");
    }else{
      navigate("/")
    }
  }, []);
  return <div>User</div>;
};

export default User;
