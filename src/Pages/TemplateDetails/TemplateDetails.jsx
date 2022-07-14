import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Banner from "./../../Components/Core/Banner/Banner";
import styles from "./TemplateDetails.module.css";
import Footer from "./../../Components/Core/Footer/Footer";

const TemplateDetails = () => {
  // Extract the specific template name from the query..
  const { id } = useParams();

  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <div>
        <Banner title={id} />

        {/* // Todo: List out the template details */}

        {/* //* Template Background Image */}
        {/* //* Template Summary */}
        {/* //* Template Outline {whats included} */}
        {/* //* Template Dependency lists */}

        <div className={styles.template__details}>
          {/* Template Video Title */}
          <div className={styles.template__title}>
            <h2>{id}</h2>
            {/* change the views name to download with the correct project download link from the database... */}
            <div className={styles.views}>Download</div>
          </div>

          {/* Template Video Intro text */}
          <div className={styles.intro}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              dolor! Consectetur quas maiores reprehenderit libero magni, nobis
              velit minima optio expedita aliquam. Illo totam, fuga laudantium
              voluptates cupiditate vero temporibus, magni commodi, nobis animi
              amet?
            </p>
          </div>

          {/* Template Video About text */}
          <div className={styles.about__txt}>
            <h3>About Template</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              sint, maxime non at fugit aliquam autem labore facilis odio sequi
              amet id asperiores ipsa commodi reprehenderit qui, eveniet
              consequuntur ab velit molestias officiis error!
            </p>
          </div>

          {/* Template Resources */}
          <div className={styles.resources}>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href='/'>Resource link</a>
              </li>
              <li>
                <a href='/'>Resource link</a>
              </li>
              <li>
                <a href='/'>Resource link</a>
              </li>
              <li>
                <a href='/'>Resource link</a>
              </li>
              <li>
                <a href='/'>Resource link</a>
              </li>
              <li>
                <a href='/'>Resource link</a>
              </li>
            </ul>
          </div>

          {/* Template Dependencies */}
          <div className={styles.dependencies}>
            <h3>Template Dependencies to install</h3>
            <p>
              In order for you to have a complete template as the tutorials, you
              have to install all these dependencies as they are needed to
              complete the template at hand.
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

          {/* Template Conclusion */}
          <div className={styles.conclusion}>
            <h3>Conclusion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              optio cupiditate dolor quos labore quasi?
            </p>
          </div>
        </div>
        <div className={styles.back__to_templates}>
          <p>
            Go back to <Link to='/templates'>Templates</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TemplateDetails;
