import React from "react";
import styles from "./Login.module.css";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Outlet />
      </div>
    </section>
  );
};

export default Login;
