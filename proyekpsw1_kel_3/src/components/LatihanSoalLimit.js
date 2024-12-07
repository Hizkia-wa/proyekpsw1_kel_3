import React, { useState } from "react";
import "./QuestionPage.css";

const LatihanSoalLimit = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Diketahui 𝑓(𝑥)=x^2−4/x−2. Tentukan lim⁡ x→2 𝑓(𝑥).",
    options: ["0", "2", "4", "6"],
    correctOption: "4",
    explanation:
      "Faktorkan pembilang menjadi (x-2)(x+2), lalu sederhanakan. hasilnya adalah 𝑓(𝑥)=x+2, maka lim x→2 𝑓(𝑥)=2+2=4.)",
  },
  {
    question: "Hitung nilai lim⁡ x→∞ 2x+3/5x-4.",
    options: ["0", "2/5", "1", "∞"],
    correctOption: "2/5",
    explanation:
      "Bagi pembilang dan penyebut dengan x, hasilnya adalah 2/5.",
  },
  {
    question: "Diketahui g(x)=x^2−3x+2. Tentukan lim x→1​ g(x).",
    options: ["0", "1", "2", "-2"],
    correctOption: "0",
    explanation:
      " Substitusi langsung x=1, hasilnya g(1)=1^2−3(1)+2=0.",
  },
  {
    question: "lim x→0 1−cos(x)/x^2 =?",
    options: ["∞", "tidak terdefinisi", "0", "1"],
    correctOption: "1",
    explanation:
      "Pembahasan: Gunakan identitas trigonometri: lim x→0 1−cos(x)/x^2 = 1/2.",
  },
  {
    question: "lim x→3 x^2−9​/x-3 =?",
    options: ["0", "9", "6", "12"],
    correctOption: "6",
    explanation:
      "Faktorkan x^2−9 menjadi (x−3)(x+3), lalu sederhanakan.",
  },
  {
    question: "x→0 lim tan(x)/x =?",
    options: ["1", "0", "-1", "∞"],
    correctOption: "1",
    explanation:
      "Gunakan sifat limit: lim x→0 tan(x)/x =1.",
  },
  {
    question: "lim x→0 e^x −1/x =?",
    options: ["1", "0", "e", "tidak terdefinisi"],
    correctOption: "1",
    explanation:
      "Mean = Σ(f * x) / Σf. Asumsikan nilai tengah kelas: {2, 4, 6, 8}. Mean = (2*2 + 4*3 + 6*5 + 8*10) / 20 = 7.",
  },
  {
    question: "lim x→∞ 3x^3+2x/5x^3-x =?",
    options: ["∞", "0", "1", "3/5"],
    correctOption: "3/5",
    explanation:
      "Bagi semua suku dengan pangkat tertinggi, yaitu 𝑥^3",
  },
  {
    question: "lim x→0 sin^2(x)/x^2 =?",
    options: ["0", "-1", "1", "1/2"],
    correctOption: "nilai tengah kelas",
    explanation:
      "Modus pada data berkelompok dihitung menggunakan kelas dengan frekuensi tertinggi.",
  },
  {question:
      "lim x→2 x^3−8/x-2 =?",
    options: [ "4", "8", "12", "16", ],
    correctOption: "12",
    explanation:
      "Faktorkan x^3−8 menjadi (x−2)(x^2+2x+4), lalu substitusi x=2.",
  },
  {
    question: "Hitung nilai lim x→0 (sin(x)−x)/x^3",
    options: ["0", "1", "-1", "∞"],
    correctOption: "0",
    explanation: "Gunakan ekspansi deret Taylor untuk sin(x) dan sederhanakan.",
  },
  {
    question: "Tentukan nilai lim x→0 (1 - cos(x)) / x^4",
    options: ["0", "1/2", "∞", "1"],
    correctOption: "1/2",
    explanation: "Gunakan identitas trigonometri dan sederhanakan untuk mendapatkan hasil.",
  },
  {
    question: "Hitung nilai lim x→∞ (3x^2 + 5x - 2)/(4x^2 - 7x + 1)",
    options: ["3/4", "2/5", "1", "∞"],
    correctOption: "3/4",
    explanation: "Bagi pembilang dan penyebut dengan x² dan temukan hasilnya.",
  },
  {
    question: "Tentukan nilai lim x→2 (x^3 − 8)/(x^2 − 4)",
    options: ["0", "1", "2", "4"],
    correctOption: "2",
    explanation: "Faktorkan pembilang dan penyebut, kemudian substitusi x = 2.",
  },
  {
    question: "Hitung nilai lim x→∞ (x^4 - 3x^2 + 1)/(2x^4 + 5x - 3)",
    options: ["1/2", "1", "0", "∞"],
    correctOption: "1/2",
    explanation: "Bagi pembilang dan penyebut dengan x⁴, temukan hasilnya.",
  },
  {
    question: "Tentukan nilai lim x→0 (e^x − 1 − x) / x^2",
    options: ["1/2", "0", "1", "∞"],
    correctOption: "1/2",
    explanation: "Gunakan ekspansi deret Taylor untuk e^x dan sederhanakan.",
  },
  {
    question: "Hitung nilai lim x→∞ (x^2 + 5x - 4)/(2x^2 + 3x + 1)",
    options: ["1/2", "5/3", "1", "∞"],
    correctOption: "1/2",
    explanation: "Bagi pembilang dan penyebut dengan x², temukan hasilnya.",
  },
  {
    question: "Tentukan nilai lim x→∞ (4x^3 − x^2 + 3x)/(2x^3 − 3x + 5)",
    options: ["2", "1", "4/2", "∞"],
    correctOption: "2",
    explanation: "Bagi pembilang dan penyebut dengan x³ dan temukan hasilnya.",
  },
  {
    question: "Hitung nilai lim x→0 (x − sin(x)) / x^3",
    options: ["0", "1", "1/6", "∞"],
    correctOption: "1/6",
    explanation: "Gunakan ekspansi deret Taylor untuk sin(x) dan sederhanakan.",
  },
  {
    question: "Tentukan nilai lim x→∞ (3x^2 + x - 5)/(2x^2 + 6x + 7)",
    options: ["3/2", "1", "∞", "0"],
    correctOption: "3/2",
    explanation: "Bagi pembilang dan penyebut dengan x², temukan hasilnya.",
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
}
export default LatihanSoalLimit;