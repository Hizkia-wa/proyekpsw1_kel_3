import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/materi">Materi</Link></li>
                <li><Link to="/latihansoal">Latihan Soal</Link></li>
                <li><Link to="/soallatihan">Soal Latihan</Link></li>
                <li><Link to="/brilian">Brilian</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;
