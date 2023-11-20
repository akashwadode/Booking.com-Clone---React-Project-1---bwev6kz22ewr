import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  let loggedInState = localStorage.getItem("userToken") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(loggedInState);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
