import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

const CourseCard = props => {
  const { title, coverImg, description, level, tutor, price, tag } = props;
  const [color, setColor] = useState("");

  useEffect(() => {
    let unsubscribe;

    const randomColorGenerator = () => {
      let letters = "0123456789ABCDEF";
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      setColor(color)
      return color;
    };

    randomColorGenerator();

    return () => unsubscribe;
    
  }, [])
  

  return (
    <Link to={`/project/video/${title}`} className={styles.card}>
      <div className={styles.img__container}>
        <img src={coverImg} alt='coverImg' loading='lazy' />
        <div className={styles.level}>
          <p>{level}</p>
        </div>
      </div>
      <div className={styles.details}>
        <small style={{ backgroundColor: color }}>{tag}</small>
        <h3>{title}</h3>
        <p>{description}</p>
        {/* <div className={styles.stack}>{stack}</div> */}
        <div className={styles.info}>
          <p>{tutor}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
