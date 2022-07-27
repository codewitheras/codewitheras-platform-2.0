import React from 'react'
import ChallengeBanner from "../../Components/ChallengeBanner/ChallengeBanner";
import styles from "./Challenges.module.css";

const Challengepage = () => {
  return (
    <div className={styles.challenges}>
      {/* Challenge Logo */}

      {/* Challenge Banner
       * Banner background image of challenge...
       * Intro text
       * Host name
       * Experience
       * prices
       * Date and Time
       * Count-down
       * Reserve button
       *
       * Project Images stack
       * Tutor profile
       * Challenge introduction
       * Day 1 build
       * Day 2 build
       * Day 3 build
       * Day 4 build
       * Day 5 giveaways {1st place, 2nd place, 3rd place}
       */}

      <ChallengeBanner challengeTitle='Airbnb Clone' />
    </div>
  );
};

export default Challengepage