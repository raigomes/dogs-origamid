import React from "react";
import styles from "./Modal.module.css";
import FeedPhoto from "./FeedPhoto";
import ModalDetails from "./ModalDetails";
import ModalComments from "./ModalComments";

const Modal = (props) => {

  function handleClick(e) {
    (e.target.className === styles.modal) && props.close();
  }

  return (
    <div className={styles.modal} onClick={handleClick}>
      <div className={styles.photo}>
        <div className={styles.img}>
          <FeedPhoto />
        </div>
        <div className={styles.details}>
          <ModalDetails />
        </div>
        <ModalComments />
      </div>
    </div>
  );
};

export default Modal;
