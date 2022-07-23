/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./ShowcaseForm.module.css";

import { projectsShowCase } from "../../codewitherasApi";

const ShowcaseForm = () => {
  const [previewImg, setPreviewImg] = useState(null);
  const [projectTitle, setProjectTitle] = useState("");
  const [deployedUrl, setDeployedUrl] = useState("");
  const [desc, setDesc] = useState("");
  // const [stack, setStack] = useState([]);

  const handlePreviewImg = () => {
    const imgInput = document.getElementById("input");

    // This line of code opens the default image input functionality...
    imgInput.click();

    // Sets the selected file from the input to the `selectedFile` variable...
    const selectedFile = imgInput.files[0];

    let imagePreview = new FileReader();

    imagePreview.addEventListener("load", () =>
      setPreviewImg(imagePreview.result)
    );

    imagePreview.readAsDataURL(selectedFile);
  };

  const handleProjectSubmit = e => {
    e.preventDefault();

    if (!previewImg) {
      alert("Please add project image");
    } else if (!projectTitle) {
      alert("Please add a project name");
    } else if (!deployedUrl) {
      alert("Please add your project deployed url");
    } else if (!desc) {
      alert("Please add a description");
    } else {
      projectsShowCase.push({
        id: Math.random(),
        showCaseImg: previewImg,
        title: projectTitle,
        deployed_link: deployedUrl,
      });
      alert("Successfully submitted🔥😀😀");
    }
  };

  return (
    <form className={styles.showcase__form} onSubmit={handleProjectSubmit}>
      <h3>Submit your Project</h3>
      <div className={styles.img__upload_container}>
        <div className={styles.preview__img_container}>
          <img
            src={previewImg}
            alt=''
            id='img'
            className={styles.preview__img}
            loading='lazy'
            onClick={handlePreviewImg}
          />
        </div>
        <input
          type='file'
          accept='image/*'
          required
          id='input'
          name='input'
          hidden
          onChange={handlePreviewImg}
        />
        <button
          type='button'
          className={styles.upload__img_button}
          onClick={handlePreviewImg}>
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
            onChange={e => setProjectTitle(e.target.value)}
          />
        </div>
        <div className={styles.form__control}>
          <label htmlFor='description'>Project Description</label>
          <input
            type='text'
            name='description'
            id='description'
            placeholder='Enter description'
            required
            onChange={e => setDesc(e.target.value)}
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
            onChange={e => setDeployedUrl(e.target.value)}
          />
        </div>
        {/* <div className={styles.form__control}>
          <label htmlFor='stack'>Stack</label>
          <input
            type='text'
            name='stack'
            id='stack'
            placeholder='Enter your tech stack'
            required
            onChange={e => setStack(e.target.value)}
          />
        </div> */}
      </div>
      <div className={styles.postShowcase__button}>
        <button type='submit' onClick={handleProjectSubmit}>
          Post Showcase
        </button>
      </div>
    </form>
  );
};

export default ShowcaseForm;
