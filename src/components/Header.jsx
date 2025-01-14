import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Dog from "../img/dog.svg?react";
import { Link } from "react-router-dom";
import { TOKEN_VALIDATE_POST, USER_GET } from "../api/services";

const TOKEN = "dog_token";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    
    async function validateToken(t) {
      const { endpoint, method, headers } = TOKEN_VALIDATE_POST(t);
      const response = await fetch(endpoint, { method, headers })
      const { data } = await response.json()
        
      return (data.status === 200)
    }

    async function fetchUser(t) {
      const { endpoint, headers } = USER_GET(t);
      const isValid = await validateToken(t)
  
      if(!isValid) return null

      const response = await fetch(endpoint, { headers })
      const data = await response.json()
      setUser(data.username);
    }

    fetchUser(token);
  }, [user]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <Dog />
        </Link>

        {user && (
          <Link to="/conta" className={styles.login}>
            {user}
          </Link>
        )}

        {!user && (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
