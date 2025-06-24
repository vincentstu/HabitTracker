import React from "react";

const HabitCard = () => {
  return (
    <div className="border-2 rounded-2xl p-4 cursor-pointer hover:bg-gray-200 transition-colors">
      <h3>Habit 1</h3>
      <div className="info">
        <ul>
          <li>
            <p className="">Streak: 0 days</p>
          </li>
          <li>
            <p className="">Last completed: 2023-10-01</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HabitCard;
