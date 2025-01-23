import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import Head from "../Head";
import { USER_POST } from "../../api/services";
import { UserContext } from "../../context/UserContext";
import { useLogin } from "../../hooks/useLogin";

const LoginCadastro = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { login } = useContext(UserContext);
  const { postToken } = useLogin();

  function setError(text) {
    setMessage(
      <p style={{ color: "rgb(255, 51, 17)", margin: "1rem 0px" }}>{text}</p>
    );
  }

  async function handleCadastro(e) {
    e.preventDefault();

    try {
      const { endpoint, method, headers, body } = USER_POST(
        username,
        password,
        email
      );
      const response = await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message);
      
      const token = await postToken(username, password);
      if (token) login();
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta | Dogs" description="" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleCadastro}>
        <div className={styles.wrapper}>
          <label htmlFor="username" className={styles.label}>
            Usuário
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button}>Cadastrar</button>
        {message}
      </form>
    </section>
  );
};

export default LoginCadastro;
