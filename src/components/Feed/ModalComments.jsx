import React from "react";
import styles from "./Modal.module.css";
import Comment from "../../img/comment.svg?react";

const ModalComments = () => {
  return (
    <>
      <ul className={styles.comments}>
        <li>
          <b>dog: </b>
          <span>200 reais</span>
        </li>
      </ul>
      <form className={styles.form}>
        <textarea
          className={styles.textarea}
          id="comment"
          name="comment"
          placeholder="Comente..."
        ></textarea>
        <button className={styles.button}>
          <Comment />
        </button>
      </form>
    </>
  );
};

export default ModalComments;
