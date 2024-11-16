import React from "react";
import './Materi.css';
import gbdsimages from '../images/gbds.Png';
import gbrsimages from '../images/gbrs.png';
import stkimages from '../images/stk.jpg';
import pkimages from '../images/pk.jpg';

function Materi() {
    const jurusanData = [
        {nama: 'Goometri Bangun Datar', deskripsi: '//', gambar: gbdsimages},
        {nama: 'Goometri Bangun Ruang', deskripsi: '//', gambar: gbrsimages},
        {nama: 'Statistika', deskripsi: '//', gambar: stkimages},
        {nama: 'Peluang Kejadian', deskripsi: '//', gambar:pkimages},
    ];

    return (
        <div className="jurusan-container">
            <h1>Materi</h1>
            <div className="jurusan-cards">
            {jurusanData.map((jurusan, index) => (
                <div key={index} className="jurusan-card">
                    <img src={jurusan.gambar} alt={jurusan.nama} className="jurusan-image" />
                    <h2>{jurusan.nama}</h2>
                    <p>{jurusan.deskripsi}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export  default Materi;