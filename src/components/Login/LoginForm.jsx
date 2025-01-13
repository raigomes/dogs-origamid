import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST } from "../../api/services";

const TOKEN = "dog_token";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem(TOKEN))
    validateToken(token);
  }, [token]);

  function setError(text) {
    setMessage(
      <p style={{ color: "rgb(255, 51, 17)", margin: "1rem 0px" }}>{text}</p>
    );
  }

  function validateToken(t) {
    const { endpoint, method, headers } = TOKEN_VALIDATE_POST(t);

    fetch(endpoint, {
      method,
      headers,
    })
      .then((response) => response.json())
      .then(({ data }) => data.status === 200 && navigate("/conta"));
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
        localStorage.setItem(TOKEN, data.token);
        setToken(data.token);
      })
      .catch((e) => {
        console.error("[Dogs]", e);
        setError("Erro desconhecido");
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
