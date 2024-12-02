import React, { useState } from "react";
import "./SoalLatihanStatistika.css";

const LatihanSoalBinomial = () => {
  const questions = [
    {
      question:
        "1. Sebuah koin dilempar 5 kali. Berapa peluang muncul tepat 3 sisi kepala jika peluang muncul kepala adalah 0.5?",
      options: ["0.3125", "0.15625", "0.312", "0.625", "0.125"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. n=5, k=3, p=0.5, q=0.5.
2. P(X=3) = (5 3) * (0.5)^3 * (0.5)^2 = 10 * 0.125 * 0.25 = 0.3125.`,
    },
    {
      question:
        "2. Dalam ujian pilihan ganda dengan 8 soal, peluang menjawab benar setiap soal adalah 0.6. Berapa peluang seorang siswa menjawab tepat 5 soal dengan benar?",
      options: ["0.2787", "0.3025", "0.2100", "0.3307", "0.4500"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. n=8, k=5, p=0.6, q=0.4.
2. P(X=5) = (8 5) * (0.6)^5 * (0.4)^3 ≈ 0.2787.`,
    },
    {
      question:
        "3. Sebuah mesin memiliki peluang gagal memproduksi barang 0.1. Jika mesin memproduksi 12 barang, berapa peluang mesin menghasilkan tepat 2 barang cacat?",
      options: ["0.2314", "0.3541", "0.2584", "0.1938", "0.3121"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
1. n=12, k=2, p=0.1, q=0.9.
2. P(X=2) = (12 2) * (0.1)^2 * (0.9)^10 ≈ 0.1938.`,
    },
    {
      question:
        "4. Dalam percobaan menembak, peluang seorang penembak mengenai sasaran adalah 0.7. Jika ia menembak 6 kali, berapa peluang ia mengenai sasaran sebanyak 4 kali?",
      options: ["0.3241", "0.2898", "0.3810", "0.2756", "0.3347"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. n=6, k=4, p=0.7, q=0.3.
2. P(X=4) = (6 4) * (0.7)^4 * (0.3)^2 ≈ 0.3810.`,
    },
    {
      question:
        "5. Dalam sebuah kelas, peluang siswa mengerjakan PR adalah 0.8. Jika ada 10 siswa, berapa peluang tepat 7 siswa mengerjakan PR?",
      options: ["0.2013", "0.3020", "0.2541", "0.2965", "0.3342"],
      correctAnswer: 4,
      explanation: `Penyelesaian:
1. n=10, k=7, p=0.8, q=0.2.
2. P(X=7) = (10 7) * (0.8)^7 * (0.2)^3 ≈ 0.3342.`,
    },
    {
      question:
        "6. Dalam sebuah eksperimen, peluang sukses adalah 0.4. Jika eksperimen dilakukan 7 kali, berapa peluang mendapatkan 3 sukses?",
      options: ["0.2734", "0.3154", "0.2548", "0.3285", "0.2384"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. n=7, k=3, p=0.4, q=0.6.
2. P(X=3) = (7 3) * (0.4)^3 * (0.6)^4 ≈ 0.2734.`,
    },
    {
      question:
        "7. Sebuah tim sepak bola memiliki peluang menang 0.5. Jika mereka bermain 10 pertandingan, berapa peluang mereka menang tepat 6 kali?",
      options: ["0.2051", "0.3020", "0.2461", "0.2812", "0.2100"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. n=10, k=6, p=0.5, q=0.5.
2. P(X=6) = (10 6) * (0.5)^6 * (0.5)^4 ≈ 0.2461.`,
    },
    {
      question:
        "8. Dalam undian dengan peluang menang 20%, seseorang membeli 4 tiket. Berapa peluang menang 2 kali?",
      options: ["0.1536", "0.2048", "0.1782", "0.1920", "0.1344"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. n=4, k=2, p=0.2, q=0.8.
2. P(X=2) = (4 2) * (0.2)^2 * (0.8)^2 ≈ 0.1536.`,
    },
    {
      question:
        "9. Seorang pemain dadu memiliki peluang mendapatkan angka genap 1/2. Jika ia melempar 5 kali, berapa peluang tepat 3 angka genap?",
      options: ["0.3125", "0.3438", "0.1875", "0.4375", "0.2188"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. n=5, k=3, p=0.5, q=0.5.
2. P(X=3) = (5 3) * (0.5)^3 * (0.5)^2 = 0.3438.`,
    },
    {
      question:
        "10. Dalam survei, peluang seseorang menyukai produk tertentu adalah 0.6. Jika ada 8 orang, berapa peluang 5 orang menyukai produk tersebut?",
      options: ["0.2787", "0.3020", "0.3341", "0.2120", "0.4000"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. n=8, k=5, p=0.6, q=0.4.
2. P(X=5) = (8 5) * (0.6)^5 * (0.4)^3 ≈ 0.3341.`,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  const handleAnswerClick = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });

    setShowExplanation({
      ...showExplanation,
      [questionIndex]: false,
    });
  };

  const handleShowExplanation = (questionIndex) => {
    setShowExplanation({
      ...showExplanation,
      [questionIndex]: true,
    });
  };

  return (
    <div className="container_latihan">
      <h1>Latihan Soal Distribusi Binomial</h1>
      {questions.map((question, index) => (
        <div key={index} className="question-card">
          <h2>{question.question}</h2>
          <div className="options-container">
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`option ${
                  selectedAnswers[index] === optionIndex
                    ? optionIndex === question.correctAnswer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleAnswerClick(index, optionIndex)}
              >
                {option}
              </div>
            ))}
          </div>
          {selectedAnswers[index] !== undefined && (
            <button
              className="btn-show"
              onClick={() => handleShowExplanation(index)}
            >
              Tampilkan Pembahasan
            </button>
          )}
          {showExplanation[index] && (
            <div className="explanation">{question.explanation}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LatihanSoalBinomial;
