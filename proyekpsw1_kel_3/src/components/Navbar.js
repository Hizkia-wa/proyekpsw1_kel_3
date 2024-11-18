import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/materi">Materi</Link></li>
                <li><Link to="/latihansoal">Latihan Soal</Link></li>
                <li><Link to="/soallatihan">Soal Latihan</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
