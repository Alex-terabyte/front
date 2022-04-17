import React from "react";
import classes from "./GreenButton.module.css";

const GreenButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.MyBtn}>
      {children}
    </button>
  );
};

export default GreenButton;
