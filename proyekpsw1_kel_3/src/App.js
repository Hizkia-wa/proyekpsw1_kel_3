import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Materi from "./components/Materi";
import LatihanSoal from "./components/LatihanSoal";
import "bootstrap/dist/css/bootstrap.min.css";

function CenteredLayout({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CenteredLayout><LoginForm /></CenteredLayout>} />
        <Route path="/register" element={<CenteredLayout><RegisterForm /></CenteredLayout>} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/latihansoal" element={<LatihanSoal />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
