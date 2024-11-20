import React from "react";
import './Materi.css';
import gbdimages from '../images/latsol2.jpg';
import gbrimages from '../images/latsol1.jpg';
import stksimages from '../images/latsol3.jpg';
import pksimages from '../images/latsol4.jpg';
import atpssimages from '../images/atpss.avif';
import lmtssimages from '../images/lmtss.avif';
import trnssimages from '../images/trnss.avif';
import dblssimages from '../images/dblss.avif';

function Latihansoal() {
    const Latihandata = [
        { nama: 'Geometri Bangun Datar', deskripsi: "Mempelajari bentuk dan sifat geometri datar.", gambar: gbdimages, path: '/materigeometridatar'},
        { nama: 'Geometri Bangun Ruang', deskripsi: "Mempelajari volume dan luas permukaan bangun ruang.", gambar: gbrimages },
        { nama: 'Statistika', deskripsi: "Analisis data menggunakan statistika.", gambar: stksimages },
        { nama: 'Aturan Pencacahan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: atpssimages },
        { nama: 'Peluang Kejadian', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
        { nama: 'Limit', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: lmtssimages },
        { nama: 'Turunan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: trnssimages },
        { nama: 'Distribusi Binomial', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: dblssimages },
    ]
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