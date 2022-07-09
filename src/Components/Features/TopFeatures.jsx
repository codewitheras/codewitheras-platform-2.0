import React from 'react'
import styles from './TopFeatures.module.css'

import Feature1 from '../../assets/Feature1.png'
import Feature2 from '../../assets/Feature2.png'
import Feature3 from '../../assets/Feature3.png'

const TopFeatures = () => {
  return (
    <div className={styles.top__features}>
      <p>Our Features</p>
      <div className={styles.features}>
        <h3>Our Top Features</h3>
        <div className={styles.feature__cards}>
          <div className={styles.feature__card}>
            <img src={Feature1} alt="" />
            <h3>A complete variety of learning topics</h3>
            <p>Easily find a comprehensiive range of topics including design, development, growth, and more.</p>
          </div>
          <div className={styles.feature__card}>
            <img src={Feature2} alt="" />
            <h3>Ease of finding the type of learning that interests you</h3>
            <p>You can find fields in finding the type of course or projects that interests you.</p>
          </div>
          <div className={styles.feature__card}>
            <img src={Feature3} alt="" />
            <h3>High demanding courses and topics</h3>
            <p>Find high demanding courses or topics buzzing the developer world and fix yourself in one that interests you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFeatures