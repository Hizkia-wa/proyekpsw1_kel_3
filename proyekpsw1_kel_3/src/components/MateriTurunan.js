import React from "react";
import "./MateriStatistika.css"; 

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
          <h2>Aturan Dasar Turunan</h2>
          <p>Aturan dasar turunan mencakup berbagai formula penting yang digunakan untuk menghitung turunan fungsi.</p>
          <ul>
            <li>Jika f(x) = c (konstanta), maka f'(x) = 0.</li>
            <li>Jika f(x) = ax + b, maka f'(x) = a.</li>
          </ul>
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Perkalian Konstanta</h2>
          <p>Jika suatu fungsi dikalikan dengan konstanta, turunan fungsi tersebut adalah konstanta dikalikan dengan turunan fungsi asli.</p>
          <p><strong>Rumus:</strong> Jika f(x) = c × g(x), maka f'(x) = c × g'(x).</p>
        </div>
        <div className="news-image">
          <h2>Aturan Penjumlahan dan Pengurangan</h2>
          <p>Turunan dari penjumlahan atau pengurangan dua fungsi adalah jumlah atau selisih dari turunan masing-masing fungsi.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) ± h(x), maka f'(x) = g'(x) ± h'(x).</p>
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Perkalian (Product Rule)</h2>
          <p>Turunan dari perkalian dua fungsi adalah turunan fungsi pertama dikalikan fungsi kedua, ditambah fungsi pertama dikalikan turunan fungsi kedua.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) × h(x), maka f'(x) = g'(x) × h(x) + g(x) × h'(x).</p>
        </div>
        <div className="news-image">
          <h2>Aturan Pembagian (Quotient Rule)</h2>
          <p>Turunan dari pembagian dua fungsi adalah turunan fungsi pembilang dikalikan penyebut, dikurangi pembilang dikalikan turunan penyebut, dibagi kuadrat penyebut.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(x) / h(x), maka f'(x) = [g'(x) × h(x) - g(x) × h'(x)] / [h(x)]².</p>
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Aturan Rantai (Chain Rule)</h2>
          <p>Aturan rantai digunakan untuk menghitung turunan dari fungsi komposisi. Turunan fungsi luar dikalikan dengan turunan fungsi dalam.</p>
          <p><strong>Rumus:</strong> Jika f(x) = g(h(x)), maka f'(x) = g'(h(x)) × h'(x).</p>
        </div>
        <div className="news-image">
          <h2>Turunan Fungsi Eksponen dan Logaritma</h2>
          <p>Turunan fungsi eksponen dan logaritma memiliki formula khusus. Contohnya, turunan eksponen natural dan logaritma natural.</p>
          <ul>
            <li>Jika f(x) = e^x, maka f'(x) = e^x.</li>
            <li>Jika f(x) = ln(x), maka f'(x) = 1/x.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MateriTurunan;
