import React, { useState } from "react";
import styles from "./Feed.module.css";
import Modal from "./Modal";

const Feed = () => {
  const [modal, setModal] = useState(null);
  
  function openModal() {
    setModal(<Modal close={closeModal} />);
  }

  function closeModal() {
    setModal(null)
  }

  return (
    <div>
      {modal}
      <ul className={`${styles.feed} animeLeft`}>
        <li className={styles.photo} onClick={openModal}>
          <div className={styles.wrapper}>
            <img
              src="https://loremflickr.com/1000/1000/dog?random=1"
              alt="Doguinho"
              className={styles.img}
            />
          </div>
          <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo} onClick={openModal}>
          <div className={styles.wrapper}>
            <img
              src="https://loremflickr.com/1000/1000/dog?random=2"
              alt="Doguinho"
              className={styles.img}
            />
          </div>
          <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo} onClick={openModal}>
          <div className={styles.wrapper}>
            <img
              src="https://loremflickr.com/1000/1000/dog?random=3"
              alt="Doguinho"
              className={styles.img}
            />
          </div>
          <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo} onClick={openModal}>
          <div className={styles.wrapper}>
            <img
              src="https://loremflickr.com/1000/1000/dog?random=4"
              alt="Doguinho"
              className={styles.img}
            />
          </div>
          <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo} onClick={openModal}>
          <div className={styles.wrapper}>
            <img
              src="https://loremflickr.com/1000/1000/dog?random=5"
              alt="Doguinho"
              className={styles.img}
            />
          </div>
          <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo} onClick={openModal}>
          <div className={styles.wrapper}>
            <img
              src="https://loremflickr.com/1000/1000/dog?random=6"
              alt="Doguinho"
              className={styles.img}
            />
          </div>
          <span className={styles.visualizacao}>0</span>
        </li>
      </ul>
    </div>
  );
};

export default Feed;
