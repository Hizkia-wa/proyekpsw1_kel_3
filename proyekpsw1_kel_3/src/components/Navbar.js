import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Materi</li>
                        <li>Soal Latihan</li>
                        <li>Latihan Soal</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;