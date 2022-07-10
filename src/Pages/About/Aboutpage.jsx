import React, { useEffect, useRef } from 'react'
import styles from './About.module.css'
import Banner from './../../Components/Core/Banner/Banner';
import About from './../../Components/About/About';
import Footer from './../../Components/Core/Footer/Footer';
import { useState } from 'react';

const Aboutpage = () => {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [isFormFilled, setIsFormFilled] = useState(false)

  // 

  const formRef = useRef()

  useEffect(() => {
    if (!fullname || !email || !message) {
      setIsFormFilled(false);
    } else {
      setIsFormFilled(true);
    }

    // window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const handleMessage = (e) => {
    e.preventDefault();
    // Todo: Handle sending message logic here...

    // * Main logic: Send message to the admin through their telegram channel...
    // console.log(fullname);
    // console.log(email);
    // console.log(message);

    // *: Reset all the form fields to their default value 'empty'
    formRef.current.reset();
  }


  return (
    <section className={styles.about}>
      <Banner
        title='About Codewitheras'
        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, sed voluptatum! Deleniti, quo aperiam aliquam quam corrupti quos at molestias.'
      />
      <About />
      <div className={styles.contact}>
        <p>Get in Touch</p>
        <h3>Contact Us</h3>
        <p>
          Get any information, propose suggestions concerning the platform or
          any enrolled projects through our contact form below.{" "}
        </p>
        <div className={styles.contact__form}>
          <form
            autoCapitalize='on'
            autoComplete='on'
            ref={formRef}
            onSubmit={handleMessage}>
            <div className={styles.form__group}>
              <label htmlFor='name'>Full name</label>
              <input
                type='text'
                name='fullname'
                id='name'
                placeholder='Enter fullname'
                onChange={e => setFullName(e.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email'
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                placeholder='Enter message'
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>
            <div className={styles.submit}>
              <button
                type='submit'
                onClick={handleMessage}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Aboutpage;
