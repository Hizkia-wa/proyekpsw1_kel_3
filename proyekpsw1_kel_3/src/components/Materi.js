import React from "react";
import './Materi.css';
import { Link } from "react-router-dom";
import gbdsimages from '../images/gbds.jpg';
import gbrsimages from '../images/gbrs.png';
import stkimages from '../images/stk.jpg';
import pkimages from '../images/pk.jpg';

function Materi() {
    const jurusanData = [
        {nama: 'Geometri Bangun Datar', deskripsi: '//', gambar: gbdsimages,},
        {nama: 'Geometri Bangun Ruang', deskripsi: '//', gambar: gbrsimages},
        {nama: 'Statistika', deskripsi: '//', gambar: stkimages, path: '/MateriStatistika'},
        {nama: 'Peluang Kejadian', deskripsi: '//', gambar:pkimages, path: '/MateriPeluang'},
    ];

    return (
        <div className="jurusan-container">
            <h1>Materi</h1>
            <div className="jurusan-cards">
            {jurusanData.map((jurusan, index) => (
                <div key={index} className="jurusan-card">
                    <img src={jurusan.gambar} alt={jurusan.nama} className="jurusan-image" />
                    <Link to={jurusan.path}>
                        <h2>{jurusan.nama}</h2>
                    </Link>
                    <p>{jurusan.deskripsi}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export  default Materi;