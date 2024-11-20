import React from "react";
import {BrowserRouter as Router,Route,Routes,useLocation,} from "react-router-dom";
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
import MateriGeometriRuang from "./components/MateriGeometriRuang";
import "bootstrap/dist/css/bootstrap.min.css";

function CenteredLayout({ children }) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">{children}</div>
  );
}

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/register"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <CenteredLayout>
              <LoginForm />
            </CenteredLayout>
          }
        />

 
        <Route
          path="/register"
          element={
            <CenteredLayout>
              <RegisterForm />
            </CenteredLayout>
          }
        />


        <Route path="/materi" element={<Materi />} />
        <Route path="/latihansoal" element={<LatihanSoal />} />
        <Route path="/brilian" element={<Brilian />} />
        <Route path="/soallatihan" element={<SoalLatihan />} />
        <Route path="/materigeometridatar" element={<MateriGeometriDatar />} />
        <Route path="/materigeometriruang" element={<MateriGeometriRuang />} />
        <Route path="/materistatistika" element={<MaterStatistika />} />
        <Route path="/materipeluang" element={<MateriPeluang />} />


        <Route
          path="*"
          element={
            <div className="text-center mt-5"> <h1>404 - Halaman Tidak Ditemukan</h1></div>
          }
        />
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
