import React, { useState } from "react";
import "./QuestionPage.css";

const LatihanSoalKesebangunan = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Dua segitiga dikatakan kongruen jika?",
    options: [
      "Semua sisinya sama panjang",
      "Semua sudutnya sama besar",
      "Sisi dan sudutnya sama besar secara berurutan",
      "Memiliki bentuk yang mirip",
    ],
    correctOption: "Sisi dan sudutnya sama besar secara berurutan",
    explanation:
      "Segitiga kongruen memiliki pasangan sisi dan sudut yang sama besar secara berurutan.",
  },
  {
    question: "Segitiga ABC ~ segitiga DEF. Jika AB = 6 cm, AC = 9 cm, dan DE = 4 cm, berapa panjang DF?",
    options: ["6 cm", "8 cm", "9 cm", "12 cm"],
    correctOption: "6 cm",
    explanation:
      "Karena segitiga tersebut sebangun, perbandingan sisi-sisinya adalah AB/DE = AC/DF. Maka, 6/4 = 9/DF. DF = (9 * 4)/6 = 6 cm.",
  },
  {
    question: "Jika ΔABC ≅ ΔPQR, maka pernyataan yang benar adalah?",
    options: [
      "Sudut A = Sudut P, Sudut B = Sudut Q, Sudut C = Sudut R",
      "AB = QR, BC = PR, AC = PQ",
      "Segitiga tidak sebangun",
      "ΔABC lebih besar dari ΔPQR",
    ],
    correctOption: "Sudut A = Sudut P, Sudut B = Sudut Q, Sudut C = Sudut R",
    explanation:
      "Pada segitiga kongruen, sudut yang bersesuaian memiliki besar yang sama, begitu juga panjang sisi yang bersesuaian.",
  },
  {
    question: "Jika ΔXYZ ~ ΔABC, maka perbandingan luas kedua segitiga adalah?",
    options: ["sama dengan perbandingan sisi", "kuadrat dari perbandingan sisi", "terbalik dari perbandingan sisi", "tidak ada hubungan"],
    correctOption: "kuadrat dari perbandingan sisi",
    explanation:
      "Perbandingan luas segitiga yang sebangun adalah kuadrat dari perbandingan sisi-sisi yang bersesuaian.",
  },
  {
    question: "Syarat kesebangunan segitiga adalah?",
    options: [
      "Sama sisi",
      "Sudut-sudut yang bersesuaian sama besar",
      "Perbandingan sisi-sisi yang bersesuaian sama panjang",
      "Sudut-sudut bersesuaian sama besar dan perbandingan sisi-sisi bersesuaian sama panjang",
    ],
    correctOption: "Sudut-sudut bersesuaian sama besar dan perbandingan sisi-sisi bersesuaian sama panjang",
    explanation:
      "Kesebangunan segitiga memerlukan syarat sudut bersesuaian sama besar dan sisi bersesuaian memiliki perbandingan yang sama.",
  },
  {
    question: "Jika dua persegi panjang memiliki panjang sisi berbanding 2:3, berapa perbandingan luasnya?",
    options: ["2:3", "4:9", "3:2", "9:4"],
    correctOption: "4:9",
    explanation:
      "Perbandingan luas bangun sebangun adalah kuadrat dari perbandingan sisi, yaitu \(2^2 : 3^2 = 4 : 9\).",
  },
  {
    question: "Dua lingkaran dikatakan sebangun jika?",
    options: [
      "Memiliki jari-jari yang sama panjang",
      "Perbandingan jari-jari keduanya sama",
      "Memiliki diameter yang sama",
      "Memiliki keliling yang sama",
    ],
    correctOption: "Perbandingan jari-jari keduanya sama",
    explanation:
      "Lingkaran selalu sebangun satu sama lain karena semua lingkaran memiliki bentuk yang sama, dan perbandingan jari-jari menentukan kesebangunan.",
  },
  {
    question: "Pada ΔABC ~ ΔDEF, jika perbandingan sisi AB:DE = 3:5, berapa perbandingan keliling kedua segitiga?",
    options: ["3:5", "9:25", "5:3", "15:25"],
    correctOption: "3:5",
    explanation:
      "Perbandingan keliling segitiga sebangun sama dengan perbandingan sisi-sisi yang bersesuaian, yaitu 3:5.",
  },
  {
    question: "Dua persegi selalu kongruen jika?",
    options: [
      "Luasnya sama",
      "Sisinya sama panjang",
      "Memiliki bentuk yang sama",
      "Sudut-sudutnya sama besar",
    ],
    correctOption: "Sisinya sama panjang",
    explanation:
      "Dua persegi dikatakan kongruen jika sisi-sisi yang bersesuaian sama panjang.",
  },
  {
    question:
      "Segitiga PQR memiliki panjang sisi PQ=5 cm, PR=8 cm, dan QR=6 cm. Segitiga ini kongruen dengan segitiga lain jika?",
    options: [
      "Sudut-sudutnya sama besar",
      "Sisi-sisinya sama panjang",
      "Perbandingan sisi-sisinya sama",
      "Luasnya sama",
    ],
    correctOption: "Sisi-sisinya sama panjang",
    explanation:
      "Untuk kongruen, semua sisi yang bersesuaian harus sama panjang, bukan hanya memiliki perbandingan yang sama.",
  },
    {
      "question": "Jika panjang sisi segitiga pertama adalah 3 cm, 4 cm, dan 5 cm, dan segitiga kedua kongruen, berapa panjang sisi segitiga kedua?",
      "options": ["3 cm, 4 cm, 5 cm", "6 cm, 8 cm, 10 cm", "3 cm, 5 cm, 7 cm", "2 cm, 4 cm, 6 cm"],
      "correctOption": "3 cm, 4 cm, 5 cm",
      "explanation": "Karena kedua segitiga kongruen, sisi-sisinya pasti sama panjang, yaitu 3 cm, 4 cm, dan 5 cm."
    },
    {
      "question": "Segitiga ABC memiliki panjang sisi AB = 8 cm, BC = 6 cm, dan AC = 10 cm. Jika segitiga DEF kongruen dengan segitiga ABC, maka panjang sisi DE =?",
      "options": ["8 cm", "6 cm", "10 cm", "semua di atas"],
      "correctOption": "semua di atas",
      "explanation": "Karena segitiga tersebut kongruen, panjang sisi-sisi segitiga DEF sama dengan sisi-sisi segitiga ABC, yaitu 8 cm, 6 cm, dan 10 cm."
    },
    {
      "question": "Jika perbandingan panjang sisi segitiga ABC dan DEF adalah 2:3, berapa perbandingan luas segitiga tersebut?",
      "options": ["2:3", "4:9", "9:4", "3:2"],
      "correctOption": "4:9",
      "explanation": "Perbandingan luas segitiga yang sebangun adalah kuadrat dari perbandingan sisi, yaitu 2^2 : 3^2 = 4 : 9."
    },
    {
      "question": "Pada segitiga ABC dan DEF, perbandingan panjang sisi AB : DE adalah 5:7. Jika panjang AB = 10 cm, maka panjang DE adalah?",
      "options": ["14 cm", "12 cm", "15 cm", "17 cm"],
      "correctOption": "14 cm",
      "explanation": "Karena perbandingan sisi AB : DE = 5 : 7, maka panjang DE = (7/5) * 10 = 14 cm."
    },
    {
      "question": "Jika dua segitiga dikatakan kongruen, maka apa yang dapat kita simpulkan tentang keliling kedua segitiga?",
      "options": ["Keliling segitiga pertama lebih besar", "Keliling segitiga kedua lebih besar", "Keliling kedua segitiga sama", "Tidak ada hubungan antara keliling"],
      "correctOption": "Keliling kedua segitiga sama",
      "explanation": "Karena segitiga kongruen memiliki sisi yang bersesuaian sama panjang, maka keliling kedua segitiga akan sama."
    },
    {
      "question": "Segitiga A memiliki sisi AB = 7 cm, BC = 5 cm, dan AC = 9 cm. Segitiga B adalah kongruen dengan segitiga A. Berapa panjang sisi AB pada segitiga B?",
      "options": ["7 cm", "5 cm", "9 cm", "12 cm"],
      "correctOption": "7 cm",
      "explanation": "Karena segitiga B kongruen dengan segitiga A, maka panjang sisi AB pada segitiga B adalah sama, yaitu 7 cm."
    },
    {
      "question": "Dua segitiga sebangun memiliki perbandingan sisi 4:6. Jika panjang sisi segitiga pertama adalah 8 cm, berapa panjang sisi segitiga kedua?",
      "options": ["12 cm", "10 cm", "14 cm", "16 cm"],
      "correctOption": "12 cm",
      "explanation": "Karena perbandingan sisi kedua segitiga adalah 4:6, maka panjang sisi segitiga kedua adalah (6/4) * 8 = 12 cm."
    },
    {
      "question": "Jika dua segitiga dikatakan sebangun, maka perbandingan luas segitiga tersebut adalah?",
      "options": ["Sama dengan perbandingan sisi", "Kuadrat dari perbandingan sisi", "Perbandingan sisi terbalik", "Tidak ada hubungan"],
      "correctOption": "Kuadrat dari perbandingan sisi",
      "explanation": "Perbandingan luas dua segitiga sebangun adalah kuadrat dari perbandingan sisi yang bersesuaian."
    },
    {
      "question": "Jika panjang sisi-sisi dua segitiga A dan B adalah 4:5, maka perbandingan keliling kedua segitiga tersebut adalah?",
      "options": ["5:4", "4:5", "16:25", "20:25"],
      "correctOption": "4:5",
      "explanation": "Perbandingan keliling segitiga yang sebangun adalah sama dengan perbandingan sisi-sisi yang bersesuaian, yaitu 4:5."
    },
    {
      "question": "Segitiga PQR dan ABC dikatakan kongruen. Jika panjang PQ = 7 cm, QR = 8 cm, dan PR = 10 cm, maka panjang sisi segitiga ABC adalah?",
      "options": ["7 cm, 8 cm, 10 cm", "10 cm, 8 cm, 7 cm", "5 cm, 6 cm, 7 cm", "7 cm, 9 cm, 10 cm"],
      "correctOption": "7 cm, 8 cm, 10 cm",
      "explanation": "Karena segitiga PQR dan ABC kongruen, panjang sisi-sisinya pasti sama, yaitu 7 cm, 8 cm, dan 10 cm."
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
};

export default LatihanSoalKesebangunan;
