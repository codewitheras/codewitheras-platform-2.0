import React from "react";
import styles from "./Events.module.css";
import Banner from "./../../Components/Core/Banner/Banner";
import Footer from './../../Components/Core/Footer/Footer';

const Eventspage = () => {
  return (
    <>
      <Banner
        title='Events'
        text='lorem dhhskfhsjkfshjhsf shf hsjhskjf sfuifuwgf fskfjbks'
      />
      <div className={styles.eventspages}>
        <section className={styles.events__map_container}>
          <div className={styles.map}></div>
        </section>
        <section className={styles.events__outline}>
          <div className={styles.events__outline_title}>
            <h3>Upcoming Events</h3>
          </div>
          <div className={styles.event__lists}>
            <div className={styles.event}>
              <div className={styles.event__headers}>
                <h3 className={styles.event__header_date}>Date</h3>
                <h3 className={styles.event__header_name}>Name</h3>
                <h3 className={styles.event__header_Location}>Location</h3>
                <h3 className={styles.event__header_time}>Time</h3>
              </div>
              <div className={styles.event__details}>
                <p>12th Jan, 2022</p>
                <p>Profit With JavaScript</p>
                <p>Accra, Movie Center</p>
                <p>8:00 am prompt</p>
              </div>
              <div className={styles.event__details}>
                <p>12th Jan, 2022</p>
                <p>Profit With JavaScript</p>
                <p>Accra, Movie Center</p>
                <p>8:00 am prompt</p>
              </div>
              <div className={styles.event__details}>
                <p>12th Jan, 2022</p>
                <p>Profit With JavaScript</p>
                <p>Accra, Movie Center</p>
                <p>8:00 am prompt</p>
              </div>
              <div className={styles.event__details}>
                <p>12th Jan, 2022</p>
                <p>Profit With JavaScript</p>
                <p>Accra, Movie Center</p>
                <p>8:00 am prompt</p>
              </div>
              <div className={styles.event__details}>
                <p>20th July, 2022</p>
                <p>Profit With JavaScript</p>
                <p>Accra, Movie Center</p>
                <p>8:00 am prompt</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Eventspage;
