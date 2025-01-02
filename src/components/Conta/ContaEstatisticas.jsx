import React from "react";
import styles from "./Conta.module.css";

const ContaEstatisticas = () => {
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: 0</p>
      </div>
      <div className={styles.graphItem}></div>
      <div className={styles.graphItem}></div>
    </section>
  );
};

export default ContaEstatisticas;
