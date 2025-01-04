import React from "react";
import styles from "./Modal.module.css"
import { Link } from "react-router-dom";

const FeedDetails = ({data}) => {
  if(!data) return null
  return (
    <div>
      <p className={styles.author}>
        <Link to={`/perfil/${data.author}`}>@{data.author}</Link>
        <span className={styles.visualizacoes}>{data.acessos}</span>
      </p>
      <h1 className="title">
        <a href={`/foto/${data.id}`}>{data.title}</a>
      </h1>
      <ul className={styles.attributes}>
        <li>{data.peso} kg</li>
        <li>{data.idade} anos</li>
      </ul>
    </div>
  );
};

export default FeedDetails;
