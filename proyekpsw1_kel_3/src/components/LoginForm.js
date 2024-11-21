import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalculator, FaLock, FaUserLock } from "react-icons/fa";
import "../App.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validasi input kosong
    if (username.trim() === "" || password.trim() === "") {
      setError("Username dan password tidak boleh kosong.");
      return;
    }

    // Ambil data pengguna dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    // Validasi login
    if (!user) {
      setError("Username atau password salah.");
      return;
    }

    setError("");
    console.log(`Welcome, ${user.username}!`); // Bisa dihapus jika tidak perlu log
    navigate("/materi");
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card p-5 shadow-lg"
        style={{
          width: "510px",
          borderRadius: "55px",
          background: "linear-gradient(800deg, #dfe6e9, #ffffff)",
        }}
      >
        <div className="text-center mb-4">
          <FaCalculator size={50} color="#6c63ff" />
          <h3 className="text-primary mt-3">R U M A P I</h3>
          <p className="text-muted">Rumus Matematika Pintar</p>
        </div>

        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUserLock />
              </span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Masukkan Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
        </form>

        <div className="text-center">
          <small>
            Don't have an account?{" "}
            <a
              href="#"
              className="text-decoration-none text-primary"
              onClick={() => navigate("/register")}
            >
              Sign up here
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
