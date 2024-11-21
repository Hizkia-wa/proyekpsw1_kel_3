import React from "react";
import {FaCalculator,FaChalkboardTeacher,FaBook,FaLaptopCode,} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; 
import { Navigate } from "react-router-dom";

function Home() {
  return (
    <div className="bg-light vh-100 d-flex flex-column justify-content-center align-items-center">
      <header className="text-center mb-5">
        <h1 className="text-primary fw-bold animated-title">
          <FaCalculator size={50} className="me-2 animated-icon" />
          <span className="math-text">R U M A P I</span>
        </h1>
        <p className="text-muted fs-5 animated-subtitle">
          <em>Rumus Matematika Pintar</em>
        </p>
        <p className="text-dark fs-6 animated-description">
          <span className="math-equation">y = mx + c</span>
          <br />
          Platform belajar matematika yang interaktif, seru, dan cerdas!
        </p>
      </header>

      <section className="container text-center">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow p-4 h-100 bg-white">
              <FaChalkboardTeacher size={50} className="text-success mb-3" />
              <h4 className="text-primary">Belajar dengan Mudah</h4>
              <p className="text-muted">
                Temukan berbagai materi matematika mulai dari dasar hingga
                tingkat lanjut dengan penjelasan yang mudah dipahami.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow p-4 h-100 bg-white">
              <FaBook size={50} className="text-warning mb-3" />
              <h4 className="text-primary">Kumpulan Rumus</h4>
              <p className="text-muted">
                Akses kumpulan rumus lengkap yang bisa digunakan untuk
                memecahkan berbagai persoalan matematika.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow p-4 h-100 bg-white">
              <div className="icon-box">
                <FaLaptopCode />
              </div>
              <h4 className="text-primary">Kalkulator Interaktif</h4>
              <p className="text-muted">
                Gunakan kalkulator pintar kami untuk menghitung, menggambar
                grafik, dan menyelesaikan soal matematika dengan cepat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-5">
        <button
          className="btn btn-primary btn-lg px-5 py-2 shadow"
          onClick={() => (window.location.href = "/materi")} 
        >
          Mulai Belajar
        </button>
      </footer>
    </div>
  );
}

export default Home;
