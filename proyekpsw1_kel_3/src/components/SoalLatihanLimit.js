import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanLimit = () => {
  const questions = [
    {
        question: 
            "1. Hitung turunan pertama dari fungsi f(x) = 3x² + 5x - 2.",
        options: ["3x + 5", "6x + 5", "6x - 5", "5x + 6"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
1. Gunakan aturan turunan: f'(x) = d/dx [3x² + 5x - 2].
   - Turunan 3x² adalah 6x.
   - Turunan 5x adalah 5.
   - Turunan -2 adalah 0 (konstanta).
2. Jadi, f'(x) = 6x + 5.`,
    },
    {
        question: 
            "2. Hitung turunan pertama dari fungsi g(x) = x³ - 4x² + 7.",
        options: ["3x² - 4x", "3x² - 8x", "2x³ - 4x²", "x² - 8x"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
1. Gunakan aturan turunan: g'(x) = d/dx [x³ - 4x² + 7].
   - Turunan x³ adalah 3x².
   - Turunan -4x² adalah -8x.
   - Turunan +7 adalah 0 (konstanta).
2. Jadi, g'(x) = 3x² - 8x.`,
    },
    {
        question: 
            "3. Jika h(x) = 2x⁴ + 3x³ - x + 6, berapakah nilai h'(2)?",
        options: ["38", "52", "66", "80"],
        correctAnswer: 2,
        explanation: `Penyelesaian:
1. Hitung turunan pertama: h'(x) = d/dx [2x⁴ + 3x³ - x + 6].
   - Turunan 2x⁴ adalah 8x³.
   - Turunan 3x³ adalah 9x².
   - Turunan -x adalah -1.
   - Turunan +6 adalah 0.
   Jadi, h'(x) = 8x³ + 9x² - 1.
2. Substitusi x = 2: h'(2) = 8(2³) + 9(2²) - 1 = 64 + 36 - 1 = 99.`,
    },
    {
        question: 
            "4. Hitung turunan kedua dari fungsi f(x) = 5x³ - 2x² + x - 7.",
        options: ["30x - 4", "15x² - 4x", "15x - 2", "10x - 4"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
1. Hitung turunan pertama: f'(x) = d/dx [5x³ - 2x² + x - 7].
   - Turunan 5x³ adalah 15x².
   - Turunan -2x² adalah -4x.
   - Turunan x adalah 1.
   Jadi, f'(x) = 15x² - 4x + 1.
2. Hitung turunan kedua: f''(x) = d/dx [15x² - 4x + 1].
   - Turunan 15x² adalah 30x.
   - Turunan -4x adalah -4.
   - Turunan +1 adalah 0.
   Jadi, f''(x) = 30x - 4.`,
    },
    {
        question: 
            "5. Jika y = ln(x² + 1), berapakah dy/dx?",
        options: ["1/(x² + 1)", "2x/(x² + 1)", "2/(x² + 1)", "x/(x² + 1)"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
1. Gunakan aturan turunan fungsi logaritma: dy/dx = 1/(u) × du/dx.
   - Di sini, u = x² + 1.
   - Turunan u terhadap x adalah du/dx = 2x.
2. Jadi, dy/dx = (1/(x² + 1)) × (2x) = 2x/(x² + 1).`,
    },
    {
        question: 
            "6. Hitung turunan pertama dari fungsi f(x) = √x + x².",
        options: ["1/(2√x) + 2x", "1/√x + 2", "1/(2√x) + 2", "x/(2√x) + 2x"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Pecah fungsi menjadi dua bagian: f(x) = √x + x².
       - Turunan √x adalah 1/(2√x).
       - Turunan x² adalah 2x.
    2. Jadi, f'(x) = 1/(2√x) + 2x.`,
    },
    {
        question: 
            "7. Jika y = e^(2x), berapakah dy/dx?",
        options: ["e^(2x)", "2e^(2x)", "e^(x²)", "2x * e^(2x)"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Gunakan aturan turunan eksponensial: dy/dx = e^(u) * du/dx.
       - Di sini, u = 2x.
       - Turunan u terhadap x adalah du/dx = 2.
    2. Jadi, dy/dx = e^(2x) × 2 = 2e^(2x).`,
    },
    {
        question: 
            "8. Hitung turunan kedua dari fungsi f(x) = x³ - 6x² + 9x + 4.",
        options: ["6x - 12", "6x - 6", "12x - 12", "6x - 9"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Hitung turunan pertama: f'(x) = d/dx [x³ - 6x² + 9x + 4].
       - Turunan x³ adalah 3x².
       - Turunan -6x² adalah -12x.
       - Turunan 9x adalah 9.
       Jadi, f'(x) = 3x² - 12x + 9.
    2. Hitung turunan kedua: f''(x) = d/dx [3x² - 12x + 9].
       - Turunan 3x² adalah 6x.
       - Turunan -12x adalah -12.
       Jadi, f''(x) = 6x - 12.`,
    },
    {
        question: 
            "9. Jika h(x) = ln(x) / x, berapakah turunan pertama h'(x)?",
        options: ["(1 - ln(x))/x²", "(ln(x) + 1)/x²", "(ln(x) - 1)/x²", "1/(x ln(x))"],
        correctAnswer: 2,
        explanation: `Penyelesaian:
    1. Gunakan aturan turunan fungsi pecahan: h(x) = u/v, maka h'(x) = (v * u' - u * v') / v².
       - Di sini, u = ln(x), v = x.
       - Turunan u adalah u' = 1/x.
       - Turunan v adalah v' = 1.
    2. Substitusi ke rumus: h'(x) = (x * (1/x) - ln(x) * 1) / x².
       - Sederhanakan: h'(x) = (1 - ln(x)) / x².`,
    },
    {
        question: 
            "10. Hitung turunan pertama dari f(x) = sin(2x) + cos(3x).",
        options: ["2cos(2x) - 3sin(3x)", "2sin(2x) - 3cos(3x)", "cos(2x) + sin(3x)", "2cos(2x) + 3cos(3x)"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Gunakan aturan turunan trigonometri:
       - Turunan sin(kx) adalah kcos(kx).
       - Turunan cos(kx) adalah -ksin(kx).
    2. Jadi, f'(x) = 2cos(2x) - 3sin(3x).`,
    },
    {
        question: 
            "11. Jika y = (3x² + 4)³, berapakah dy/dx?",
        options: ["6x(3x² + 4)²", "18x(3x² + 4)²", "12x(3x² + 4)³", "9x(3x² + 4)"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Gunakan aturan rantai: y = u³, maka dy/dx = 3u² * du/dx.
       - Di sini, u = 3x² + 4.
       - Turunan u adalah du/dx = 6x.
    2. Jadi, dy/dx = 3(3x² + 4)² * 6x = 18x(3x² + 4)².`,
    },
    {
        question: 
            "12. Hitung turunan kedua dari fungsi f(x) = sin(x).",
        options: ["sin(x)", "-cos(x)", "-sin(x)", "cos(x)"],
        correctAnswer: 2,
        explanation: `Penyelesaian:
    1. Hitung turunan pertama: f'(x) = cos(x).
    2. Hitung turunan kedua: f''(x) = d/dx [cos(x)].
       - Turunan cos(x) adalah -sin(x).
       Jadi, f''(x) = -sin(x).`,
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
      <h1>Soal Latihan Limit</h1>
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

export default SoalLatihanLimit;
