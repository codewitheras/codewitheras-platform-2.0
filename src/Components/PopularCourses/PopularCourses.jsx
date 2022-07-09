import React, { useState } from "react";
import styles from "./PopularCourses.module.css";
import { Link } from "react-router-dom";

import { projectData } from "../../codewitherasApi";
import CourseCard from "../Core/Card/CourseCard";
import { useEffect } from "react";

const PopularCourses = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData)
  }, []);

  return (
    <div className={styles.popular__projects}>
      <p>Our Project</p>
      <div className={styles.projects}>
        <h3>Most Popular Projects</h3>
        <p>
          Find featured projects from our lists of projects, learn, build and
          customise them according to your preference.
        </p>
        <div className={styles.projects__outlines}>
          {projects
            .map(
              ({
                id,
                title,
                description,
                tag,
                price,
                stack,
                coverImg,
                tutor,
                level,
              }) => (
                <CourseCard
                  title={title}
                  description={description}
                  tag={tag}
                  price={price}
                  tutor={tutor}
                  level={level}
                  stack={stack}
                  key={id}
                  coverImg={coverImg}
                />
              )
            )
            .slice(0, 4)}
        </div>
        <div className={styles.see__more}>
          <Link to='/projects'>See more projects</Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
