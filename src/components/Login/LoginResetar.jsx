import React, { useState } from "react";
import styles from "./Login.module.css";
import Head from "../Head";
import { PASSWORD_RESET_POST } from "../../api/services";
import { useNavigate, useSearchParams } from "react-router-dom";
import Message, { ERROR } from "../Message";
import Input from "../Forms/Input";
import useForm from "../../hooks/useForm";
import Button from "../Forms/Button";

const LoginResetar = () => {
  const password = useForm();
  const [message, setMessage] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.validate()) {
      try {
        const key = searchParams.get("key");
        const login = searchParams.get("login");
        const { endpoint, method, headers, body } = PASSWORD_RESET_POST(
          login,
          password.value,
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
          const data = await response.json();
          setMessage(<Message type={ERROR} text={data.message} />);
        }
      } catch (e) {
        console.error(e);
        setMessage(<Message type={ERROR} text="Erro interno." />);
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha | Dogs" description="" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        <Button>Resetar</Button>
      </form>
      {message}
    </section>
  );
};

export default LoginResetar;
