import React from "react";
import "./MateriStatistika.css";
import Binomial1 from "../images/ap1.png";
import Binomial2 from "../images/ap2.png";
import Binomial6 from "../images/ap3.png";


const MateriStatistika = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Aturan Pencacahan</h1>
          <p>
          Kaidah pencacahan berfungsi untuk membantu kita menghitung jumlah kemungkinan atau pola-pola tertentu dengan cara yang lebih sistematis.
          Kaidah pencacahan bisa diterapkan di banyak kasus, mulai dari masalah kombinatorik, probabilitas, hingga statistik
          </p>
          <p>
          Intinya kaidah pencacahan adalah cabang matematika yang membahas cara menghitung banyaknya susunan atau kombinasi suatu objek tanpa harus merinci semua kemungkinan susunannya.
          Bayangkan, jika kamu diminta untuk membuka kunci dengan 10 ribu kemungkin, pasti akan membutuhkan waktu dan ketelitian yang lama kan? 
          Nah, untuk itulah materi kaidah pencacahan membantu untuk mencari kemungkinannya dalam waktu singkat.
          </p>
        </div>
      </header>
      <section className="future-work">
        <h2>Penerapan dalam Kehidupan Sehari-hari</h2>
        <div className="cards">
          <div className="card">
            <p>
              <strong>Memilih pakaian untuk bekerja</strong>Contoh: Misalnya, seseorang memiliki 5 kemeja dan 3 celana.
              Aturan pencacahan dapat digunakan untuk menghitung jumlah kombinasi pakaian yang dapat dipakai. Dengan 5 pilihan kemeja dan 3 pilihan celana,
              total kombinasi adalah 5x3=15.
              Artinya, orang tersebut dapat membuat 15 kombinasi berbeda dari kemeja dan celana untuk bekerja.{" "}
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Menyusun jadwal olahraga mingguan </strong>
              Seorang pelajar ingin berolahraga 3 kali dalam seminggu, dengan pilihan olahraga seperti
              lari, berenang, dan bersepeda. Jika setiap olahraga hanya dilakukan sekali per minggu, maka aturan pencacahan digunakan untuk menghitung jumlah cara menyusun jadwal olahraga.
              Dengan 3 olahraga yang berbeda dan 3 hari yang dipilih, total kombinasi penjadwalan adalah 3!=6, yang berarti ada 6 cara berbeda untuk menyusun jadwal.
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Memesan makanan di restoran </strong>Contoh: Di restoran, terdapat 4 pilihan hidangan utama, 3 minuman, dan 2 pilihan pencuci mulut. 
              Jika seseorang ingin memesan satu hidangan utama, satu minuman, dan satu pencuci mulut, 
              aturan pencacahan digunakan untuk menghitung jumlah kombinasi. Dengan 4x3x2=24 kemungkinan, pelanggan memiliki 24 cara berbeda untuk memilih menu lengkap.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-news2">
        <div className="news-content">
          <h2> Rumus Kaidah Pencacahan Penjumlahan:</h2>
          <p>
            Rumus ini biasanya digunakan untuk menghitung banyak kemungkinan yang ada dari beberapa kasus yang bisa dipilih atau dikombinasikan secara eksklusif. 
            Contoh :
            Jika kita punya beberapa pilihan buku yang bisa dibaca dan beberapa pilihan film yang bisa ditonton, 
            maka banyak kemungkinan yang ada adalah jumlah dari semua kemungkinan buku yang bisa dibaca dan film yang bisa ditonton.
            Misalnya kita punya 3 pilihan buku dan 4 pilihan film, maka banyak kemungkinannya adalah 3+4=7. 
          </p>
        </div>
        <div className="news-image">
        <h2> Rumus Kaidah Pencacahan Perkalian:</h2>
          <p>
          Rumus ini digunakan jika kita punya beberapa kasus yang bisa dipilih, dikombinasikan secara bersamaan, 
          atau saling tergantung satu sama lain.
          Rumus kaidah pencacahan untuk perkalian ini biasanya dipakai buat menghitung banyak kemungkinan susunan atau kombinasi dari beberapa objek yang saling bergantung. 
          Contoh :
          Jika kita punya 3 pilihan baju dan 2 pilihan celana, maka banyak kemungkinan penampilan kita adalah 3 x 2 = 6. Kita kalikan aja banyak pilihan baju sama pilihan celana, 
          dan hasilnya adalah banyak kemungkinan yang bisa kita pilih.
          </p>
        </div>
      </section>

      <section className="tech-news4">
        <div className="news-content">
          <h2>Faktorial</h2>
          <p>
          Rumus kaidah pencacahan juga bisa menggunakan notasi faktorial.
          Faktorial adalah operasi matematika yang digunakan untuk mengalikan bilangan bulat positif dengan semua bilangan bulat positif yang lebih kecil daripadanya sendiri,
          hingga mencapai angka 1. 
          Faktorial dituliskan dengan tanda seru (!) di belakang bilangan yang akan dihitung faktorialnya.
          Jadi, rumus ini digunakan untuk menghitung banyak kemungkinan susunan atau kombinasi dari beberapa objek yang tidak boleh diulang atau tidak boleh dipilih kembali. 
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial1} alt="Binomial1" />
        </div>
      </section>

      <section className="tech-news5">
        <div className="news-content">
          <h2>Permutasi</h2>
          <p>
          Permutasi merupakan salah satu kaidah pencacahan dalam matematika yang digunakan untuk menghitung banyaknya susunan terurut dari objek-objek yang berbeda.
          Contohnya, jika ada n objek, permutasi akan menghitung berapa banyak cara untuk mengatur objek-objek tersebut dalam suatu urutan tertentu.
          Dalam permutasi, setiap objek harus ditempatkan pada posisi yang berbeda-beda dalam susunan yang terurut.
          </p>
        </div>
        <div className="news-image">
          <img src={Binomial2} alt="Binomial2" />
        </div>
      </section>

      <section className="tech-news9">
        <div className="news-content">
          <h2>Kombinasi</h2>
          <p>
          Kombinasi digunakan untuk menghitung banyaknya cara memilih objek-objek tertentu dari sekelompok objek tanpa memperhatikan urutan atau posisi objek tersebut. 
          Jadi, dengan kombinasi, kita dapat menghitung berapa banyak cara memilih objek-objek tersebut tanpa harus memperdulikan posisi atau urutannya.
          Rumus kombinasi sendiri berbeda dengan permutasi dan faktorial. Rumus kombinasi menggunakan faktorial dan permutasi untuk menghitung jumlah cara memilih objek-objek tersebut
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
