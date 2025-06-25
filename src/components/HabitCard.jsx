import React, { useRef } from "react";
import { useState } from "react";

const HabitCard = ({
  habitInfo = {
    name: "Sample Habit",
    occurency: "daily",
    description: "This is a sample habit description.",
    streak: 0,
    lastCompleted: "Never",
  },
}) => {
  const [habit, setHabit] = useState(habitInfo);

  const [checked, setChecked] = useState(false);

  const prevLastCompleted = useRef(habit.lastCompleted);

  return (
    <div
      className="border-2 rounded-2xl p-4 cursor-pointer hover:bg-gray-200 transition-colors"
      onClick={(e) => {
        if (e.target.id != "edit-btn") {
          if (!checked) {
            e.currentTarget.className += " bg-accent-secondary";
            setHabit({
              ...habit,
              streak: habit.streak + 1,
              lastCompleted: new Date().toLocaleDateString(),
            });
          } else {
            e.currentTarget.className = e.currentTarget.className.replace(
              " bg-accent-secondary",
              ""
            );
            setHabit({
              ...habit,
              lastCompleted: prevLastCompleted.current,
              streak: habit.streak > 0 ? habit.streak - 1 : 0,
            });
          }
          setChecked(() => !checked);
        }
      }}
    >
      <div className="flex w-full justify-between items-center">
        <h3 className="text-nowrap">{habit.name}</h3>
        <p id="edit-btn">edit</p>
      </div>
      <div className="info">
        <ul>
          <li>
            <p className="">
              Streak: {habit.streak} {habit.streak === 1 ? "day" : "days"}
            </p>
          </li>
          <li>
            <p className="">Last completed: {habit.lastCompleted}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HabitCard;
