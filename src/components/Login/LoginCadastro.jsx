import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import Head from "../Head";
import { USER_POST } from "../../api/services";
import { UserContext } from "../../context/UserContext";
import Message, { ERROR } from "../Message";
import useForm from "../../hooks/useForm";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginCadastro = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");
  const [message, setMessage] = useState(null);
  const { login } = useContext(UserContext);

  async function handleCadastro(e) {
    e.preventDefault();

    if (username.validate() && password.validate() && email.validate()) {
      try {
        const { endpoint, method, headers, body } = USER_POST(
          username.value,
          password.value,
          email.value
        );
        const response = await fetch(endpoint, {
          method,
          headers,
          body: JSON.stringify(body),
        });
        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        await login(username, password);
      } catch (e) {
        setMessage(<Message type={ERROR} text={e.message} />);
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta | Dogs" description="" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleCadastro}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
        {message}
      </form>
    </section>
  );
};

export default LoginCadastro;
