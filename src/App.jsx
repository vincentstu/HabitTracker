import "./index.css";

import HabitPage from "./pages/HabitPage";
import NewHabitPage from "./pages/NewHabitPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits((prevHabits) => [...prevHabits, habit]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HabitPage habits={habits} />} />
        <Route path="/new" element={<NewHabitPage addHabit={addHabit} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
