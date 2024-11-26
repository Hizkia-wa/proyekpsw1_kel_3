import React from "react";
import './Materi.css';
import gbdimages from '../images/soal1.jpg';
import gbrimages from '../images/soal2.jpg';
import stksimages from '../images/soal3.avif';
import pksimages from '../images/soal9.jpg';
import atpsimages from '../images/soal5.jpg';
import lmtsimages from '../images/soal6.jpg';
import trnsimages from '../images/soal7.jpg';
import dblsimages from '../images/soal8.jpg';

function SoalLatihan() {
    const Latihandata = [
        { nama: 'Geometri Bangun D2 & D3', deskripsi: "Mempelajari bentuk dan sifat geometri datar.", gambar: gbdimages, path: '/materigeometridatar'},
        { nama: 'Kongruen dan Kesebangunan', deskripsi: "berkaitan dengan hubungan antarbangun datar atau ruang berdasarkan bentuk, ukuran, dan proporsi.", gambar: gbrimages},
        { nama: 'Statistika', deskripsi: "Analisis data menggunakan statistika.", gambar: stksimages },
        { nama: 'Aturan Pencacahan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: atpsimages },
        { nama: 'Peluang Kejadian', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
        { nama: 'Limit', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: lmtsimages },
        { nama: 'Turunan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: trnsimages },
        { nama: 'Distribusi Binomial', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: dblsimages },
    ];

    return (
        <div className="jurusan-container">
            <h1>Soal Latihan</h1>
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

export default SoalLatihan;