import React, { useContext, useEffect, useState } from "react";
import styles from "./Photo.module.css";
import Comment from "../../img/comment.svg?react";
import { COMMENT_POST, PHOTO_GET } from "../../api/services";
import { UserContext } from "../../context/UserContext";
import { useLogin } from "../../hooks/useLogin";
import Message, { ERROR } from "../Message";

const PhotoComments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [textComment, setTextComment] = useState("");
  const [message, setMessage] = useState(null)
  const { loggedIn } = useContext(UserContext);
  const { getToken } = useLogin();
  
  useEffect(() => {
    const { endpoint } = PHOTO_GET(id);
    
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const token = getToken();
      const { endpoint, method, headers, body } = COMMENT_POST(
        id,
        textComment,
        token
      );

      const response = await fetch(endpoint, {
        method,
        headers,
        body: JSON.stringify(body),
      });
      const data = await response.json()

      if (response.ok) {
        setComments([...comments, data]);
        setTextComment("")
      }
    } catch (e) {
      setMessage(<Message type={ERROR} text="Erro interno." />)
    }
  }

  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {loggedIn && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
            className={styles.textarea}
            id="comment"
            name="comment"
            placeholder="Comente..."
            value={textComment}
            onChange={(e) => setTextComment(e.target.value)}
          ></textarea>
          <button className={styles.button}>
            <Comment />
          </button>
          {message}
        </form>
      )}
    </>
  );
};

export default PhotoComments;
