import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useLogin } from "../../hooks/useLogin";
import ContaHeader from "./ContaHeader";
import Head from "../Head";

const Conta = () => {
  const { loggedIn, sair } = useContext(UserContext);
  const { getToken, validateToken } = useLogin();

  useEffect(() => {
    async function redirectLogin() {
      const token = getToken();
      if (!token) sair();
      const isValid = await validateToken(token);
      if (!isValid) sair();
    }
    redirectLogin()
  }, [])

  if(!loggedIn) return null

  return (
    <section className="container">
      <Head title="Minha Conta | Dogs" description="" />
      <ContaHeader />
      <Outlet />
    </section>
  );
};

export default Conta;
