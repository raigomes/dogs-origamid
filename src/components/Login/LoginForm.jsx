import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form action="" className={styles.form}>
        <div className={styles.wrapper}>
          <label for="username" className={styles.label}>
            Usuário
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
          />
        </div>
        <div className={styles.wrapper}>
          <label for="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
          />
        </div>
        <button className={styles.button}>Entrar</button>
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
