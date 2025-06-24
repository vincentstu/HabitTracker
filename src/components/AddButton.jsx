import React from "react";
import { useNavigate } from "react-router-dom"; // Only import useNavigate

const AddButton = ({ text }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="button" onClick={() => navigate("/new")}>
      <span>{text}</span>
    </div>
  );
};

export default AddButton;
