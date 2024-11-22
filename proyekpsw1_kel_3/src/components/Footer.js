import React from "react";
import { FaUsers, FaEnvelope, FaCommentDots, FaBullseye } from "react-icons/fa"; 
import "./Navbar.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <li><a href="/team"><FaUsers /> Team</a></li>
          <li><a href="/Contact"><FaEnvelope /> Contact</a></li>
          <li><a href="/Testimoni"><FaCommentDots /> Testimoni</a></li>
          <li><a href="/mission"><FaBullseye /> Mission</a></li>
        </ul>
        <p>© 2024 R U M A P I. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
