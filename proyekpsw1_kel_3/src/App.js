import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Materi from "./components/Materi";
import LatihanSoal from "./components/LatihanSoal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="materi" element={<Materi />} />
          <Route path="latihansoal" element={<LatihanSoal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
