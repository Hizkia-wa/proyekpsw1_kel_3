import React from 'react';
import './MateriStatistika.css';

import pengertianImg from '../images/pengertian.jpg';
import percobaanImg from '../images/percobaan.jpg';
import ruangSampelImg from '../images/ruangSampel.jpg';
import titikSampelImg from '../images/titikSampel.jpg';
import permutasiImg from '../images/permutasi.jpg';

const Peluang = () => {
  const sections = [
    { 
      id: 1, 
      title: "Pengertian Peluang Suatu Kejadian", 
      content: ["Peluang adalah nilai (kuantitas) untuk menyatakan seberapa besar terjadinya suatu peristiwa. Peluang juga biasa disebut sebagai probabilitas.",
                "Pembahasan peluang ini sangat erat kaitannya dengan kehidupan sehari-hari. Mengingat, hidup itu penuh dengan kemungkinan-kemungkinan.",
                "Contoh penerapan teori peluang dalam kehidupan sehari-hari bisa kamu ambil dari hal sepele, yaitu pelemparan dadu. Apakah kamu bisa memastikan nilai mata dadu yang muncul setelah dilemparkan? Tentu tidak, ya. Tiga hal yang harus kamu ketahui untuk menentukan peluang, yaitu percobaan, ruang sampel, dan kejadian."
      ],
      bgImage: pengertianImg 
    },
    { 
      id: 2, 
      title: "Pengertian Percobaan", 
      content: ["Percobaan adalah suatu kegiatan yang menghasilkan nilai suatu peluang.", 
                "Misalnya proses pelemparan dua buah dadu, pengambilan bola di dalam kotak, pengambilan kartu, dan sebagainya."
      ],         
      bgImage: percobaanImg
    },
    { 
      id: 3, 
      title: "Pengertian Ruang Sampel", 
      content: ["Ruang sampel adalah semua hasil yang mungkin terjadi dari suatu percobaan. Ruang sampel dinotasikan sebagai S dan banyaknya elemen ruang sampel dinotasikan n(S). ", 
                "Misalnya, kamu melemparkan dua buah koin, kemungkinan hasil yang muncul adalah {(A,G), (G,A), (A,A), (G,G)}."
      ],
      bgImage: ruangSampelImg
    },
    { 
      id: 4, 
      title: "Titik Sampel", 
      content: ["Setiap anggota dari ruang sampel dinamakan titik sampel.", 
                "Banyaknya titik sampel di setiap percobaan itu berbeda-beda. Untuk menentukannya, kamu tidak perlu rumus tertentu."
      ],
      bgImage: titikSampelImg
    },
    { 
      id: 5, 
      title: "Permutasi dan Kombinasi", 
      content: (
        <>
          <p><strong>Permutasi:</strong> Implementasi atau penerapan peluang itu sangatlah luas. Ada kalanya, kamu diminta untuk menentukan peluang kejadian yang terjadi secara berurutan. Misalnya, peluang terambilnya bola dengan urutan merah, biru, dan kuning. Untuk menyelesaikan peluang yang memperhatikan urutan semacam ini, kamu bisa menggunakan permutasi. Secara matematis, permutasi dirumuskan sebagai berikut. Rumus: <strong>P(n, r) = n! / (n - r)!</strong></p>
          <p><strong>Kombinasi:</strong> Jika permutasi memperhatikan urutan, tidak demikian dengan kombinasi. Untuk menyelesaikan permasalahan peluang tanpa memperhatikan urutan, kamu bisa menggunakan kombinasi. Misalnya, suatu sekolah akan memilih 2 dari 10 siswa berprestasinya untuk mengikuti OSN. Dari 10 siswa tersebut, 4 diantaranya perempuan. Peluang terpilihnya satu laki-laki dan satu perempuan adalah? Dalam hal ini, urutan tidak diperhatikan. Adapun rumus kombinasi adalah sebagai berikut. Rumus: <strong>C(n, r) = n! / [r! × (n - r)!]</strong></p>
        </>
      ), 
      bgImage: permutasiImg
    }
  ];

  return (
    <div className="peluang-container">
      {sections.map((section) => (
        <div
          key={section.id}
          className="peluang-section"
          style={{
            backgroundImage: `url(${section.bgImage})`,
          }}
        >
          <h2>{section.title}</h2>
          <div>{section.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Peluang;
