import React from "react";
import HabitCard from "../components/HabitCard";
import AddButton from "../components/AddButton";

const HabitPage = ({ habits, updateHabit, getHabitById }) => {
  return (
    <div className="flex flex-col items-center">
      <header className="">
        <h1 className="font-bold text-3xl">
          <span>Habit Tracker</span>
        </h1>
      </header>
      <main className="w-full grid grid-cols-8">
        <div className="main-container lg:col-start-2 lg:col-span-6">
          <div className="flex justify-between items-center w-full">
            <h2>Your Habits</h2> <span>Sort</span>
          </div>
          <div className="habit-container">
            {habits.map((habit, index) => (
              <HabitCard
                key={index}
                habitId={index}
                updateHabit={updateHabit}
                getHabitById={getHabitById}
              />
            ))}
          </div>
          <AddButton text={"+"} nav={"/new"} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default HabitPage;
