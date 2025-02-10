import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import Head from "../Head";
import { PASSWORD_LOST_POST } from "../../api/services";
import Message, { ERROR, SUCCESS } from "../Message";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";

const LoginPerdeu = () => {
  const login = useForm();
  const [message, setMessage] = useState(null);
  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login.validate()) {
      try {
        const url = `${window.location.origin}/login/resetar`;
        const { endpoint, method, headers, body } = PASSWORD_LOST_POST(
          login.value,
          url
        );

        const response = await fetch(endpoint, {
          method,
          headers,
          body: JSON.stringify(body),
        });

        if (response.ok) {
          formRef.current.remove();
          setMessage(<Message type={SUCCESS} text="Email enviado." />);
        } else {
          const data = await response.json();
          setMessage(<Message type={ERROR} text={data.message} />);
        }
      } catch (e) {
        setMessage(<Message type={ERROR} text="Erro interno" />);
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha | Dogs" description="" />
      <h1 className="title">Perdeu a senha?</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="login" {...login} />
        <Button>Enviar Email</Button>
      </form>
      {message}
    </section>
  );
};

export default LoginPerdeu;
