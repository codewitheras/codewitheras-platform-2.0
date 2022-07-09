import React from "react";
import styles from "./Community.module.css";

// import Telegram3D from "../../assets/3D-images/Telegram.png";
// import Facebook3D from "../../assets/3D-images/Facebook.png";
// import Discord3D from "../../assets/3D-images/Discord.png";
// import WhatsApp3D from "../../assets/3D-images/Whatsapp.png";
// import YouTube3D from "../../assets/3D-images/Youtube.png";

import Telegram3D from "../../assets/Telegram.svg";
import Facebook3D from "../../assets/Facebook.svg";
import Discord3D from "../../assets/Discord.svg";
import WhatsApp3D from "../../assets/Whatsapp.svg";
import YouTube3D from "../../assets/Youtube.svg";

const Community = () => {
  return (
    <div className={styles.community}>
      <p>Community</p>
      <div className={styles.join__community}>
        <h2>Join our community</h2>
        <p>
          Join our community channels and get access to learning resources, find
          help and meet like-minded students just like you.
        </p>
        {/* Community details and links */}
        <div className={styles.community__outlines}>
          <a
            href='https://t.me/+P7E5Le7-D_sxNjQ0'
            target='_blank'
            rel='noreferrer'>
            <img src={Telegram3D} alt='telegram link' loading='lazy' />
            <p>Telegram</p>
          </a>
          <a
            href='https://t.me/+P7E5Le7-D_sxNjQ0'
            target='_blank'
            rel='noreferrer'>
            <img src={Facebook3D} alt='telegram link' loading='lazy' />
            <p>Facebook</p>
          </a>
          <a
            href='https://t.me/+P7E5Le7-D_sxNjQ0'
            target='_blank'
            rel='noreferrer'>
            <img src={Discord3D} alt='telegram link' loading='lazy' />
            <p>Discord</p>
          </a>
          <a
            href='https://whats.me/+P7E5Le7-D_sxNjQ0'
            target='_blank'
            rel='noreferrer'>
            <img src={WhatsApp3D} alt='telegram link' loading='lazy' />
            <p>WhatsApp</p>
          </a>
          <a
            href='https://t.me/+P7E5Le7-D_sxNjQ0'
            target='_blank'
            rel='noreferrer'>
            <img src={YouTube3D} alt='telegram link' loading='lazy' />
            <p>YouTube</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
