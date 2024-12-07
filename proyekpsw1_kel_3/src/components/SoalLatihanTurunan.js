import React, { useState, useRef } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanTurunan = () => {
  const questions = [
    {
      question: "1. Tentukan turunan dari fungsi f(x) = 3x^4 - 5x^3 + 7x - 2.",
      options: [
        "12x^3 - 15x^2 + 7",
        "12x^3 - 15x^2 + 7x",
        "12x^3 - 7",
        "15x^2 - 5x + 7",
      ],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan turunan untuk setiap suku:",
        "   a. Turunan dari 3x^4 adalah 12x^3.",
        "   b. Turunan dari -5x^3 adalah -15x^2.",
        "   c. Turunan dari 7x adalah 7.",
        "   d. Turunan dari -2 adalah 0.",
        "2. Jadi, turunan dari f(x) adalah 12x^3 - 15x^2 + 7.",
      ],
    },
    {
      question: "2. Tentukan turunan dari fungsi f(x) = (2x^2 + 3x)(x^3 - x).",
      options: [
        "5x^4 - x^2 + 6x^3 - 3x",
        "6x^4 + 6x^3 - x^2 + 3x",
        "6x^4 - 4x^3 + 3x",
        "4x^3 - x^2 + 2x",
      ],
      correctAnswer: 1,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan perkalian (Product Rule):",
        "   a. u(x) = 2x^2 + 3x, v(x) = x^3 - x.",
        "   b. u'(x) = 4x + 3, v'(x) = 3x^2 - 1.",
        "2. f'(x) = u'(x)v(x) + u(x)v'(x). => f'(x) = (4x + 3)(x^3 - x) + (2x^2 + 3x)(3x^2 - 1).",
        "3. Setelah disederhanakan, hasilnya adalah 6x^4 + 6x^3 - x^2 + 3x.",
      ],
    },
    {
      question: "3. Tentukan turunan dari fungsi f(x) = x^3 + 4x^2 - 7x + 5.",
      options: ["3x^2 + 8x - 7", "3x^2 + 8x + 7", "6x^2 - 7", "4x^2 + 8x"],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan turunan untuk setiap suku:",
        "   a. Turunan dari x^3 adalah 3x^2.",
        "   b. Turunan dari 4x^2 adalah 8x.",
        "   c. Turunan dari -7x adalah -7.",
        "   d. Turunan dari 5 adalah 0.",
        "2. Jadi, turunan dari f(x) adalah 3x^2 + 8x - 7.",
      ],
    },
    {
      question: "4. Tentukan turunan dari fungsi f(x) = e^(2x) + ln(x).",
      options: ["2e^(2x) + 1/x", "2e^(2x) + x", "e^(2x) + x", "2e^(2x) + 1"],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan turunan untuk fungsi eksponen dan logaritma:",
        "   a. Turunan dari e^(2x) adalah 2e^(2x).",
        "   b. Turunan dari ln(x) adalah 1/x.",
        "2. Jadi, turunan dari f(x) adalah 2e^(2x) + 1/x.",
      ],
    },
    {
      question: "5. Tentukan turunan dari fungsi f(x) = sin(x) + cos(2x).",
      options: [
        "cos(x) - 2sin(2x)",
        "cos(x) - sin(2x)",
        "cos(x) + sin(2x)",
        "sin(x) + 2cos(2x)",
      ],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan turunan untuk fungsi trigonometri:",
        "   a. Turunan dari sin(x) adalah cos(x).",
        "   b. Turunan dari cos(2x) adalah -2sin(2x).",
        "2. Jadi, turunan dari f(x) adalah cos(x) - 2sin(2x).",
      ],
    },
    {
      question: "6. Tentukan turunan dari fungsi f(x) = (x^2 + 1)/(x + 1).",
      options: [
        "(2x(x + 1) - (x^2 + 1))/(x + 1)^2",
        "(2x + 1)/(x + 1)^2",
        "(2x(x + 1) - x^2 - 1)/(x + 1)^2",
        "2x/(x + 1)^2",
      ],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan pembagian (Quotient Rule):",
        "   a. u(x) = x^2 + 1, v(x) = x + 1.",
        "   b. u'(x) = 2x, v'(x) = 1.",
        "2. f'(x) = [u'(x)v(x) - u(x)v'(x)] / (v(x))^2. => f'(x) = [(2x)(x + 1) - (x^2 + 1)(1)] / (x + 1)^2.",
        "3. Setelah disederhanakan, hasilnya adalah (2x(x + 1) - (x^2 + 1))/(x + 1)^2.",
      ],
    },
    {
      question: "7. Tentukan turunan dari fungsi f(x) = tan(x) + sec^2(x).",
      options: [
        "sec^2(x) + 2sec^2(x)tan(x)",
        "sec^2(x) + 2tan(x)",
        "sec^2(x) + tan(x)",
        "sec^2(x) + sec^2(x)tan(x)",
      ],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan turunan untuk fungsi trigonometri:",
        "   a. Turunan dari tan(x) adalah sec^2(x).",
        "   b. Turunan dari sec^2(x) adalah 2sec^2(x)tan(x).",
        "2. Jadi, turunan dari f(x) adalah sec^2(x) + 2sec^2(x)tan(x).",
      ],
    },
    {
      question: "8. Tentukan turunan dari fungsi f(x) = x/(x^2 + 1).",
      options: [
        "(x^2 - 1)/(x^2 + 1)^2",
        "(x^2 + 1 - x^2)/(x^2 + 1)^2",
        "(x^2 + 1 - x)/(x^2 + 1)^2",
        "2x/(x^2 + 1)^2",
      ],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan pembagian (Quotient Rule):",
        "   a. u(x) = x, v(x) = x^2 + 1.",
        "   b. u'(x) = 1, v'(x) = 2x.",
        "2. f'(x) = [u'(x)v(x) - u(x)v'(x)] / (v(x))^2. => f'(x) = [(1)(x^2 + 1) - (x)(2x)] / (x^2 + 1)^2.",
        "3. Setelah disederhanakan, hasilnya adalah (x^2 - 1)/(x^2 + 1)^2.",
      ],
    },
    {
      question: "9. Tentukan turunan dari fungsi f(x) = x^5 - 4x^3 + 2x^2 - 7.",
      options: [
        "5x^4 - 12x^2 + 4x",
        "5x^4 - 12x^3 + 4x",
        "5x^4 - 12x^2 + 4x - 7",
        "5x^4 - 12x^3 + 4x - 7",
      ],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan turunan untuk setiap suku:",
        "   a. Turunan dari x^5 adalah 5x^4.",
        "   b. Turunan dari -4x^3 adalah -12x^2.",
        "   c. Turunan dari 2x^2 adalah 4x.",
        "   d. Turunan dari -7 adalah 0.",
        "2. Jadi, turunan dari f(x) adalah 5x^4 - 12x^2 + 4x.",
      ],
    },
    {
      question: "10. Tentukan turunan dari fungsi f(x) = ln(3x^2 + 1).",
      options: [
        "6x/(3x^2 + 1)",
        "3x/(3x^2 + 1)",
        "2x/(3x^2 + 1)",
        "6x/(3x^2 - 1)",
      ],
      correctAnswer: 0,
      explanation: [
        "Penyelesaian:",
        "1. Gunakan aturan turunan untuk logaritma komposit:",
        "   - Turunan dari ln(u(x)) adalah u'(x)/u(x).",
        "2. u(x) = 3x^2 + 1, u'(x) = 6x.",
        "3. Jadi, turunan dari f(x) adalah 6x/(3x^2 + 1).",
      ],
    },
    {
      "question": "11. Diketahui f(x) = 2x² + 3x - 4. Tentukan nilai x yang memaksimalkan fungsi f(x).",
      "options": ["x = -3/4", "x = -3/2", "x = 3/4", "x = 2/3"],
      "correctAnswer": 0,
      "explanation": "Penyelesaian:\n1. Fungsi f(x) adalah fungsi kuadrat, sehingga untuk memaksimalkan atau meminimalkan, kita mencari titik stasioner (turunan pertama = 0).\n2. f'(x) = 4x + 3, jadi f'(x) = 0 => 4x + 3 = 0 => x = -3/4.\n3. Karena koefisien x² positif (2), maka fungsi ini memiliki titik maksimum pada x = -3/4."
  },
  {
      "question": "12. Tentukan integral tak tentu dari f(x) = 6x² - 4x + 2.",
      "options": ["2x³ - 2x² + 2x + C", "2x³ - 2x² + 3x + C", "3x³ - 2x² + 2x + C", "3x³ - 2x² + x + C"],
      "correctAnswer": 0,
      "explanation": "Penyelesaian:\n1. Integrasi setiap suku: ∫6x² dx = 2x³, ∫-4x dx = -2x², ∫2 dx = 2x.\n2. Jadi, hasil integral adalah 2x³ - 2x² + 2x + C."
  },
  {
      "question": "13. Tentukan turunan pertama dari fungsi f(x) = tan(x) + cos(x).",
      "options": ["sec²(x) - sin(x)", "sec²(x) + sin(x)", "sec²(x) - cos(x)", "sec²(x) + cos(x)"],
      "correctAnswer": 0,
      "explanation": "Penyelesaian:\n1. Turunan dari tan(x) adalah sec²(x), dan turunan dari cos(x) adalah -sin(x).\n2. Jadi, f'(x) = sec²(x) - sin(x)."
  },
  {
      "question": "14. Tentukan titik stasioner dari fungsi f(x) = x³ - 6x² + 9x + 4.",
      "options": ["x = 1, x = 3", "x = -1, x = 3", "x = 1", "x = -1"],
      "correctAnswer": 0,
      "explanation": "Penyelesaian:\n1. Turunan f'(x) = 3x² - 12x + 9.\n2. Set f'(x) = 0 => 3x² - 12x + 9 = 0 => (x - 1)(x - 3) = 0.\n3. Jadi, titik stasionernya adalah x = 1 dan x = 3."
  },
  {
      "question": "15. Diketahui f(x) = x² + 2x - 5 dan g(x) = x³ - 4x + 2. Tentukan turunan dari komposisi fungsi f(g(x)).",
      "options": ["2x + 2", "6x² - 4", "6x² + 2x - 10", "6x² + 2x + 2"],
      "correctAnswer": 2,
      "explanation": "Penyelesaian:\n1. Gunakan aturan rantai untuk turunan komposisi fungsi: (f ∘ g)'(x) = f'(g(x)) * g'(x).\n2. f(x) = x² + 2x - 5, f'(x) = 2x + 2.\n3. g(x) = x³ - 4x + 2, g'(x) = 3x² - 4.\n4. Jadi, (f ∘ g)'(x) = (2g(x) + 2) * (3x² - 4) = 6x² + 2x - 10."
  },
  {
      "question": "16. Tentukan luas daerah yang dibatasi oleh kurva f(x) = x² + 2x - 1 dan garis y = 0 antara x = -1 dan x = 2.",
      "options": ["5/3", "7/3", "9/3", "8/3"],
      "correctAnswer": 1,
      "explanation": "Penyelesaian:\n1. Luas daerah di bawah kurva dihitung dengan integral tak tentu: ∫[a,b] f(x) dx.\n2. Integral dari f(x) = x² + 2x - 1 dari x = -1 hingga x = 2.\n3. Hasil integral: ∫[−1,2] (x² + 2x - 1) dx = [1/3 x³ + x² - x] dari -1 hingga 2 = (8/3 + 4 - 2) - (-1/3 + 1 - 1) = 7/3."
  },
  {
      "question": "17. Tentukan nilai maksimum dari fungsi f(x) = -2x² + 4x + 3.",
      "options": ["3", "5", "7", "9"],
      "correctAnswer": 1,
      "explanation": "Penyelesaian:\n1. Fungsi f(x) adalah fungsi kuadrat dengan a = -2, b = 4, c = 3. Fungsi ini membuka ke bawah, sehingga ada nilai maksimum.\n2. Titik maksimum berada pada x = -b/(2a) = -4/(-4) = 1.\n3. f(1) = -2(1)² + 4(1) + 3 = 5."
  },
  {
      "question": "18. Tentukan nilai limit dari lim(x→0) (sin(x)/x).",
      "options": ["0", "1", "∞", "Tidak terdefinisi"],
      "correctAnswer": 1,
      "explanation": "Penyelesaian:\n1. Limit lim(x→0) (sin(x)/x) adalah limit standar yang dikenal sebagai hasil dari 1.\n2. Jadi, nilai limitnya adalah 1."
  },
  {
      "question": "19. Tentukan turunan pertama dari fungsi f(x) = x / (x² + 1).",
      "options": ["(x² - 1)/(x² + 1)²", "(x² + 1)/(x² + 1)²", "(x² - 1)/(x² + 1)", "(x² + 1)/x²"],
      "correctAnswer": 0,
      "explanation": "Penyelesaian:\n1. Gunakan aturan turunan untuk fungsi pecahan: f'(x) = (v * u' - u * v') / v².\n2. Di sini, u = x dan v = x² + 1. Turunan u adalah u' = 1, dan turunan v adalah v' = 2x.\n3. Jadi, f'(x) = ( (x² + 1) * 1 - x * 2x ) / (x² + 1)² = (x² - 1) / (x² + 1)²."
  },
  {
      "question": "20. Tentukan integral tak tentu dari fungsi f(x) = 5x³ - 4x² + 3x - 2.",
      "options": ["x⁴ - x³ + (3/2)x² - 2x + C", "5x⁴ - 4x³ + (3/2)x² - 2x + C", "5x⁴ - 4x³ + 3x² - 2x + C", "5x⁴ - 4x³ + 3x² + 2x + C"],
      "correctAnswer": 2,
      "explanation": "Penyelesaian:\n1. Integrasi setiap suku: ∫5x³ dx = 5x⁴/4, ∫-4x² dx = -4x³/3, ∫3x dx = 3x²/2, ∫-2 dx = -2x.\n2. Jadi, hasil integral adalah 5x⁴ - 4x³ + 3x² - 2x + C."
  }
  
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
      <h1>Soal Latihan Turunan</h1>
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
            <div className="explanation">
              {question.explanation.map((step, idx) => (
                <p key={idx}>{step}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SoalLatihanTurunan;
