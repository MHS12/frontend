import React, { useContext } from "react";
import { UserContext } from "../assets/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const { isLoggedIn,setIsLoggedIn } = useContext(UserContext);
  const nav = useNavigate();
  return (
    <>
      <div className="h-10 bg-slate-800 flex justify-end items-center px-5">
        <ul className=" gap-3 flex text-white justify-center items-center">
          {!isLoggedIn ? (
            <>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </>
          ) : (
            <button
              onClick={() => {
                Cookies.remove("token");
                setIsLoggedIn(false)
                nav("/login")
              }}
            >
              Logout
            </button>
          )}
          <Link to="/dashbord">Dashbord</Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
