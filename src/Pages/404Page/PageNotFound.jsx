import React, { useEffect } from "react";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  });
  return (
    <div className={styles.page_not_found}>
      <h2>404 | Page Not Found</h2>
    </div>
  );
};

export default PageNotFound;
