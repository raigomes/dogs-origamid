import React from 'react'
import styles from './Feed.module.css'

const Feed = () => {
  return (
    <ul className={`${styles.feed} animeLeft`}>
        <li className={styles.photo}>
            <div className={styles.wrapper}>
                <img src="https://loremflickr.com/1000/1000/dog?random=1" alt="Doguinho" className={styles.img} />
            </div>
            <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo}>
            <div className={styles.wrapper}>
                <img src="https://loremflickr.com/1000/1000/dog?random=2" alt="Doguinho" className={styles.img} />
            </div>
            <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo}>
            <div className={styles.wrapper}>
                <img src="https://loremflickr.com/1000/1000/dog?random=3" alt="Doguinho" className={styles.img} />
            </div>
            <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo}>
            <div className={styles.wrapper}>
                <img src="https://loremflickr.com/1000/1000/dog?random=4" alt="Doguinho" className={styles.img} />
            </div>
            <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo}>
            <div className={styles.wrapper}>
                <img src="https://loremflickr.com/1000/1000/dog?random=5" alt="Doguinho" className={styles.img} />
            </div>
            <span className={styles.visualizacao}>0</span>
        </li>
        <li className={styles.photo}>
            <div className={styles.wrapper}>
                <img src="https://loremflickr.com/1000/1000/dog?random=6" alt="Doguinho" className={styles.img} />
            </div>
            <span className={styles.visualizacao}>0</span>
        </li>
    </ul>
  )
}

export default Feed