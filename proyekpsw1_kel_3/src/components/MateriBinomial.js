import React from "react";
import "./MateriStatistika.css";
import Binomial1 from "../images/Binomial1.png";
import Binomial2 from "../images/Binomial2.png";
import Binomial3 from "../images/Binomial3.png";
import Binomial4 from "../images/Binomial4.png";
import Binomial5 from "../images/Binomial5.png";
import Binomial6 from "../images/Binomial6.png";


const MateriBinomial = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Distribusi Binomial</h1>
          <p>
            Distribusi binomial adalah salah satu jenis distribusi probabilitas
            diskrit. Distribusi ini menggambarkan peluang suatu peristiwa
            terjadi dalam sejumlah percobaan yang memiliki dua kemungkinan
            hasil, yaitu sukses atau gagal
          </p>
          <p>
            Karakteristik Distribusi Binomial: Percobaan bernilai dua: Setiap
            percobaan hanya memiliki dua hasil, yaitu sukses (dengan
            probabilitas 𝑝 p) dan gagal (dengan probabilitas 𝑞 = 1 − 𝑝 q=1−p).
          </p>
          <p>
            Rumus Distribusi Binomial: 𝑃 ( 𝑋 = 𝑘 ) = ( 𝑛 𝑘 ) ⋅ 𝑝 𝑘 ⋅ ( 1 − 𝑝 ) 𝑛
            − 𝑘 P(X=k)=( k n ​ )⋅p k ⋅(1−p) n−k
          </p>
        </div>
      </header>

      <section className="tech-news">
        <div className="news-content">
          <h2>Distribusi Binomial</h2>
          <p>
            Distribusi Binomial digunakan untuk menghitung peluang suatu
            peristiwa tertentu terjadi dalam sejumlah percobaan yang memiliki
            dua kemungkinan hasil, yaitu sukses atau gagal.
          </p>
          <p>
            Komponen Penting Distribusi Binomial: Jumlah percobaan ( 𝑛 n):
            Banyaknya percobaan atau uji coba yang dilakukan.
          </p>
        </div>
        <div className="news-image">
          <h2>Rumus Dasar:</h2>
          <p>P(X=k)=( k n ​ )⋅p k ⋅q n−k</p>
          <li>
            Hitung Peluang Sukses dan Gagal: Gunakan probabilitas 𝑝 p untuk
            sukses, dan 𝑞 = 1 − 𝑝 q=1−p untuk gagal.
          </li>
          <li>
            Substitusi ke Rumus: Masukkan nilai 𝑛 n, 𝑘 k, 𝑝 p, dan 𝑞 q ke dalam
            rumus.
          </li>
          <p>
            Keberhasilan ( 𝑝 p): Probabilitas suatu peristiwa terjadi (sukses)
            dalam satu percobaan.
          </p>
        </div>
      </section>

      <section className="future-work">
        <h2>Penerapan dalam Kehidupan Sehari-hari</h2>
        <div className="cards">
          <div className="card">
            <p>
              <strong>Melempar Koin </strong>Contoh: Dalam 10 kali lemparan
              koin, berapa peluang kepala muncul sebanyak 5 kali? Penjelasan:
              Probabilitas muncul kepala ( 𝑝 p) = 0.5, dan kegagalan ( 𝑞 q) =
              0.5. Kita bisa gunakan rumus binomial untuk menghitung peluang
              ini.{" "}
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Mendapat Soal Benar dalam Ujian Pilihan Ganda: </strong>
              Contoh: Dalam ujian pilihan ganda dengan 20 soal, peluang menjawab
              benar untuk setiap soal adalah 0.75. Berapa peluang seorang siswa
              menjawab benar 15 soal? Penjelasan: Jumlah soal ( 𝑛 n) = 20,
              peluang benar ( 𝑝 p) = 0.75, kegagalan ( 𝑞 q) = 0.25, dan
              keberhasilan ( 𝑘 k) = 15. Gunakan distribusi binomial untuk
              menghitung..{" "}
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Peluang Menang dalam Undian: </strong>Contoh: Sebuah
              undian memiliki peluang 10% untuk menang. Jika kamu membeli 5
              tiket, berapa peluang menang sekali? Penjelasan: Probabilitas
              menang ( 𝑝 p) = 0.1, peluang kalah ( 𝑞 q) = 0.9, jumlah tiket ( 𝑛
              n) = 5, dan keberhasilan ( 𝑘 k) = 1.
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Kesehatan: </strong>Contoh: Dalam populasi tertentu, 80%
              orang dewasa terdeteksi bebas dari penyakit tertentu. Jika 10
              orang diperiksa secara acak, berapa peluang 8 orang terbebas dari
              penyakit tersebut? Penjelasan: Probabilitas bebas penyakit ( 𝑝 p)
              = 0.8, peluang tidak bebas ( 𝑞 q) = 0.2, jumlah sampel ( 𝑛 n) =
              10, dan keberhasilan ( 𝑘 k) = 8.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-news2">
        <div className="news-content">
          <h2>Produksi Barang di Pabrik:</h2>
          <p>
            Contoh: Sebuah mesin produksi menghasilkan barang dengan
            probabilitas cacat sebesar 5%. Jika 50 barang diambil acak, berapa
            peluang hanya 2 barang yang cacat? Penjelasan: Probabilitas cacat (
            𝑝 p) = 0.05, peluang tidak cacat ( 𝑞 q) = 0.95, jumlah barang ( 𝑛 n)
            = 50, dan keberhasilan ( 𝑘 k) = 2.
          </p>
        </div>
        <div className="news-image"></div>
      </section>

      <section className="tech-news3">
        <div className="news-content">
          <h2>Kenapa Penting?</h2>
          <p>
            Distribusi binomial sangat berguna dalam menganalisis situasi nyata,
            terutama ketika kita ingin memahami peluang terjadinya peristiwa
            tertentu. Dengan memahami konsep ini, kita dapat membuat keputusan
            berdasarkan data probabilitas.
          </p>
        </div>
        <div className="news-image"></div>
      </section>

      <section className="tech-news4">
        <div className="news-content">
          <h2>Rumus dan Penjelasan Distribusi Binomial</h2>
          <p>
            <strong>Distribusi Binomial</strong> yaitu salah satu konsep dalam
            statistik yang digunakan untuk menghitung probabilitas sejumlah
            keberhasilan dalam suatu rangkaian percobaan independen yang
            masing-masing memiliki dua kemungkinan hasil (misalnya sukses atau
            gagal){" "}
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial1} alt="Binomial1" />
        </div>
      </section>

      <section className="tech-news5">
        <div className="news-content">
          <h2>Fungsi Distribusi Probabilitas Binomial</h2>
          <p>
            <strong>Distribusi binomial</strong> menghitung probabilitas dengan
            mempertimbangkan bahwa setiap percobaan bersifat independen (hasil
            satu percobaan tidak memengaruhi hasil percobaan lainnya). Rumus ini
            sering digunakan dalam berbagai situasi, seperti memprediksi
            keberhasilan produk di pasar, hasil tes, atau eksperimen dengan dua
            kemungkinan hasil (misalnya sukses atau gagal, hidup atau mati).
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial2} alt="Binomial2" />
        </div>
      </section>

      <section className="tech-news6">
        <div className="news-content">
          <h2>Rumus Lengkap Distribusi Binomial</h2>
          <p>
            <strong>Distribusi binomial</strong> adalah salah satu alat
            probabilitas yang sangat berguna dalam mengukur peluang suatu
            kejadian dengan dua hasil (sukses/gagal) dalam sejumlah percobaan.
            Rumus lengkap ini memungkinkan kita menghitung peluang untuk
            berbagai kondisi, baik individu, kumulatif, maupun mendekati
            distribusi Poisson.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial3} alt="Binomial3" />
        </div>
      </section>

      <section className="tech-news7">
        <div className="news-content">
          <h2>Peluang Distribusi Binomial</h2>
          <p>
            Rumus ini digunakan untuk menghitung peluang suatu peristiwa terjadi
            𝑥 x kali dalam 𝑁 N percobaan yang independen, di mana tiap percobaan
            memiliki dua hasil (sukses atau gagal).
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial4} alt="Binomial4" />
        </div>
      </section>

      <section className="tech-news8">
        <div className="news-content">
          <h2>Percobaan Rumus</h2>
          <p>
            bagaimana menghitung peluang dalam suatu percobaan yang mengikuti
            distribusi binomial. Konsep ini sangat berguna dalam berbagai
            bidang, seperti statistika, ilmu komputer, dan bahkan dalam
            kehidupan sehari-hari.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial5} alt="Binomial5" />
        </div>
      </section>

      <section className="tech-news9">
        <div className="news-content">
          <h2>Distribusi Binomial</h2>
          <p>
            salah satu konsep penting dalam statistika yang digunakan untuk
            memodelkan situasi di mana kita melakukan sejumlah percobaan yang
            identik dan independen, dan setiap percobaan hanya memiliki dua
            kemungkinan hasil: sukses atau gagal.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial6} alt="Binomial6" />
        </div>
      </section>
    </div>
  );
};

export default MateriBinomial;
