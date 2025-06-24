import "./index.css";

import HabitPage from "./pages/HabitPage";
import NewHabitPage from "./pages/NewHabitPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HabitPage />} />
        <Route path="/new" element={<NewHabitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
