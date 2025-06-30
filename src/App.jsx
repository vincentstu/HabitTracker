import "./index.css";

import HabitPage from "./pages/HabitPage";
import NewHabitPage from "./pages/NewHabitPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HabitDetails from "./pages/HabitDetails";

function App() {
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem("currentHabits");
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  useEffect(() => {
    const storedHabits = localStorage.setItem(
      "currentHabits",
      JSON.stringify(habits)
    );
  });

  const addHabit = (habit) => {
    setHabits((prevHabits) => [...prevHabits, habit]);
  };

  const updateHabit = (id, updatedHabit) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, index) =>
        index === id ? { ...habit, ...updatedHabit } : habit
      )
    );
  };

  const getHabitById = (id) => {
    return habits[id];
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HabitPage
              habits={habits}
              updateHabit={updateHabit}
              getHabitById={getHabitById}
            />
          }
        />
        <Route path="/new" element={<NewHabitPage addHabit={addHabit} />} />
        <Route
          path="/:id"
          element={<HabitDetails getHabitById={getHabitById} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
