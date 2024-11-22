import React from "react";
import "./MateriStatistika.css";
import stk1 from "../images/STK1.avif";
import stk2 from "../images/stkmean.png";
import stk3 from "../images/stkmedian.png";
import stk4 from "../images/stkmodus.png";
import stk5 from "../images/stkkuartil.png";
import stk6 from "../images/stkdesil.png";
import stk7 from "../images/stkpersentil.png"

const MateriStatistika = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Pengertian Limit Funngsi Trigonometri</h1>
          <p>Limit fungsi trigonometri merupakan nilai yang diperoleh dari suatu fungsi trigonometri jika variabelnya mendekati nilai tertentu. Limit tersebut juga kerap disebut dengan limit Matematika.</p>
          <p>Singkatnya, limit fungsi trigonometri merupakan nilai terdekat suatu sudut di fungsi trigonometri. Cara menghitungnya mirip seperti limit fungsi aljabar. Perbedaannya yakni fungsi trigonometri wajib diubah terlebih dahulu ke trigonometri agar dapat melihat limit tak tentunya.</p>
        </div>
        <div className="header-image">
          <img src={stk1} alt="Statistika" /> 
        </div>
      </header>

      <section className="tech-news">
        <div className="news-content">
          <h2>Fungsi Trigonometri yang Kerap Digunakan</h2>
          <p>:</p>
          <h3>1. Sinus</h3> 
          <p>Fungsi trigonometri sinus adalah berupa perbandingan sisi depan dengan sisi miring sudut segitiga. Fungsi ini dipakai saat sudut segitiga berupa siku-siku atau sudutnya sebesar 90 derajat. Nilai sinus positif ada pada kuadran I dan II. Nilai negatifnya berada di kuadran III dan IV.</p>
        </div>
  
        <div className="news-image">
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h3>2. Cosinus</h3>
          <p>VFungsi trigonometri cosinus ini merupakan perbandingan sisi segitiga di sudut dengan sisi miring. Perbandingan ini digunakan ketika segitiga adalah segitiga siku-siku atau sudutnya sebesar 90 derajat. Nilai positifnya cosinus berada di kuadran I dan IV. Sedangkan nilai negatifnya terdapat padai kuadran II dan III.</p>
          <h3>3. Tangen</h3>
          <p>Fungsi trigonometri tangen ini berupa perbandingan sisi segitiga di depan sudut, dengan di bagian sudut segitiga. Perbandingan ini digunakan jika segitiga adalah segitiga siku-siku atau sudutnya sebesar 90 derajat. Nilai positifnya berada di kuadran I dan III. Sementara itu, nilai negatifnya ada di kuadran II dan IV.</p>
        </div>
        <div className="news-image">
        </div>
      </section>

      <section className="future-work">
        <h2>Manfaat Limit Fungsi Trigonometri</h2>
        <div className="cards">
          <div className="card">
            <p>Manfaat limit fungsi trigonometri yang pertama adalah untuk<strong> Menentukan Batas Integral </strong>sebuah fungsi. Artinya, penentuan pun akan menjadi lebih akurat dan tepat.</p>
          </div>
          <div className="card">
            <p>Manfaat lainnya yakni terkait <strong>Penyelesaian Persamaan Diferensial. </strong>Limit ini dapat digunakan menyelesaikan persamaan matematika yang menjelaskan perubahan fungsi terhadap waktu maupun variabel lain.</p>
          </div>
          <div className="card">
            <p>Manfaat limit fungsi trigonometri yang berikutnya adalah<strong>Membantu Perhitungan menjadi lebih akurat.</strong>Hal tersebut terjadi Khsususnya pada nilai yang sangat dekat dengan batas tertentu.</p>
          </div>
          <div className="card">
            <p>Selain itu terdapat manfaat lain berupa <strong>Memahami Sifat Sebuah Fungsi Trigonometri </strong>Nantinya, dapat disimpulkan bahwa fungsi tersebut terbatas atau tidak terbatas, berubah atau tidak berubah pada nilai tertentu, dan lain sebagainya.</p>
          </div>
        </div>
      </section>
      
      <section className="tech-news">
        <div className="news-content">
          <h2>Rumus Limit Fungsi Trigonometri</h2>
          <p>Tabel frekuensi distribusi adalah tabel yang digunakan untuk menyajikan data dalam bentuk yang lebih terorganisasi dengan mengelompokkan data ke dalam kelas-kelas tertentu, kemudian mencatat jumlah kemunculan (frekuensi) data dalam setiap kelas. Tabel ini sering digunakan untuk data kuantitatif atau data yang memiliki banyak nilai.</p>
        </div>
        <div className="news-image">
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Rumus Trigonometri</h2>
          <p>Pada saat menentukan nilai dari suatu limitnya, beberapa cara atau metode yang sering dipakai adalah substitusi, pemfaktoran, turunan, dan kali sekawan. Dalam trigonometri, terdapat beberapa rumus yang berbentuk seperti di bawah ini.</p>
          <p>Ukuran pemusatan mencakup data: <br></br>a. Ungrouped data, yaitu data yang belum dikelompokkan (data tunggal) <br></br>b. Grouped data, yaitu data yang telah dikelompokkan.Untuk menghitung ukuran pemusatan pada data yangtelah dikelompokkan, digunakan tabel distribusi frekuensi</p>
        </div>
        <div className="news-image">
        </div>
      </section>

      <section className="future-work">
        <h2>Rumus Fungsi Trigonometri</h2>
        <div className="cards">
          <div className="card">
            <p>Rumus Kebalikan</p>
          </div>
          <div className="card">
            <p>Rumus Identitas</p>
          </div>
          <div className="card">
            <p>Rumus Jumlah dan Selisih Trigonometri</p>
          </div>
          <div className="card">
            <p>Rumus Perkalian</p>
          </div>
          <div className="card">
            <p>Sudut Rangkap</p>
          </div>
          <div className="card">
            <p>Turunan Trigonometri</p>
          </div>
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Bentuk-Bentuk Umum Limit Trigonometri</h2>
          <p>Median adalah nilai tengah dari kumpulan data yang tersusun secara teratur (diurutkan menurut besarnya) Median membagi data menjadi dua bagian yang sama sehingga median disebut juga ukuran letak.</p>
          <p><strong>Catatan</strong>Posisi tengah dari seperangkat data sebanyak N yang telah terurut terletak pada posisi yang ke (𝑁+1) 2. Jika N ganjil, maka ada data yang berada pada posisi tengah dan nilai data itu merupakan nilai median. Jika N genap, maka sebagai mediannya diambil rata-rata hitung dua data yang ada ditengah</p>
        </div>
        <div className="news-image">
        <img src={stk3} alt="Statistika" /> 
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Sifat Limit Trigonometri</h2>
          <p>Modus adalah ukuran pemusatan data yang digunakan untuk menyatakan kejadian yang paling banyak terjadi atau paling banyak muncul. Modus data berkelompok ditentukan dengan rumus:.</p>
        </div>
        <div className="news-image">
        <img src={stk4} alt="Statistika" /> 
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Rumus Limit Trigonometri</h2>
          <p>Kuartil adalah konsep dalam statistika yang membagi data menjadi empat bagian sama besar. Kuartil dibagi menjadi tiga, yaitu kuartil pertama (Q1), kuartil kedua (Q2), dan kuartil ketiga (Q3).</p>
          <p>Kuartil juga dapat diartikan dengan suatu nilai, yang bisa membagi kumpulan data menjadi empat bagian sama besar. Hal ini berguna dalam berbagai analisis statistika, termasuk identifikasi outlier (nilai-nilai yang jauh dari nilai-nilai lainnya), dan pemahaman karakteristik distribusi data.</p>
        </div>
        <div className="news-image">
        <img src={stk5} alt="Statistika" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Desil</h2>
          <p>Desil adalah suatu istilah yang menunjukkan pembagian data menjadi 10 bagian sama besar. Sebelum menentukan desil, data harus diurutkan terlebih dahulu, ya. Ada sembilan desil yang nantinya bisa membagi data menjadi sepuluh bagian sama besar. Artinya, setiap bagian memiliki persentase yang sama, yaitu 10%. Perhatikan ilustrasi berikut.</p>
          <p>Di dalam kehidupan sehari-hari, desil biasa dimanfaatkan untuk mengelompokkan tingkat kesejahteraan rakyat. Misalnya kelompok Desil 1, Desil 2, dan seterusnya.</p>
        </div>
        <div className="news-image">
        <img src={stk6} alt="Statistika" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Persentil</h2>
          <p>Persentil adalah ukuran statistik yang digunakan untuk membagi sekumpulan data menjadi 100 bagian yang sama, masing-masing mencerminkan 1% dari distribusi data tersebut. Dalam istilah sederhana, persentil menunjukkan posisi atau peringkat suatu nilai dalam sebuah dataset.</p>
        </div>
        <div className="news-image">
        <img src={stk7} alt="Statistika" />
        </div>
      </section>
    </div>
  );
};

export default MateriStatistika;
