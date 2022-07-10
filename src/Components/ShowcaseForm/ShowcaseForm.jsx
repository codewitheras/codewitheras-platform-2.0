/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import styles from "./ShowcaseForm.module.css";

const ShowcaseForm = () => {
  

  return (
    <form className={styles.showcase__form}>
      <h3>Submit your Project</h3>
      <div className={styles.img__upload_container}>
        <div className={styles.preview__img_container}>
          <img
            src=''
            alt=''
            id='img'
            className={styles.preview__img}
            loading='lazy'
          />
        </div>
        <input
          type='file'
          accept='image/*'
          required
          id='input'
          name='input'
          hidden
        />
        <button type='button' className={styles.upload__img_button}>
          Upload image
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.form__control}>
          <label htmlFor='title'>Project Name</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Enter project name'
            required
          />
        </div>
        <div className={styles.form__control}>
          <label htmlFor='deployed_url'>Deployed Url</label>
          <input
            type='url'
            name='deployed_url'
            id='deployed_url'
            placeholder='Enter deployed or hosted url'
            required
          />
        </div>
        <div className={styles.form__control}>
          <label htmlFor='stack'>Stack</label>
          <input
            type='text'
            name='stack'
            id='stack'
            placeholder='Enter your tech stack'
            required
          />
        </div>
      </div>
      <div className={styles.postShowcase__button}>
        <button type='submit'>Post Showcase</button>
      </div>
    </form>
  );
};

export default ShowcaseForm;
