import React from "react";
import './Materi.css';
import { Link } from "react-router-dom";
import gbdsimages from '../images/geometridatar.avif';
import gbrsimages from '../images/geometriruang.avif';
import stkimages from '../images/statistika.avif';
import pkimages from '../images/peluang.avif';
import atpimages from '../images/pencacahan.avif';
import lmtimages from '../images/lmt.avif';
import trnimages from '../images/trn.avif';
import dblimages from '../images/dbl.avif';

function Materi() {
    const jurusanData = [
      {
        nama: "Geometri Bangun Datar",
        deskripsi:
          "Materi tentang geometri bidang datar pada umumnya menjelaskan tentang sebuah jarak, baik jarak antara titik dengan garis maupun antara dua titik",
        gambar: gbdsimages,
        path: "/GeometriDatar",
      },
      {
        nama: "Geometri Bangun Ruang",
        deskripsi:
          "bangun ruang adalah sebutan untuk bangun-bangun yang berbentuk tiga dimensi atau bangun yang memiliki ruang yang di batasi dengan sisi-sisi nya.",
        gambar: gbrsimages,
        path: "/MateriGeometriRuang",
      },
      {
        nama: "Statistika",
        deskripsi:
          "ilmu yang memfokuskan pada cara merancang, menghimpun, menganalisis, menafsirkan, dan menyajikan data. ",
        gambar: stkimages,
        path: "/MateriStatistika",
      },
      {
        nama: "Aturan pencacahan",
        deskripsi:
          "cabang ilmu matematika yang mempelajari cara menghitung banyaknya objek atau kejadian yang muncul",
        gambar: atpimages,
        path: "/MateriPeluang",
      },
      {
        nama: "Peluang Kejadian",
        deskripsi:
          "Peluang adalah nilai (kuantitas) untuk menyatakan seberapa besar terjadinya suatu peristiwa",
        gambar: pkimages,
        path: "/MateriPeluang",
      },
      {
        nama: "Limit",
        deskripsi:
          "Limit itu suatu batas yang menggunakan konsep pendekatan fungsi",
        gambar: lmtimages,
        path: "/MateriPeluang",
      },
      {
        nama: "Turunan",
        deskripsi:
          "pengukuran terhadap bagaimana fungsi berubah seiring perubahan nilai yang dimasukan, atau secara umum turunan menunjukkan bagaimana suatu besaran berubah akibat perubahan besaran lainnya.",
        gambar: trnimages,
        path: "/MateriTurunan",
      },
      {
        nama: "Distribusi Binomial",
        deskripsi:
          "Distribusi binomial adalah distribusi probabilitas statistik yang merangkum kemungkinan suatu nilai akan mengambil salah satu dari dua nilai independen.",
        gambar: dblimages,
        path: "/MateriPeluang",
      },
    ];

    return (
        <div className="jurusan-container">
            <h1>Materi</h1>
            <div className="jurusan-cards">
            {jurusanData.map((jurusan, index) => (
                <div key={index} className="jurusan-card">
                    <img src={jurusan.gambar} alt={jurusan.nama} className="jurusan-image" />
                    <Link to={jurusan.path}>
                        <h2>{jurusan.nama}</h2>
                    </Link>
                    <p>{jurusan.deskripsi}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export  default Materi;