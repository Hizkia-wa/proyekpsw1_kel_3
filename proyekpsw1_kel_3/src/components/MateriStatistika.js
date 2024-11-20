import React from "react";
import "./MateriStatistika.css";
import stk1 from "../components/STK1.jpg";

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
        <div className="header-image">
          <img src={stk1} alt="Statistika" /> 
        </div>
      </header>

      <section className="tech-news">
        <div className="news-content">
          <h2>Populasi dan Sampel</h2>
          <p>Populasi adalah objek yang dijadikan penelitian. Misalnya, jika kamu akan melakukan penelitian tentang pengaruh hormon steroid pada pertumbuhan ayam pedaging atau broiler, maka populasi yang dipilih adalah ayam pedaging yang dibudidayakan oleh peternak.</p>
          <p>Sampel adalah bagian dari populasi yang bisa dijadikan sumber informasi. Misalnya, dari banyaknya ayam pedaging yang dimiliki oleh peternak, kamu cukup mengambil beberapa saja untuk kamu amati selama proses penelitian. Artinya, kamu tidak perlu menjadikan semua ayam sebagai bahan penelitian.</p>
        </div>
        <div className="news-image">
          <img src="robot-hand-image-url" alt="Robot Hand" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Variabel dan Data</h2>
          <p>Variabel adalah sifat beda antarobjek penelitian, misalnya tinggi badan, warna bunga, bentuk biji, jenis pupuk, dan masih banyak lainnya. Variabel yang bisa dinyatakan dengan angka disebut variabel kuantitatif. Contohnya tinggi badan, berat badan, suhu, dan sebagainya. Nah, ternyata variabel kuantitatif masih dibagi menjadi dua, yaitu variabel diskrit dan kontinu.</p>
          <li>Variabel diskrit adalah variabel yang nilainya ditentukan dari hasil perhitungan, misal banyak siswa, banyak kendaraan, banyaknya orang berbaju pink di sebuah ruangan, dan sebagainya.</li>
          <li>Variabel kontinu adalah variabel yang nilainya didapat dari hasil pengukuran, misal tinggi pohon di dalam area kampus.</li>
          <p>Sementara itu, variabel yang tidak bisa dinyatakan dengan angka disebut variabel kualitatif. Contohnya, warna bunga, bentuk mata, bentuk jengger, dan sebagainya. Untuk lebih jelasnya, simak bagan berikut.</p>
          <p>Data adalah nilai variabel dari suatu objek. Data juga dibedakan menjadi data kuantitatif, kualitatif, diskrit, dan kontinu.</p>
        </div>
        <div className="news-image">
          <img src="robot-hand-image-url" alt="Robot Hand" />
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
      
      <section className="tech-news">
        <div className="news-content">
          <h2>Tabel Distribusi frekuensi</h2>
          <p>Variabel adalah sifat beda antarobjek penelitian, misalnya tinggi badan, warna bunga, bentuk biji, jenis pupuk, dan masih banyak lainnya. Variabel yang bisa dinyatakan dengan angka disebut variabel kuantitatif. Contohnya tinggi badan, berat badan, suhu, dan sebagainya. Nah, ternyata variabel kuantitatif masih dibagi menjadi dua, yaitu variabel diskrit dan kontinu.</p>
          <li>Variabel diskrit adalah variabel yang nilainya ditentukan dari hasil perhitungan, misal banyak siswa, banyak kendaraan, banyaknya orang berbaju pink di sebuah ruangan, dan sebagainya.</li>
          <li>Variabel kontinu adalah variabel yang nilainya didapat dari hasil pengukuran, misal tinggi pohon di dalam area kampus.</li>
          <p>Sementara itu, variabel yang tidak bisa dinyatakan dengan angka disebut variabel kualitatif. Contohnya, warna bunga, bentuk mata, bentuk jengger, dan sebagainya. Untuk lebih jelasnya, simak bagan berikut.</p>
          <p>Data adalah nilai variabel dari suatu objek. Data juga dibedakan menjadi data kuantitatif, kualitatif, diskrit, dan kontinu.</p>
        </div>
        <div className="news-image">
          <img src="robot-hand-image-url" alt="Robot Hand" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Ukuran Pemusatan Data</h2>
          <p>Ukuran pemusatan data adalah nilai yang dipakai untuk menggambarkan sekumpulan data dengan cara mengidentifikasi pusat kumpulan data tersebut.  Salah satu kegunaan dari ukuran pemusatan data adalah untuk membandingkan dua (populasi) atau contoh, karena sangat sulit untuk membandingkan masing-masing
            anggota dari masing-masing anggota populasi atau masing-masing anggota data contoh. Nilai ukuran pemusatan ini dibuat sedemikian sehingga cukup mewakili seluruh nilai pada data yang bersangkutan.</p>
        </div>
        <div className="news-image">
          <img src="robot-hand-image-url" alt="Robot Hand" />
        </div>
      </section>

      <section className="tech-news">
        <div className="news-content">
          <h2>Variabel dan Data</h2>
          <p>Variabel adalah sifat beda antarobjek penelitian, misalnya tinggi badan, warna bunga, bentuk biji, jenis pupuk, dan masih banyak lainnya. Variabel yang bisa dinyatakan dengan angka disebut variabel kuantitatif. Contohnya tinggi badan, berat badan, suhu, dan sebagainya. Nah, ternyata variabel kuantitatif masih dibagi menjadi dua, yaitu variabel diskrit dan kontinu.</p>
          <li>Variabel diskrit adalah variabel yang nilainya ditentukan dari hasil perhitungan, misal banyak siswa, banyak kendaraan, banyaknya orang berbaju pink di sebuah ruangan, dan sebagainya.</li>
          <li>Variabel kontinu adalah variabel yang nilainya didapat dari hasil pengukuran, misal tinggi pohon di dalam area kampus.</li>
          <p>Sementara itu, variabel yang tidak bisa dinyatakan dengan angka disebut variabel kualitatif. Contohnya, warna bunga, bentuk mata, bentuk jengger, dan sebagainya. Untuk lebih jelasnya, simak bagan berikut.</p>
          <p>Data adalah nilai variabel dari suatu objek. Data juga dibedakan menjadi data kuantitatif, kualitatif, diskrit, dan kontinu.</p>
        </div>
        <div className="news-image">
          <img src="robot-hand-image-url" alt="Robot Hand" />
        </div>
      </section>

    </div>
  );
};

export default MateriStatistika;
