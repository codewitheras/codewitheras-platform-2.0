/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useEffect } from "react";

const useMountedHook = () => {
  const mounted = useRef(false);

  // NB: This function is to set the 'isFormSubmitting' state to the actual 
  // 'isFormsubmitting' state only if the Component is mounted...
  useEffect(() => {
    mounted.current = true;
  }, []);

  return mounted;
};

export default useMountedHook;
