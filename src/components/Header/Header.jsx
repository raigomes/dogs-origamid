import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import Dog from "../../img/dog.svg?react";
import { Link } from "react-router-dom";
import { USER_GET } from "../../api/services";
import { UserContext } from "../../context/UserContext";
import { useLogin } from "../../hooks/useLogin";

const Header = () => {
  const [user, setUser] = useState(null);
  const { loggedIn } = useContext(UserContext)
  const { getToken } = useLogin()

  useEffect(() => {
    const token = getToken();

    async function fetchUser(t) {
      const { endpoint, headers } = USER_GET(t);
      const response = await fetch(endpoint, { headers })
      const data = await response.json()
      setUser(data.username);
    }

    loggedIn && fetchUser(token);
  }, [loggedIn]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <Dog />
        </Link>

        {loggedIn && (
          <Link to="/conta" className={styles.login}>
            {user}
          </Link>
        )}

        {!loggedIn && (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
