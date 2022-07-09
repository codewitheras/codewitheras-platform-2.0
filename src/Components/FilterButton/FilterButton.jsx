/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from "./FilterButton.module.css";

const FilterButtons = () => {
  return (
    <div className={styles.filter__button}>
      <button type='button'>All</button>
      <button type='button'>React</button>
      <button type='button'>React Native</button>
      <button type='button'>Html</button>
    </div>
  );
};

export default FilterButtons;
