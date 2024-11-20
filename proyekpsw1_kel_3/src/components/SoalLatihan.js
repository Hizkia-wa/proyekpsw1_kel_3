import React from "react";
import './Materi.css';
import gbdimages from '../images/gbd.png';
import gbrimages from '../images/gbr.png';
import stksimages from '../images/stks.jpg';
import pksimages from '../images/pks.jpg';
import atpsimages from '../images/atps.avif';
import lmtsimages from '../images/lmts.avif';
import trnsimages from '../images/trns.avif';
import dblsimages from '../images/dbls.avif';

function SoalLatihan() {
    const Latihandata = [
        { nama: 'Geometri Bangun Datar', deskripsi: "Mempelajari bentuk dan sifat geometri datar.", gambar: gbdimages, path: '/materigeometridatar'},
        { nama: 'Geometri Bangun Ruang', deskripsi: "Mempelajari volume dan luas permukaan bangun ruang.", gambar: gbrimages },
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