import React, { useState } from "react";
import "./QuestionPage.css";

const LatihanSoalBinomial = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question:
      "Dalam 10 kali lemparan koin, berapa peluang kepala muncul sebanyak 5 kali jika peluang muncul kepala pada satu lemparan adalah 0.5?",
    options: ["0.2461", "0.3024", "0.5000", "0.6000"],
    correctOption: "0.2461",
    explanation:
      "Gunakan rumus binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k). Kombinasi C(10, 5) = 252. P(X=5) = 252 * (0.5)^5 * (0.5)^5 = 0.2461.",
  },
  {
    question:
      "Dalam ujian pilihan ganda dengan 20 soal, berapa peluang siswa menjawab benar 15 soal jika peluang benar untuk setiap soal adalah 0.75?",
    options: ["0.2023", "0.1032", "0.1234", "0.0877"],
    correctOption: "0.2023",
    explanation:
      "Dengan rumus binomial: C(20, 15) * 0.75^15 * 0.25^5. Kombinasi C(20, 15) = 15504. Peluang = 15504 * (0.75)^15 * (0.25)^5 = 0.2023.",
  },
  {
    question:
      "Dalam 5 kali bermain game, berapa peluang menang 3 kali jika peluang menang setiap game adalah 0.4?",
    options: ["0.2304", "0.3456", "0.2765", "0.3379"],
    correctOption: "0.2304",
    explanation:
      "Menggunakan rumus binomial: P(X=3) = C(5, 3) * (0.4)^3 * (0.6)^2. Kombinasi C(5, 3) = 10. Peluang = 10 * (0.4)^3 * (0.6)^2 = 0.2304.",
  },
  {
    question:
      "Dalam 12 kali percobaan, berapa peluang sukses sebanyak 7 kali jika peluang sukses dalam setiap percobaan adalah 0.3?",
    options: ["0.0478", "0.0836", "0.0912", "0.1024"],
    correctOption: "0.0478",
    explanation:
      "Menggunakan rumus binomial: P(X=7) = C(12, 7) * (0.3)^7 * (0.7)^5. Kombinasi C(12, 7) = 792. Peluang = 792 * (0.3)^7 * (0.7)^5 = 0.0478.",
  },
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
};
export default LatihanSoalBinomial;
