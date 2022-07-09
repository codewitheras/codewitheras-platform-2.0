import React, { useEffect, useState } from "react";
import styles from "./Templates.module.css";
import Banner from "./../../Components/Core/Banner/Banner";
import { projectTemplates } from "../../codewitherasApi";
import TemplateCard from "../../Components/TemplateCard/TemplateCard";
import Footer from './../../Components/Core/Footer/Footer';
import { Link } from "react-router-dom";

const Templatespage = () => {
  const [templates, setTemplates] = useState(projectTemplates);

  useEffect(() => {
    setTemplates(templates);
    window.scrollTo(0, 0);
  }, [templates]);

  return (
    <>
      <Banner
        title='Get Started With Our Predefined Templates'
        bgImage='dodgerblue'
        text='Browse through our range of prebuilt template with necessary resources needed to get you started with building.'
      />
      <div className={styles.templates}>
        <p>Starter Packs</p>
        <div className={styles.templates__outline}>
          <h3>Prebuilt Templates</h3>
          <div className={styles.templates__container}>
            {templates.map(
              ({
                id,
                template_name,
                template_desc,
                level,
                templateImgUrl,
                download_link,
              }) => (
                <div key={id}>
                  <TemplateCard
                    template_name={template_name}
                    template_desc={template_desc}
                    level={level}
                    templateImgUrl={templateImgUrl}
                    // download_link={download_link}
                    // download={true}
                    view_link={template_name}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className={styles.request__template}>
        <h3>Template not listed?</h3>
        <p>
          Feel free to request any template of your choice if its not listed in
          our templates list yet.
        </p>
        <Link to='/request-template'>Request a Template</Link>
      </div>
      <Footer />
    </>
  );
};

export default Templatespage;
