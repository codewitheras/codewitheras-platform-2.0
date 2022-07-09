import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <p>About us</p>
      <div className={styles.about__content}>
        <h3>What is Codewitheras</h3>
        <p>
          Codewitheras is an online course class that provides various
          categories of courses ranging from web application development and
          projects including Amazon, Twitter, Facebook etc... With more than
          100+ students learning together from various countries. With this
          platform, it is hoped that students can learn with professionals in
          their respective fields anytime and anywhere.
        </p>
      </div>
      <div className={styles.about__details_digits}>
        <h3><span>100+ </span> active users</h3>
        <h3><span>10+ </span> interactive courses</h3>
        <h3><span>20+ </span> web and mobile projects</h3>
      </div>
    </div>
  );
};

export default About;
