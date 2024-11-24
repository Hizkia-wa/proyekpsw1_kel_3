import React from "react";
import "./MateriTurunan.css";
import diff1 from "../images/STK1.avif";
import diff2 from "../images/STK2.png";
import diff3 from "../images/STK3.png";
import diff4 from "../images/STK4.png";
import diff5 from "../images/STK5.png";
import diff6 from "../images/STK6.png";
import diff7 from "../images/STK1.png";
import diff8 from "../images/STK2.png";

const MateriTurunan = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Turunan</h1>
          <p>Turunan adalah konsep dalam kalkulus yang digunakan untuk mengukur perubahan suatu fungsi terhadap variabelnya. Turunan menggambarkan tingkat perubahan atau kemiringan grafik fungsi pada suatu titik.</p>
          <p>Konsep turunan memiliki banyak aplikasi dalam fisika, ekonomi, teknik, dan berbagai bidang lainnya. Dengan memahami materi ini, siswa akan mampu memecahkan masalah dalam kehidupan nyata yang melibatkan perubahan nilai variabel secara dinamis.</p>
        </div>
      </header>

      <section className="tech-news">
        <div className="news-content">
          <h2>Pengantar Turunan</h2>
          <p>Turunan adalah ukuran perubahan suatu fungsi terhadap variabel bebasnya. Dalam kalkulus, turunan sering digunakan untuk menentukan kemiringan kurva atau tingkat perubahan suatu nilai pada suatu titik tertentu.</p>
          <p><strong>Rumus dasar:</strong> f'(x) = lim h→0 [f(x + h) - f(x)] / h</p>
        </div>
        <div className="news-image">
          <img src={diff1} alt="Turunan Pengantar" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Dasar Turunan</h2>
          <p>Aturan dasar turunan mencakup berbagai formula penting yang digunakan untuk menghitung turunan fungsi.</p>
          <ul>
            <li>Jika f(x) = c (konstanta), maka f'(x) = 0.</li>
            <li>Jika f(x) = ax + b, maka f'(x) = a.</li>
          </ul>
        </div>
        <div className="news-image">
          <img src={diff2} alt="Aturan Dasar Turunan" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Perkalian Konstanta</h2>
          <p>Jika suatu fungsi dikalikan dengan konstanta, turunan fungsi tersebut adalah konstanta dikalikan dengan turunan fungsi asli.</p>
          <p><strong>Rumus:</strong> Jika f(x) = c × g(x), maka f'(x) = c × g'(x).</p>
        </div>
        <div className="news-image">
          <img src={diff3} alt="Aturan Perkalian Konstanta" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Penjumlahan dan Pengurangan</h2>
          <p>Turunan dari penjumlahan atau pengurangan dua fungsi adalah jumlah atau selisih dari turunan masing-masing fungsi.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) ± h(x), maka f'(x) = g'(x) ± h'(x).</p>
        </div>
        <div className="news-image">
          <img src={diff4} alt="Aturan Penjumlahan dan Pengurangan" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Perkalian (Product Rule)</h2>
          <p>Turunan dari perkalian dua fungsi adalah turunan fungsi pertama dikalikan fungsi kedua, ditambah fungsi pertama dikalikan turunan fungsi kedua.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) × h(x), maka f'(x) = g'(x) × h(x) + g(x) × h'(x).</p>
        </div>
        <div className="news-image">
          <img src={diff5} alt="Aturan Perkalian" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Pembagian (Quotient Rule)</h2>
          <p>Turunan dari pembagian dua fungsi adalah turunan fungsi pembilang dikalikan penyebut, dikurangi pembilang dikalikan turunan penyebut, dibagi kuadrat penyebut.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) / h(x), maka f'(x) = [g'(x) × h(x) - g(x) × h'(x)] / [h(x)]².</p>
        </div>
        <div className="news-image">
          <img src={diff6} alt="Aturan Pembagian" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Rantai (Chain Rule)</h2>
          <p>Aturan rantai digunakan untuk menghitung turunan dari fungsi komposisi. Turunan fungsi luar dikalikan dengan turunan fungsi dalam.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(h(x)), maka f'(x) = g'(h(x)) × h'(x).</p>
        </div>
        <div className="news-image">
          <img src={diff7} alt="Aturan Rantai" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Turunan Fungsi Eksponen dan Logaritma</h2>
          <p>Turunan fungsi eksponen dan logaritma memiliki formula khusus. Contohnya, turunan eksponen natural dan logaritma natural.</p>
          <ul>
            <li>Jika f(x) = e^x, maka f'(x) = e^x.</li>
            <li>Jika f(x) = ln(x), maka f'(x) = 1/x.</li>
          </ul>
        </div>
        <div className="news-image">
          <img src={diff8} alt="Fungsi Eksponen dan Logaritma" />
        </div>
      </section>
    </div>
  );
};

export default MateriTurunan;
