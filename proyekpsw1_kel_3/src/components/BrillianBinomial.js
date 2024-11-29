import React, { useState } from "react";
import "./BrillianBinomial.css";

const slides = [
  {
    title: "Peluang Mendapatkan Kepala dalam Melempar Koin",
    formulaArea: "P(X = k) = (n k) ⋅ p^k ⋅ (1-p)^(n-k)",
    question:
      "Dalam 10 kali lemparan koin, berapa peluang kepala muncul sebanyak 5 kali?",
    inputs: ["Jumlah Percobaan", "Jumlah Keberhasilan", "Peluang Sukses"],
    calculate: ({ JumlahPercobaan, JumlahKeberhasilan, PeluangSukses }) => {
      const n = parseInt(JumlahPercobaan, 10);
      const k = parseInt(JumlahKeberhasilan, 10);
      const p = parseFloat(PeluangSukses);
      const q = 1 - p;

      if (isNaN(n) || isNaN(k) || isNaN(p)) {
        return { result: "Error", explanation: "Input tidak valid." };
      }

      const factorial = (num) =>
        num === 0 || num === 1 ? 1 : num * factorial(num - 1);
      const combination = factorial(n) / (factorial(k) * factorial(n - k));
      const probability = combination * Math.pow(p, k) * Math.pow(q, n - k);

      return {
        result: probability.toFixed(4),
        explanation: `Langkah penyelesaian:\n1. Hitung kombinasi: C(${n}, ${k}) = ${combination}\n2. Kalikan dengan peluang sukses dan gagal:\nP(X = ${k}) = (${combination}) ⋅ (${p})^${k} ⋅ (${q})^${
          n - k
        }\nHasil akhir: ${probability.toFixed(4)}`,
      };
    },
  },
  {
    title: "Peluang Menjawab Benar dalam Ujian Pilihan Ganda",
    formulaArea: "P(X = k) = (n k) ⋅ p^k ⋅ (1-p)^(n-k)",
    question:
      "Dalam ujian pilihan ganda dengan 20 soal, berapa peluang siswa menjawab benar 15 soal jika peluang benar untuk setiap soal adalah 0.75?",
    inputs: ["Jumlah Percobaan", "Jumlah Keberhasilan", "Peluang Sukses"],
    calculate: ({ JumlahPercobaan, JumlahKeberhasilan, PeluangSukses }) => {
      const n = parseInt(JumlahPercobaan, 10);
      const k = parseInt(JumlahKeberhasilan, 10);
      const p = parseFloat(PeluangSukses);
      const q = 1 - p;

      if (isNaN(n) || isNaN(k) || isNaN(p)) {
        return { result: "Error", explanation: "Input tidak valid." };
      }

      const factorial = (num) =>
        num === 0 || num === 1 ? 1 : num * factorial(num - 1);
      const combination = factorial(n) / (factorial(k) * factorial(n - k));
      const probability = combination * Math.pow(p, k) * Math.pow(q, n - k);

      return {
        result: probability.toFixed(4),
        explanation: `Langkah penyelesaian:\n1. Hitung kombinasi: C(${n}, ${k}) = ${combination}\n2. Kalikan dengan peluang sukses dan gagal:\nP(X = ${k}) = (${combination}) ⋅ (${p})^${k} ⋅ (${q})^${
          n - k
        }\nHasil akhir: ${probability.toFixed(4)}`,
      };
    },
  },
  {
    title: "Peluang Menang dalam Permainan",
    formulaArea: "P(X = k) = (n k) ⋅ p^k ⋅ (1-p)^(n-k)",
    question:
      "Dalam 5 kali bermain game, berapa peluang menang 3 kali jika peluang menang setiap game adalah 0.4?",
    inputs: ["Jumlah Percobaan", "Jumlah Keberhasilan", "Peluang Sukses"],
    calculate: ({ JumlahPercobaan, JumlahKeberhasilan, PeluangSukses }) => {
      const n = parseInt(JumlahPercobaan, 10);
      const k = parseInt(JumlahKeberhasilan, 10);
      const p = parseFloat(PeluangSukses);
      const q = 1 - p;

      if (isNaN(n) || isNaN(k) || isNaN(p)) {
        return { result: "Error", explanation: "Input tidak valid." };
      }

      const factorial = (num) =>
        num === 0 || num === 1 ? 1 : num * factorial(num - 1);
      const combination = factorial(n) / (factorial(k) * factorial(n - k));
      const probability = combination * Math.pow(p, k) * Math.pow(q, n - k);

      return {
        result: probability.toFixed(4),
        explanation: `Langkah penyelesaian:\n1. Hitung kombinasi: C(${n}, ${k}) = ${combination}\n2. Kalikan dengan peluang sukses dan gagal:\nP(X = ${k}) = (${combination}) ⋅ (${p})^${k} ⋅ (${q})^${
          n - k
        }\nHasil akhir: ${probability.toFixed(4)}`,
      };
    },
  },
];

const DistribusiBinomial = () => {
  const [inputValues, setInputValues] = useState({});
  const [results, setResults] = useState({});

  const handleInputChange = (e, slideTitle) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [slideTitle]: {
        ...prev[slideTitle],
        [name]: value,
      },
    }));
  };

  const calculateResult = (slide) => {
    const inputs = inputValues[slide.title] || {};
    const resultsForSlide = slide.calculate(inputs);
    setResults((prev) => ({
      ...prev,
      [slide.title]: resultsForSlide,
    }));
  };

  return (
    <div className="slides-container">
      <h1 className="main-title">Distribusi Binomial</h1>
      {slides.map((slide, index) => (
        <section className="slide" key={index}>
          <h2>{slide.title}</h2>
          <p>
            <strong>Soal:</strong> {slide.question}
          </p>
          <p>
            <strong>Rumus:</strong> {slide.formulaArea}
          </p>
          <div className="inputs">
            {slide.inputs.map((inputName) => (
              <div key={inputName}>
                <label>
                  {inputName[0].toUpperCase() + inputName.slice(1)}:
                  <input
                    type="text"
                    name={inputName}
                    value={inputValues[slide.title]?.[inputName] || ""}
                    onChange={(e) => handleInputChange(e, slide.title)}
                  />
                </label>
              </div>
            ))}
          </div>
          <button
            className="calculate-btn"
            onClick={() => calculateResult(slide)}
          >
            Hitung
          </button>
          {results[slide.title] && (
            <div className="result">
              <p>
                <strong>Hasil:</strong> {results[slide.title].result}
              </p>
              <pre className="explanation">
                {results[slide.title].explanation}
              </pre>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default DistribusiBinomial;
