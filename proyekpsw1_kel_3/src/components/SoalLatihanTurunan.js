import React, { useState, useRef,} from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanTurunan= () => {
  const questions = [
    {
      question:
        "1. Tentukan turunan dari fungsi f(x) = 3x^4 - 5x^3 + 7x - 2.",
      options: ["12x^3 - 15x^2 + 7", "12x^3 - 15x^2 + 7x", "12x^3 - 7", "15x^2 - 5x + 7"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan turunan untuk setiap suku:
   - Turunan dari 3x^4 adalah 12x^3.
   - Turunan dari -5x^3 adalah -15x^2.
   - Turunan dari 7x adalah 7.
   - Turunan dari -2 adalah 0.
2. Jadi, turunan dari f(x) adalah 12x^3 - 15x^2 + 7.`,
    },
    {
      question:
        "2. Tentukan turunan dari fungsi f(x) = (2x^2 + 3x)(x^3 - x).",
      options: ["5x^4 - x^2 + 6x^3 - 3x", "6x^4 + 6x^3 - x^2 + 3x", "6x^4 - 4x^3 + 3x", "4x^3 - x^2 + 2x"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Gunakan aturan perkalian (Product Rule):
   - u(x) = 2x^2 + 3x, v(x) = x^3 - x.
   - u'(x) = 4x + 3, v'(x) = 3x^2 - 1.
2. f'(x) = u'(x)v(x) + u(x)v'(x).
   f'(x) = (4x + 3)(x^3 - x) + (2x^2 + 3x)(3x^2 - 1).
3. Setelah disederhanakan, hasilnya adalah 6x^4 + 6x^3 - x^2 + 3x.`,
    },
    {
      question:
        "3. Tentukan turunan dari fungsi f(x) = x^3 + 4x^2 - 7x + 5.",
      options: ["3x^2 + 8x - 7", "3x^2 + 8x + 7", "6x^2 - 7", "4x^2 + 8x"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan turunan untuk setiap suku:
   - Turunan dari x^3 adalah 3x^2.
   - Turunan dari 4x^2 adalah 8x.
   - Turunan dari -7x adalah -7.
   - Turunan dari 5 adalah 0.
2. Jadi, turunan dari f(x) adalah 3x^2 + 8x - 7.`,
    },
    {
      question:
        "4. Tentukan turunan dari fungsi f(x) = e^(2x) + ln(x).",
      options: ["2e^(2x) + 1/x", "2e^(2x) + x", "e^(2x) + x", "2e^(2x) + 1"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan turunan untuk fungsi eksponen dan logaritma:
   - Turunan dari e^(2x) adalah 2e^(2x).
   - Turunan dari ln(x) adalah 1/x.
2. Jadi, turunan dari f(x) adalah 2e^(2x) + 1/x.`,
    },
    {
      question:
        "5. Tentukan turunan dari fungsi f(x) = sin(x) + cos(2x).",
      options: ["cos(x) - 2sin(2x)", "cos(x) - sin(2x)", "cos(x) + sin(2x)", "sin(x) + 2cos(2x)"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan turunan untuk fungsi trigonometri:
   - Turunan dari sin(x) adalah cos(x).
   - Turunan dari cos(2x) adalah -2sin(2x).
2. Jadi, turunan dari f(x) adalah cos(x) - 2sin(2x).`,
    },
    {
      question:
        "6. Tentukan turunan dari fungsi f(x) = (x^2 + 1)/(x + 1).",
      options: ["(2x(x + 1) - (x^2 + 1))/(x + 1)^2", "(2x + 1)/(x + 1)^2", "(2x(x + 1) - x^2 - 1)/(x + 1)^2", "2x/(x + 1)^2"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan pembagian (Quotient Rule):
   - u(x) = x^2 + 1, v(x) = x + 1.
   - u'(x) = 2x, v'(x) = 1.
2. f'(x) = [u'(x)v(x) - u(x)v'(x)] / (v(x))^2.
   f'(x) = [(2x)(x + 1) - (x^2 + 1)(1)] / (x + 1)^2.
3. Setelah disederhanakan, hasilnya adalah (2x(x + 1) - (x^2 + 1))/(x + 1)^2.`,
    },
    {
      question:
        "7. Tentukan turunan dari fungsi f(x) = tan(x) + sec^2(x).",
      options: ["sec^2(x) + 2sec^2(x)tan(x)", "sec^2(x) + 2tan(x)", "sec^2(x) + tan(x)", "sec^2(x) + sec^2(x)tan(x)"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan turunan untuk fungsi trigonometri:
   - Turunan dari tan(x) adalah sec^2(x).
   - Turunan dari sec^2(x) adalah 2sec^2(x)tan(x).
2. Jadi, turunan dari f(x) adalah sec^2(x) + 2sec^2(x)tan(x).`,
    },
    {
      question:
        "8. Tentukan turunan dari fungsi f(x) = x/(x^2 + 1).",
      options: ["(x^2 - 1)/(x^2 + 1)^2", "(x^2 + 1 - x^2)/(x^2 + 1)^2", "(x^2 + 1 - x)/(x^2 + 1)^2", "2x/(x^2 + 1)^2"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan pembagian (Quotient Rule):
   - u(x) = x, v(x) = x^2 + 1.
   - u'(x) = 1, v'(x) = 2x.
2. f'(x) = [u'(x)v(x) - u(x)v'(x)] / (v(x))^2.
   f'(x) = [(1)(x^2 + 1) - (x)(2x)] / (x^2 + 1)^2.
3. Setelah disederhanakan, hasilnya adalah (x^2 - 1)/(x^2 + 1)^2.`,
    },
    {
      question:
        "9. Tentukan turunan dari fungsi f(x) = x^5 - 4x^3 + 2x^2 - 7.",
      options: ["5x^4 - 12x^2 + 4x", "5x^4 - 12x^3 + 4x", "5x^4 - 12x^2 + 4x - 7", "5x^4 - 12x^3 + 4x - 7"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan turunan untuk setiap suku:
   - Turunan dari x^5 adalah 5x^4.
   - Turunan dari -4x^3 adalah -12x^2.
   - Turunan dari 2x^2 adalah 4x.
   - Turunan dari -7 adalah 0.
2. Jadi, turunan dari f(x) adalah 5x^4 - 12x^2 + 4x.`,
    },
    {
      question:
        "10. Tentukan turunan dari fungsi f(x) = e^(x^2) + cos(x).",
      options: ["2xe^(x^2) - sin(x)", "2xe^(x^2) + sin(x)", "2xe^(x^2) - cos(x)", "e^(x^2) - sin(x)"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Gunakan aturan turunan untuk fungsi eksponen dan trigonometri:
   - Turunan dari e^(x^2) adalah 2xe^(x^2).
   - Turunan dari cos(x) adalah -sin(x).
2. Jadi, turunan dari f(x) adalah 2xe^(x^2) - sin(x).`,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const questionRefs = useRef([]);

  const handleAnswerClick = (questionIndex, optionIndex) => {
    const isCorrect = optionIndex === questions[questionIndex].correctAnswer;

    // Simpan jawaban yang dipilih
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });

    // Tambahkan kelas bayangan hijau (benar) atau merah (salah)
    const questionCard = questionRefs.current[questionIndex];
    if (questionCard) {
      questionCard.classList.remove("correct", "incorrect");
      questionCard.classList.add(isCorrect ? "correct" : "incorrect");
    }

    // Sembunyikan pembahasan ketika opsi dipilih
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
      <h1>Latihan Soal Statistika</h1>
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

export default SoalLatihanTurunan;
