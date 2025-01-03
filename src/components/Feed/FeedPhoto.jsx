import React from 'react'
import styles from './Feed.module.css'

const FeedPhoto = () => {
  return (
    <div className={styles.wrapper}>
        <img src="https://loremflickr.com/1000/1000/dog?random=1" alt="Doguinho" className={styles.img} />
    </div>
  )
}

export default FeedPhoto