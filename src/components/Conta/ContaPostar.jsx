import React, { useState } from "react";
import styles from "./Conta.module.css";
import { useLogin } from "../../hooks/useLogin";
import { PHOTO_POST } from "../../api/services";
import { useNavigate } from "react-router-dom";

const ContaPostar = () => {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [img, setImg] = useState("");
  const [preview, setPreview] = useState("");
  const { getToken } = useLogin();
  const navigate = useNavigate()

  function handleChangeFile(e) {
    const [file] = e.target.files;
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImg(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const token = getToken();
      const formData = new FormData();
      formData.append("img", img);
      formData.append("nome", nome);
      formData.append("peso", peso);
      formData.append("idade", idade);

      const { endpoint, method, headers } = PHOTO_POST(
        img,
        nome,
        peso,
        idade,
        token
      );
      const response = await fetch(endpoint, {
        method,
        headers,
        body: formData,
      });

      if(response.ok) navigate("/conta")
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <label htmlFor="nome" className={styles.label}>
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className={styles.input}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="peso" className={styles.label}>
            Peso
          </label>
          <input
            type="text"
            id="peso"
            name="peso"
            className={styles.input}
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="idade" className={styles.label}>
            Idade
          </label>
          <input
            type="text"
            id="idade"
            name="idade"
            className={styles.input}
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>
        <input
          type="file"
          id="img"
          name="img"
          className={styles.file}
          onChange={handleChangeFile}
        />
        <button className={styles.button}>Enviar</button>
      </form>
      <div>
        <div
          className={styles.preview}
          style={{
            backgroundImage: `url(${preview})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default ContaPostar;
