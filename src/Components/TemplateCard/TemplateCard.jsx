import React, { useEffect, useState } from "react";
import styles from "./TemplateCard.module.css";
import { Link } from 'react-router-dom';

const TemplateCard = props => {
  const [color, setColor] = useState("");

  const {
    template_name,
    level,
    templateImgUrl,
    download_link,
    download,
    deployed_link,
    github__link,
    view_link,
  } = props;

  useEffect(() => {
    let unsubscribe;

    const randomColorGenerator = () => {
      let letters = "0123456789ABCDEF";
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      setColor(color);
      return color;
    };

    randomColorGenerator();

    return () => unsubscribe;
  }, []);
  return (
    <div className={styles.template__card}>
      <div className={styles.template__card_img_container}>
        <img src={templateImgUrl} alt={template_name} loading='lazy' />
      </div>
      <div className={styles.template__card_details}>
        {level && <small style={{ backgroundColor: color }}>{level}</small>}
        {template_name && <h3>{template_name}</h3>}
        {view_link && (
          <Link to={`/template/${view_link}`} download={download && true}>
            View Details
          </Link>
        )}
        {download_link && (
          <a href={download_link} download={download && true}>
            Download
          </a>
        )}
        {deployed_link && (
          <a href={deployed_link} rel='noreferrer noopener' target='_blank' className={styles.sub_link}>
            Live site
          </a>
        )}
        {github__link && (
          <a href={github__link} rel='noreferrer noopener' target='_blank' className={styles.sub_link}>
            Github Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;
