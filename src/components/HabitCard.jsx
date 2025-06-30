import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HabitCard = ({ habitId, updateHabit, getHabitById }) => {
  const habit = getHabitById(habitId);

  const prevLastCompleted = useRef(habit.lastCompleted);

  const navigate = useNavigate();

  return (
    <div
      className={
        "border-2 rounded-2xl p-4 cursor-pointer  hover:bg-gray-200 transition-colors" +
        (habit.checked
          ? " bg-accent-secondary hover:bg-green-300"
          : "hover:bg-gray-200 ")
      }
      onClick={(e) => {
        if (e.target.id != "more-btn") {
          if (!getHabitById(habitId).checked) {
            updateHabit(habitId, {
              ...getHabitById(habitId),
              streak: getHabitById(habitId).streak + 1,
              lastCompleted: new Date().toLocaleDateString(),
              checked: true,
              completionDays: [
                ...getHabitById(habitId).completionDays,
                new Date().toLocaleDateString(),
              ],
            });
            prevLastCompleted.current = getHabitById.lastCompleted;
          } else {
            updateHabit(habitId, {
              ...getHabitById(habitId),
              streak:
                getHabitById(habitId).streak > 0
                  ? getHabitById(habitId).streak - 1
                  : 0,
              lastCompleted: prevLastCompleted.current,
              checked: false,
              completionDays: getHabitById(habitId).completionDays.filter(
                (day) => day !== new Date().toLocaleDateString()
              ),
            });
          }
        }
      }}
    >
      <div className="flex w-full justify-between items-center">
        <h3 className="text-nowrap">{habit.name}</h3>
        <button
          id="more-btn"
          className="hover:cursor-pointer"
          onClick={() => {
            console.log(getHabitById(habitId));
            navigate(`/${habitId}`);
          }}
        >
          More
        </button>
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
