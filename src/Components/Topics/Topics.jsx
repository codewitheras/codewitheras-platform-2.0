/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styles from './Topics.module.css'

const Topics = () => {
  const [isLarge, setIsLarge] = useState(false);
  
  return (
    <div className={styles.topics}>
      <p>Our Topics</p>
      <div className={styles.topic}>
        <h3>Complete Variety of Topics</h3>
        <div className={styles.topic__cards}>
          <div className={isLarge ? styles.topic__card_large : styles.topic__card}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topics