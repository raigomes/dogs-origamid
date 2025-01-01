import React from "react";
import styles from "./Login.module.css";

const LoginPerdeu = () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <form>
        <div className={styles.wrapper}>
            <label for="login" className={styles.label}>Email / Usuário</label>
            <input id="login" name="login" type="text" className={styles.input} />
        </div>
        <button className={styles.button} >Enviar Email</button>
      </form>
    </section>
  );
};

export default LoginPerdeu;
