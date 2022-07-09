import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ children, showModal, setShowModal }) => {
  const closeModal = () => {
    const modalRef = document.getElementById("modalRef");

    window.addEventListener("click", e => {
      if (e.target === modalRef) {
        setShowModal(false);
      } else {
        return;
      }
    });
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} id='modalRef'>
        {children}
      </div>
    </>
  );
};

export default Backdrop;
