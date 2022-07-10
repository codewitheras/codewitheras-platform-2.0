/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Video } from "../../Components/Widgets/Video";
import styles from "./ProjectVideo.module.css";
import Footer from "./../../Components/Core/Footer/Footer";
import { Link } from "react-router-dom";

const ProjectVideo = () => {
  const query = useParams();

  const { id } = query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Video videoUrl='' videoPosterImg='' />
      <div className={styles.project__details}>
        {/* Project Video Title */}
        <div className={styles.project__title}>
          <h2>{id}</h2>
          <div className={styles.views}>300 views</div>
        </div>

        {/* Project Video Intro text */}
        <div className={styles.intro}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            dolor! Consectetur quas maiores reprehenderit libero magni, nobis
            velit minima optio expedita aliquam. Illo totam, fuga laudantium
            voluptates cupiditate vero temporibus, magni commodi, nobis animi
            amet?
          </p>
        </div>

        {/* Project Video About text */}
        <div className={styles.about__txt}>
          <h3>About Project</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            sint, maxime non at fugit aliquam autem labore facilis odio sequi
            amet id asperiores ipsa commodi reprehenderit qui, eveniet
            consequuntur ab velit molestias officiis error!
          </p>
        </div>

        {/* Project Resources */}
        <div className={styles.resources}>
          <h3>Resources</h3>
          <ul>
            <li>
              <a href='#'>Resource link</a>
            </li>
            <li>
              <a href='#'>Resource link</a>
            </li>
            <li>
              <a href='#'>Resource link</a>
            </li>
            <li>
              <a href='#'>Resource link</a>
            </li>
            <li>
              <a href='#'>Resource link</a>
            </li>
            <li>
              <a href='#'>Resource link</a>
            </li>
          </ul>
        </div>

        {/* Project Dependencies */}
        <div className={styles.dependencies}>
          <h3>Project Dependencies to install</h3>
          <p>
            In order for you to have a complete project as the tutorials, you
            have to install all these dependencies as they are needed to
            complete the project at hand.
          </p>
          <div className={styles.dependencies__lists}>
            <ul>
              <p># Npm</p>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
            </ul>
            <br />
            <br />
            <ul>
              <p># Yarn</p>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
              <li>Dependency Item</li>
            </ul>
          </div>
        </div>

        {/* Project Conclusion */}
        <div className={styles.conclusion}>
          <h3>Conclusion</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            optio cupiditate dolor quos labore quasi?
          </p>
        </div>
      </div>
      <div className={styles.back__to_projects}>
        <p>
          Go back to <Link to='/projects'>Projects</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ProjectVideo;
