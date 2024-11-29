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
import { Link } from "react-router-dom";

function SoalLatihan() {
    const Latihandata = [
        { nama: 'Geometri Bangun D2 & D3', deskripsi: "Mempelajari bentuk dan sifat geometri datar.", gambar: gbdimages, path: '/materigeometridatar'},
        { nama: 'Kongruen dan Kesebangunan', deskripsi: "Berkaitan dengan hubungan antarbangun datar atau ruang berdasarkan bentuk, ukuran, dan proporsi.", gambar: gbrimages, path: '/kongruen' },
        { nama: 'Statistika', deskripsi: "Analisis data menggunakan statistika.", gambar: stksimages, path:'/soallatihanstatistika' },
        { nama: 'Aturan Pencacahan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: atpsimages, path: '/aturanpencacahan' },
        { nama: 'Peluang Kejadian', deskripsi: "Menghitung peluang kejadian berdasarkan data.", gambar: pksimages, path: '/peluangkejadian' },
        { nama: 'Limit', deskripsi: "Memahami konsep limit pada fungsi matematika.", gambar: lmtsimages, path: '/limit' },
        { nama: 'Turunan', deskripsi: "Mempelajari konsep turunan fungsi.", gambar: trnsimages, path: '/SoalLatihanTurunan' },
        { nama: 'Distribusi Binomial', deskripsi: "Menghitung probabilitas menggunakan distribusi binomial.", gambar: dblsimages, path: '/distribusibinomial' },
    ];

    return (
        <div className="jurusan-container">
            <h1>Soal Latihan</h1>
            <div className="jurusan-cards">
                {Latihandata.map((jurusan, index) => (
                    <Link to={jurusan.path || '#'} key={index} className="jurusan-card">
                        <img src={jurusan.gambar || 'path/to/default-image.jpg'} alt={jurusan.nama} className="jurusan-image" />
                        <h2>{jurusan.nama}</h2>
                        <p>{jurusan.deskripsi}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SoalLatihan;
