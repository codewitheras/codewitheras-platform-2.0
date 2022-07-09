import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const handleLeftNav = () => {}
  const handleRightNav = () => {}
  return (
    <div className={styles.testimonials}>
      <p>Testimonials</p>
      <div className={styles.testimonies}>
        <h3>What Our Students Say</h3>
        <div className={styles.testimony__outlines}>
          <div className={styles.testimony}>
            <div className={styles.testimony__user_img}>
              <img src='' alt='' loading='lazy' />
            </div>
            <div className={styles.testimony__details}>
              <div className={styles.user__info}>
                <p className={styles.username}>Eugenia Nyansafo Adjei</p>
                <p className={styles.userEdu}>
                  Student of University of Ghana, Legon
                </p>
              </div>
              <div className={styles.user__testimony}>
                <blockquote>
                  <span>"</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem veritatis nesciunt, adipisci deserunt mollitia eius odit voluptate expedita, .<span>"</span>.
                </blockquote>
              </div>
            </div>
          </div>
          <div className={styles.testimony}>
            <div className={styles.testimony__user_img}>
              <img src='' alt='' loading='lazy' />
            </div>
            <div className={styles.testimony__details}>
              <div className={styles.user__info}>
                <p className={styles.username}>Eugenia Nyansafo Adjei</p>
                <p className={styles.userEdu}>
                  Student of University of Ghana, Legon
                </p>
              </div>
              <div className={styles.user__testimony}>
                <blockquote>
                  <span>"</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem veritatis nesciunt, adipisci deserunt mollitia eius odit voluptate expedita,<span>"</span>.
                </blockquote>
              </div>
            </div>
          </div>
          <div className={styles.testimony}>
            <div className={styles.testimony__user_img}>
              <img src='' alt='' loading='lazy' />
            </div>
            <div className={styles.testimony__details}>
              <div className={styles.user__info}>
                <p className={styles.username}>Eugenia Nyansafo Adjei</p>
                <p className={styles.userEdu}>
                  Student of University of Ghana, Legon
                </p>
              </div>
              <div className={styles.user__testimony}>
                <blockquote>
                  <span>"</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem veritatis nesciunt, adipisci deserunt mollitia eius odit voluptate expedita,<span>"</span>.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimony__navigator}>
          <button type="button" onClick={handleLeftNav}>Left</button>
          <button type="button" onClick={handleRightNav}>Right</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
