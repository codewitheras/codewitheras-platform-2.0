import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Signup.module.css";
import { useAuth } from "./../../ContextAPI/AuthContext";
import Toast from "../../Components/Toast/Toast";

const Signuppage = () => {
  const [ischecked, setIschecked] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const formRef = useRef();

  const history = useHistory();

  const { currentUser } = useAuth();

  const user = currentUser;

  if (user) {
    history.replace("/");
  }

  const handleSignup = e => {
    e.preventDefault();

    // Assigning the value from the text to the Refs
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    // const checkbox = checkboxRef.current.check();

    // checking if all inputs are filled...
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      setIsFormValid(false);
      // alert("Please fill all credentials");
      // return <Toast info='Please fill all credentials' color='red' />;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match...");
    } else if (!ischecked) {
      alert("Please accept our Terms of Service");
    } else {
      alert("Registered");
      formRef.current.reset();
      history.replace("/");
    }
  };
  return (
    <>
      {!isFormValid && <Toast info='Please fill all credentials' color='red' />}
      <div className={styles.signup__page}>
        <div className={styles.signup__form}>
          <form onSubmit={handleSignup} ref={formRef}>
            <div className={styles.form__hd}>
              <h3>Create your account</h3>
            </div>
            <div className={styles.form__controls}>
              <div className={styles.flex}>
                <div className={styles.form__control}>
                  <label htmlFor='fname'>First Name</label>
                  <input
                    type='text'
                    id='fname'
                    placeholder='First Name'
                    required
                    ref={firstNameRef}
                  />
                </div>
                <div className={styles.form__control}>
                  <label htmlFor='lname'>Last Name</label>
                  <input
                    type='text'
                    id='lname'
                    placeholder='Last Name'
                    required
                    ref={lastNameRef}
                  />
                </div>
              </div>
              <div className={styles.form__control}>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  required
                  ref={emailRef}
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
              <div className={styles.form__control}>
                <label htmlFor='confirm_password'>Confirm Password</label>
                <input
                  type='password'
                  id='confirm_password'
                  placeholder='Confirm Password'
                  required
                  ref={confirmPasswordRef}
                />
              </div>
            </div>
            <div className={styles.privacy}>
              <input
                type='checkbox'
                className={styles.privacy__checkbox}
                id='privacy_checkbox'
              />
              <label
                htmlFor='privacy_checkbox'
                onClick={() => setIschecked(true)}>
                I agree to the Terms of Service and Privacy Statements
              </label>
            </div>
            <div className={styles.submit__btn}>
              <button type='submit' onClick={handleSignup}>
                Register
              </button>
            </div>
          </form>
          <div className={styles.signin__link}>
            <p>
              Already have an account? <Link to='/signin'>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signuppage;
