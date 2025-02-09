import React, { useContext, useEffect, useState } from "react";
import styles from "./Conta.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Dashboard from "../../img/dashboard.svg?react";
import Bars from "../../img/bars.svg?react";
import Plus from "../../img/plus.svg?react";
import Exit from "../../img/exit.svg?react";
import { UserContext } from "../../context/UserContext";

const NavDesktop = ({ sair }) => (
  <nav className={styles.nav}>
    <NavLink to="/conta" end>
      <Dashboard />
    </NavLink>
    <NavLink to="/conta/estatisticas">
      <Bars />
    </NavLink>
    <NavLink to="/conta/postar">
      <Plus />
    </NavLink>
    <button onClick={sair}>
      <Exit />
    </button>
  </nav>
);

const NavMobile = ({ sair }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        aria-label="Menu"
        className={`${styles.mobileButton} ${active ? styles.mobileButtonActive : false}`}
        onClick={() => setActive(!active)}
      ></button>
      <nav className={`${styles.navMobile} ${active ? styles.navMobileActive : false}`}>
        <NavLink to="/conta" end>
          <Dashboard />
          Minhas Fotos
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Bars />
          Estatísticas
        </NavLink>
        <NavLink to="/conta/postar">
          <Plus />
          Adicionar Foto
        </NavLink>
        <button onClick={sair}>
          <Exit />
          Sair
        </button>
      </nav>
    </>
  );
};

const ContaHeader = () => {
  const [title, setTitle] = useState("");
  const [nav, setNav] = useState(null);
  const { sair } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    function chooseNav() {
      if (window.innerWidth > 640) setNav(<NavDesktop sair={sair} />);
      else setNav(<NavMobile sair={sair} />);
    }
    window.addEventListener("resize", chooseNav);
    chooseNav();
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/conta":
        setTitle("Minha Conta");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      default:
        throw new Error("Rota Inválida");
    }
  }, [location]);

  if (!title) return null;

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      {nav}
    </header>
  );
};

export default ContaHeader;
