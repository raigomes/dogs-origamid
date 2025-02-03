import React, { useState } from "react";
import styles from "./Login.module.css";
import Head from "../Head";
import { PASSWORD_RESET_POST } from "../../api/services";
import { useNavigate, useSearchParams } from "react-router-dom";
import Message, { ERROR } from "../Message";

const LoginResetar = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [emptyMessage, setEmptyMessage] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!password) return setEmptyMessage(true);

    try {
      const key = searchParams.get("key");
      const login = searchParams.get("login");
      const { endpoint, method, headers, body } = PASSWORD_RESET_POST(
        login,
        password,
        key
      );

      const response = await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json()
        setMessage(<Message type={ERROR} text={data.message} />);
      }
    } catch (e) {
      console.error(e)
      setMessage(<Message type={ERROR} text="Erro interno." />);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha | Dogs" description="" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <label htmlFor="password" className={styles.label}>
            Nova Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {emptyMessage && <p className={styles.error}>Preencha um valor.</p>}
        </div>
        <button className={styles.button}>Resetar</button>
      </form>
      {message}
    </section>
  );
};

export default LoginResetar;
