"use client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "../styles/App.css";
import Stays from "./pages/Stays";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>Page does not exists.</p>} />

      </Routes>
    </>
  );
}

export default App;
