import React from "react";
import "./MateriStatistika.css";
import Binomial1 from "../images/peluang1.png";
import Binomial2 from "../images/peluang2.png";
import Binomial3 from "../images/peluang3.png";
import Binomial4 from "../images/peluang3.png";
import Binomial6 from "../images/peluang4.png";


const MateriStatistika = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Peluang</h1>
          <p>
          Secara umum, peluang dapat diartikan sebagai kesempatan, tetapi peluang atau probabilitas dalam matematika merupakan kemungkinan yang akan muncul atau terjadi dalam suatu peristiwa.
          Kita terkadang mengukur suatu peluang dengan angka, seperti halnya “kemungkinan sekitar 10%” maupun dengan suatu perkataan “itu sudah pasti akan terjadi” atau “ah, itu tidak mungkin terjadi”.
          Peluang dalam angka selalu berkisar antara 0 hingga 1. 0 menyatakan suatu kejadian yang tidak mungkin terjadi, sedangkan 1 menyatakan suatu kejadian yang pastinya terjadi.
          </p>
          <p>
          Istilah yang Sering Digunakan
          Ada beberapa istilah yang kerap dipakai di dalam materi peluang, di antaranya sebagai berikut.
          Ruang sampel: Himpunan dari seluruh hasil percobaan yang kemungkinan terjadi.
          Titik sampel: Anggota dari ruang sampel.
          Kejadian: Himpunan bagian dari ruang sampel.
          </p>
        </div>
      </header>
      <section className="future-work">
        <h2>Penerapan dalam Kehidupan Sehari-hari</h2>
        <div className="cards">
          <div className="card">
            <p>
              <strong>Prediksi Cuaca </strong>Contoh: Peluang sangat berguna dalam memprediksi cuaca.
              Misalnya, prakiraan cuaca menyebutkan bahwa peluang terjadinya hujan di suatu daerah adalah 80%. Ini berarti: 
              P(hujan)=0,8
              Sedangkan peluang tidak hujan adalah:
              P(tidak hujan)=1−P(hujan)=0,2
              P(tidak hujan)=1−P(hujan)=0,2
              Dengan memahami informasi ini, orang dapat mempersiapkan diri (misalnya membawa payung atau menunda perjalanan).{" "}
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Bermain Dadu: </strong>
              Contoh: Sebuah dadu dengan angka 1 hingga 6 dilempar.  Peluang mendapatkan angka genap (2, 4, atau 6) adalah:
              P(genap) = Jumlah angka genap/Jumlah semua angka = 3/6 =0,5.
              Peluang mendapatkan angka genap (2, 4, atau 6) adalah:
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Mengambil Permen dari Kantong: </strong>Contoh: Di sebuah kantong 
              terdapat 5 permen merah, 3 permen biru, dan 2 permen hijau. Jika diambil satu permen secara acak, 
              peluang mendapatkan permen merah adalah:
              P(merah) = Jumlah permen merah/Jumlah total permen = 5/5+3+2 = 5/10 = 0,5
              Kesimpulan: Peluang mengambil permen merah lebih besar dibandingkan permen warna lainnya.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-news2">
        <div className="news-content">
          <h2>Ruang Sampel Peluang:</h2>
          <p>
            Contoh: Ruang sampel adalah kumpulan semua kemungkinan hasil yang dapat terjadi dari suatu percobaan atau kejadian.
            Ruang sampel biasanya dilambangkan dengan simbol S, dan elemen-elemennya disebut anggota ruang sampel.
            Misalnya:
            Jika kita melempar sebuah dadu, semua hasil yang mungkin adalah (1,2,3,4,5,6). Ini adalah ruang sampel dari percobaan tersebut.
            Jika kita melempar koin, ruang sampelnya adalah (gambar,angka).
          </p>
        </div>
        <div className="news-image">
        <h2>Titik Sampel Peluang</h2>
          <p>
          Titik sampel adalah anggota atau elemen dari ruang sampel. Setiap kemungkinan hasil dari suatu percobaan tunggal merupakan titik sampel. Dengan kata lain, titik sampel adalah salah satu hasil spesifik yang bisa terjadi dalam ruang sampel.
          Misalnya:
          Jika ruang sampel melempar dadu adalah S=(1,2,3,4,5,6)S=(1,2,3,4,5,6), maka titik sampelnya adalah 1,2,3,4,5,1,2,3,4,5, dan 66.
          Jika ruang sampel melempar koin adalah S=(gambar, angka)S=(gambar, angka), maka "gambar" dan "angka" adalah titik sampel.
          </p>
        </div>
      </section>

      <section className="tech-news4">
        <div className="news-content">
          <h2>Rumus Titik Sampel dengan Diagram Pohon</h2>
          <p>
          Diagram pohon adalah metode yang digunakan untuk memvisualisasikan semua kemungkinan hasil dari suatu percobaan,
          sehingga mempermudah menentukan ruang sampel dan titik sampel.
          Penjelasan Gambar: 1. Diagram pohon adalah metode yang digunakan untuk memvisualisasikan semua kemungkinan hasil dari suatu percobaan, sehingga mempermudah menentukan ruang sampel dan titik sampel.
          2. Diagram pohon adalah metode yang digunakan untuk memvisualisasikan semua kemungkinan hasil dari suatu percobaan,
          sehingga mempermudah menentukan ruang sampel dan titik sampel.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial1} alt="Binomial1" />
        </div>
      </section>

      <section className="tech-news5">
        <div className="news-content">
          <h2>Rumus Titik Sampel dengan Tabel</h2>
          <p>
          Titik sampel yang diperoleh dari diagram pohon juga dapat ditentukan menggunakan tabel. 
          Pada tabel, hasil Koin 1 diletakkan pada baris, sedangkan hasil Koin 2 diletakkan pada kolom.
          Kombinasi dari setiap baris dan kolom menunjukkan titik sampel, misalnya (A,A)(A,A), (A,G)(A,G), (G,A)(G,A), dan (G,G)(G,G). 
          Dengan tabel, kita bisa lebih mudah melihat seluruh kemungkinan kombinasi hasil dari kedua koin
          Baik menggunakan diagram pohon maupun tabel, jumlah titik sampel tetap sama, yaitu 4, dan ruang sampelnya adalah S=(A,A),(A,G),(G,A),(G,G) S= (A,A),(A,G),(G,A),(G,G).
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial2} alt="Binomial2" />
        </div>
      </section>

      <section className="tech-news6">
        <div className="news-content">
          <h2>Permutasi</h2>
          <p>
          Permutasi adalah pengaturan sebagian atau seluruh himpunan dalam urutan tertentu (urutan elemen diperhatikan).
          Terdapat dua macam permutasi:
          1. Pengulangan dibolehkan: contohnya adalah kunci pin pada gawai sobat, angkanya bisa saja 2-4-4-9.
          2. Pengulangan tidak dibolehkan: contohnya adalah tiga pembalap pertama yang melewati garis akhir,
          tidak mungkin satu pembalap menjadi juara 1 dan juara 2 secara bersamaan.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial3} alt="Binomial3" />
        </div>
      </section>

      <section className="tech-news7">
        <div className="news-content">
          <h2>Kombinasi</h2>
          <p>
          Kombinasi adalah proses pemilihan elemen dari himpunan, dimana urutan pemilihan elemen tidak diperhatikan.
          Terdapat dua macam kombinasi:
          1. Pengulangan dibolehkan: contohnya ketika sobat mengambil 3 bola dari suatu wadah yang berisi
          3 bola merah dan 3 bola biru, bisa saja terambil 2 bola merah dan 1 bola biru.
          2. Pengulangan tidak dibolehkan: contohnya ketika sobat pintar memilih 2 orang dari kelompok beranggotakan 5 orang.
          Tidak mungkin orang pertama dan orang kedua adalah 1 orang yang sama.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial4} alt="Binomial4" />
        </div>
      </section>

      <section className="tech-news9">
        <div className="news-content">
          <h2>Perbedaan Permutasi dan Kombinasi</h2>
          <p>
          Perbedaan utama antara permutasi dan kombinasi adalah permutasi memperhatikan urutan elemen yang dipilih, 
          sedangkan kombinasi tidak memperhatikan urutan elemen yang dipilih.
          Agar lebih jelas tentang perbedaan antara permutasi dan kombinasi, kamu bisa cek tabel contoh berikut.
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
