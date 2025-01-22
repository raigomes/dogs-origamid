import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_VALIDATE_POST } from "../api/services";
import { UserContext } from "./UserContext";

const TOKEN = "dog_token";

const UserStorage = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = getToken();

    async function validateToken(t) {
      const { endpoint, method, headers } = TOKEN_VALIDATE_POST(t);
      const response = await fetch(endpoint, { method, headers });
      const { data } = await response.json();
      setLoggedIn(data.status === 200);
    }

    validateToken(token);
  }, []);

  const getToken = () => {
    return localStorage.getItem(TOKEN)
  }

  const setToken = (value) => {
    localStorage.setItem(TOKEN, value)
  }

  const login = () => {
    setLoggedIn(true)
    navigate("/conta")
  }

  const sair = () => {
    localStorage.removeItem(TOKEN)
    setLoggedIn(false)
    navigate("/login")
  }

  return (
    <UserContext.Provider value={{ loggedIn, login, sair, getToken, setToken }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserStorage