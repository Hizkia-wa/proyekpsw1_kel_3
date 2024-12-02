import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoallatihanBinomial = () => {
  const questions = [
    {
      question:
        "1. Dalam percobaan melempar sebuah koin sebanyak 10 kali, berapa peluang munculnya sisi kepala sebanyak 6 kali?",
      options: ["0.5", "0.25", "0.45", "0.75"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Jumlah percobaan (n) = 10.
2. Probabilitas sukses (p) = 0.5 (karena koin seimbang).
3. Probabilitas gagal (q) = 0.5.
4. Jumlah keberhasilan (k) = 6.
Gunakan rumus distribusi binomial:
P(X = k) = C(n, k) * p^k * q^(n-k)
P(X = 6) = C(10, 6) * 0.5^6 * 0.5^4 = 210 * 0.015625 * 0.0625 = 0.2051.
Jadi, peluang munculnya sisi kepala sebanyak 6 kali adalah sekitar 0.2051.`,
    },
    {
      question:
        "2. Dalam percobaan melempar sebuah dadu sebanyak 5 kali, berapa peluang munculnya angka 4 sebanyak 2 kali?",
      options: ["0.15", "0.2", "0.1", "0.3"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Jumlah percobaan (n) = 5.
2. Probabilitas sukses (p) = 1/6 (karena dadu memiliki 6 sisi).
3. Probabilitas gagal (q) = 5/6.
4. Jumlah keberhasilan (k) = 2.
Gunakan rumus distribusi binomial:
P(X = k) = C(n, k) * p^k * q^(n-k)
P(X = 2) = C(5, 2) * (1/6)^2 * (5/6)^3 = 10 * 0.0278 * 0.5787 = 0.1615.
Jadi, peluang munculnya angka 4 sebanyak 2 kali adalah sekitar 0.1615.`,
    },
    {
      question:
        "3. Dalam percakapan tentang distribusi binomial, jika n = 7 dan p = 0.4, berapa peluang munculnya 3 keberhasilan?",
      options: ["0.2", "0.3", "0.4", "0.5"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Jumlah percobaan (n) = 7.
2. Probabilitas sukses (p) = 0.4.
3. Probabilitas gagal (q) = 0.6.
4. Jumlah keberhasilan (k) = 3.
Gunakan rumus distribusi binomial:
P(X = k) = C(n, k) * p^k * q^(n-k)
P(X = 3) = C(7, 3) * 0.4^3 * 0.6^4 = 35 * 0.064 * 0.1296 = 0.288.
Jadi, peluang munculnya 3 keberhasilan adalah sekitar 0.288.`,
    },
    {
      question:
        "4. Dalam percakapan tentang distribusi binomial, jika n = 8 dan p = 0.5, berapa peluang munculnya 4 keberhasilan?",
      options: ["0.3", "0.4", "0.5", "0.6"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Jumlah percobaan (n) = 8.
2. Probabilitas sukses (p) = 0.5.
3. Probabilitas gagal (q) = 0.5.
4. Jumlah keberhasilan (k) = 4.
Gunakan rumus distribusi binomial:
P(X = k) = C(n, k) * p^k * q^(n-k)
P(X = 4) = C(8, 4) * 0.5^4 * 0.5^4 = 70 * 0.0625 * 0.0625 = 0.2734.
Jadi, peluang munculnya 4 keberhasilan adalah sekitar 0.2734.`,
    },
    {
      question:
        "5. Dalam percakapan tentang distribusi binomial, berapa peluang munculnya lebih dari 3 keberhasilan jika n = 6 dan p = 0.5?",
      options: ["0.5", "0.6", "0.7", "0.8"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Jumlah percobaan (n) = 6.
2. Probabilitas sukses (p) = 0.5.
3. Probabilitas gagal (q) = 0.5.
4. Hitung peluang lebih dari 3 keberhasilan (P(X > 3)) dengan mengurangi peluang P(X ≤ 3) dari 1.
P(X > 3) = 1 - P(X ≤ 3).
Gunakan rumus distribusi binomial untuk menghitung P(X ≤ 3):
P(X = 0) = C(6, 0) * 0.5^0 * 0.5^6 = 0.0156.
P(X = 1) = C(6, 1) * 0.5^1 * 0.5^5 = 0.0938.
P(X = 2) = C(6, 2) * 0.5^2 * 0.5^4 = 0.2344.
P(X = 3) = C(6, 3) * 0.5^3 * 0.5^3 = 0.3125.
P(X ≤ 3) = 0.0156 + 0.0938 + 0.2344 + 0.3125 = 0.6563.
Jadi, P(X > 3) = 1 - 0.6563 = 0.3437, yang lebih mendekati 0.4 atau 0.7.`,
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
      <h1>Soal Latihan Distribusi Binomial</h1>
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

export default SoallatihanBinomial;
