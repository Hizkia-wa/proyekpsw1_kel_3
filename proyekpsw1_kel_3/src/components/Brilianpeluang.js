import React, { useState } from "react";
import "./BrillianBinomial.css";

const slides = [
  {
    title: "Peluang Munculnya Angka Genap dalam Melempar Dadu",
    formulaArea: "P(A) = Jumlah Kejadian Favorable / Jumlah Total Kejadian",
    question:
      "Berapa peluang muncul angka genap dalam sekali lemparan dadu biasa (angka 1 hingga 6)?",
    inputs: ["Jumlah Kejadian Favorabel", "Jumlah Total Kejadian"],
    calculate: ({ JumlahKejadianFavorabel, JumlahTotalKejadian }) => {
      const favorable = parseInt(JumlahKejadianFavorabel, 10);
      const total = parseInt(JumlahTotalKejadian, 10);

      if (isNaN(favorable) || isNaN(total) || total === 0) {
        return { result: "Error", explanation: "Input tidak valid." };
      }

      const probability = favorable / total;

      return {
        result: probability.toFixed(4),
        explanation: `Langkah penyelesaian:\n1. Jumlah kejadian favorable = ${favorable}\n2. Jumlah total kejadian = ${total}\n3. Peluang = ${favorable} / ${total} = ${probability.toFixed(4)}`,
      };
    },
  },
  {
    title: "Peluang Mengambil Bola Merah dalam Kotak",
    formulaArea: "P(A) = Jumlah Bola Merah / Jumlah Total Bola",
    question:
      "Sebuah kotak berisi 5 bola merah dan 7 bola biru. Berapa peluang mengambil bola merah dalam sekali pengambilan?",
    inputs: ["Jumlah Bola Merah", "Jumlah Total Bola"],
    calculate: ({ JumlahBolaMerah, JumlahTotalBola }) => {
      const redBalls = parseInt(JumlahBolaMerah, 10);
      const totalBalls = parseInt(JumlahTotalBola, 10);

      if (isNaN(redBalls) || isNaN(totalBalls) || totalBalls === 0) {
        return { result: "Error", explanation: "Input tidak valid." };
      }

      const probability = redBalls / totalBalls;

      return {
        result: probability.toFixed(4),
        explanation: `Langkah penyelesaian:\n1. Jumlah bola merah = ${redBalls}\n2. Jumlah total bola = ${totalBalls}\n3. Peluang = ${redBalls} / ${totalBalls} = ${probability.toFixed(4)}`,
      };
    },
  },
  {
    title: "Peluang Munculnya Angka Prima dalam Melempar Dadu",
    formulaArea: "P(A) = Jumlah Angka Prima / Jumlah Total Kejadian",
    question:
      "Berapa peluang muncul angka prima dalam sekali lemparan dadu biasa (angka 1 hingga 6)?",
    inputs: ["Jumlah Angka Prima", "Jumlah Total Kejadian"],
    calculate: ({ JumlahAngkaPrima, JumlahTotalKejadian }) => {
      const primeNumbers = parseInt(JumlahAngkaPrima, 10);
      const totalNumbers = parseInt(JumlahTotalKejadian, 10);

      if (isNaN(primeNumbers) || isNaN(totalNumbers) || totalNumbers === 0) {
        return { result: "Error", explanation: "Input tidak valid." };
      }

      const probability = primeNumbers / totalNumbers;

      return {
        result: probability.toFixed(4),
        explanation: `Langkah penyelesaian:\n1. Jumlah angka prima = ${primeNumbers}\n2. Jumlah total kejadian = ${totalNumbers}\n3. Peluang = ${primeNumbers} / ${totalNumbers} = ${probability.toFixed(4)}`,
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
      <h1 className="main-title">Materi Peluang</h1>
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
