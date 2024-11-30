import React, { useState } from "react";
import "./QuestionPage.css";

const LatiihanSoalKongruen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question:
        "Dua segitiga dikatakan kongruen jika memiliki sisi-sisi dan sudut-sudut yang bersesuaian sama besar. Jika segitiga ABC memiliki panjang sisi AB = 6 cm, BC = 8 cm, dan AC = 10 cm, maka panjang sisi yang bersesuaian pada segitiga DEF yang kongruen dengan ABC adalah...",
      options: [
        "AB = 6 cm, BC = 8 cm, AC = 10 cm",
        "AB = 8 cm, BC = 6 cm, AC = 10 cm",
        "AB = 10 cm, BC = 8 cm, AC = 6 cm",
        "Tidak ada pilihan yang benar",
        "AB = 6 cm, BC = 10 cm, AC = 8 cm",
      ],
      correctOption: "AB = 6 cm, BC = 8 cm, AC = 10 cm",
      explanation:
        "Segitiga yang kongruen memiliki sisi yang bersesuaian sama panjang. Oleh karena itu, panjang sisi pada segitiga DEF yang kongruen dengan segitiga ABC adalah AB = 6 cm, BC = 8 cm, dan AC = 10 cm.",
    },
    {
      question:
        "Jika dua segitiga memiliki sisi-sisi yang bersesuaian dengan panjang yang berbanding sama, maka segitiga tersebut disebut...",
      options: ["Kongruen", "Sebangun", "Identik", "Sama besar", "Seimbang"],
      correctOption: "Sebangun",
      explanation:
        "Dua segitiga dikatakan sebangun jika memiliki sisi-sisi yang bersesuaian dengan panjang yang berbanding sama, meskipun ukurannya berbeda.",
    },
    {
      question:
        "Dalam segitiga ABC dan DEF yang sebangun, panjang sisi AB = 9 cm, BC = 12 cm, dan rasio kesebangunan adalah 3:2. Berapa panjang sisi DE dan EF?",
      options: [
        "DE = 6 cm, EF = 8 cm",
        "DE = 9 cm, EF = 12 cm",
        "DE = 12 cm, EF = 9 cm",
        "DE = 8 cm, EF = 6 cm",
        "DE = 6 cm, EF = 9 cm",
      ],
      correctOption: "DE = 6 cm, EF = 8 cm",
      explanation:
        "Rasio kesebangunan adalah 3:2. Maka, panjang sisi DE = (2/3) × 9 cm = 6 cm, dan EF = (2/3) × 12 cm = 8 cm.",
    },
    {
      question:
        "Segitiga ABC dan PQR adalah kongruen. Jika ∠A = 50° dan ∠B = 60°, maka besar ∠R adalah...",
      options: ["70°", "80°", "90°", "60°", "50°"],
      correctOption: "70°",
      explanation:
        "Pada segitiga, jumlah sudut adalah 180°. Maka, ∠C = 180° - (50° + 60°) = 70°. Karena segitiga kongruen, ∠R = ∠C = 70°.",
    },
    {
      question:
        "Jika dua segitiga memiliki dua pasang sudut yang bersesuaian sama besar, maka segitiga tersebut disebut...",
      options: [
        "Sebangun",
        "Kongruen",
        "Serupa",
        "Sama besar",
        "Tidak dapat ditentukan",
      ],
      correctOption: "Sebangun",
      explanation:
        "Dua segitiga dengan dua pasang sudut yang bersesuaian sama besar adalah sebangun, karena sudut ketiga otomatis sama.",
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
            onClick={() => setShowExplanation(!showExplanation)}
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
    </div>
  );
};

export default LatiihanSoalKongruen;
