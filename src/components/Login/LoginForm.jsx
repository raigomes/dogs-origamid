import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { TOKEN_POST } from "../../api/services";
import UserContext from "../../UserContext";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { login, setToken } = useContext(UserContext)

  function setError(text) {
    setMessage(
      <p style={{ color: "rgb(255, 51, 17)", margin: "1rem 0px" }}>{text}</p>
    );
  }

  function handleLogin(e) {
    e.preventDefault();

    const { endpoint, method, headers, body } = TOKEN_POST(username, password);

    fetch(endpoint, {
      method,
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.token) return setError("Dados incorretos.");
        setToken(data.token);
        login()
      })
      .catch((e) => {
        console.error("[Dogs]", e);
        setError("Erro desconhecido");
        sair()
      });
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.wrapper}>
          <label htmlFor="username" className={styles.label}>
            Usuário
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button}>Entrar</button>
        {message}
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/criar" className={styles.button}>
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
