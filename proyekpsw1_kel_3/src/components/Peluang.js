import React from 'react';
import './Peluang.css';

// Impor gambar dari folder lokal
import pengertianImg from '../image/pengertian.jpg';
import percobaanImg from '../image/percobaan.jpg';
import ruangSampelImg from '../image/ruangSampel.jpg';
import titikSampelImg from '../image/titikSampel.jpg';
import permutasiImg from '../image/permutasi.jpg';

const Peluang = () => {
  const sections = [
    { 
      id: 1, 
      title: "Pengertian Peluang", 
      content: "Peluang adalah kemungkinan terjadinya suatu kejadian. Misalnya, kelas 12 IPA 1 memiliki 40 siswa. Dari jumlah tersebut, akan dipilih 10 orang sebagai panitia penerimaan siswa baru. Dan ternyata, kamu menjadi salah satu di antara 10 orang itu. Jadi, kejadian terpilihnya kamu disebut sebagai peluang.", 
      bgImage: pengertianImg 
    },
    { 
      id: 2, 
      title: "Percobaan Peluang", 
      content: "Artinya ialah kegiatan atau tindakan yang tujuannya untuk memperoleh hasil tertentu. Misalnya nih, pelemparan uang koin ataupun dadu.", 
      bgImage: percobaanImg
    },
    { 
      id: 3, 
      title: "Ruang Sampel Peluang", 
      content: "Nah, hasil dari percobaan di atas disebutnya ruang sampel. Jadi, bisa dibilang ruang sampel adalah himpunan semua hasil yang mungkin dari suatu percobaan. Ruang sampel itu simbolnya S ya.", 
      bgImage: ruangSampelImg
    },
    { 
      id: 4, 
      title: "Titik Sampel", 
      content: "Setiap anggota dari ruang sampel dinamakan titik sampel. Dari percobaan di atas, titik sampelnya adalah sisi angka dan gambar.", 
      bgImage: titikSampelImg
    },
    { 
      id: 5, 
      title: "Permutasi dan Kombinasi", 
      content: (
        <>
          <p><strong>Permutasi:</strong> Memperhatikan urutan. Rumus: <strong>P(n, r) = n! / (n - r)!</strong></p>
          <p><strong>Kombinasi:</strong> Tidak memperhatikan urutan. Rumus: <strong>C(n, r) = n! / [r! × (n - r)!]</strong></p>
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
