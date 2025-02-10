import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Message, { ERROR } from "../Message";
import useForm from "../../hooks/useForm";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const [message, setMessage] = useState(null);
  const { login, sair } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      try {
        await login(username.value, password.value)
      } catch(e) {
        setMessage(<Message type={ERROR} text={e.message} />)
        sair()
      }
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
        {message}
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/criar">
          <Button>Cadastro</Button>
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
