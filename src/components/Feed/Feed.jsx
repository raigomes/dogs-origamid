import React, { useState } from "react";
import styles from "./Feed.module.css";
import Modal from "./Modal";
import FeedPhoto from "./FeedPhoto";

const Feed = ({ photos }) => {
  const [modal, setModal] = useState(null);

  function openModal(data) {
    setModal(<Modal data={data} close={closeModal} />);
  }

  function closeModal() {
    setModal(null);
  }

  if (!photos) return null;

  return (
    <>
      {modal}
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo) => (
          <li
            key={photo.id}
            className={styles.photo}
            onClick={() => openModal(photo)}
          >
            <FeedPhoto src={photo.src} alt={photo.title} />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Feed;
