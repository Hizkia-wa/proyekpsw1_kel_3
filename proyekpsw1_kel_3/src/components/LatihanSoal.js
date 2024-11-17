import React from "react";
import './Materi.css';
import gbdimages from '../images/gbd.png';
import gbrimages from '../images/gbr.png';
import stksimages from '../images/stks.jpg';
import pksimages from '../images/pks.jpg';

function Latihansoal() {
    const Latihandata = [
        { nama: 'Geometri Bangun Datar', deskripsi: '/', gambar: gbdimages},
        { nama: 'Geometri Bangun Ruang', deskripsi: '/', gambar: gbrimages},
        { nama: 'Statistika', deskripsi: '/', gambar: stksimages},
        { nama: 'Peluang Kejadian', deskripsi: '/', gambar: pksimages},
    ];

    return (
        <div className="jurusan-container">
            <h1>Latihan Soal</h1>
            <div className="jurusan-cards">
                {Latihandata.map((jurusan, index) => (
                    <div key={index} className="jurusan-card">
                        <img src={jurusan.gambar} alt={jurusan.nama} className="jurusan-image" />
                        <h2>{jurusan.nama}</h2>
                        <p>{jurusan.deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Latihansoal;