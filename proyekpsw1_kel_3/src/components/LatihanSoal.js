import React from "react";
import "./Materi.css";
import { Link } from "react-router-dom";
import gbdimages from "../images/lat9.jpg";
import gbrimages from "../images/lat2.jpg";
import stksimages from "../images/lat3.jpg";
import pksimages from "../images/lat4.avif";
import atpssimages from "../images/lat6.jpg";
import lmtssimages from "../images/lmtss.avif";
import trnssimages from "../images/lat8.jpg";
import dblssimages from "../images/lat5.jpg";

function Latihansoal() {
  const Latihandata = [
    {
      nama: 'Geometri Bangun D2 & D3',
      deskripsi: "Mempelajari bentuk dan sifat geometri datar.",
      gambar: gbdimages,
      path: "/materigeometridatar",
    },
    {
      nama: 'Kongruen dan Kesebangunan',
      deskripsi:"berkaitan dengan hubungan antarbangun datar atau ruang berdasarkan bentuk, ukuran, dan proporsi.",
      gambar: gbrimages,
      path: "/geometribangunruang",
    },
    {
      nama: "Statistika",
      deskripsi: "Analisis data menggunakan statistika.",
      gambar: stksimages,
      path: "/LatihanSoalStatistika",
    },
    {
      nama: "Aturan Pencacahan",
      deskripsi: "Menghitung probabilitas suatu kejadian.",
      gambar: atpssimages,
      path: "/materipeluang",
    },
    {
      nama: "Peluang Kejadian",
      deskripsi: "Menghitung probabilitas suatu kejadian.",
      gambar: pksimages,
      path: "/QuestionPage",
    },
    {
      nama: "Limit",
      deskripsi: "Konsep limit pada fungsi matematika.",
      gambar: lmtssimages,
      path: "/LatihanSoalLimit",
    },
    {
      nama: "Turunan",
      deskripsi: "Mempelajari turunan fungsi.",
      gambar: trnssimages,
      path: "/LatihanTurunan",
    },
    {
      nama: "Distribusi Binomial",
      deskripsi: "Distribusi probabilitas dalam statistik.",
      gambar: dblssimages,
      path: "/brilianstatistika",
    },
  ];

  return (
    <div className="jurusan-container">
      <h1>Latihan Soal</h1>
      <div className="jurusan-cards">
        {Latihandata.map((jurusan, index) => (
          <Link to={jurusan.path || "#"} key={index} className="jurusan-card">
            <img src={jurusan.gambar} alt={jurusan.nama} className="jurusan-image" />
            <h2>{jurusan.nama}</h2>
            <p>{jurusan.deskripsi}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Latihansoal;
