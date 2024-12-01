import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanKesebangunan = () => {
  const questions = [
    {
        question: 
            "1. Dua segitiga, ∆ABC dan ∆DEF, kongruen. Jika panjang sisi AB = 6 cm, BC = 8 cm, dan AC = 10 cm, maka berapakah panjang sisi DE pada ∆DEF yang bersesuaian dengan sisi AB?",
        options: ["6 cm", "8 cm", "10 cm", "12 cm"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Karena kedua segitiga kongruen, panjang sisi yang bersesuaian adalah sama.
    2. Sisi AB bersesuaian dengan sisi DE, sehingga panjang DE = panjang AB = 6 cm.`,
    },
    {
        question: 
            "2. ∆PQR dan ∆XYZ sebangun. Jika panjang sisi PQ = 12 cm, QR = 18 cm, dan sisi XY = 8 cm, berapakah panjang sisi YZ?",
        options: ["12 cm", "16 cm", "18 cm", "24 cm"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - PQ/XY = QR/YZ
       - 12/8 = 18/YZ
    2. Selesaikan perbandingan:
       - YZ = (18 × 8) ÷ 12 = 144 ÷ 12 = 16 cm.`,
    },
    {
        question: 
            "3. Diketahui dua segitiga kongruen, ∆ABC dan ∆DEF. Jika sudut A = 40° dan sudut B = 50°, berapakah besar sudut E pada ∆DEF?",
        options: ["40°", "50°", "90°", "60°"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Pada segitiga kongruen, sudut yang bersesuaian adalah sama besar.
    2. Sudut A bersesuaian dengan sudut E, sehingga besar sudut E = 40°.`,
    },
    {
        question: 
            "4. Dua persegi panjang, ABCD dan EFGH, sebangun. Panjang AB = 12 cm, lebar BC = 8 cm, dan panjang EF = 18 cm. Berapakah panjang FG?",
        options: ["9 cm", "12 cm", "18 cm", "24 cm"],
        correctAnswer: 3,
        explanation: `Penyelesaian:
    1. Hubungan sisi-sisi pada bangun sebangun:
       - AB/EF = BC/FG
       - 12/18 = 8/FG
    2. Selesaikan perbandingan:
       - FG = (8 × 18) ÷ 12 = 144 ÷ 12 = 24 cm.`,
    },
    {
        question: 
            "5. ∆ABC dan ∆DEF sebangun. Jika panjang sisi AB = 15 cm, BC = 20 cm, dan panjang sisi DE = 9 cm, berapakah panjang sisi EF?",
        options: ["12 cm", "10 cm", "15 cm", "18 cm"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - AB/DE = BC/EF
       - 15/9 = 20/EF
    2. Selesaikan perbandingan:
       - EF = (20 × 9) ÷ 15 = 180 ÷ 15 = 12 cm.`,
    },
    {
        question: 
            "6. Dua segitiga, ∆ABC dan ∆DEF, sebangun. Jika panjang sisi AB = 8 cm, BC = 6 cm, dan panjang sisi EF = 9 cm, berapakah panjang sisi DE?",
        options: ["6 cm", "9 cm", "12 cm", "8 cm"],
        correctAnswer: 2,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - AB/DE = BC/EF
       - 8/DE = 6/9
    2. Selesaikan perbandingan:
       - DE = (8 × 9) ÷ 6 = 72 ÷ 6 = 12 cm.`,
    },
    {
        question: 
            "7. Dua segitiga kongruen memiliki sisi masing-masing: AB = 5 cm, BC = 12 cm, AC = 13 cm. Berapakah keliling segitiga kongruen lainnya?",
        options: ["30 cm", "25 cm", "20 cm", "35 cm"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Karena kedua segitiga kongruen, panjang semua sisi yang bersesuaian adalah sama.
    2. Keliling segitiga kongruen lainnya = AB + BC + AC = 5 + 12 + 13 = 30 cm.`,
    },
    {
        question: 
            "8. Dua segitiga ∆ABC dan ∆DEF sebangun. Jika panjang sisi AB = 10 cm, BC = 15 cm, dan panjang sisi EF = 12 cm, berapakah panjang sisi DE?",
        options: ["8 cm", "10 cm", "9 cm", "14 cm"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - AB/DE = BC/EF
       - 10/DE = 15/12
    2. Selesaikan perbandingan:
       - DE = (10 × 12) ÷ 15 = 120 ÷ 15 = 8 cm.`,
    },
    {
        question: 
            "9. Diketahui dua trapesium sebangun. Panjang sisi sejajar pada trapesium pertama adalah 10 cm dan 20 cm. Panjang sisi sejajar trapesium kedua adalah 15 cm. Berapakah panjang sisi sejajar lainnya pada trapesium kedua?",
        options: ["30 cm", "25 cm", "20 cm", "10 cm"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Hubungan sisi sejajar pada trapesium sebangun:
       - (10/15) = (20/x)
       - x = (15 × 20) ÷ 10 = 30 cm.`,
    },
    {
        question: 
            "10. Dua persegi sebangun dengan panjang sisi masing-masing 6 cm dan 9 cm. Jika luas persegi pertama adalah 36 cm², berapakah luas persegi kedua?",
        options: ["81 cm²", "64 cm²", "72 cm²", "48 cm²"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Hubungan luas bangun sebangun:
       - Perbandingan luas = (perbandingan sisi)².
       - Luas kedua = (9/6)² × luas pertama = (3/2)² × 36 = (9/4) × 36 = 81 cm².`,
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
      <h1>Latihan Soal Peluang</h1>
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

export default SoalLatihanKesebangunan;
