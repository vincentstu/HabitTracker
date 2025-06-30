import React from "react";

const ProgressCalender = ({ habitId, getHabitById }) => {
  //create an array of dates from the first day of getHabitById(habitId).completionDays to today
  const habit = getHabitById(habitId);

  const today = new Date();
  //const startDate = new Date(today).setDate(today.getDate() - 10); //Test with 10 days

  let startDate;
  if (habit.completionDays.length !== 0) {
    const [day, month, year] = habit.completionDays[0].split("/");
    startDate = new Date(year, month - 1, day); // Use the first
  } else {
    startDate = new Date();
  }

  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= today) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div className="grid grid-cols-7 gap-2">
      {dates.map((date, index) => {
        if (habit.completionDays.includes(date.toLocaleDateString())) {
          return (
            <div
              className={"p-4 rounded-lg bg-accent-secondary"}
              key={index}
            ></div>
          );
        } else {
          return <div className="p-4 rounded-lg bg-gray-200" key={index}></div>;
        }
      })}
    </div>
  );
};

export default ProgressCalender;
