import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {FaHome,FaBook,FaQuestionCircle,FaPuzzlePiece,FaStar, FaUser,} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>R U M A P I</h2>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/Home"><FaHome /> Home</Link></li>
          <li><Link to="/materi"><FaBook /> Materi</Link></li>
          <li><Link to="/latihansoal"><FaQuestionCircle /> Latihan Soal</Link></li>
          <li><Link to="/soallatihan"><FaPuzzlePiece /> Quizz</Link></li>
          <li><Link to="/brilian"><FaStar /> Brilian</Link></li>
          <li><Link to="/login"><FaUser /> Profil</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
