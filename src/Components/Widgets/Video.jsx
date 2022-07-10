import React from "react";
import styles from "./Video.module.css";

const Video = ({ videoUrl, videoPosterImg }) => {
  return (
    <video
      controls
      src={videoUrl}
      poster={videoPosterImg}
      loading='lazy'
      className={styles.video}
    />
  );
};

export { Video };
