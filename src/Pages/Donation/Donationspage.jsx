import React, { useEffect, useRef } from "react";
import styles from "./Donation.module.css";
import Footer from "./../../Components/Core/Footer/Footer";
import Banner from "../../Components/Core/Banner/Banner";

const Donationspage = () => {
  const formRef = useRef();
  const fullNameRef = useRef();
  const locationRef = useRef();
  const amountRef = useRef();

  const handleDonation = e => {
    e.preventDefault();

    const fullname = fullNameRef.current.value;
    const location = locationRef.current.value;
    const amount = amountRef.current.value;

    setTimeout(() => {
      console.log("====================================");
      console.log(fullname);
      console.log(location);
      console.log(amount);
      console.log("====================================");
      formRef.current.reset();
    }, 3000);

    setTimeout(() => {
      alert("Thank you for your donation");
    }, 4000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title='Donate a little token to Codewitheras' />
      <div className={styles.donation}>
        <form onSubmit={handleDonation} ref={formRef}>
          <div className={styles.form__hd}>
            <h3>Donate</h3>
          </div>
          <div className={styles.form__container}>
            <div className={styles.form__group}>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                id='name'
                name='Full name'
                placeholder='Enter Fullname'
                required
                ref={fullNameRef}
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='location'>Location</label>
              <input
                type='text'
                id='location'
                name='location'
                placeholder='Enter Location'
                required
                ref={locationRef}
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='amount'>Amount</label>
              <input
                type='number'
                id='amount'
                name='amount'
                placeholder='Enter Amount'
                required
                min='1'
                ref={amountRef}
              />
            </div>
          </div>
          <div className={styles.send}>
            <button type='submit'>Donate</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Donationspage;
