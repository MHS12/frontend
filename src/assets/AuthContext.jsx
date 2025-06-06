import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Hello");
    if (token) {
      setIsLoggedIn(!!token);
      const decoded = jwtDecode(token);
      setUserData(decoded);
    }
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData }}>
      {children}
    </UserContext.Provider>
  );
  
};

export default AuthProvider;
