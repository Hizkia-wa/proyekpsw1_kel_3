import React from "react";
import "./MateriStatistika.css";
import Binomial1 from "../images/Binomial1.png";
import Binomial2 from "../images/Binomial2.png";
import Binomial3 from "../images/Binomial3.png";
import Binomial4 from "../images/Binomial4.png";
import Binomial5 from "../images/Binomial5.png";
import Binomial6 from "../images/Binomial6.png";


const MateriStatistika = () => {
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
          <h2>Rata-rata Hitung/Mean</h2>
          <p>
            Merupakan salah satu ukuran untuk memberikan gambaran yang lebih
            jelas dan singkat tentang sekumpulan data dengan melihat pusat suatu
            data, apabila data diurutkan dari yang terkecil sampai terbesar atau
            sebaliknya. Jumlah seluruh nilai data dibagi dengan jumlah data.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial1} alt="Binomial1" />
        </div>
      </section>

      <section className="tech-news5">
        <div className="news-content">
          <h2>Median</h2>
          <p>
            Median adalah nilai tengah dari kumpulan data yang tersusun secara
            teratur (diurutkan menurut besarnya) Median membagi data menjadi dua
            bagian yang sama sehingga median disebut juga ukuran letak.
          </p>
          <p>
            <strong>Catatan</strong>Posisi tengah dari seperangkat data sebanyak
            N yang telah terurut terletak pada posisi yang ke (𝑁+1) 2. Jika N
            ganjil, maka ada data yang berada pada posisi tengah dan nilai data
            itu merupakan nilai median. Jika N genap, maka sebagai mediannya
            diambil rata-rata hitung dua data yang ada ditengah
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial2} alt="Binomial2" />
        </div>
      </section>

      <section className="tech-news6">
        <div className="news-content">
          <h2>Modus</h2>
          <p>
            Modus adalah ukuran pemusatan data yang digunakan untuk menyatakan
            kejadian yang paling banyak terjadi atau paling banyak muncul. Modus
            data berkelompok ditentukan dengan rumus:.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial3} alt="Binomial3" />
        </div>
      </section>

      <section className="tech-news7">
        <div className="news-content">
          <h2>Kuartil</h2>
          <p>
            Kuartil adalah konsep dalam statistika yang membagi data menjadi
            empat bagian sama besar. Kuartil dibagi menjadi tiga, yaitu kuartil
            pertama (Q1), kuartil kedua (Q2), dan kuartil ketiga (Q3).
          </p>
          <p>
            Kuartil juga dapat diartikan dengan suatu nilai, yang bisa membagi
            kumpulan data menjadi empat bagian sama besar. Hal ini berguna dalam
            berbagai analisis statistika, termasuk identifikasi outlier
            (nilai-nilai yang jauh dari nilai-nilai lainnya), dan pemahaman
            karakteristik distribusi data.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial4} alt="Binomial4" />
        </div>
      </section>

      <section className="tech-news8">
        <div className="news-content">
          <h2>Desil</h2>
          <p>
            Desil adalah suatu istilah yang menunjukkan pembagian data menjadi
            10 bagian sama besar. Sebelum menentukan desil, data harus diurutkan
            terlebih dahulu, ya. Ada sembilan desil yang nantinya bisa membagi
            data menjadi sepuluh bagian sama besar. Artinya, setiap bagian
            memiliki persentase yang sama, yaitu 10%. Perhatikan ilustrasi
            berikut.
          </p>
          <p>
            Di dalam kehidupan sehari-hari, desil biasa dimanfaatkan untuk
            mengelompokkan tingkat kesejahteraan rakyat. Misalnya kelompok Desil
            1, Desil 2, dan seterusnya.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial5} alt="Binomial5" />
        </div>
      </section>

      <section className="tech-news9">
        <div className="news-content">
          <h2>Persentil</h2>
          <p>
            Persentil adalah ukuran statistik yang digunakan untuk membagi
            sekumpulan data menjadi 100 bagian yang sama, masing-masing
            mencerminkan 1% dari distribusi data tersebut. Dalam istilah
            sederhana, persentil menunjukkan posisi atau peringkat suatu nilai
            dalam sebuah dataset.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial6} alt="Binomial6" />
        </div>
      </section>
    </div>
  );
};

export default MateriStatistika;
