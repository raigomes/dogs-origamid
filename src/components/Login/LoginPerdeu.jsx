import React from "react";
import styles from "./Login.module.css";
import Head from "../Head";

const LoginPerdeu = () => {
  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha | Dogs" description="" />
      <h1 className="title">Perdeu a senha?</h1>
      <form>
        <div className={styles.wrapper}>
            <label htmlFor="login" className={styles.label}>Email / Usuário</label>
            <input id="login" name="login" type="text" className={styles.input} />
        </div>
        <button className={styles.button} >Enviar Email</button>
      </form>
    </section>
  );
};

export default LoginPerdeu;
