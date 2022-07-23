import React from "react";
import styles from "./Contribute.module.css";
import Banner from "../../Components/Core/Banner/Banner";
import Footer from "../../Components/Core/Footer/Footer";
import { useEffect } from "react";

const Contribute = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title='Contributers' />
      <section className={styles.contribute}>
        <div className={styles.contribute__wrapper}>
          <div className={styles.contribute__card}>
            <div className={styles.contribute__img}>
              <img src='#' alt='' />
            </div>
            <div className={styles.contribute__txt}>
              <h3>Find and report an issue</h3>
              <p>
                Help find bugs and QA releases. Maintainers are human, we miss
                things and make mistakes. Issue reports are much appreciated.
              </p>
            </div>
            <div className={styles.contribute__link}>
              <a
                href='https://github.com/issues'
                target='_blank'
                rel='noreferrer'>
                Report an issue on Github
              </a>
            </div>
          </div>
          <div className={styles.contribute__card}>
            <div className={styles.contribute__img}>
              <img src='#' alt='' />
            </div>
            <div className={styles.contribute__txt}>
              <h3>Create a Plugin</h3>
              <p>
                Create something cool you want to share with the community. That
                would be awesome.
              </p>
            </div>
            <div className={styles.contribute__link}>
              <a
                href='https://github.com/issues'
                target='_blank'
                rel='noreferrer'>
                Read the Codewitheras documentation
              </a>
            </div>
          </div>
          <div className={styles.contribute__card}>
            <div className={styles.contribute__img}>
              <img src='#' alt='' />
            </div>
            <div className={styles.contribute__txt}>
              <h3>Send a pull request</h3>
              <p>
                Want to create a new feature or improve an existing page or
                functionality? PRs are highly welcomed and encouraged.
              </p>
            </div>
            <div className={styles.contribute__link}>
              <a
                href='https://github.com/issues'
                target='_blank'
                rel='noreferrer'>
                Send a pull request on Github
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contribute;
