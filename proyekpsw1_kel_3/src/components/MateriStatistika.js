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
      content:
        "Statistika adalah cabang ilmu yang memfokuskan pada cara merancang, menghimpun, menganalisis, menafsirkan, dan menyajikan data. Penerapan statistika sangat luas, mencakup berbagai bidang ilmu, seperti ilmu alam (fisika, astronomi, dan biologi), ilmu sosial (sosiologi dan psikologi), serta di sektor bisnis (ekonomi dan industri). Dengan demikian, materi statistika matematika pada tingkat kelas 12 membekali siswa dengan keterampilan analitis dan pemahaman matematika yang mendalam untuk menghadapi tantangan di dunia nyata.",
      bgImage: stk1,
    },
    {
      id: 2,
      title: "Populasi dan Sampel",
      content:
        "Populasi adalah keseluruhan objek yang diteliti, sedangkan sampel adalah bagian dari populasi.",
      bgImage: stk2,
    },
    {
      id: 3,
      title: "Data dan Variabel",
      content:
        "Data adalah informasi yang dikumpulkan, sedangkan variabel adalah karakteristik yang diukur.",
      bgImage: stk3,
    },
    {
      id: 4,
      title: "Pengukuran Data",
      content:
        "Pengukuran data meliputi skala nominal, ordinal, interval, dan rasio.",
      bgImage: stk4,
    },
    {
      id: 5,
      title: "Distribusi Data",
      content:
        "Distribusi data menunjukkan bagaimana data tersebar, contohnya distribusi normal.",
      bgImage: stk5,
    },
    {
      id: 6,
      title: "Statistika Deskriptif",
      content:
        "Statistika deskriptif melibatkan perhitungan mean, median, modus, dan penyajian data.",
      bgImage: stk6,
    },
    {
      id: 7,
      title: "Statistika Inferensial",
      content:
        "Statistika inferensial digunakan untuk membuat prediksi atau kesimpulan berdasarkan sampel.",
      bgImage: stk7,
    },
    {
      id: 8,
      title: "Penerapan Statistika",
      content:
        "Statistika banyak digunakan di bidang ekonomi, kesehatan, pendidikan, dan teknologi.",
      bgImage: stk8,
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
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MateriStatistika;
