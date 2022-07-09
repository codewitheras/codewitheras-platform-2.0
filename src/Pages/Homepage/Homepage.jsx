import React from "react";
import styles from "./Homepage.module.css";

// Component imports
import Banner from "../../Components/Core/Banner/Banner";
import About from "./../../Components/About/About";
import TopFeatures from "./../../Components/Features/TopFeatures";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Community from "../../Components/Community/Community";
import Faq from "../../Components/FAQ/Faq";
import Footer from "../../Components/Core/Footer/Footer";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  
  return (
    <>
      <div className={styles.homepage}>
        {/* <Header /> */}
        <Banner
          title='Learn with Eras anytime and anywhere.'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ad cupiditate facilis ratione ipsa natus dignissimos officiis expedita modi officia.'
          linkURL='/signup'
          link='Join us Today'
          show3D={true}
        />
        <About />
        <TopFeatures />
        {/* <Topics /> */}
        <PopularCourses />
        <Testimonials />
        <Community />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
