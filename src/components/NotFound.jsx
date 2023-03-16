import React from "react";
import errorIcon from "../assets/error.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="results-icon" src={errorIcon} alt="" />
      not found
    </div>
  );
};

export default NotFound;
