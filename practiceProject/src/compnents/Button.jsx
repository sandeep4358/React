import styles from "./Button.module.css";
import React from "react";

const Button = ({ isoutline, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isoutline ? styles.second_btn : styles.second_btn}
    >
      {text}
    </button>
  );
};

export default Button;
