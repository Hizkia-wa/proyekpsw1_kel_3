import React from "react";
import "./MateriTurunan.css";
import diff1 from "../images/STK1.png";
import diff2 from "../images/STK2.png";
import diff3 from "../images/STK3.png";
import diff4 from "../images/STK4.png";
import diff5 from "../images/STK5.png";
import diff6 from "../images/STK6.png";
import diff7 from "../images/STK1.png";
import diff8 from "../images/STK2.png";

const MateriTurunan = () => {
  const sections = [
    {
      id: 1,
      title: "Pengantar Turunan",
      content:
        "Turunan adalah konsep dalam kalkulus yang digunakan untuk mengukur perubahan suatu fungsi terhadap variabelnya. Turunan menggambarkan tingkat perubahan atau kemiringan grafik fungsi pada suatu titik. Konsep turunan memiliki banyak aplikasi dalam fisika, ekonomi, teknik, dan berbagai bidang lainnya.",
      formula: "f'(x) = lim h→0 [f(x + h) - f(x)] / h",
      shape: "none",
      bgImage: diff1,
    },
    {
      id: 2,
      title: "Aturan Dasar Turunan",
      content:
        "Aturan dasar turunan mencakup berbagai formula penting yang digunakan untuk menghitung turunan fungsi. Contoh aturan dasar: turunan konstanta adalah nol, dan turunan fungsi linear adalah koefisien variabel.",
      formula:
        "1. Jika f(x) = c, maka f'(x) = 0.\n2. Jika f(x) = ax + b, maka f'(x) = a.",
      shape: "none",
      bgImage: diff2,
    },
    {
      id: 3,
      title: "Aturan Perkalian Konstanta",
      content:
        "Jika suatu fungsi dikalikan dengan konstanta, turunan fungsi tersebut adalah konstanta dikalikan dengan turunan fungsi asli.",
      formula: "Jika f(x) = c × g(x), maka f'(x) = c × g'(x).",
      shape: "none",
      bgImage: diff3,
    },
    {
      id: 4,
      title: "Aturan Penjumlahan dan Pengurangan",
      content:
        "Turunan dari penjumlahan atau pengurangan dua fungsi adalah jumlah atau selisih dari turunan masing-masing fungsi.",
      formula: "Jika f(x) = g(x) ± h(x), maka f'(x) = g'(x) ± h'(x).",
      shape: "none",
      bgImage: diff4,
    },
    {
      id: 5,
      title: "Aturan Perkalian (Product Rule)",
      content:
        "Turunan dari perkalian dua fungsi adalah turunan fungsi pertama dikalikan fungsi kedua, ditambah fungsi pertama dikalikan turunan fungsi kedua.",
      formula:
        "Jika f(x) = g(x) × h(x), maka f'(x) = g'(x) × h(x) + g(x) × h'(x).",
      shape: "none",
      bgImage: diff5,
    },
    {
      id: 6,
      title: "Aturan Pembagian (Quotient Rule)",
      content:
        "Turunan dari pembagian dua fungsi adalah turunan fungsi pembilang dikalikan penyebut, dikurangi pembilang dikalikan turunan penyebut, dibagi kuadrat penyebut.",
      formula:
        "Jika f(x) = g(x) / h(x), maka f'(x) = [g'(x) × h(x) - g(x) × h'(x)] / [h(x)]².",
      shape: "none",
      bgImage: diff6,
    },
    {
      id: 7,
      title: "Aturan Rantai (Chain Rule)",
      content:
        "Aturan rantai digunakan untuk menghitung turunan dari fungsi komposisi. Turunan fungsi luar dikalikan dengan turunan fungsi dalam.",
      formula: "Jika f(x) = g(h(x)), maka f'(x) = g'(h(x)) × h'(x).",
      shape: "none",
      bgImage: diff7,
    },
    {
      id: 8,
      title: "Turunan Fungsi Eksponen dan Logaritma",
      content:
        "Turunan fungsi eksponen dan logaritma memiliki formula khusus. Contohnya, turunan eksponen natural dan logaritma natural.",
      formula:
        "1. Jika f(x) = e^x, maka f'(x) = e^x.\n2. Jika f(x) = ln(x), maka f'(x) = 1/x.",
      shape: "none",
      bgImage: diff8,
    },
  ];

  return (
    <div className="materi-turunan">
      {sections.map((section) => (
        <div
          key={section.id}
          className="materi-section"
          style={{
            backgroundImage: `url(${section.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            color: "white",
          }}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          <p>
            <strong>Rumus:</strong> {section.formula}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MateriTurunan;
