import React, { useEffect, useState } from "react";
import styles from "./Photo.module.css";
import Comment from "../../img/comment.svg?react";
import { COMMENT_GET } from "../../api/services";

const PhotoComments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const { endpoint } = COMMENT_GET(id);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);


  return (
    <>
      <ul className={styles.comments}>
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
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

export default PhotoComments;
