import React from 'react'
import styles from './Feed.module.css'

const FeedPhoto = ({src, alt}) => {
  return (
    <div className={styles.wrapper}>
        <img src={src} alt={alt} className={styles.img} />
    </div>
  )
}

export default FeedPhoto