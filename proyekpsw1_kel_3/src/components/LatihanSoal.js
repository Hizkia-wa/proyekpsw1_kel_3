import React from "react";
import './Materi.css';

function Latihansoal() {
    const Latihandata = [
        { nama: 'Geometri Bangun Datar', deskripsi: '/', gambar: mm},
        { nama: 'Geometri Bangun Ruang', deskripsi: '/', gambar: mm},
        { nama: 'Statistika', deskripsi: '/', gambar: mm},
        { nama: 'Peluang Kejadian', deskripsi: '/', gambar: mm},
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