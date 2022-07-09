/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Showcase.module.css";
import Banner from "./../../Components/Core/Banner/Banner";
import { projectsShowCase } from "../../codewitherasApi";
import TemplateCard from "../../Components/TemplateCard/TemplateCard";
import Footer from "./../../Components/Core/Footer/Footer";
import Backdrop from './../../Components/Core/Backdrop/Backdrop';
import ShowcaseForm from "../../Components/ShowcaseForm/ShowcaseForm";

const Showcase = () => {
  const [projectShowcase, setProjectShowcase] = useState(projectsShowCase);
  const [showModal, setShowModal] = useState(false);
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {
    setProjectShowcase(projectShowcase);
    window.scrollTo(0, 0);
  }, [projectShowcase]);

  const handleOpenShowcaseModal = () => {
    setShowModal(!showModal);
  }

  // * Post Showcase Project Function

  const handleCreateShowcase = () => {
    // Todo: Handle the project showcase functionality
    // Todo: Preview the project showcase image before upload
    // Todo: Collect all necessary data about showcase and user

    // Todo: Refactor this functionality using 'async await'...

    // * Save and push all these info into the Google Firebase Database...

  };

  return (
    <>
      <Banner
        title='Showcase Your Projects'
        text='Share and find project to and from the student community.'
      />
      <div className={styles.showcase}>
        <p>Starter Packs</p>
        <div className={styles.showcase__outline}>
          <h3>Project Showcase</h3>
          <div className={styles.add__showcase}>
            <button type='button' onClick={handleOpenShowcaseModal}>
              <span>+</span> Add Project
            </button>
          </div>
          <div className={styles.showcase__container}>
            {projectShowcase
              .map(
                ({
                  id,
                  title,
                  desc,
                  showCaseImg,
                  deployed_link,
                  github_repo_link,
                }) => (
                  <div key={id}>
                    <TemplateCard
                      template_name={title}
                      template_desc={desc}
                      templateImgUrl={showCaseImg}
                      deployed_link={deployed_link}
                      github__link={github_repo_link}
                    />
                  </div>
                )
              )
              .slice(0, 1)}
          </div>
        </div>
      </div>
      {showModal && (
        <Backdrop setShowModal={setShowModal} showModal={showModal}>
          <ShowcaseForm />
        </Backdrop>
      )}
      <Footer />
    </>
  );
};

export default Showcase;
