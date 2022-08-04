/* eslint-disable no-restricted-globals */
import React from "react";
import styles from "./ChallengeBanner.module.css";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../ContextAPI/AuthContext";

const ChallengeBanner = props => {
  const { challengeTitle, bgImg, days, hours, minutes, seconds, date_time } =
    props;

  const history = useHistory();

  const { user } = useAuth();

  const handleSpotReserve = () => {
    if (!user) {
      history.push("/signin");
    } else {
      const name = prompt("Enter your fullname");
      const email = prompt("Enter your email");
      const happyToBuild = confirm("Want to upgrade your skills in React?");

      if (!name) {
        alert("Please enter your fullname");
      } else if (!email) {
        alert("Please enter your email");
      } else if (!happyToBuild) {
        alert("Please choose yes to reserve your spot");
      } else {
        setTimeout(() => {
          alert(`${name} you successfully reserved your seat`);
          history.replace("/");
        }, 3000);
      }
    }
  };

  return (
    <div
      className={styles.challenge__banner}
      style={{
        backgroundImage: bgImg,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundColor: overlayColor,
      }}>
      <h2 className={styles.challenge__title}>{challengeTitle}</h2>
      <p className={styles.challenge__host}>Hosted by Codewitheras</p>
      {/* <small className={styles.challenge__exp_level}>
        No coding experience is required | Beginner Friendly
      </small> */}
      <p className={styles.type}>
        This build is a full stack masterpiece for your developer portfolio!
      </p>
      {/* <h3 className={styles.price}>
        With over <span>Ghc 100</span> worth of prices to be won!
      </h3> */}
      <p className={styles.date_and_time}>{date_time}</p>
      <div className={styles.countdown__timer}>
        <div className={styles.days}>
          <h3>{days}</h3>
          <p>days</p>
        </div>
        <span className={styles.dot}>:</span>
        <div className={styles.hours}>
          <h3>{hours}</h3>
          <p>hours</p>
        </div>
        <span className={styles.dot}>:</span>
        <div className={styles.minutes}>
          <h3>{minutes}</h3>
          <p>minutes</p>
        </div>
        <span className={styles.dot}>:</span>
        <div className={styles.seconds}>
          <h3>{seconds}</h3>
          <p>seconds</p>
        </div>
      </div>
      <div className={styles.reserve__button}>
        <button
          type='button'
          onClick={handleSpotReserve}
          style={{ background: "#a21616a8" }}>
          Click to reserve your spot 🔥🔥
        </button>
      </div>
    </div>
  );
};

export default ChallengeBanner;
