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

  const cadastro = (userName, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) ?? [];

    users.push({
      userName,
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(users));
    navgate("/login");
  };

  const login = (email, password) => {
    console.log("login auth", { email, password });

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    //criar sessao na api
    if (user) {
      const loggedUser = {
        userName: user.userName,
      };
      setuser(loggedUser);
      navgate("/");
    } else {
      alert("Dados inválidos!");
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
      value={{ authenticated: !!user, user, load, login, logout, cadastro }}
    >
      {children}
    </AuthContext.Provider>
  );
};
