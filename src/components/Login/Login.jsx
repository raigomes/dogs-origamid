import React from "react";
import styles from "./Login.module.css";
import { Outlet } from "react-router-dom";
import Head from "../Head";

const Login = () => {
  return (
    <section className={styles.login}>
      <Head title="Login | Dogs" description="" />
      <div className={styles.forms}>
        <Outlet />
      </div>
    </section>
  );
};

export default Login;
