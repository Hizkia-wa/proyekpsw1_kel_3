import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate,useLocation,} from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Materi from "./components/Materi";
import LatihanSoal from "./components/LatihanSoal";
import Brilian from "./components/Brilian";
import SoalLatihan from "./components/SoalLatihan";
import BrilianGeometri from "./components/BrilianGeometri";
import MateriStatistika from "./components/MateriStatistika";
import MateriPeluang from "./components/MateriPeluang";
import MateriLimitTrigonometri from "./components/MateriLimitTrigonometri";
import MateriTurunan from "./components/MateriTurunan";
import MateriGeometri from "./components/MateriGeometri";
import BrilianStatistika from "./components/BrilianStatistika";
import Brilianpeluang from "./components/Brilianpeluang";
import BrilianAp from "./components/BrilianAp";
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
import LatihanSoalLimit from "./components/LatihanSoalLimit";
import BrillianBinomial from "./components/BrillianBinomial";
import MateriKongruen from "./components/MateriKongruen";
import SoalLatihanStatistika from "./components/SoalLatihanStatistika";
import SoalLatihanTurunan from "./components/SoalLatihanTurunan";
import MateriAp from "./components/MateriAp";
import Latihansoalap from "./components/Latihansoalap";
import LatihanSoalBinomial from "./components/LatihanSoalBinomial";
import LatihanSoalKesebangunan from "./components/LatihanSoalKesebangunan";
import SoalLatihanpeluang from "./components/Soallatihanpeluang";
import SoalLatihanAp from "./components/SoallatihanAp";
import SoalLatihanGeometri from "./components/SoalLatihanGeometri";
import BrilianTurunan from "./components/BrilianTurunan";
import BrilianKongruen from "./components/BrilianKongruen";
import SoalLatihanKesebangunan from "./components/SoalLatihanKesebangunan";
import SoalLatihanLimit from "./components/SoalLatihanLimit";
import SoalLatihanBinomial from "./components/SoalLatihanBinomial";
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

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
        <Route path="/" element={<Home />} />
  <Route
    path="/login"
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
          <Route
            path="/brilian"
            element={
              <ProtectedRoute>
                <Brilian />
              </ProtectedRoute>
            }
          />
          <Route path="/materi" element={<Materi />} />
          <Route path="/latihansoal" element={<LatihanSoal />} />

          <Route path="/soallatihan" element={<SoalLatihan />} />
          <Route path="/BrilianGeometri" element={<BrilianGeometri />} />
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
          <Route path="/Brilianpeluang" element={<Brilianpeluang />} />
          <Route path="/BrilianAp" element={<BrilianAp />} />
          <Route path="/soallatihanstatistika" element={<SoalLatihanStatistika />} />
          <Route path="/latihanturunan" element={<LatihanTurunan />} />
          <Route path="/latihangeometri" element={<LatihanGeometri />} />
          <Route path="/MateriBinomial" element={<MateriBinomial />} />
          <Route path="/MateriKongruen" element={<MateriKongruen />} />
          <Route path="/SoalLatihanTurunan" element={<SoalLatihanTurunan />} />
          <Route path="/MateriAp" element={<MateriAp />} />
          <Route path="/LatihanSoalBinomial" element={<LatihanSoalBinomial />} />
          <Route path="/Soallatihanpeluang" element={<SoalLatihanpeluang />} />
          <Route path="/Latihansoalap" element={<Latihansoalap />} />
          <Route path="/SoalLatihanGeometri" element={<SoalLatihanGeometri />} />
          <Route path="/BrilianTurunan" element={<BrilianTurunan />} />
          <Route path="/BrilianKongruen" element={<BrilianKongruen />} />
          <Route path="/latihansoalkesebangunan" element={<LatihanSoalKesebangunan />} />
          <Route path="/Soallatihankesebangunan" element={<SoalLatihanKesebangunan />} />
          <Route path="/Soallatihanlimit" element={<SoalLatihanLimit />} />
          <Route path="/Soallatihanbinomial" element={<SoalLatihanBinomial />} />
          <Route path="/SoallatihanAp" element={<SoalLatihanAp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <AuthProvider>
      <App />
      </AuthProvider>
    </Router>
  );
}

export default AppWithRouter;
