import React from "react";
import "./MateriStatistika.css";
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
          <h1>Statistika</h1>
          <p>Statistika adalah cabang ilmu yang memfokuskan pada cara merancang, menghimpun, menganalisis, menafsirkan, dan menyajikan data.</p>
          <p>Penerapan statistika sangat luas, mencakup berbagai bidang ilmu, seperti ilmu alam fisika, astronomi, dan biologi, ilmu sosial sosiologi dan psikologi, serta di sektor bisnis ekonomi dan industri.</p>
          <p>Dengan demikian, materi statistika matematika pada tingkat kelas 12 membekali siswa dengan keterampilan analitis dan pemahaman matematika yang mendalam untuk menghadapi tantangan di dunia nyata.</p>
        </div>
      </header>

      <section className="tech-news">
        <div className="news-content">
          <h2>Populasi dan Sampel</h2>
          <p>Populasi adalah objek yang dijadikan penelitian. Misalnya, jika kamu akan melakukan penelitian tentang pengaruh hormon steroid pada pertumbuhan ayam pedaging atau broiler, maka populasi yang dipilih adalah ayam pedaging yang dibudidayakan oleh peternak.</p>
          <p>Sampel adalah bagian dari populasi yang bisa dijadikan sumber informasi. Misalnya, dari banyaknya ayam pedaging yang dimiliki oleh peternak, kamu cukup mengambil beberapa saja untuk kamu amati selama proses penelitian. Artinya, kamu tidak perlu menjadikan semua ayam sebagai bahan penelitian.</p>
        </div>
        <div className="news-image">
        <h2>Variabel dan Data</h2>
          <p>Variabel adalah sifat beda antarobjek penelitian, misalnya tinggi badan, warna bunga, bentuk biji, jenis pupuk, dan masih banyak lainnya. Variabel yang bisa dinyatakan dengan angka disebut variabel kuantitatif. Contohnya tinggi badan, berat badan, suhu, dan sebagainya. Nah, ternyata variabel kuantitatif masih dibagi menjadi dua, yaitu variabel diskrit dan kontinu.</p>
          <li>Variabel diskrit adalah variabel yang nilainya ditentukan dari hasil perhitungan.</li>
          <li>Variabel kontinu adalah variabel yang nilainya didapat dari hasil pengukuran.</li>
          <p>Data adalah nilai variabel dari suatu objek. Data juga dibedakan menjadi data kuantitatif, kualitatif, diskrit, dan kontinu.</p>
        </div>
      </section>

      <section className="future-work">
        <h2>Pengumpulan Data dan Teknik Sampling</h2>
        <div className="cards">
          <div className="card">
            <p><strong>Metode sampel acak </strong>adalah metode pemilihan sampel berdasarkan konsep peluang atau angka acak. Artinya, sampel yang diambil secara acak. </p>
          </div>
          <div className="card">
            <p><strong>Metode sistematik </strong>adalah metode untuk mendapatkan sampel secara sistematik. Misalnya, kamu memiliki 2.000 kartu dan masing-masing kartu sudah kamu beri indentitas berupa nomor.  Sementara itu, kartu yang kamu butuhkan untuk penelitian hanya 100. </p>
          </div>
          <div className="card">
            <p><strong>Metode sampling terstratifikasi </strong>adalah metode untuk mencari sampel dengan cara membagi suatu populasi dalam dua grup berdasarkan  beberapa pertimbangan sifat. Lalu, tiap sampel diambil dari masing-masing grup.</p>
          </div>
          <div className="card">
            <p><strong>Metode sampling kelompok </strong>Metode ini hampir sama dengan metode sampling terstartifikasi, hanya saja sampel yang dipilih adalah grup/ kelompok bukan tiap-tiap individu pada masing-masing grup. Dengan demikian, sampelnya adalah seluruh anggota grup/ kelompok yang dipilih.</p>
          </div>
        </div>
      </section>
      
      <section className="tech-news2">
        <div className="news-content">
          <h2>Tabel Distribusi frekuensi</h2>
          <p>Tabel frekuensi distribusi adalah tabel yang digunakan untuk menyajikan data dalam bentuk yang lebih terorganisasi dengan mengelompokkan data ke dalam kelas-kelas tertentu, kemudian mencatat jumlah kemunculan (frekuensi) data dalam setiap kelas. Tabel ini sering digunakan untuk data kuantitatif atau data yang memiliki banyak nilai.</p>
        </div>
        <div className="news-image">
        </div>
      </section>

      <section className="tech-news3">
        <div className="news-content">
          <h2>Ukuran Pemusatan Data</h2>
          <p>Ukuran pemusatan data adalah nilai yang dipakai untuk menggambarkan sekumpulan data dengan cara mengidentifikasi pusat kumpulan data tersebut.  Salah satu kegunaan dari ukuran pemusatan data adalah untuk membandingkan dua (populasi) atau contoh, karena sangat sulit untuk membandingkan masing-masing
            anggota dari masing-masing anggota populasi atau masing-masing anggota data contoh. Nilai ukuran pemusatan ini dibuat sedemikian sehingga cukup mewakili seluruh nilai pada data yang bersangkutan.</p>
            <p>Ukuran pemusatan mencakup data: <br></br>a. Ungrouped data, yaitu data yang belum dikelompokkan (data tunggal) <br></br>b. Grouped data, yaitu data yang telah dikelompokkan.Untuk menghitung ukuran pemusatan pada data yangtelah dikelompokkan, digunakan tabel distribusi frekuensi</p>
        </div>
        <div className="news-image">
        </div>
      </section>

      <section className="tech-news4">
        <div className="news-content">
          <h2>Rata-rata Hitung/Mean</h2>
          <p>Merupakan salah satu ukuran untuk memberikan gambaran yang lebih jelas dan singkat tentang sekumpulan data dengan melihat pusat suatu data, apabila data diurutkan dari yang terkecil sampai terbesar atau sebaliknya. Jumlah seluruh nilai data dibagi dengan jumlah data.</p>
        </div>
        <div className="news-image">
        <img src={stk2} alt="Statistika" /> 
        </div>
      </section>

      <section className="tech-news5">
        <div className="news-content">
          <h2>Median</h2>
          <p>Median adalah nilai tengah dari kumpulan data yang tersusun secara teratur (diurutkan menurut besarnya) Median membagi data menjadi dua bagian yang sama sehingga median disebut juga ukuran letak.</p>
          <p><strong>Catatan</strong>Posisi tengah dari seperangkat data sebanyak N yang telah terurut terletak pada posisi yang ke (𝑁+1) 2. Jika N ganjil, maka ada data yang berada pada posisi tengah dan nilai data itu merupakan nilai median. Jika N genap, maka sebagai mediannya diambil rata-rata hitung dua data yang ada ditengah</p>
        </div>
        <div className="news-image">
        <img src={stk3} alt="Statistika" /> 
        </div>
      </section>

      <section className="tech-news6">
        <div className="news-content">
          <h2>Modus</h2>
          <p>Modus adalah ukuran pemusatan data yang digunakan untuk menyatakan kejadian yang paling banyak terjadi atau paling banyak muncul. Modus data berkelompok ditentukan dengan rumus:.</p>
        </div>
        <div className="news-image">
        <img src={stk4} alt="Statistika" /> 
        </div>
      </section>

      <section className="tech-news7">
        <div className="news-content">
          <h2>Kuartil</h2>
          <p>Kuartil adalah konsep dalam statistika yang membagi data menjadi empat bagian sama besar. Kuartil dibagi menjadi tiga, yaitu kuartil pertama (Q1), kuartil kedua (Q2), dan kuartil ketiga (Q3).</p>
          <p>Kuartil juga dapat diartikan dengan suatu nilai, yang bisa membagi kumpulan data menjadi empat bagian sama besar. Hal ini berguna dalam berbagai analisis statistika, termasuk identifikasi outlier (nilai-nilai yang jauh dari nilai-nilai lainnya), dan pemahaman karakteristik distribusi data.</p>
        </div>
        <div className="news-image">
        <img src={stk5} alt="Statistika" />
        </div>
      </section>

      <section className="tech-news8">
        <div className="news-content">
          <h2>Desil</h2>
          <p>Desil adalah suatu istilah yang menunjukkan pembagian data menjadi 10 bagian sama besar. Sebelum menentukan desil, data harus diurutkan terlebih dahulu, ya. Ada sembilan desil yang nantinya bisa membagi data menjadi sepuluh bagian sama besar. Artinya, setiap bagian memiliki persentase yang sama, yaitu 10%. Perhatikan ilustrasi berikut.</p>
          <p>Di dalam kehidupan sehari-hari, desil biasa dimanfaatkan untuk mengelompokkan tingkat kesejahteraan rakyat. Misalnya kelompok Desil 1, Desil 2, dan seterusnya.</p>
        </div>
        <div className="news-image">
        <img src={stk6} alt="Statistika" />
        </div>
      </section>

      <section className="tech-news9">
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
