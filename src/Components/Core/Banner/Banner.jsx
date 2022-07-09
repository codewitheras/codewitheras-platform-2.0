import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

import LeftHand from "../../../assets/PNG Files/Dark white/Basic/Dark-white-in-Basic10.png";

const Banner = ({ title, text, bgImage, linkURL, link, show3D }) => {
  return (
    <div
      className={styles.banner}
      style={bgImage && {backgroundColor: { bgImage } }}>
      <div className={styles.banner__content}>
        <h1>{title}</h1>
        <p>{text}</p>
        {link && (
          <Link to={linkURL} className={styles.cta}>
            {link}
          </Link>
        )}
        {show3D ? (
          <div className={styles._3d__images}>
            <img src={LeftHand} alt='3d_images' loading='lazy' />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Banner;
