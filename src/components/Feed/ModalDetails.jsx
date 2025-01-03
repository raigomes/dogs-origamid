import React from "react";
import styles from "./Modal.module.css"

const FeedDetails = () => {
  return (
    <div>
      <p className={styles.author}>
        <a href="/perfil/cat">@cat</a>
        <span className={styles.visualizacoes}>290505</span>
      </p>
      <h1 className="title">
        <a href="/foto/233">Ellie</a>
      </h1>
      <ul className={styles.attributes}>
        <li>4 kg</li>
        <li>12 anos</li>
      </ul>
    </div>
  );
};

export default FeedDetails;
