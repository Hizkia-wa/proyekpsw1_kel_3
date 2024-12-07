import React, { useState } from "react";
import "./QuestionPage.css";

const LatihanTurunan = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Apa turunan dari f(x) = 3x^2?",
    options: ["3x", "6x", "9x^2", "6x^2"],
    correctOption: "6x",
    explanation: "Turunan dari f(x) = 3x^2 adalah f'(x) = 6x, menggunakan rumus turunan untuk pangkat x^n.",
  },
  {
    question: "Apa turunan dari f(x) = x^3 + 2x?",
    options: ["3x^2 + 2", "3x^3 + 2", "x^2 + 2", "3x^2 + 2x"],
    correctOption: "3x^2 + 2",
    explanation: "Turunan dari f(x) = x^3 + 2x adalah f'(x) = 3x^2 + 2, sesuai dengan aturan turunan dari x^n.",
  },
  {
    question: "Apa turunan dari f(x) = 4x^5?",
    options: ["5x^4", "20x^4", "5x^5", "4x^4"],
    correctOption: "20x^4",
    explanation: "Turunan dari f(x) = 4x^5 adalah f'(x) = 20x^4, menggunakan rumus turunan untuk x^n.",
  },
  {
    question: "Apa turunan dari f(x) = sin(x)?",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correctOption: "cos(x)",
    explanation: "Turunan dari f(x) = sin(x) adalah f'(x) = cos(x).",
  },
  {
    question: "Apa turunan dari f(x) = cos(x)?",
    options: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
    correctOption: "-sin(x)",
    explanation: "Turunan dari f(x) = cos(x) adalah f'(x) = -sin(x).",
  },
  {
    question: "Apa turunan dari f(x) = e^x?",
    options: ["e^x", "e^x + 1", "1", "x^e"],
    correctOption: "e^x",
    explanation: "Turunan dari f(x) = e^x adalah f'(x) = e^x.",
  },
  {
    question: "Apa turunan dari f(x) = ln(x)?",
    options: ["x", "1/x", "ln(x)", "e^x"],
    correctOption: "1/x",
    explanation: "Turunan dari f(x) = ln(x) adalah f'(x) = 1/x.",
  },
  {
    question: "Apa turunan dari f(x) = 5x^4 + 3x^2?",
    options: ["20x^3 + 6x", "20x^3 + 6x^2", "4x^3 + 2x", "4x^3 + 2x^2"],
    correctOption: "20x^3 + 6x",
    explanation: "Turunan dari f(x) = 5x^4 + 3x^2 adalah f'(x) = 20x^3 + 6x.",
  },
  {
    question: "Apa turunan dari f(x) = 7x^3 - 2x + 4?",
    options: ["21x^2 - 2", "21x^2 + 2", "3x^2 - 2", "7x^2 - 2x"],
    correctOption: "21x^2 - 2",
    explanation: "Turunan dari f(x) = 7x^3 - 2x + 4 adalah f'(x) = 21x^2 - 2.",
  },
  {
    question: "Apa turunan dari f(x) = x^2 sin(x)?",
    options: ["x^2 cos(x) + 2x sin(x)", "2x sin(x) + x^2 cos(x)", "2x cos(x) + x^2 sin(x)", "x cos(x) + 2x sin(x)"],
    correctOption: "2x sin(x) + x^2 cos(x)",
    explanation: "Menggunakan aturan perkalian, turunan dari f(x) = x^2 sin(x) adalah f'(x) = 2x sin(x) + x^2 cos(x).",
  },
  {
    question: "Apa turunan dari f(x) = 3x^3 + 2x + 1?",
    options: ["9x^2 + 2", "9x^2 + 1", "6x^2 + 2", "6x^2 + 3"],
    correctOption: "9x^2 + 2",
    explanation: "Turunan dari f(x) = 3x^3 + 2x + 1 adalah f'(x) = 9x^2 + 2.",
  },
  {
      question: "Apa turunan dari f(x) = x^2 + x + 1?",
      options: ["2x + 1", "2x + 2", "x + 2", "2x + 1"],
      correctOption: "2x + 1",
      explanation: "Turunan dari f(x) = x^2 + x + 1 adalah f'(x) = 2x + 1.",
  },
  {
      question: "Apa turunan dari f(x) = 2x^3 - x^2?",
      options: ["6x^2 - 2x", "6x^2 + 2x", "6x^2 - x", "6x^2 - x^2"],
      correctOption: "6x^2 - 2x",
      explanation: "Turunan dari f(x) = 2x^3 - x^2 adalah f'(x) = 6x^2 - 2x.",
  },
  {
      question: "Apa turunan dari f(x) = tan(x)?",
      options: ["sec^2(x)", "cos^2(x)", "sin^2(x)", "sec(x)"],
      correctOption: "sec^2(x)",
      explanation: "Turunan dari f(x) = tan(x) adalah f'(x) = sec^2(x).",
  },
    {
      "question": "Apa turunan dari f(x) = x^2 e^x?",
      "options": ["2x e^x + x^2 e^x", "2x e^x - x^2 e^x", "x^2 e^x", "2x e^x + e^x"],
      "correctOption": "2x e^x + x^2 e^x",
      "explanation": "Menggunakan aturan perkalian, turunan dari f(x) = x^2 e^x adalah f'(x) = 2x e^x + x^2 e^x."
    },
    {
      "question": "Apa turunan dari f(x) = ln(x^2 + 1)?",
      "options": ["2x / (x^2 + 1)", "x / (x^2 + 1)", "2x / (1 + x^2)", "2x"],
      "correctOption": "2x / (x^2 + 1)",
      "explanation": "Turunan dari f(x) = ln(x^2 + 1) menggunakan aturan rantai, yaitu f'(x) = 2x / (x^2 + 1)."
    },
    {
      "question": "Apa turunan dari f(x) = x^3 ln(x)?",
      "options": ["3x^2 ln(x) + x^2", "3x^2 ln(x) + x^3/x", "3x^2 ln(x) + x^2/x", "3x^2 ln(x) + x^3"],
      "correctOption": "3x^2 ln(x) + x^2",
      "explanation": "Menggunakan aturan perkalian, turunan dari f(x) = x^3 ln(x) adalah f'(x) = 3x^2 ln(x) + x^2."
    },
    {
      "question": "Apa turunan dari f(x) = e^(x^2)?",
      "options": ["2x e^(x^2)", "e^(x^2) + 2x", "e^(x^2) * 2x", "2x e^(x)"],
      "correctOption": "2x e^(x^2)",
      "explanation": "Turunan dari f(x) = e^(x^2) menggunakan aturan rantai, yaitu f'(x) = 2x e^(x^2)."
    },
    {
      "question": "Apa turunan dari f(x) = x^2 sin(x^2)?",
      "options": ["2x cos(x^2) + 2x^2 cos(x^2)", "2x sin(x^2) + 2x^2 cos(x^2)", "2x cos(x^2) + 2x^2 sin(x^2)", "2x cos(x^2) + 2x^3 sin(x^2)"],
      "correctOption": "2x sin(x^2) + 2x^2 cos(x^2)",
      "explanation": "Menggunakan aturan perkalian dan rantai, turunan dari f(x) = x^2 sin(x^2) adalah f'(x) = 2x sin(x^2) + 2x^2 cos(x^2)."
    },
    {
      "question": "Apa turunan dari f(x) = tan(x^2)?",
      "options": ["2x sec^2(x^2)", "2x sec^2(x)", "sec^2(x^2)", "2x sec^2(x^2) + sec(x^2)"],
      "correctOption": "2x sec^2(x^2)",
      "explanation": "Turunan dari f(x) = tan(x^2) menggunakan aturan rantai, yaitu f'(x) = 2x sec^2(x^2)."
    }
];

