import React from "react";
import './Materi.css';
import { Link } from "react-router-dom";
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
        { nama: 'Geometri Bangun D2 & D3', deskripsi: "Mempelajari bentuk dan sifat geometri datar.", gambar: gbdimages, path: '/SoalLatihanGeometri'},
        { nama: 'Kongruen dan Kesebangunan', deskripsi: "Berkaitan dengan hubungan antarbangun datar atau ruang berdasarkan bentuk, ukuran, dan proporsi.", gambar: gbrimages, path: '/soallatihankesebangunan' },
        { nama: 'Statistika', deskripsi: "Analisis data menggunakan statistika.", gambar: stksimages, path:'/soallatihanstatistika' },
        { nama: 'Aturan Pencacahan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: atpsimages, path: '/SoallatihanAp' },
        { nama: 'Peluang Kejadian', deskripsi: "Menghitung peluang kejadian berdasarkan data.", gambar: pksimages, path: '/Soallatihanpeluang' },
        { nama: 'Limit', deskripsi: "Memahami konsep limit pada fungsi matematika.", gambar: lmtsimages, path: '/soallatihanlimit' },
        { nama: 'Turunan', deskripsi: "Mempelajari konsep turunan fungsi.", gambar: trnsimages, path: '/SoalLatihanTurunan' },
        { nama: 'Distribusi Binomial', deskripsi: "Menghitung probabilitas menggunakan distribusi binomial.", gambar: dblsimages, path: '/soallatihanbinomial' },
        { nama: 'Distribusi Binomial', deskripsi: "Menghitung probabilitas menggunakan distribusi binomial.", gambar: dblsimages, path: '/SoallatihanBinomial' },
    ];

    return (
        <div className="jurusan-container">
            <h1>QUIZ</h1>
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
