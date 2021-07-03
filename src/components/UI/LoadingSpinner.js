import React from "react";
import Loading from "react-loading-animation";
import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <Loading />
    </div>
  );
};
export default LoadingSpinner;