const handleNextQuestion = () => {
  if (currentQuestion < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
    resetSelection();
  }
};

const handlePreviousQuestion = () => {
  if (currentQuestion > 1) {
    setCurrentQuestion(currentQuestion - 1);
    resetSelection();
  }
};

const handleOptionSelect = (option) => {
  setSelectedOption(option);
};

const resetSelection = () => {
  setSelectedOption(null);
  setShowExplanation(false);
};

const handleDropdownChange = (e) => {
  const selectedNumber = parseInt(e.target.value);
  setCurrentQuestion(selectedNumber);
  resetSelection();
};

const handleExplanationClick = () => {
  if (showExplanation) {
    setShowExplanation(false); // Sembunyikan pembahasan tanpa pesan
  } else if (!selectedOption) {
    setShowConfirmation(true); // Tampilkan pesan jika opsi belum dipilih
  } else {
    setShowExplanation(true); // Langsung tampilkan pembahasan jika opsi sudah dipilih
  }
};

const handleConfirmationResponse = (response) => {
  if (response === "yes") {
    setShowExplanation(true); // Tampilkan pembahasan
  }
  setShowConfirmation(false); // Hilangkan pesan
};

return (
  <div className="question-page">
    <div className="question-container">
      <button
        className="oval-button previous-button"
        onClick={handlePreviousQuestion}
        disabled={currentQuestion === 1}
      >
        &larr; Soal Sebelumnya
      </button>
      <div className="question-box">
        <h2>Soal {currentQuestion}</h2>
        <p>{questions[currentQuestion - 1].question}</p>
      </div>
      <button
        className="oval-button next-button"
        onClick={handleNextQuestion}
        disabled={currentQuestion === questions.length}
      >
        Soal Berikutnya &rarr;
      </button>
    </div>

    <div className="interactive-section">
      <div className="dropdown-container">
        <label htmlFor="question-dropdown">Pilih Soal:</label>
        <select
          id="question-dropdown"
          value={currentQuestion}
          onChange={handleDropdownChange}
        >
          {questions.map((_, index) => (
            <option key={index} value={index + 1}>
              Soal {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="options-container">
        {questions[currentQuestion - 1].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === option
                ? option === questions[currentQuestion - 1].correctOption
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="explanation-container">
        <button
          className="explanation-toggle"
          onClick={handleExplanationClick}
        >
          {showExplanation ? "Sembunyikan Pembahasan" : "Lihat Pembahasan"}
        </button>
        {showExplanation && (
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        )}
      </div>
    </div>

    {showConfirmation && (
      <div className="confirmation-popup">
        <div className="popup-content">
          <p>Yakin mau melihat pembahasan sekarang?</p>
          <div className="popup-buttons">
            <button
              className="popup-button no-button"
              onClick={() => handleConfirmationResponse("no")}
            >
              Tidak
            </button>
            <button
              className="popup-button yes-button"
              onClick={() => handleConfirmationResponse("yes")}
            >
              Iya
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}

export default LatihanTurunan;
