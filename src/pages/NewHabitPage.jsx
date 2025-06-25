import React from "react";
import BackArrow from "../components/BackArrow";
import AddButton from "../components/AddButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Only import useNavigate

const NewHabitPage = ({ addHabit }) => {
  const [habitData, setHabitData] = useState({
    name: "",
    occurency: "daily",
    description: "",
    streak: 0,
    lastCompleted: "Never",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="">
      <header className="bg-bg-secondary">
        <h2 className="text-text-secondary">Add Habit</h2>
      </header>
      <main className="main-container">
        <div className="w-full flex justify-start">
          <BackArrow />
        </div>
        <form
          className="w-full lg:w-1/2"
          onSubmit={(e) => {
            e.preventDefault();

            if (!habitData.name) {
              alert("Please enter a habit name.");
              return;
            } else if (!habitData.description) {
              alert("Please enter a habit description.");
              return;
            } else {
              console.log("Habit Data Submitted:", habitData);
              addHabit(habitData);
              setHabitData({ name: "", occurency: "daily", description: "" });
              navigate("/"); // Navigate to the home page after submission
            }
          }}
        >
          <ul className="flex flex-col gap-4">
            <li className="form-li">
              <label className="text-xl" htmlFor="habit-name">
                Habit Name
              </label>
              <input
                name="habit-name"
                type="text"
                placeholder="Enter Habit..."
                onChange={(e) => {
                  setHabitData({ ...habitData, name: e.target.value });
                }}
                value={habitData.name}
              />
            </li>
            <li className="form-li">
              <label className="text-xl" htmlFor="habit-occurency">
                Occurency
              </label>
              <select
                name="habit-occurency"
                id="habit-occurency"
                className="w-1/2"
                onChange={(e) => {
                  setHabitData({ ...habitData, occurency: e.target.value });
                }}
                value={habitData.occurency}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="custom">Custom</option>
              </select>
            </li>
            <li className="form-li">
              <label className="text-xl" htmlFor="habit-description">
                Description
              </label>
              <textarea
                name="habit-description"
                id="habit-description"
                placeholder={"Enter a description of your habit..."}
                onChange={(e) => {
                  setHabitData({ ...habitData, description: e.target.value });
                }}
                value={habitData.description}
                rows="4"
              ></textarea>
            </li>
            <li className="form-li flex items-center">
              <AddButton text={"Add Habit"} nav={"/new"} />
            </li>
          </ul>
        </form>
      </main>
    </div>
  );
};

export default NewHabitPage;
