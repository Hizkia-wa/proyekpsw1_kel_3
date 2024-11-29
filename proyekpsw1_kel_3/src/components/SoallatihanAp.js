import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanStatistika = () => {
  const questions = [
    {
      question:
        "1. Dalam sebuah perlombaan, terdapat 5 peserta. Berapa banyak cara untuk menentukan juara 1, 2, dan 3?",
      options: ["20", "60", "120", "210", "360"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Juara 1 dapat dipilih dengan 5 cara, juara 2 dengan 4 cara, dan juara 3 dengan 3 cara.
2. Total cara = 5 × 4 × 3 = 60.`,
    },
    {
      question:
        "2. Berapa banyak susunan berbeda yang dapat dibuat dari huruf-huruf pada kata 'LULUS'?",
      options: ["60", "120", "240", "360", "720"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Kata 'LULUS' memiliki 5 huruf, dengan 'L' muncul 2 kali dan 'U' muncul 2 kali.
2. Banyak susunan = 5! ÷ (2! × 2!) = 120 ÷ 4 = 30.`,
    },
    {
      question:
        "3. Dalam suatu kelompok terdapat 8 orang. Berapa banyak cara memilih 3 orang untuk membentuk tim?",
      options: ["28", "36", "56", "64", "72"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan rumus kombinasi: C(n, r) = n! / (r! × (n - r)!).
2. C(8, 3) = 8! / (3! × (8 - 3)!) = (8 × 7 × 6) ÷ (3 × 2 × 1) = 56.`,
    },
    {
      question:
        "4. Dalam sebuah kode sandi terdiri dari 4 angka, di mana setiap angka dapat dipilih dari 0-9 tanpa pengulangan. Berapa banyak kode sandi yang mungkin?",
      options: ["3024", "5040", "7200", "10000", "12000"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Angka pertama dapat dipilih dengan 10 cara, angka kedua 9 cara, angka ketiga 8 cara, dan angka keempat 7 cara.
2. Total cara = 10 × 9 × 8 × 7 = 5040.`,
    },
    {
      question:
        "5. Dalam suatu kelas terdapat 6 siswa. Berapa banyak cara untuk menyusun mereka dalam satu baris?",
      options: ["120", "360", "480", "720", "840"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
1. Banyak susunan = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.`,
    },
    {
      question:
        "6. Berapa banyak cara memilih 2 orang dari 10 orang jika urutan tidak diperhatikan?",
      options: ["40", "45", "50", "55", "60"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Gunakan rumus kombinasi: C(n, r) = n! / (r! × (n - r)!).
2. C(10, 2) = 10! / (2! × (10 - 2)!) = (10 × 9) ÷ 2 = 45.`,
    },
    {
      question:
        "7. Berapa banyak cara memilih 3 huruf dari kata 'ABCDE' jika urutan diperhatikan?",
      options: ["30", "40", "50", "60", "70"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
1. Gunakan rumus permutasi: P(n, r) = n! / (n - r)!.
2. P(5, 3) = 5! / (5 - 3)! = (5 × 4 × 3) = 60.`,
    },
    {
      question:
        "8. Dalam sebuah pesta, terdapat 10 orang. Berapa banyak cara memilih ketua dan wakil ketua?",
      options: ["80", "90", "100", "110", "120"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Ketua dapat dipilih dengan 10 cara, wakil ketua dengan 9 cara.
2. Total cara = 10 × 9 = 90.`,
    },
    {
      question:
        "9. Berapa banyak cara menyusun huruf pada kata 'MELON' jika semua huruf berbeda?",
      options: ["60", "120", "240", "360", "720"],
      correctAnswer: 4,
      explanation: `Penyelesaian:
1. Karena semua huruf berbeda, banyak susunan = 5! = 5 × 4 × 3 × 2 × 1 = 120.`,
    },
    {
      question:
        "10. Dalam sebuah lomba lari, terdapat 12 peserta. Berapa banyak cara untuk memilih 3 pemenang (tanpa urutan)?",
      options: ["220", "320", "420", "520", "620"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan rumus kombinasi: C(n, r) = n! / (r! × (n - r)!).
2. C(12, 3) = 12! / (3! × (12 - 3)!) = (12 × 11 × 10) ÷ (3 × 2 × 1) = 220.`,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const questionRefs = useRef([]);

  const handleAnswerClick = (questionIndex, optionIndex) => {
    const isCorrect = optionIndex === questions[questionIndex].correctAnswer;

    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });

    const questionCard = questionRefs.current[questionIndex];
    if (questionCard) {
      questionCard.classList.remove("correct", "incorrect");
      questionCard.classList.add(isCorrect ? "correct" : "incorrect");
    }

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
      <h1>Soal Latihan Aturan Pencacahan</h1>
      <div className="navigation">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`nav-item ${
              selectedAnswers[index] !== undefined ? "active" : ""
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {questions.map((question, index) => (
        <div
          key={index}
          ref={(el) => (questionRefs.current[index] = el)}
          className="question-card"
        >
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

export default SoalLatihanStatistika;
