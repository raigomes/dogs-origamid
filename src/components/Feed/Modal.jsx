import React from "react";
import styles from "./Modal.module.css";
import Photo from "../Photo/Photo";

const Modal = (props) => {

  function handleClick(e) {
    (e.target.className === styles.modal) && props.close();
  }

  return (
    <div className={styles.modal} onClick={handleClick}>
      <Photo data={props.data} />
    </div>
  );
};

export default Modal;
