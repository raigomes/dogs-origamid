import React from "react";
import styles from "./Photo.module.css";
import FeedPhoto from "../Feed/FeedPhoto";
import PhotoComments from "./PhotoComments";
import PhotoDetails from "./PhotoDetails";

const Photo = ({ data, id }) => {
  if (!data) return null;
  return (
    <div className={`${styles.photo} ${id ? styles.single : ""}`}>
      <div className={styles.img}>
        <FeedPhoto src={data.src} alt={data.title} />
      </div>
      <div className={styles.details}>
        <PhotoDetails data={data} />
      </div>
      <PhotoComments id={data.id} />
    </div>
  );
};

export default Photo;
