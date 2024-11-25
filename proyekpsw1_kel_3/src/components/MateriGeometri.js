import React from "react";
import "./MateriGeometri.css"; 
import triangleImg from "../images/gsegitiga.png";
import squareImg from "../images/gpersegi.png";
import circleImg from "../images/glingkaran.png";
import rectangleImg from "../images/gpersegipanjang.png";
import trapezoidImg from "../images/g.png";
import parallelogramImg from "../images/gjajargenjang.png";
import rhombusImg from "../images/gbelahketupat.png";
import cubeImg from "../images/STK2.png";
import rectangularPrismImg from "../images/STK3.png";
import pyramidImg from "../images/STK4.png";
import coneImg from "../images/STK5.png";
import sphereImg from "../images/STK6.png";

const MateriGeometri = () => {
  const datarSections = [
    {
      id: 1,
      title: "Segitiga",
      content:
        "Segitiga adalah bangun datar dengan tiga sisi dan tiga sudut. Terdapat beberapa jenis segitiga seperti segitiga sama sisi, sama kaki, dan sembarang.",
      formula: (
        <>
          <p><strong>Luas:</strong> 1/2 × alas × tinggi</p>
          <p><strong>Keliling:</strong> a + b + c</p>
        </>
      ),
      image: triangleImg,
    },
    {
      id: 2,
      title: "Persegi",
      content:
        "Persegi adalah bangun datar dengan empat sisi yang sama panjang dan empat sudut siku-siku.",
      formula: (
        <>
          <p><strong>Luas:</strong> sisi × sisi</p>
          <p><strong>Keliling:</strong> 4 × sisi</p>
        </>
      ),
      image: squareImg,
    },
    {
      id: 3,
      title: "Lingkaran",
      content:
        "Lingkaran adalah bangun datar yang terdiri dari semua titik yang berjarak sama dari sebuah titik pusat.",
      formula: (
        <>
          <p><strong>Luas:</strong> π × r²</p>
          <p><strong>Keliling:</strong> 2 × π × r</p>
        </>
      ),
      image: circleImg,
    },
    {
      id: 4,
      title: "Persegi Panjang",
      content:
        "Persegi panjang adalah bangun datar dengan dua pasang sisi sejajar yang panjangnya sama.",
      formula: (
        <>
          <p><strong>Luas:</strong> panjang × lebar</p>
          <p><strong>Keliling:</strong> 2 × (panjang + lebar)</p>
        </>
      ),
      image: rectangleImg,
    },
    {
      id: 5,
      title: "Trapesium",
      content:
        "Trapesium adalah bangun datar dengan satu pasang sisi yang sejajar. Sisi yang sejajar disebut sisi alas.",
      formula: (
        <>
          <p><strong>Luas:</strong> 1/2 × (alas + atas) × tinggi</p>
          <p><strong>Keliling:</strong> a + b + c + d</p>
        </>
      ),
      image: trapezoidImg,
    },
    {
      id: 6,
      title: "Jajar Genjang",
      content:
        "Jajar genjang adalah bangun datar dengan dua pasang sisi sejajar. Sisi yang berseberangan memiliki panjang yang sama.",
      formula: (
        <>
          <p><strong>Luas:</strong> alas × tinggi</p>
          <p><strong>Keliling:</strong> 2 × (alas + sisi miring)</p>
        </>
      ),
      image: parallelogramImg,
    },
    {
      id: 7,
      title: "Belah Ketupat",
      content:
        "Belah ketupat adalah bangun datar dengan empat sisi yang sama panjang, tetapi sudut-sudutnya tidak selalu siku-siku.",
      formula: (
        <>
          <p><strong>Luas:</strong> 1/2 × diagonal1 × diagonal2</p>
          <p><strong>Keliling:</strong> 4 × sisi</p>
        </>
      ),
      image: rhombusImg,
    },
  ];

  const ruangSections = [
    {
      id: 2,
      title: "Kubus",
      content:
        "Kubus adalah bangun ruang dengan 6 sisi yang berbentuk persegi dan semua sisi memiliki panjang yang sama. Kubus memiliki 8 titik sudut dan 12 sisi.",
      formula: (
        <>
          <p><strong>Luas Permukaan:</strong> 6 × s²</p>
          <p><strong>Volume:</strong> s³</p>
        </>
      ),
      image: cubeImg,
    },
    {
      id: 3,
      title: "Balok",
      content:
        "Balok adalah bangun ruang yang memiliki 6 sisi berbentuk persegi panjang, dengan panjang, lebar, dan tinggi yang berbeda. Setiap sisi berlawanan pada balok memiliki ukuran yang sama.",
      formula: (
        <>
          <p><strong>Luas Permukaan:</strong> 2 × (panjang × lebar + panjang × tinggi + lebar × tinggi)</p>
          <p><strong>Volume:</strong> panjang × lebar × tinggi</p>
        </>
      ),
      image: rectangularPrismImg,
    },
    {
      id: 4,
      title: "Prisma Segitiga",
      content:
        "Prisma segitiga adalah bangun ruang yang memiliki dua sisi segitiga yang sama besar dan sisi lainnya berupa persegi panjang. Prismanya berbentuk segitiga pada kedua ujung dan sisi tegak berbentuk persegi panjang.",
      formula: (
        <>
          <p><strong>Luas Permukaan:</strong> 2 × (1/2 × alas × tinggi) + keliling alas × tinggi</p>
          <p><strong>Volume:</strong> 1/2 × alas × tinggi × panjang</p>
        </>
      ),
      image: pyramidImg,
    },
    {
      id: 5,
      title: "Kerucut",
      content:
        "Kerucut adalah bangun ruang yang memiliki alas berbentuk lingkaran dan satu sisi melengkung yang menghubungkan titik pusat alas dengan ujung kerucut.",
      formula: (
        <>
          <p><strong>Luas Permukaan:</strong> π × r × (r + s)</p>
          <p><strong>Volume:</strong> 1/3 × π × r² × t</p>
        </>
      ),
      image: coneImg,
    },
    {
      id: 6,
      title: "Bola",
      content:
        "Bola adalah bangun ruang yang seluruh titik pada permukaannya memiliki jarak yang sama dari titik pusatnya. Bola tidak memiliki sisi datar atau sudut.",
      formula: (
        <>
          <p><strong>Luas Permukaan:</strong> 4 × π × r²</p>
          <p><strong>Volume:</strong> 4/3 × π × r³</p>
        </>
      ),
      image: sphereImg,
    },
  ];

  return (
    <div className="materi-geometri">
      <header className="header">
        <div className="header-content">
          <h1>Materi Geometri Bidang Datar & Bangun Ruang</h1>
          <p>
            Geometri adalah cabang matematika yang mempelajari tentang bentuk,
            ukuran, dan sifat-sifat benda. Materi ini terdiri dari dua bagian
            besar: geometri bidang datar (2D) dan bangun ruang (3D).
          </p>
        </div>
      </header>

      <section className="materi-datar">
        <h2>Geometri Bidang Datar</h2>
        <p>
          Geometri bidang datar adalah cabang geometri yang mempelajari bangun-bangun dua dimensi (2D), seperti segitiga, persegi, lingkaran, dan lainnya. Pada bidang datar, kita menghitung keliling dan luas dari bangun datar tersebut.
        </p>
        {datarSections.map((section) => (
          <section key={section.id} className="geometri-section">
            <div className="geometri-content">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
              <div>{section.formula}</div>
            </div>
            <div className="geometri-image">
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        ))}
      </section>

      <section className="materi-ruang">
        <h2>Geometri Bangun Ruang</h2>
        <p>
          Geometri bangun ruang adalah cabang geometri yang mempelajari bangun-bangun tiga dimensi (3D), seperti kubus, balok, kerucut, dan lainnya. Pada bangun ruang, kita menghitung volume dan luas permukaan bangun ruang tersebut.
        </p>
        {ruangSections.map((section) => (
          <section key={section.id} className="geometri-section">
            <div className="geometri-content">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
              <div>{section.formula}</div>
            </div>
            <div className="geometri-image">
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        ))}
      </section>
    </div>
  );
};

export default MateriGeometri;
