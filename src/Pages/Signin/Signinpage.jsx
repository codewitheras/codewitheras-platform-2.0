import React, { useRef } from "react";
import styles from '../Signup/Signup.module.css'
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../ContextAPI/AuthContext";
import Toast from "../../Components/Toast/Toast";

const Signinpage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const history = useHistory();

  const handleSignin = e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // console.log(email, password)

    login(email, password)
      .then(() => {
        // console.log(userCredential);
        // const user = userCredential.user;
        alert("Successfully logged in");
        history.replace("/");
      })
      .catch(e => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password"
        ) {
          // Will use a Toast Component to display any warning or notification
          alert("Please check your credentials again.");
          <Toast bgColor='red' toastMsg={e.message} txtColor='white' />;
        } else if (
          e.message ===
          "There is no user corresponding to this identifier. The user may have been deleted."
        ) {
          // Will use a Toast Component to display any warning or notification
          alert(e.message);
          <Toast bgColor='red' toastMsg={e.message} txtColor='white' />;
        }
        // console.log(e.message);
        <Toast bgColor='red' toastMsg={e.message} txtColor='white' />;
      });
  };
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
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  ref={emailRef}
                  required
                />
              </div>
              <div className={styles.form__control}>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  required
                  ref={passwordRef}
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
};

export default Signinpage