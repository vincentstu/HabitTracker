import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackArrow = () => {
  return (
    <div className="hover:cursor-pointer" onClick={() => window.history.back()}>
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </div>
  );
};

export default BackArrow;
