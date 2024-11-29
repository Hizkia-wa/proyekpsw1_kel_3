import React from "react";
import "./MateriStatistika.css";
import Kongruen from "../images/Kongruen.png";
import Kesebangunan from  "../images/Kesebangunan.png";
import Perbedaan from "../images/Perbedaan.png";


const MateriKongruen = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1>Kongruen dan Kesebangunan</h1>
          <p>
            Kongruen dan kesebangunan adalah konsep dasar dalam geometri yang
            mempelajari hubungan kesamaan bentuk dan ukuran antara dua bangun
            datar atau ruang.
          </p>
          <p>
            Kongruen: Dua bangun dikatakan kongruen jika memiliki bentuk dan
            ukuran yang sama persis. Ini berarti panjang sisi-sisi dan besar
            sudut-sudutnya juga sama.
          </p>
          <p>
            Kesebangunan: Dua bangun dikatakan sebangun jika memiliki bentuk
            yang sama, meskipun ukurannya berbeda. Rasio panjang sisi-sisi yang
            bersesuaian adalah sama.
          </p>
        </div>
      </header>

      <section className="tech-news">
        <div className="news-content">
          <h2>Kongruen</h2>
          <p>
            Kongruen berlaku ketika dua bangun geometri dapat saling menutupi
            secara sempurna. Biasanya, kongruen ditentukan melalui uji sisi-sisi
            dan sudut-sudut yang bersesuaian.
          </p>
          <p>
            Sifat Kongruen:
            <ul>
              <li>Memiliki bentuk dan ukuran yang sama.</li>
              <li>Sisi-sisi yang bersesuaian sama panjang.</li>
              <li>Sudut-sudut yang bersesuaian sama besar.</li>
            </ul>
          </p>
        </div>
        <div className="news-image">
          <h2>Uji Kongruen:</h2>
          <p>
            <ul>
              <li>
                Sisi-Sisi-Sisi (SSS): Ketiga sisi pada dua segitiga sama
                panjang.
              </li>
              <li>
                Sisi-Sudut-Sisi (SAS): Dua sisi dan sudut di antara sisi
                tersebut sama.
              </li>
              <li>
                Sudut-Sudut-Sudut (AAA): Tidak cukup untuk kongruen tetapi cukup
                untuk kesebangunan.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section className="future-work">
        <h2>Kesebangunan</h2>
        <div className="cards">
          <div className="card">
            <p>
              <strong>Pengertian Kesebangunan:</strong> Bangun-bangun yang
              memiliki bentuk sama tetapi berbeda ukuran. Rasio sisi-sisi yang
              bersesuaian adalah sama.
            </p>
          </div>
          <div className="card">
            <p>
              <strong>Contoh Kesebangunan:</strong> Dua segitiga dikatakan
              sebangun jika sudut-sudut yang bersesuaian sama besar dan
              sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-news2">
        <div className="news-content">
          <h2>Hubungan Kongruen dan Kesebangunan</h2>
          <p>
            Bangun yang kongruen selalu sebangun, tetapi bangun yang sebangun
            belum tentu kongruen. Kesebangunan melibatkan perbandingan skala,
            sedangkan kongruen memerlukan kesamaan ukuran.
          </p>
        </div>
        <div className="news-image"></div>
      </section>

      <section className="tech-news3">
        <div className="news-content">
          <h2>Penerapan Kongruen dan Kesebangunan</h2>
          <p>
            Kedua konsep ini sangat penting dalam pemetaan, desain bangunan, dan
            analisis struktur geometris dalam matematika.
          </p>
        </div>
        <div className="news-image"></div>
      </section>

      <section className="tech-news4">
        <div className="news-content">
          <h2>Contoh Soal Kongruen</h2>
        </div>
        <div className="news-image">
          <img src={Kongruen} alt="Contoh Soal Kongruen" />
        </div>
      </section>

      <section className="tech-news5">
        <div className="news-content">
          <h2>Contoh Soal Kesebangunan</h2>
        </div>
        <div className="news-image">
          <img src={Kesebangunan} alt="Contoh Soal Kesebangunan" />
        </div>
      </section>

      <section className="tech-news7">
        <div className="news-content">
          <h2>Kesimpulan</h2>
          <p>
            jadi , kongruen dan kesebangunan adalah dua konsep yang berbeda dalam
            Definisi Kongruen: Dua bangun disebut kongruen jika memiliki bentuk dan
            ukuran yang sama persis. Artinya, jika satu bangun dipindahkan,
            diputar, atau dicerminkan, maka bangun tersebut akan sama persis
            dengan bangun lainnya. 
            Definisi Kesebangunan: Dua bangun disebut sebangun jika
            memiliki bentuk yang sama tetapi ukuran yang berbeda. Artinya,
            ukuran satu bangun merupakan hasil perkalian skala dari bangun
            lainnya
          </p>
        </div>
        <div className="news-image">
          <img src={Perbedaan} alt="Kesimpulan" />
        </div>
      </section>
    </div>
  );
};

export default MateriKongruen;
