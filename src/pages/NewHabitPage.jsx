import React from "react";
import BackArrow from "../components/BackArrow";
import AddButton from "../components/AddButton";

const NewHabitPage = () => {
  return (
    <div className="">
      <header className="bg-bg-secondary">
        <h2 className="text-text-secondary">Add Habit</h2>
      </header>
      <main className="main-container">
        <div className="w-full flex justify-start">
          <BackArrow />
        </div>
        <form className="w-full lg:w-1/2">
          <ul className="flex flex-col gap-4">
            <li className="form-li">
              <label className="text-xl" htmlFor="habit-name">
                Habit Name
              </label>
              <input
                name="habit-name"
                type="text"
                placeholder="Enter Habit..."
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
              ></textarea>
            </li>
            <li className="form-li">
              <AddButton text={"Add Habit"} />
            </li>
          </ul>
        </form>
      </main>
    </div>
  );
};

export default NewHabitPage;
