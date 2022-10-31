import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navgate = useNavigate();
  const [user, setuser] = useState(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setuser(JSON.parse(recoveredUser));
    }
    setLoad(false);
  }, []);

  const login = (email, password) => {
    console.log("login auth", { email, password });

    //criar sessao na api

    const loggedUser = {
      id: "123",
      email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "123") {
      setuser(loggedUser);
      navgate("/");
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setuser(null);
    navgate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, load, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
