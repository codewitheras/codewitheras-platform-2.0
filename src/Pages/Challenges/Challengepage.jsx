/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ChallengeBanner from "../../Components/ChallengeBanner/ChallengeBanner";
import styles from "./Challenges.module.css";

import DemoImg from "../../assets/3D-images/Demo.png";
import Footer from "../../Components/Core/Footer/Footer";

const Challengepage = () => {
  const [countdownDays, setCountDownDays] = useState("");
  const [countdownHours, setCountDownHours] = useState("");
  const [countdownMinutes, setCountDownMinutes] = useState("");
  const [countdownSeconds, setCountDownSeconds] = useState("");

  let interval;

  const startCountDown = () => {
    const countDownDate = new Date("August 10, 2022").getTime();

    interval = setInterval(() => {
      const today = new Date().getTime();

      // distance from Future (August 10, 2022) to Today
      const distance = countDownDate - today;

      // Days, Hours, Minutes, Seconds...
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // stop countDown
        clearInterval(interval.current);
      } else {
        // UPDATE COUNTDOWN
        setCountDownDays(days);
        setCountDownHours(hours);
        setCountDownMinutes(minutes);
        setCountDownSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    startCountDown();
  });

  return (
    <>
      <div className={styles.challenges}>
        <ChallengeBanner
          challengeTitle='Welcome to the Airbnb 5-day ReactJS Challenge.'
          bgImg=''
          overlayColor=''
          days={countdownDays}
          hours={countdownHours}
          minutes={countdownMinutes}
          seconds={countdownSeconds}
          date_time='Monday 8th August, 2022 3:00 PM'
        />

        {/* DEMO IMAGE */}
        <section className={styles.demo__img_wrapper}>
          <div className={styles.demo__img}>
            <img src={DemoImg} alt='demo' loading='lazy' />
          </div>
          <a
            href='http://demo.netlify.app'
            target='_blank'
            rel='noopener noreferrer'>
            View Demo
          </a>
        </section>

        {/* TECH STACK */}
        <section className={styles.tech__stack}>
          {/* list of all stack images */}
        </section>

        {/* TUTOR */}
        <section className={styles.tutor}>
          <div className={styles.intro}>
            <h3>Codewitheras Presents</h3>
          </div>
          <div className={styles.tutor__img}>
            <img src='' alt='' loading='lazy' />
          </div>
          <div className={styles.tutor__details}>
            <h3 className={styles.title}>
              The 5-Day Airbnb ReactJS Challenge.
            </h3>
            <p className={styles.txt}>
              In this challenge, you are going to learn how to build a beautiful
              <span> Airbnb</span> clone with <span>Mapbox Integration</span>,
              <span> Responsive Design</span>, <span> Firebase</span>,
              <span> Rapid API</span>, <span>Date-Picker</span> functionality,
              <span> Booking</span> functionality, <span>Search </span>
              functionality etc... Are you pumped for this challenge?
            </p>
          </div>
        </section>

        {/* CHALLENGE OUTLINE */}
        <section className={styles.challenge__outline}>
          <ChallengeCard
            img={DemoImg}
            desc='Build the homepage of Airbnb clone using React and React Icons'
            title='Day 01: Building Portfolio'
            odd='true'
          />
          <ChallengeCard
            img={DemoImg}
            desc='Build the homepage of Airbnb clone using React and React Icons'
            title='Day 02: Building Landing page'
          />
          <ChallengeCard
            img={DemoImg}
            desc='Build the homepage of Airbnb clone using React and React Icons'
            title='Day 03: Authentication page'
            odd='true'
          />
          <ChallengeCard
            img={DemoImg}
            desc='Build the homepage of Airbnb clone using React and React Icons'
            title='Day 04: Building Search page'
          />
          <ChallengeCard
            img={DemoImg}
            desc='Build the homepage of Airbnb clone using React and React Icons'
            title='Day 05: Building Booking page'
            odd='true'
          />
        </section>
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export const ChallengeCard = ({ img, title, desc, odd }) => {
  return (
    <div className={odd ? styles.challenge__card_odd : styles.challenge__card}>
      <div className={styles.challenge__txt}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles.challenge__img}>
        <img src={img} alt={title} loading='lazy' />
      </div>
    </div>
  );
};

export default Challengepage;
