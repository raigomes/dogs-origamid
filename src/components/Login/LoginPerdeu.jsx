import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import Head from "../Head";
import { PASSWORD_LOST_POST } from "../../api/services";
import Message, { ERROR, SUCCESS } from "../Message";

const LoginPerdeu = () => {
  const [login, setLogin] = useState("");
  const [message, setMessage] = useState(null)
  const [emptyMessage, setEmptyMessage] = useState(null)
  const formRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault();

    if(!login) return setEmptyMessage(true)

    try {
      const url = `${window.location.origin}/login/resetar`;
      const { endpoint, method, headers, body } = PASSWORD_LOST_POST(
        login,
        url
      );

      const response = await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(body),
      });

      if(response.ok) {
        formRef.current.remove()
        setMessage(<Message type={SUCCESS} text="Email enviado." />)
      } else {
        setMessage(<Message type={ERROR} text="Tente novamente mais tarde." />)
      }
    } catch (e) {
      setMessage(<Message type={ERROR} text="Erro interno" />)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha | Dogs" description="" />
      <h1 className="title">Perdeu a senha?</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <label htmlFor="login" className={styles.label}>
            Email / Usuário
          </label>
          <input
            id="login"
            name="login"
            type="text"
            className={styles.input}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          {emptyMessage && <p className={styles.error}>Preencha um valor.</p>}
        </div>
        <button className={styles.button}>Enviar Email</button>
      </form>
      {message}
    </section>
  );
};

export default LoginPerdeu;
