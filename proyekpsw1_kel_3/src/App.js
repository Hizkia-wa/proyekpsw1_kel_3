import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Import halaman Home
import Materi from "./components/Materi";
import LatihanSoal from "./components/LatihanSoal";
import Brilian from "./components/Brilian";
import SoalLatihan from "./components/SoalLatihan";
import MateriGeometriDatar from "./components/MateriGeometriDatar";
import MateriStatistika from "./components/MateriStatistika";
import MateriPeluang from "./components/MateriPeluang";
import MateriGeometriRuang from "./components/MateriGeometriRuang";
import GeometriDatar from "./components/GeometriDatar";
import BrilianStatistika from "./components/BrilianStatistika";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function CenteredLayout({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="w-100">{children}</div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/register"]; // Navbar disembunyikan pada halaman tertentu

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <div className="flex-grow-1">
        <Routes>
          {/* Rute ke halaman Login */}
          <Route
            path="/"
            element={
              <CenteredLayout>
                <LoginForm />
              </CenteredLayout>
            }
          />

          {/* Rute ke halaman Register */}
          <Route
            path="/register"
            element={
              <CenteredLayout>
                <RegisterForm />
              </CenteredLayout>
            }
          />

          {/* Rute ke halaman Home */}
          <Route path="/home" element={<Home />} />

          {/* Rute lainnya */}
          <Route path="/materi" element={<Materi />} />
          <Route path="/latihansoal" element={<LatihanSoal />} />
          <Route path="/brilian" element={<Brilian />} />
          <Route path="/soallatihan" element={<SoalLatihan />} />
          <Route
            path="/materigeometridatar"
            element={<MateriGeometriDatar />}
          />
          <Route
            path="/materigeometriruang"
            element={<MateriGeometriRuang />}
          />
          <Route path="/materistatistika" element={<MateriStatistika />} />
          <Route path="/materipeluang" element={<MateriPeluang />} />
          <Route path="/brilianstatistika" element={<BrilianStatistika />} />
          <Route path="/GeometriDatar" element={<GeometriDatar />} />

          {/* Rute 404 */}
          <Route
            path="*"
            element={
              <CenteredLayout>
                <div className="text-center">
                  <h1>404 - Halaman Tidak Ditemukan</h1>
                </div>
              </CenteredLayout>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
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
