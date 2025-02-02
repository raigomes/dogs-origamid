import React from "react";
import styles from "./Login.module.css";
import Head from "../Head";

const LoginResetar = () => {
  return (
    <section className="animeLeft">
      <Head title="Resete a senha | Dogs" description="" />
      <h1 className="title">Resete a Senha</h1>
      <form>
        <div className={styles.wrapper}>
            <label htmlFor="password" className={styles.label}>Nova Senha</label>
            <input id="password" name="password" type="password" className={styles.input} />
        </div>
        <button className={styles.button} >Resetar</button>
      </form>
    </section>
  );
};

export default LoginResetar;
