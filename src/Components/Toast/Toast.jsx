import React from 'react'
import './Toast.css'

function Toast({info, color, isEmailSent}) {
  return (
    <>
      <div className={`${isEmailSent ? "toast" : ""}`} style={{ backgroundColor: color }}>
        <p>{info}</p>
      </div>
    </>
  );
}

export default Toast