import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, CreateNewTask} from '../pages/index';

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novaTarefa" element={<CreateNewTask />} />
        </Routes>
    </BrowserRouter>
  )
}