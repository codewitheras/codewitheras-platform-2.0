import React from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.faq}>
      <p>Faq</p>
      <div className={styles.faq__container}>
        <h3>Frequently Asked Questions</h3>
        {/* FAQ outlines */}
        <div className={styles.faq__outlines}>
          <div className={styles.faq__outline}>
            {/* // todo: Remove the left arrows  */}
            <details open>
              <summary>
                <span>01.</span> What is Codewitheras?
              </summary>
              <p>
                Codewitheras is an online course class that provides various
                categories of courses ranging from web development and projects
                including Amazon, Twitter, Facebook etc... With more than 100+
                students learning together from various countries.
              </p>
            </details>
          </div>
          <div className={styles.faq__outline}>
            <details>
              <summary>
                <span>02.</span> What can be done after joining Codewitheras?
              </summary>
              <p>
                Codewitheras is an online course class that provides various
                categories of courses ranging from web application development
                and projects including Amazon, Twitter, Facebook etc... With
                more than 100+ students learning together from various
                countries. With this platform, it is hoped that students can
                learn with professionals in their respective fields anytime and
                anywhere.
              </p>
            </details>
          </div>
          <div className={styles.faq__outline}>
            <details>
              <summary>
                <span>03.</span> What are tha advantages of Codewitheras over
                other online course providers?
              </summary>
              <p>
                Codewitheras creates courses and projects based on the students
                ability and understanding level. We make sure our contents are
                tailored to the specific student's interests in other to make it
                fun and enjoyable to learn.
              </p>
            </details>
          </div>
          <div className={styles.faq__outline}>
            <details>
              <summary>
                <span>04.</span> What projects does Codewitheras has to offer?
              </summary>
              <p>
                Codewitheras has countless projects for both beginners,
                intermediates and adavanced students ranging from popular tech
                clones to a full custom/startup web applications.
              </p>
            </details>
          </div>
          <div className={styles.faq__outline}>
            <details>
              <summary>
                <span>05.</span> What is are the projects or courses on
                Codewitheras?
              </summary>
              <p>
                We have a wide range of projects from clones of popular
                websites/web apps to a full custom website/web app. These
                projects enhances your skills and prepares you for real world
                projects.
              </p>
            </details>
          </div>
          <div className={styles.faq__outline}>
            <details>
              <summary>
                <span>06.</span> How to join Codewitheras?
              </summary>
              <p>
                Joining codewitheras is very simple. You get access to all
                projects and future courses by signing up with your email or
                Google account. We also have membership plans which takes your
                learning to a whole new level apart from your usual projects.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
