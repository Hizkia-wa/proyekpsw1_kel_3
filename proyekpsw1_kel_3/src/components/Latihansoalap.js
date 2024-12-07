import React, { useState } from "react";
import "./QuestionPage.css";

const QuestionPage = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Berapa banyak cara menyusun 3 buku dari 5 buku yang berbeda?",
    options: ["60", "120", "20", "10"],
    correctOption: "60",
    explanation:
      "Aturan permutasi digunakan: P(5,3) = 5! / (5-3)! = (5 × 4 × 3) = 60. Jadi ada 60 cara menyusun 3 buku dari 5 buku yang berbeda.",
  },
  {
    question: "Berapa banyak susunan huruf dari kata 'MAJU' tanpa pengulangan?",
    options: ["12", "24", "36", "48"],
    correctOption: "24",
    explanation:
      "Jumlah huruf = 4. Susunan semua huruf dihitung dengan faktorial: 4! = 4 × 3 × 2 × 1 = 24. Jadi ada 24 susunan huruf dari kata 'MAJU'.",
  },
  {
    question: "Berapa banyak cara memilih 2 siswa dari 5 siswa?",
    options: ["5", "10", "20", "15"],
    correctOption: "10",
    explanation:
      "Aturan kombinasi digunakan: C(5,2) = 5! / (2!(5-2)!) = (5 × 4) / 2 = 10. Jadi ada 10 cara memilih 2 siswa dari 5 siswa.",
  },
  {
    question: "Berapa banyak susunan berbeda dari kata 'ANNA'?",
    options: ["4", "6", "12", "24"],
    correctOption: "12",
    explanation:
      "Kata 'ANNA' memiliki 4 huruf dengan huruf A muncul 2 kali. Aturan permutasi untuk objek dengan pengulangan digunakan: 4! / 2! = (24 / 2) = 12. Jadi ada 12 susunan berbeda.",
  },
  {
    question: "Berapa banyak cara menyusun 3 bola merah dan 2 bola biru dalam satu baris?",
    options: ["10", "30", "60", "120"],
    correctOption: "10",
    explanation:
      "Aturan permutasi dengan pengelompokan digunakan: 5! / (3! × 2!) = (120 / (6 × 2)) = 10. Jadi ada 10 cara menyusun 3 bola merah dan 2 bola biru.",
  },
  {
    question: "Berapa banyak cara menyusun 4 huruf dari 6 huruf yang berbeda?",
    options: ["24", "120", "360", "720"],
    correctOption: "360",
    explanation:
      "Aturan permutasi digunakan: P(6,4) = 6! / (6-4)! = 6 × 5 × 4 × 3 = 360. Jadi ada 360 cara menyusun 4 huruf dari 6 huruf.",
  },
  {
    question: "Berapa banyak cara memilih 3 siswa dari 7 siswa?",
    options: ["21", "35", "42", "56"],
    correctOption: "35",
    explanation:
      "Aturan kombinasi digunakan: C(7,3) = 7! / (3!(7-3)!) = (7 × 6 × 5) / (3 × 2 × 1) = 35. Jadi ada 35 cara memilih 3 siswa dari 7 siswa.",
  },
  {
    question: "Berapa banyak cara menyusun huruf 'LEVEL'?",
    options: ["10", "20", "30", "60"],
    correctOption: "30",
    explanation:
      "Kata 'LEVEL' memiliki 5 huruf, dengan L dan E masing-masing muncul 2 kali. Aturan permutasi untuk objek dengan pengulangan digunakan: 5! / (2! × 2!) = (120 / 4) = 30. Jadi ada 30 susunan berbeda.",
  },
  {
    question: "Berapa banyak cara menyusun 2 buku dari 4 buku yang berbeda?",
    options: ["6", "8", "12", "24"],
    correctOption: "12",
    explanation:
      "Aturan permutasi digunakan: P(4,2) = 4! / (4-2)! = (4 × 3) = 12. Jadi ada 12 cara menyusun 2 buku dari 4 buku.",
  },
  {
    question: "Berapa banyak cara memilih 2 bola dari 5 bola merah dan 3 bola biru?",
    options: ["28", "20", "15", "10"],
    correctOption: "28",
    explanation:
      "Aturan kombinasi digunakan: Total bola = 8. C(8,2) = 8! / (2!(8-2)!) = (8 × 7) / 2 = 28. Jadi ada 28 cara memilih 2 bola dari 8 bola.",
  },
  {
    question: "Berapa banyak cara memilih 4 siswa dari 8 siswa, jika dua siswa tertentu harus selalu dipilih?",
    options: ["15", "20", "35", "70"],
    correctOption: "15",
    explanation:
        "Dua siswa sudah dipilih, sehingga tersisa 6 siswa dan kita hanya perlu memilih 2 dari mereka. Aturan kombinasi digunakan: C(6,2) = 6! / (2!(6-2)!) = (6 × 5) / 2 = 15.",
},
{
    question: "Berapa banyak cara menyusun huruf 'MISSISSIPPI' dengan pengulangan huruf?",
    options: ["34650", "3460", "3465", "346"],
    correctOption: "34650",
    explanation:
        "Kata 'MISSISSIPPI' memiliki 11 huruf: M (1), I (4), S (4), P (2). Total permutasi adalah 11! / (1! × 4! × 4! × 2!) = 34650.",
},
{
    question: "Berapa banyak cara menyusun 5 bola merah dan 3 bola biru dalam satu baris jika bola berwarna sama tidak dapat dibedakan?",
    options: ["56", "35", "21", "8"],
    correctOption: "56",
    explanation:
        "Aturan permutasi dengan pengelompokan digunakan: (8!) / (5! × 3!) = 56.",
},
{
    question: "Berapa banyak susunan berbeda dari huruf dalam kata 'BANANA'?",
    options: ["20", "60", "120", "720"],
    correctOption: "60",
    explanation:
        "Kata 'BANANA' memiliki 6 huruf: B (1), A (3), N (2). Total permutasi adalah 6! / (1! × 3! × 2!) = 60.",
},
{
    question: "Berapa banyak cara menyusun 3 huruf dari 6 huruf yang berbeda, jika susunan harus dimulai dengan huruf tertentu?",
    options: ["120", "60", "24", "20"],
    correctOption: "120",
    explanation:
        "Pilih 1 huruf tetap untuk posisi pertama, dan susun 2 huruf lainnya dari 5 huruf yang tersisa. P(5,2) = 5 × 4 = 20. Total = 6 × 20 = 120.",
},
{
    question: "Berapa banyak cara memilih 4 kartu dari satu set kartu (52 kartu), jika kartu yang dipilih harus mencakup semua simbol (♠, ♥, ♦, ♣)?",
    options: ["28561", "11220", "220", "7056"],
    correctOption: "7056",
    explanation:
        "Setiap simbol dipilih 1 kartu. Ada 13 cara untuk memilih dari masing-masing simbol. Total cara = 13⁴ = 7056.",
},
{
    question: "Berapa banyak cara menyusun 3 angka dari 7 angka yang berbeda, jika angka pertama harus lebih besar dari angka terakhir?",
    options: ["35", "140", "70", "210"],
    correctOption: "70",
    explanation:
        "Pilih 3 angka dari 7: C(7,3) = 35. Dari setiap kombinasi, hanya setengah yang memenuhi syarat angka pertama lebih besar dari angka terakhir. Jadi total = 35 × 2 = 70.",
},
{
    question: "Berapa banyak cara menyusun 6 huruf dari 10 huruf yang berbeda, jika huruf kedua dan keempat tidak dapat sama?",
    options: ["151200", "75600", "60480", "30240"],
    correctOption: "60480",
    explanation:
        "Total permutasi P(10,6) = 10 × 9 × 8 × 7 × 6 × 5. Kurangi kasus di mana huruf kedua dan keempat sama: 10 × 9 × 8 × 7 × 6. Total = 10 × 9 × 8 × 7 × 6 × 5 - 10 × 9 × 8 × 7 × 6 = 60480.",
},
{
    question: "Berapa banyak cara menyusun kata 'BOOKKEEPER' dengan huruf yang berulang?",
    options: ["151200", "7560", "3024", "15120"],
    correctOption: "15120",
    explanation:
        "Kata 'BOOKKEEPER' memiliki 10 huruf: B (1), O (2), K (2), E (3), P (1), R (1). Total permutasi = 10! / (1! × 2! × 2! × 3! × 1! × 1!) = 15120.",
},
{
    question: "Berapa banyak cara memilih 5 siswa dari 10 siswa, jika 2 siswa tertentu tidak dapat dipilih bersama?",
    options: ["252", "210", "120", "168"],
    correctOption: "210",
    explanation:
        "C(10,5) = 252. Jika 2 siswa tertentu dipilih, hanya 3 siswa lain yang dapat dipilih dari 8: C(8,3) = 56. Total = 252 - 56 = 210.",
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

export default QuestionPage;
