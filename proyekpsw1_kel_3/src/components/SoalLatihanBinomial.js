import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanBinomial = () => {
  const questions = [
    {
      question:
        "1. Sebuah koin dilempar 5 kali. Berapa probabilitas mendapatkan tepat 3 sisi kepala (P = 0,5)?",
      options: ["0,15625", "0,3125", "0,375", "0,5", "0,625"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 5, k = 3, p = 0,5
   - C(5, 3) = 5! / (3!(5-3)!) = 10
   - P(X = 3) = 10 * (0,5)^3 * (0,5)^2 = 10 * 0,125 * 0,25 = 0,3125.`,
    },
    {
      question:
        "2. Dalam sebuah ujian, probabilitas siswa menjawab benar suatu soal adalah 0,8. Jika terdapat 10 soal, berapa probabilitas siswa menjawab tepat 8 soal dengan benar?",
      options: ["0,201", "0,302", "0,424", "0,528", "0,637"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 10, k = 8, p = 0,8
   - C(10, 8) = 10! / (8!(10-8)!) = 45
   - P(X = 8) = 45 * (0,8)^8 * (0,2)^2 = 0,424.`,
    },
    {
      question:
        "3. Probabilitas berhasil memproduksi barang sesuai standar adalah 0,7. Jika terdapat 6 barang yang diproduksi, berapa probabilitas hanya 4 barang yang sesuai standar?",
      options: ["0,245", "0,302", "0,324", "0,382", "0,421"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 6, k = 4, p = 0,7
   - C(6, 4) = 6! / (4!(6-4)!) = 15
   - P(X = 4) = 15 * (0,7)^4 * (0,3)^2 = 0,382.`,
    },
    {
      question:
        "4. Dalam percobaan, probabilitas suatu mesin gagal adalah 0,1. Jika mesin tersebut dioperasikan 8 kali, berapa probabilitas tidak ada kegagalan sama sekali?",
      options: ["0,387", "0,472", "0,513", "0,622", "0,656"],
      correctAnswer: 4,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 8, k = 0, p = 0,1
   - C(8, 0) = 1 (karena memilih 0 dari 8 hanya 1 cara)
   - P(X = 0) = 1 * (0,1)^0 * (0,9)^8 = (0,9)^8 = 0,656.`,
    },
    {
      question:
        "5. Probabilitas menang dalam suatu undian adalah 0,2. Jika seseorang mengikuti 5 kali undian, berapa probabilitas hanya menang 1 kali?",
      options: ["0,2048", "0,2457", "0,3276", "0,4096", "0,512"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 5, k = 1, p = 0,2
   - C(5, 1) = 5! / (1!(5-1)!) = 5
   - P(X = 1) = 5 * (0,2)^1 * (0,8)^4 = 5 * 0,2 * 0,4096 = 0,2048.`,
    },
    {
      question:
        "6. Dalam suatu permainan, probabilitas menang adalah 0,6. Jika permainan dilakukan 7 kali, berapa probabilitas menang tepat 5 kali?",
      options: ["0,201", "0,256", "0,302", "0,350", "0,412"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 7, k = 5, p = 0,6
   - C(7, 5) = 21
   - P(X = 5) = 21 * (0,6)^5 * (0,4)^2 = 0,350.`,
    },
    {
      question:
        "7. Dalam populasi, probabilitas individu memiliki golongan darah O adalah 0,4. Jika diambil sampel 5 individu, berapa probabilitas tepat 2 orang memiliki golongan darah O?",
      options: ["0,2304", "0,2592", "0,2880", "0,3125", "0,384"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 5, k = 2, p = 0,4
   - C(5, 2) = 10
   - P(X = 2) = 10 * (0,4)^2 * (0,6)^3 = 0,2592.`,
    },
    {
      question:
        "8. Dalam percobaan, probabilitas keberhasilan adalah 0,3. Jika dilakukan 10 kali percobaan, berapa probabilitas berhasil tepat 4 kali?",
      options: ["0,200", "0,225", "0,250", "0,275", "0,300"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 10, k = 4, p = 0,3
   - C(10, 4) = 210
   - P(X = 4) = 210 * (0,3)^4 * (0,7)^6 = 0,225.`,
    },
    {
      question:
        "9. Dalam sebuah eksperimen, probabilitas kegagalan adalah 0,2. Jika eksperimen dilakukan 8 kali, berapa probabilitas gagal tepat 2 kali?",
      options: ["0,302", "0,328", "0,357", "0,382", "0,402"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Gunakan rumus distribusi binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
   - n = 8, k = 2, p = 0,2
   - C(8, 2) = 28
   - P(X = 2) = 28 * (0,2)^2 * (0,8)^6 = 0,357.`,
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

export default SoalLatihanBinomial;
