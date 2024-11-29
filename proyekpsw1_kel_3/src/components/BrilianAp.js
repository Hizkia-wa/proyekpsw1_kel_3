import React, { useState } from "react";
import "./BrillianBinomial.css";

const slides = [
  {
    title: "Permutasi dari Sekelompok Objek",
    formulaArea: "P(n, r) = n! / (n-r)!",
    question:
      "Berapa banyak cara untuk mengatur 5 objek berbeda menjadi urutan sebanyak 3 posisi?",
    inputs: ["Jumlah Objek", "Jumlah Posisi"],
    calculate: ({ JumlahObjek, JumlahPosisi }) => {
      const n = parseInt(JumlahObjek, 10);
      const r = parseInt(JumlahPosisi, 10);

      if (isNaN(n) || isNaN(r) || n < r) {
        return { result: "Error", explanation: "Input tidak valid atau n < r." };
      }

      const factorial = (num) =>
        num === 0 || num === 1 ? 1 : num * factorial(num - 1);
      const permutation = factorial(n) / factorial(n - r);

      return {
        result: permutation,
        explanation: `Langkah penyelesaian:\n1. Hitung faktorial dari n (${n}!): ${factorial(
          n
        )}\n2. Hitung faktorial dari (n - r) (${n - r}!): ${factorial(
          n - r
        )}\n3. Gunakan rumus: P(n, r) = ${factorial(n)} / ${factorial(n - r)}\nHasil akhir: ${permutation}`,
      };
    },
  },
  {
    title: "Kombinasi dari Sekelompok Objek",
    formulaArea: "C(n, r) = n! / [r! ⋅ (n-r)!]",
    question:
      "Berapa banyak cara untuk memilih 4 orang dari kelompok 10 orang?",
    inputs: ["Jumlah Objek", "Jumlah Dipilih"],
    calculate: ({ JumlahObjek, JumlahDipilih }) => {
      const n = parseInt(JumlahObjek, 10);
      const r = parseInt(JumlahDipilih, 10);

      if (isNaN(n) || isNaN(r) || n < r) {
        return { result: "Error", explanation: "Input tidak valid atau n < r." };
      }

      const factorial = (num) =>
        num === 0 || num === 1 ? 1 : num * factorial(num - 1);
      const combination =
        factorial(n) / (factorial(r) * factorial(n - r));

      return {
        result: combination,
        explanation: `Langkah penyelesaian:\n1. Hitung faktorial dari n (${n}!): ${factorial(
          n
        )}\n2. Hitung faktorial dari r (${r}!): ${factorial(
          r
        )}\n3. Hitung faktorial dari (n - r) (${n - r}!): ${factorial(
          n - r
        )}\n4. Gunakan rumus: C(n, r) = ${factorial(n)} / (${factorial(
          r
        )} × ${factorial(n - r)})\nHasil akhir: ${combination}`,
      };
    },
  },
  {
    title: "Permutasi dengan Objek Identik",
    formulaArea: "P = n! / (p1! ⋅ p2! ⋅ ... ⋅ pk!)",
    question:
      "Berapa banyak cara untuk mengatur huruf dalam kata 'MISSISSIPPI'?",
    inputs: ["Total Huruf", "Jumlah Tiap Huruf"],
    calculate: ({ TotalHuruf, JumlahTiapHuruf }) => {
      const n = parseInt(TotalHuruf, 10);
      const p = JumlahTiapHuruf.split(",").map((x) => parseInt(x.trim(), 10));

      if (isNaN(n) || p.some((x) => isNaN(x))) {
        return {
          result: "Error",
          explanation: "Input tidak valid. Pastikan jumlah huruf benar.",
        };
      }

      const factorial = (num) =>
        num === 0 || num === 1 ? 1 : num * factorial(num - 1);
      const denominator = p.reduce((acc, curr) => acc * factorial(curr), 1);
      const permutation = factorial(n) / denominator;

      return {
        result: permutation,
        explanation: `Langkah penyelesaian:\n1. Hitung faktorial dari total huruf (${n}!): ${factorial(
          n
        )}\n2. Hitung faktorial masing-masing grup: ${p
          .map((x) => `${x}! = ${factorial(x)}`)
          .join(", ")}\n3. Gunakan rumus: P = ${factorial(
          n
        )} / (${p.map((x) => `${factorial(x)}`).join(" × ")})\nHasil akhir: ${permutation}`,
      };
    },
  },
];

const AturanPencacahan = () => {
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
      <h1 className="main-title">Aturan Pencacahan</h1>
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

export default AturanPencacahan;
