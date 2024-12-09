import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalculator, FaLock, FaUserLock } from "react-icons/fa";
import "./LoginRegis.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Ambil fungsi login dari AuthContext

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("Username dan password tidak boleh kosong.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      setError("Username atau password salah.");
      return;
    }

    login(); // Ubah status login menggunakan AuthContext
    setError("");
    navigate("home"); // Arahkan ke halaman Brilian setelah login
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 login-bg">
      <div className="login-card">
        <div className="text-center mb-4">
          <FaCalculator size={50} className="icon" />
          <h3 className="login-title">R U M A P I</h3>
          <p className="login-subtitle">Rumus Matematika Pintar</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div className="input-wrapper">
              <FaUserLock className="input-icon" />
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

          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-login w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don't have an account?{" "}
            <span
              className="text-primary sign-up-link"
              onClick={() => navigate("/register")}
            >
              Sign up here
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
