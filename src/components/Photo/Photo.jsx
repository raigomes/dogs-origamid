import React, { useEffect, useState } from "react";
import styles from "./Photo.module.css";
import FeedPhoto from "../Feed/FeedPhoto";
import PhotoComments from "./PhotoComments";
import PhotoDetails from "./PhotoDetails";
import { useLogin } from "../../hooks/useLogin";

const Photo = ({ data, id }) => {
  const [isUserPhoto, setIsUserPhoto] = useState(false)
  const { getUser } = useLogin()
  
  useEffect(() => {
    async function updateUserPhoto () {
      const user = await getUser()
      setIsUserPhoto(user.nome === data.author)
    }
    updateUserPhoto()
  }, [isUserPhoto])

  if (!data) return null;
  return (
    <div className={`${styles.photo} ${id ? styles.single : ""}`}>
      <div className={styles.img}>
        <FeedPhoto src={data.src} alt={data.title} />
      </div>
      <div className={styles.details}>
        <PhotoDetails data={data} isUserPhoto={isUserPhoto} />
      </div>
      <PhotoComments id={data.id} />
    </div>
  );
};

export default Photo;
