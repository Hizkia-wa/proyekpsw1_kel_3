import React from "react";
import {BrowserRouter as Router,Route,Routes,useLocation,} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import Materi from "./components/Materi";
import LatihanSoal from "./components/LatihanSoal";
import Brilian from "./components/Brilian";
import SoalLatihan from "./components/SoalLatihan";
import MateriGeometriDatar from "./components/MateriGeometriDatar";
import MateriStatistika from "./components/MateriStatistika";
import MateriPeluang from "./components/MateriPeluang";
import MateriLimitTrigonometri from "./components/MateriLimitTrigonometri";
import MateriTurunan from "./components/MateriTurunan";
import MateriGeometri from "./components/MateriGeometri";
import BrilianStatistika from "./components/BrilianStatistika";
import BrilianLimit from "./components/BrilianLimit";
import Footer from "./components/Footer";
import Testimoni from "./components/Testimoni";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Mission from "./components/Mission";
import Latihansoalbangunruang from "./components/Latihansoalbangunruang";
import QuestionPage from "./components/QuestionPage";
import MateriBinomial from "./components/MateriBinomial";
import LatihanSaolStatistika from "./components/LatihanSaolStatistika";
import LatihanTurunan from "./components/LatihanTurunan";
import LatihanGeometri from "./components/LatihanGeometri";
import LatihanSoalStatistika from "./components/LatihanSaolStatistika";
import LatihanSoalLimit from "./components/LatihanSoalLimit";
import BrillianBinomial from "./components/BrillianBinomial";
import MateriKongruen from "./components/MateriKongruen";
import SoalLatihanStatistika from "./components/SoalLatihanStatistika";
import MateriAp from "./components/MateriAp";
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
  const hideNavbarPaths = ["/", "/register"];

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <div className="flex-grow-1">
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

          <Route path="/home" element={<Home />} />

          <Route path="/materi" element={<Materi />} />
          <Route path="/latihansoal" element={<LatihanSoal />} />
          <Route path="/brilian" element={<Brilian />} />
          <Route path="/soallatihan" element={<SoalLatihan />} />
          <Route path="/materigeometridatar" element={<MateriGeometriDatar />} />
          <Route path="/materistatistika" element={<MateriStatistika />} />
          <Route path="/materipeluang" element={<MateriPeluang />} />
          <Route path="/materilimittrigonometri" element={<MateriLimitTrigonometri />} />
          <Route path="/brilianstatistika" element={<BrilianStatistika />} />
          <Route path="/brilianlimit" element={<BrilianLimit />} />
          <Route path="/materigeometri" element={<MateriGeometri />} />
          <Route path="/MateriTurunan" element={<MateriTurunan />} />
          <Route path="/Testimoni" element={<Testimoni />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/geometribangunruang" element={<Latihansoalbangunruang />} />
          <Route path="/QuestionPage" element={<QuestionPage />} />
          <Route path="/LatihanSoalStatistika" element={<LatihanSaolStatistika />} />
          <Route path="/LatihanSoalLimit" element={<LatihanSoalLimit />} />
           <Route path="/MateriBinomial" element={<MateriBinomial />} />
           <Route path="/BrillianBinomial" element={<BrillianBinomial />} />
           <Route path="/soallatihanstatistika" element={<SoalLatihanStatistika />} />
           <Route path="/latihanturunan" element={<LatihanTurunan />} />
           <Route path="/latihangeometri" element={<LatihanGeometri />} />
          <Route path="/MateriBinomial" element={<MateriBinomial />} />
          <Route path="/BrillianBinomial" element={<BrillianBinomial />} />
          <Route path="/MateriKongruen" element={<MateriKongruen />} />
          <Route path="/soallatihanstatistika" element={<SoalLatihanStatistika />} />
          <Route path="/latihanturunan" element={<LatihanTurunan />} />
          <Route path="/MateriAp" element={<MateriAp />} />
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
