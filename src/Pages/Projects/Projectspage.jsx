/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./Projectspage.module.css";
import Banner from "./../../Components/Core/Banner/Banner";
import Footer from "./../../Components/Core/Footer/Footer";
import { projectData } from "../../codewitherasApi";
import CourseCard from "./../../Components/Core/Card/CourseCard";
import FilterButtons from "../../Components/FilterButton/FilterButton";

const Projectspage = () => {
  // Projects variable
  const [projects, setProjects] = useState(projectData);
  // const [filteredProjects, setFilteredProjects] = useState("");

  useEffect(() => {
    setProjects(projectData);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner
        title='Kickstart Your Developer Career With Projects'
        text='Glance through our wide catalogue of easy to build projects ranging from Web to Mobile applications with all levels of difficulty.'
      />
      <section className={styles.projects__page}>
        <p>Projects</p>
        <div className={styles.project__container}>
          <h3>Project Catalogue</h3>
          <p>Choose from a range of projects to start building.</p>
          <div className={styles.select__projects}>
            <div className={styles.button__controls}>
              <FilterButtons />
            </div>
            <div className={styles.search__projects}>
              <form>
                <input type='text' placeholder='Search projects' required />
              </form>
            </div>
          </div>
          <div className={styles.project__outlines}>
            {projects.map(
              ({
                id,
                title,
                description,
                tag,
                price,
                coverImg,
                level,
                tutor,
              }) => (
                <div key={id}>
                  <CourseCard
                    title={title}
                    description={description}
                    tag={tag}
                    price={price}
                    coverImg={coverImg}
                    level={level}
                    tutor={tutor}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projectspage;
