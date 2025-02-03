import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { login, sair } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login(username, password)
    } catch(e) {
      setMessage(<Message type={ERROR} text={e.message} />)
      sair()
    }
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
