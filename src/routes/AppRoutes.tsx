import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CreateNewTask } from "../pages/index";
import { TaskProvider } from "../contexts/TaskContext";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novaTarefa" element={<TaskProvider><CreateNewTask /></TaskProvider>} />
      </Routes>
    </BrowserRouter>
  );
}
