import React from "react";
import "./GeometriDatar.css";
import stk1 from "../images/STK1.avif";
import stk2 from "../images/STK2.avif";
import stk3 from "../images/STK3.avif";
import stk4 from "../images/STK4.webp";
import stk5 from "../images/STK5.jpg";
import stk6 from "../images/STK6.jpg";
import stk7 from "../images/STK7.jpg";
import stk8 from "../images/STK8.webp";

const GeometriDatar = () => {
  const sections = [
    {
      id: 1,
      title: "Pengantar Geometri Datar",
      content:
        "Geometri datar adalah cabang matematika yang mempelajari bentuk, ukuran, dan sifat-sifat bangun dua dimensi. Bangun datar seperti segitiga, persegi, persegi panjang, lingkaran, dan trapesium adalah bagian dari geometri datar. Dalam pembelajaran geometri datar, siswa akan memahami berbagai rumus dan sifat bangun datar yang digunakan dalam kehidupan sehari-hari.",
      shape: "none",
      bgImage: stk1,
    },
    {
      id: 2,
      title: "Segitiga",
      content:
        "Segitiga adalah bangun datar dengan tiga sisi dan tiga sudut. Terdapat beberapa jenis segitiga, seperti segitiga sama sisi, segitiga sama kaki, segitiga siku-siku, dan segitiga sembarang. Semua sudut dalam segitiga berjumlah 180 derajat.",
      formula: "Keliling: a + b + c, Luas: 1/2 × alas × tinggi",
      shape: "triangle",
      bgImage: stk2,
    },
    {
      id: 3,
      title: "Persegi",
      content:
        "Persegi adalah bangun datar dengan empat sisi yang sama panjang dan empat sudut siku-siku. Semua sisi persegi memiliki panjang yang sama, dan sudutnya selalu 90 derajat.",
      formula: "Keliling: 4 × sisi, Luas: sisi × sisi",
      shape: "square",
      bgImage: stk3,
    },
    {
      id: 4,
      title: "Lingkaran",
      content:
        "Lingkaran adalah bangun datar yang terdiri dari semua titik yang berjarak sama dari sebuah titik pusat. Jari-jari lingkaran adalah jarak dari pusat ke tepi lingkaran.",
      formula: "Keliling: 2 × π × r, Luas: π × r²",
      shape: "circle",
      bgImage: stk4,
    },
    {
      id: 5,
      title: "Persegi Panjang",
      content:
        "Persegi panjang adalah bangun datar dengan dua pasang sisi sejajar yang panjangnya sama. Sudut-sudutnya adalah sudut siku-siku.",
      formula: "Keliling: 2 × (panjang + lebar), Luas: panjang × lebar",
      shape: "rectangle",
      bgImage: stk5,
    },
    {
      id: 6,
      title: "Trapesium",
      content:
        "Trapesium adalah bangun datar dengan satu pasang sisi yang sejajar. Sisi yang sejajar disebut dengan sisi alas dan sisi atas.",
      formula: "Keliling: a + b + c + d, Luas: 1/2 × (alas + atas) × tinggi",
      shape: "trapezium",
      bgImage: stk6,
    },
    {
      id: 7,
      title: "Jajar Genjang",
      content:
        "Jajar genjang adalah bangun datar dengan dua pasang sisi sejajar. Sisi yang berseberangan memiliki panjang yang sama, dan sudut yang berseberangan juga sama besar.",
      formula: "Keliling: 2 × (alas + sisi miring), Luas: alas × tinggi",
      shape: "parallelogram",
      bgImage: stk7,
    },
    {
      id: 8,
      title: "Belah Ketupat",
      content:
        "Belah ketupat adalah bangun datar dengan empat sisi yang sama panjang, tetapi sudut-sudutnya tidak selalu siku-siku. Semua sisi belah ketupat memiliki panjang yang sama.",
      formula: "Keliling: 4 × sisi, Luas: 1/2 × diagonal1 × diagonal2",
      shape: "rhombus",
      bgImage: stk8,
    },
  ];

  const renderShape = (shape) => {
    switch (shape) {
      case "triangle":
        return (
          <svg width="150" height="130">
            <polygon points="75,20 150,130 0,130" fill="skyblue" />
          </svg>
        );
      case "square":
        return (
          <svg width="150" height="150">
            <rect width="150" height="150" fill="lightgreen" />
          </svg>
        );
      case "circle":
        return (
          <svg width="150" height="150">
            <circle cx="75" cy="75" r="70" fill="lightcoral" />
          </svg>
        );
      case "rectangle":
        return (
          <svg width="200" height="150">
            <rect width="200" height="150" fill="lightyellow" />
          </svg>
        );
      case "trapezium":
        return (
          <svg width="180" height="150">
            <polygon points="30,150 150,150 180,60 0,60" fill="lightpink" />
          </svg>
        );
      case "parallelogram":
        return (
          <svg width="200" height="150">
            <polygon points="30,150 170,150 200,0 60,0" fill="lightseagreen" />
          </svg>
        );
      case "rhombus":
        return (
          <svg width="150" height="150">
            <polygon points="75,0 150,75 75,150 0,75" fill="lightgoldenrodyellow" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="materi-geometridatar">
      {sections.map((section) => (
        <div
          key={section.id}
          className="materi-section"
          style={{
            backgroundImage: `url(${section.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            color: "white",
          }}
        >
          <h2>{section.title}</h2>
          <div className="shape-container">{renderShape(section.shape)}</div>
          <p>{section.content}</p>
          <p><strong>Rumus:</strong> {section.formula}</p>
        </div>
      ))}
    </div>
  );
};

export default GeometriDatar;
