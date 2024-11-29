import React from "react";
import "./QuestionPage.css";
import triangleImg from "../images/gsegitiga.png";
import squareImg from "../images/gpersegi.png";
import circleImg from "../images/glingkaran.png";
import rectangleImg from "../images/gpersegipanjang.png";
import trapezoidImg from "../images/g.png";
import parallelogramImg from "../images/gjajargenjang.png";
import rhombusImg from "../images/gbelahketupat.png";
import cubeImg from "../images/gkubus.png";
import rectangularPrismImg from "../images/STK3.png";
import pyramidImg from "../images/gprisma.png";
import coneImg from "../images/gkerucut.png";
import sphereImg from "../images/gbola.png";

const MateriGeometri = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Materi Geometri Bidang Datar & Bangun Ruang</h1>
          <p>Geometri adalah cabang matematika yang mempelajari tentang bentuk, ukuran, dan sifat-sifat benda. Materi ini terdiri dari dua bagian besar: geometri bidang datar (2D) dan bangun ruang (3D).</p>
        </div>
      </header>

      {/* Section for Bidang Datar (2D shapes) */}
      <section className="tech-news">
        <div className="card">
          <h2>Pengertian Bangun Datar</h2>
          <p>Bangun datar adalah bentuk geometri yang hanya memiliki dua dimensi, yaitu panjang dan lebar. Beberapa contoh bangun datar yang sering kita temui antara lain segitiga, persegi, lingkaran, dan lain-lain.</p>
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Segitiga</h2>
          <p>Segitiga merupakan bangun datar dengan tiga sisi dan tiga sudut. Terdapat beberapa jenis segitiga seperti segitiga sama sisi, sama kaki, dan sembarang.</p>
          <div>
            <p><strong>Luas:</strong> 1/2 × alas × tinggi</p>
            <p><strong>Keliling:</strong> a + b + c</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={triangleImg} alt="Segitiga" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Persegi</h2>
          <p>Persegi adalah bangun datar dengan empat sisi yang sama panjang dan empat sudut siku-siku.</p>
          <div>
            <p><strong>Luas:</strong> sisi × sisi</p>
            <p><strong>Keliling:</strong> 4 × sisi</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={squareImg} alt="Persegi" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Lingkaran</h2>
          <p>Lingkaran adalah bangun datar yang terdiri dari semua titik yang berjarak sama dari sebuah titik pusat.</p>
          <div>
            <p><strong>Luas:</strong> π × r²</p>
            <p><strong>Keliling:</strong> 2 × π × r</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={circleImg} alt="Lingkaran" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Persegi Panjang</h2>
          <p>Persegi panjang adalah bangun datar dengan dua pasang sisi sejajar yang panjangnya sama.</p>
          <div>
            <p><strong>Luas:</strong> panjang × lebar</p>
            <p><strong>Keliling:</strong> 2 × (panjang + lebar)</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={rectangleImg} alt="Persegi Panjang" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Trapesium</h2>
          <p>Trapesium adalah bangun datar dengan satu pasang sisi yang sejajar. Sisi yang sejajar disebut sisi alas.</p>
          <div>
            <p><strong>Luas:</strong> 1/2 × (alas + atas) × tinggi</p>
            <p><strong>Keliling:</strong> a + b + c + d</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={trapezoidImg} alt="Trapesium" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Jajar Genjang</h2>
          <p>Jajargenjang adalah bangun datar dengan dua pasang sisi sejajar. Sisi yang berseberangan memiliki panjang yang sama.</p>
          <div>
            <p><strong>Luas:</strong> alas × tinggi</p>
            <p><strong>Keliling:</strong> 2 × (alas + sisi miring)</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={parallelogramImg} alt="Jajar Genjang" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Belah Ketupat</h2>
          <p>Belah ketupat adalah bangun datar dengan empat sisi yang sama panjang, tetapi sudut-sudutnya tidak selalu siku-siku.</p>
          <div>
            <p><strong>Luas:</strong> 1/2 × diagonal1 × diagonal2</p>
            <p><strong>Keliling:</strong> 4 × sisi</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={rhombusImg} alt="Belah Ketupat" />
        </div>
      </section>

      {/* Section for Bangun Ruang (3D shapes) */}
      <section className="tech-news">
        <div className="card">
          <h2>Pengertian Bangun Ruang</h2>
          <p>Bangun ruang adalah bentuk geometri yang memiliki tiga dimensi, yaitu panjang, lebar, dan tinggi. Bangun ruang memiliki volume dan luas permukaan. Contoh bangun ruang meliputi kubus, balok, kerucut, bola, dan lainnya.</p>
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Kubus</h2>
          <p>Kubus adalah bangun ruang dengan 6 sisi yang berbentuk persegi dan semua sisi memiliki panjang yang sama.</p>
          <div>
            <p><strong>Luas Permukaan:</strong> 6 × s²</p>
            <p><strong>Volume:</strong> s³</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={cubeImg} alt="Kubus" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Balok</h2>
          <p>Balok adalah bangun ruang yang memiliki 6 sisi berbentuk persegi panjang, dengan panjang, lebar, dan tinggi yang berbeda.</p>
          <div>
            <p><strong>Luas Permukaan:</strong> 2 × (panjang × lebar + panjang × tinggi + lebar × tinggi)</p>
            <p><strong>Volume:</strong> panjang × lebar × tinggi</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={rectangularPrismImg} alt="Balok" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Prisma Segitiga</h2>
          <p>Prisma segitiga adalah bangun ruang yang memiliki dua sisi segitiga yang sama besar dan sisi lainnya berupa persegi panjang.</p>
          <div>
            <p><strong>Luas Permukaan:</strong> 2 × (1/2 × alas × tinggi) + keliling alas × tinggi</p>
            <p><strong>Volume:</strong> 1/2 × alas × tinggi × panjang</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={pyramidImg} alt="Prisma Segitiga" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Kerucut</h2>
          <p>Kerucut adalah bangun ruang yang memiliki alas berbentuk lingkaran dan satu sisi melengkung yang menghubungkan titik pusat alas dengan ujung kerucut.</p>
          <div>
            <p><strong>Luas Permukaan:</strong> π × r × (r + s)</p>
            <p><strong>Volume:</strong> 1/3 × π × r² × t</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={coneImg} alt="Kerucut" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Bola</h2>
          <p>Bola adalah bangun ruang yang memiliki semua titik di permukaannya berjarak sama dari pusat bola.</p>
          <div>
            <p><strong>Luas Permukaan:</strong> 4 × π × r²</p>
            <p><strong>Volume:</strong> 4/3 × π × r³</p>
          </div>
        </div>
        <div className="news-image-geometri">
          <img src={sphereImg} alt="Bola" />
        </div>
      </section>
    </div>
  );
};

export default MateriGeometri;
