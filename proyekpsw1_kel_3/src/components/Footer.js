import React from "react";
import { FaUsers, FaEnvelope, FaCommentDots, FaBullseye } from "react-icons/fa"; // Ikon yang diperlukan
import "./Navbar.css"; // Import CSS Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul>
          <li>
            <a href="/team">
              <FaUsers /> Team
            </a>
          </li>
          <li>
            <a href="/contact">
              <FaEnvelope /> Contact
            </a>
          </li>
          <li>
            <a href="/testimoni">
              <FaCommentDots /> Testimoni
            </a>
          </li>
          <li>
            <a href="/mission">
              <FaBullseye /> Mission
            </a>
          </li>
        </ul>
        <p>© 2024 R U M A P I. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
