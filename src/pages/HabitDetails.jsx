import React from "react";
import { useParams } from "react-router-dom";
import BackArrow from "../components/BackArrow";
import ProgressCalender from "../components/ProgressCalender";

const HabitDetails = ({ getHabitById }) => {
  const { id } = useParams();

  const habit = getHabitById(id);

  return (
    <div className="flex flex-col items-center">
      <header className="">
        <h1 className="font-bold text-3xl">
          <span>{habit.name}</span>
        </h1>
      </header>
      <main className="main-container">
        <div className="w-full flex justify-start">
          <BackArrow />
        </div>
        <h2>Activity:</h2>
        <ProgressCalender habitId={id} getHabitById={getHabitById} />
      </main>
    </div>
  );
};

export default HabitDetails;
