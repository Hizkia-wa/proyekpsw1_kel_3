import React from "react";
import './Materi.css';
import { Link } from "react-router-dom";
import gbdimages from '../images/bri1.jpg';
import gbrimages from '../images/bri9.jpg';
import stksimages from '../images/bri4.jpg';
import pksimages from '../images/bri5.jpg';
import atpssimages from '../images/bri6.jpg';
import lmtssimages from '../images/bri7.jpg';
import trnssimages from '../images/bri10.jpg';
import dblssimages from '../images/bri8.avif';


function Brilian() {
    const Latihandata = [
        { nama: 'Geometri Bangun D2 & D3', deskripsi: "Mempelajari bentuk dan sifat geometri datar.", gambar: gbdimages, path: '/materigeometridatar'},
        { nama: 'Kongruen dan Kesebangunan', deskripsi: "berkaitan dengan hubungan antarbangun datar atau ruang berdasarkan bentuk, ukuran, dan proporsi.", gambar: gbrimages},
        { nama: 'Statistika', deskripsi: "Analisis data menggunakan statistika.", gambar: stksimages, path: '/BrilianStatistika'},
        { nama: 'Aturan Pencacahan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
        { nama: 'Peluang Kejadian', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: atpssimages },
        { nama: 'Limit', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: lmtssimages, path: '/BrilianLimit' },
        { nama: 'Turunan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: trnssimages },
        { nama: 'Distribusi Binomial', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: dblssimages },
    ];

    return (
        <div className="jurusan-container">
            <h1>Brilian</h1>
            <div className="jurusan-cards">
                {Latihandata.map((jurusan, index) => (
                    <div key={index} className="jurusan-card">
                        <img 
                            src={jurusan.gambar} 
                            alt={jurusan.nama} 
                            className="jurusan-image" 
                        />
                        
                        {jurusan.path ? (
                            <h2>
                                <Link to={jurusan.path} className="jurusan-link">
                                    {jurusan.nama}
                                </Link>
                            </h2>
                        ) : (
                            <h2>{jurusan.nama}</h2>
                        )}
                        <p>{jurusan.deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brilian;
