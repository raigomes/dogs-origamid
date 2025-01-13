import React from "react";
import styles from "./Login.module.css";

const LoginCadastro = () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form>
        <div className={styles.wrapper}>
          <label htmlFor="username" className={styles.label}>
            Usuário
          </label>
          <input id="username" name="username" type="text" className={styles.input} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input id="email" name="email" type="text" className={styles.input} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input id="password" name="password" type="password" className={styles.input} />
        </div>
        <button className={styles.button} onClick={login}>Cadastrar</button>
      </form>
    </section>
  );
};

export default LoginCadastro;
