import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <ul>
                        <li to="/"><Link>Home</Link></li>
                        <li to="/materi"><Link>Materi</Link></li>
                        <li to="/latihansoal"><Link>Latihan Soal</Link></li>
                        <li to="/soallatihan"><Link>Soal Latihan</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;