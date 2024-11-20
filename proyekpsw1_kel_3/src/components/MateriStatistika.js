import React from "react";
import "./MateriStatistika.css";
import stk1 from "../images/STK1.jpg";
import stk2 from "../images/STK2.jpg";
import stk3 from "../images/STK3.jpg";
import stk4 from "../images/STK4.jpg";
import stk5 from "../images/STK5.jpg";
import stk6 from "../images/STK6.jpg";
import stk7 from "../images/STK7.jpg";
import stk8 from "../images/STK8.jpg";


const MateriStatistika = () => {
  const sections = [
    { 
      id: 1, 
      title: "Pengantar Statistika", 
      content: ["Statistika adalah cabang ilmu yang memfokuskan pada cara merancang, menghimpun, menganalisis, menafsirkan, dan menyajikan data.", 
              "Penerapan statistika sangat luas, mencakup berbagai bidang ilmu, seperti ilmu alam (fisika, astronomi, dan biologi), ilmu sosial (sosiologi dan psikologi), serta di sektor bisnis (ekonomi dan industri).",
              "Dengan demikian, materi statistika matematika pada tingkat kelas 12 membekali siswa dengan keterampilan analitis dan pemahaman matematika yang mendalam untuk menghadapi tantangan di dunia nyata."
            ],
      bgImage: stk1
    },
    { 
      id: 2, 
      title: "Populasi dan Sampel", 
      content: ["Populasi merujuk pada kumpulan elemen atau individu yang memiliki karakteristik atau ciri-ciri tertentu dan merupakan objek dari suatu studi atau penelitian.",
                "Dalam konteks statistika, populasi mencakup seluruh kelompok yang menjadi fokus analisis, dan data yang diperoleh dari populasi tersebut dapat memberikan informasi yang representatif tentang keseluruhan kelompok tersebut.",
                "Penting untuk memahami dan mendefinisikan dengan jelas populasi yang akan diteliti karena hal ini mempengaruhi kevalidan dan generalisasi hasil penelitian statistik.",
                " ",
                "Sampel adalah sebagian kecil dari populasi yang diambil untuk menjadi representasi atau contoh dari keseluruhan kelompok.",
                "Dalam konteks statistika, pengambilan sampel dilakukan untuk menganalisis dan membuat kesimpulan tentang populasi secara lebih efisien dan praktis.",
                "Proses pemilihan sampel biasanya melibatkan teknik acak atau metode lain yang memastikan setiap anggota populasi memiliki kesempatan yang setara untuk menjadi bagian dari sampel."
       ],
      bgImage: stk2
    },
    { 
      id: 3, 
      title: "Data dan Penyajiannya", 
      content: ["Data adalah informasi yang dikumpulkan, sedangkan variabel adalah karakteristik yang diukur.",
                "Metode Penyajian Data",
                "Tabel distribusi frekuensi adalah cara mengorganisasi dan menyajikan data secara teratur dalam bentuk tabel. Tujuan utamanya adalah untuk membuat data yang mungkin banyak menjadi lebih rapi dan lebih mudah dimengerti.",
                "Setiap kelas atau interval ini kemudian diberi nilai frekuensi yang menunjukkan seberapa sering nilai-nilai tersebut muncul dalam kelas tersebut. Dengan kata lain, tabel ini memberikan gambaran sistematis tentang sebaran dan seberapa sering nilai-nilai tertentu muncul dalam data.",
                "Tabel distribusi frekuensi memiliki kelebihan utama yaitu memberikan kemudahan dalam melihat pola distribusi data dan frekuensinya. Dengan merapikan data ke dalam kelas-kelas, kita dapat dengan cepat mengidentifikasi kelompok nilai yang paling umum atau yang muncul lebih jarang."
      ],
      bgImage: stk3
    },
    { 
      id: 4, 
      title: "Pemusatan Data",
      content: ["Pengukuran data meliputi pemusatan data dan penyebaran.",
                "Ukuran pemusatan data adalah ukuran yang akan menunjukkan pusat dari sekelompok data yang sudah diurutkan. Idealnya, data akan diurutkan dari yang kecil hingga besar.",
                "Setelahnya, akan dicari suatu nilai berdasarkan pembagian pemusatan data, yakni mean, median, dan modus. Seperti apa data mean, median, dan modus.",       
      ],
      bgImage: stk4
    },
    { 
      id: 5, 
      subtitle: "rata-rata (Mean) Data Berkelompok", 
      content: ["Nilai rata-rata dari suatu data disebut juga dengan nama mean. Anda bisa menghitung rata-rata nilai dari data tunggal, tunggal berkelompok, ataupun berfrekuensi.",
                "Data yang sudah diterima akan diurutkan dan dijumlahkan. Setelah itu, data akan dibagi berdasarkan banyaknya data.",
            
      ],
        bgImage: stk5
    },
    { 
      id: 6, 
      subtitle: "Modus Data Berkelompok", 
      content: ["Modus merupakan metode untuk menunjukkan pusat data dengan menyatakan nilai atau kejadian yang paling sering terjadi atau paling banyak muncul. Dalam data yang terkelompok, modus dihitung menggunakan rumus:", 
      ],
      bgImage: stk6
    },
    { 
      id: 7, 
      subtitle: "Median Data Berkelompok", 
      content: ["Median adalah suatu nilai yang terletak di tengah setelah data diatur secara berurutan. Dalam kasus data yang terkelompok, perhitungan median dilakukan dengan menggunakan rumus",
                 
                "dimana media terletak pada datum ke n/2"
                ],
      bgImage: stk7
    },
    { 
      id: 8, 
      title: "kuartil", 
      content: "Jika rangkaian data yang sudah diurutkan dibagi menjadi empat bagian yang memiliki ukuran yang sama, maka terdapat tiga titik pemisahan, dan setiap titik pemisahan tersebut disebut sebagai kuartil. Ilustrasinya seperti berikut.", 
      bgImage: stk8
    },
  ];

  return (
    <div className="materi-statistika">
      {sections.map((section) => (
        <div
          key={section.id}
          className="materi-section"
          style={{
            backgroundImage: `url(${section.bgImage})`,
          }}
        >
          <h2>{section.title}</h2>
          {section.subtitle && <h3>{section.subtitle}</h3>}
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MateriStatistika;
