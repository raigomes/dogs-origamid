import React from "react";
import styles from "./Conta.module.css";

const ContaPostar = () => {
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form>
        <div className={styles.wrapper}>
          <label htmlFor="nome" className={styles.label}>
            Nome
          </label>
          <input type="text" id="nome" name="nome" className={styles.input} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="peso" className={styles.label}>
            Peso
          </label>
          <input type="text" id="peso" name="peso" className={styles.input} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="idade" className={styles.label}>
            Idade
          </label>
          <input type="text" id="idade" name="idade" className={styles.input} />
        </div>
        <input type="file" id="img" name="img" className={styles.file} />
        <button className={styles.button}>Entrar</button>
      </form>
      <div>
        <div
          className={styles.preview}
          style={{"backgroundImage": `url("blob:https://dogs.origamid.dev/dd1326e9-30b1-49ec-a4f0-70f41cd47680")`}}
        ></div>
      </div>
    </section>
  );
};

export default ContaPostar;
