import React from "react";
import './Materi.css';
import { Link } from "react-router-dom";
import gbdimages from '../images/gbd.png';
import gbrimages from '../images/gbr.png';
import stksimages from '../images/stks.jpg';
import pksimages from '../images/pks.jpg';

function Brilian() {
    const Latihandata = [
        { nama: 'Geometri Bangun Datar', deskripsi: "Mempelajari bentuk dan sifat geometri datar.", gambar: gbdimages, path: '/materigeometridatar'},
        { nama: 'Geometri Bangun Ruang', deskripsi: "Mempelajari volume dan luas permukaan bangun ruang.", gambar: gbrimages },
        { nama: 'Statistika', deskripsi: "Analisis data menggunakan statistika.", gambar: stksimages },
        { nama: 'Aturan Pencacahan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
        { nama: 'Peluang Kejadian', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
        { nama: 'Limit', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
        { nama: 'Turunan', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
        { nama: 'Distribusi Binomial', deskripsi: "Menghitung probabilitas suatu kejadian.", gambar: pksimages },
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
