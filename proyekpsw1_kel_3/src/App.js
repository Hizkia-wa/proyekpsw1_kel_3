import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Materi from "./components/Materi";
import LatihanSoal from "./components/LatihanSoal";
import Brilian from "./components/Brilian";
import SoalLatihan from "./components/SoalLatihan";
import MateriGeometriDatar from "./components/MateriGeometriDatar";
import MaterStatistika from "./components/MateriStatistika";
import MateriPeluang from "./components/MateriPeluang";
import "bootstrap/dist/css/bootstrap.min.css";

function CenteredLayout({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      {children}
    </div>
  );
}

function App() {
  const location = useLocation();

  const hideNavbarPaths = ["/", "/register"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<CenteredLayout><LoginForm /></CenteredLayout>} />
        <Route path="/register" element={<CenteredLayout><RegisterForm /></CenteredLayout>} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/latihansoal" element={<LatihanSoal />} />
        <Route path="/brilian" element={<Brilian />} />
        <Route path="/Soallatihan" element={<SoalLatihan />} />
        <Route path="/materigeometridatar" element={<MateriGeometriDatar />} />
        <Route path="/materistatistika" element={<MaterStatistika />} />
        <Route path="/materipeluang" element={<MateriPeluang />} />
      </Routes>
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
