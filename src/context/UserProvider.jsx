import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { getToken, validateToken, deleteToken } = useLogin()
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    validateToken(token);
  }, []);

  const login = () => {
    setLoggedIn(true);
    navigate("/conta");
  };

  const sair = () => {
    deleteToken()
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ loggedIn, login, sair }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
