import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../assets/AuthContext";
import Cookies from "js-cookie";

const Login = () => {
  const [loding, setLoding] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onsubmithandel = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/login", data, {
        withCredentials: true,
      });

      if (res.data.message) {
        setIsLoggedIn(true);
        toast.success(res.data.message);
        navigate("/dashbord");
      } else if (res.data.error) {
        toast.error(res.data.error);
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.error || "Login failed. Please try again.";
      toast.error(errorMsg);
    }
  };
  return (
    <div className="h-[90vh] flex justify-center items-center ">
      <form onSubmit={onsubmithandel}>
        <div className="bg-gray-200 p-6 rounded-lg flex flex-col gap-4">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={onChangeHandler}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChangeHandler}
          />

          <div className="flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="px-2 rounded-sm bg-slate-400"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
