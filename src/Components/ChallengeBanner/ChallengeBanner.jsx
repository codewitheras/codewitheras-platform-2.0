import React from "react";
import styles from "./ChallengeBanner.module.css";

const ChallengeBanner = props => {
  const { challengeTitle, bgImg, overlayColor, countDownTimer, date_time } =
    props;

  return (
    <div
      className={styles.challenge__banner}
      style={{
        backgroundImage: bgImg,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: overlayColor,
      }}>
      <h2>{challengeTitle}</h2>
      <p>Hosted by Codewitheras</p>
      <small>No coding experience is required | Beginner Friendly</small>
      <br />
      <p>
        Its going to be a full stack masterpiece for your devloper portfolio!
      </p>
      <h3>
        With over <span>Ghc 100</span> worth of prices!
      </h3>
      <p>{date_time}</p>
      <div className={styles.countdown__timer}>
        <div className={styles.days}>
          <h3>4</h3>
          <p>days left</p>
        </div>
        <div className={styles.hours}>
          <h3>4</h3>
          <p>hours left</p>
        </div>
        <div className={styles.minutes}>
          <h3>30</h3>
          <p>minutes left</p>
        </div>
        <div className={styles.seconds}>
          <h3>4</h3>
          <p>seconds left</p>
        </div>
        {countDownTimer}
      </div>
    </div>
  );
};

export default ChallengeBanner;
