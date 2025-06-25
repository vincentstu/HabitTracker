import React from "react";
import { useNavigate } from "react-router-dom"; // Only import useNavigate

const AddButton = ({ text = "add button", nav = "/" }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <button className="button" onClick={() => navigate(nav)}>
      <span>{text}</span>
    </button>
  );
};

export default AddButton;
