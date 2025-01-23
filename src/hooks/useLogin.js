import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST } from "../api/services";

const TOKEN = "dog_token";

export const useLogin = () => {
  const validateToken = async (t) => {
    try {
      const { endpoint, method, headers } = TOKEN_VALIDATE_POST(t);
      const response = await fetch(endpoint, { method, headers });
      const { data } = await response.json();
      return data.status === 200;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const postToken = async (username, password) => {
    try {
      const { endpoint, method, headers, body } = TOKEN_POST(
        username,
        password
      );
      const response = await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if(!response.ok) throw new Error(data.message)

      setToken(data.token)
      return data.token;
    } catch (e) {
      return null;
    }
  };

  const getToken = () => {
    return localStorage.getItem(TOKEN);
  };

  const setToken = (value) => {
    localStorage.setItem(TOKEN, value);
  };

  const deleteToken = () => {
    localStorage.removeItem(TOKEN);
  }

  return {
    validateToken,
    getToken,
    setToken,
    postToken,
    deleteToken,
  };
};
