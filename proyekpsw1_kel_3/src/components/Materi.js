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
        nama: "Materi Geometri",
        deskripsi:
          "Geometri adalah cabang ilmu matematika yang mempelajari bentuk, ukuran, dimensi, dan sifat-sifat garis, sudut, bidang, dan ruang. Geometri juga dikenal sebagai ilmu ukur.",
        gambar: gbrsimages,
        path: "/MateriGeometri",
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
        path: "/MateriLimitTrigonometri",
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