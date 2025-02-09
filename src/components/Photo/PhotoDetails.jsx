import React from "react";
import styles from "./Photo.module.css";
import { Link, useNavigate } from "react-router-dom";
import { PHOTO_DELETE } from "../../api/services";
import { useLogin } from "../../hooks/useLogin";

const PhotoDetails = ({ data, isUserPhoto }) => {
  const { getToken } = useLogin()
  const navigate = useNavigate()

  async function handleDelete() {
    try {
      if(window.confirm("Você quer realmente deletar a foto?")){
        const token = getToken()
        const { endpoint, method, headers } = PHOTO_DELETE(data.id, token);
        const response = await fetch(endpoint, { method, headers })
        if(response.ok) navigate("/")
      }
    } catch(e) {
      console.error(e)
    }
  }

  if (!data) return null;
  return (
    <div>
      <p className={styles.author}>
        {!isUserPhoto && (
          <Link to={`/perfil/${data.author}`}>@{data.author}</Link>
        )}
        {isUserPhoto && (
          <button className={styles.delete} onClick={handleDelete}>
            Deletar
          </button>
        )}
        <span className={styles.visualizacoes}>{data.acessos}</span>
      </p>
      <h1 className="title">
        <Link to={`/foto/${data.id}`}>{data.title}</Link>
      </h1>
      <ul className={styles.attributes}>
        <li>{data.peso} kg</li>
        <li>{data.idade} anos</li>
      </ul>
    </div>
  );
};

export default PhotoDetails;
