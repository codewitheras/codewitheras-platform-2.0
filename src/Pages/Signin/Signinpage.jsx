import React, { useRef } from "react";
import styles from '../Signup/Signup.module.css'
import { Link } from 'react-router-dom';

const Signinpage = () => {
  const handleSignin = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className={styles.signup__page}>
        <div className={styles.signup__form}>
          <form onSubmit={handleSignin}>
            <div className={styles.form__hd}>
              <h3>Login</h3>
            </div>
            <div className={styles.form__controls}>
              <div className={styles.form__control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Email' required />
              </div>
              <div className={styles.form__control}>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  required
                />
              </div>
            </div>
            <div className={styles.submit__btn}>
              <button type='submit' onClick={handleSignin}>
                Login
              </button>
            </div>
          </form>
          <div className={styles.signin__link}>
            <p>
              Dont't have an account? <Link to='/register'>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signinpage