import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useAuth } from "../../../ContextAPI/AuthContext";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const activeStyle = {
    color: "dodgerblue",
    fontWeight: "600",
  };

  const logoutHandler = async e => {
    e.preventDefault();

    logout();
    history.replace("/");
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className={styles.header__wrapper}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <NavLink to='/' className={styles.logo}>
              Codewitheras
            </NavLink>
          </div>
          <nav className={styles.nav__links}>
            <div className={styles.nav__links_wrapper}>
              <NavLink
                to='/projects'
                className={styles.nav__link}
                activeStyle={activeStyle}>
                Projects
              </NavLink>
              <NavLink
                to='/templates'
                className={styles.nav__link}
                activeStyle={activeStyle}>
                Templates
              </NavLink>
              <NavLink
                to='/challenge'
                className={styles.nav__link}
                activeStyle={activeStyle}>
                Challenges
              </NavLink>
              <NavLink
                to='/events'
                className={styles.nav__link}
                activeStyle={activeStyle}>
                Events
              </NavLink>
              <NavLink
                to='/showcase'
                className={styles.nav__link}
                activeStyle={activeStyle}>
                Showcase
              </NavLink>
            </div>
            <div className={styles.auth}>
              {currentUser ? (
                <button
                  type='button'
                  onClick={logoutHandler}
                  className={styles.logout}>
                  Logout
                </button>
              ) : (
                <>
                  <Link to='/signin' className={styles.auth__link}>
                    Sign In
                  </Link>
                  <Link to='/register' className={styles.auth__link}>
                    Join us
                  </Link>
                </>
              )}
            </div>
          </nav>
          <button className={styles.nav__toggler} onClick={toggleNav}>
            <h3>=</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
