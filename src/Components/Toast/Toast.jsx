import React from "react";
// import styles from "./Toast.module.css";

function Toast({ info, color, isEmailSent }) {
  return (
    <>
      <div>
        <div
          // className={`${isEmailSent ? styles.toast : ""}`}
          style={{
            backgroundColor: color,
            height: "35px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.5s ease-in-out",
          }}>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
}

export default Toast;
