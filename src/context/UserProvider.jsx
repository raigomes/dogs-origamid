import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { getToken, validateToken, deleteToken, postToken } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {  
    async function validateLogin() {
      const token = getToken()
  
      if(!token) setLoggedIn(false);
  
      const isLogged = await validateToken(token)
      setLoggedIn(isLogged)
    };

    validateLogin();
  }, []);

  const login = async (username, password) => {
    const token = await postToken(username, password);
    if (!token) throw new Error("Dados incorretos");
    setLoggedIn(true);
    navigate("/conta");
  };

  const sair = () => {
    deleteToken();
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
