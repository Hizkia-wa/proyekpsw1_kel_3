import React, { useState } from "react";
import "./QuestionPage.css";

const QuestionPage = () => {
const [currentQuestion, setCurrentQuestion] = useState(1);
const [selectedOption, setSelectedOption] = useState(null);
const [showExplanation, setShowExplanation] = useState(false);
const [showConfirmation, setShowConfirmation] = useState(false);

const questions = [
  {
    question: "Berapa peluang muncul angka genap pada pelemparan sebuah dadu?",
    options: ["1/2", "1/3", "1/6", "1"],
    correctOption: "1/2",
    explanation:
      "Dadu memiliki 6 sisi: {2, 4, 6} adalah angka genap. Jadi peluangnya adalah 3/6 = 1/2.",
  },
  {
    question: "Sebuah kantong berisi 3 bola merah dan 2 bola biru. Berapa peluang terambil bola merah?",
    options: ["3/5", "1/2", "2/5", "1"],
    correctOption: "3/5",
    explanation:
      "Total bola ada 5. Bola merah ada 3, jadi peluangnya adalah 3/5.",
  },
  {
    question: "Berapa peluang mendapatkan angka kurang dari 5 saat melempar dadu?",
    options: ["2/3", "1/3", "5/6", "1/2"],
    correctOption: "2/3",
    explanation:
      "Angka kurang dari 5 adalah {1, 2, 3, 4}. Totalnya 4 dari 6, sehingga peluangnya 4/6 = 2/3.",
  },
  {
    question: "Jika dua koin dilempar, berapa peluang kedua koin menunjukkan sisi gambar?",
    options: ["1/4", "1/2", "3/4", "1/3"],
    correctOption: "1/4",
    explanation:
      "Ada 4 kemungkinan: (HH, HT, TH, TT). Hanya 1 (HH) yang memenuhi syarat, jadi peluangnya 1/4.",
  },
  {
    question:
      "Sebuah kotak berisi 4 bola merah dan 6 bola hijau. Jika satu bola diambil, berapa peluang terambil bola hijau?",
    options: ["2/5", "3/5", "4/5", "1/2"],
    correctOption: "3/5",
    explanation:
      "Total bola = 10. Bola hijau = 6. Jadi peluangnya adalah 6/10 = 3/5.",
  },
  {
    question:
      "Berapa peluang mendapatkan angka prima saat melempar dadu?",
    options: ["1/3", "1/2", "1/6", "2/3"],
    correctOption: "1/2",
    explanation:
      "Angka prima dari dadu adalah {2, 3, 5}. Ada 3 dari 6 sisi, jadi peluangnya adalah 3/6 = 1/2.",
  },
  {
    question:
      "Jika sebuah kartu diambil dari setumpuk kartu remi, berapa peluang mendapatkan kartu As?",
    options: ["1/13", "1/26", "1/52", "4/52"],
    correctOption: "1/13",
    explanation:
      "Ada 4 kartu As dalam 52 kartu. Jadi peluangnya adalah 4/52 = 1/13.",
  },
  {
    question: "Jika 3 koin dilempar sebanyak 1 kali, berapa peluang muncul tepat dua sisi gambar?",
    options: ["3/8", "1/2", "1/4", "5/8"],
    correctOption: "3/8",
    explanation:
      "Kemungkinan: GGG, GGT, GTG, TGG, TTT, TTG, TGT, GTT. Hanya 3 yang memenuhi syarat (GGT, GTG, TGG). Peluangnya adalah 3/8.",
  },
  {
    question:
      "Berapa peluang muncul jumlah 7 saat dua dadu dilempar bersamaan?",
    options: ["1/6", "1/12", "1/9", "1/36"],
    correctOption: "1/6",
    explanation:
      "Kombinasi menghasilkan jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Ada 6 dari total 36 kombinasi, sehingga peluangnya adalah 6/36 = 1/6.",
  },
  {
    question:
      "Jika sebuah kotak berisi 5 bola merah dan 3 bola biru, dua bola diambil tanpa pengembalian. Berapa peluang keduanya merah?",
    options: ["5/8", "10/28", "10/56", "5/14"],
    correctOption: "10/28",
    explanation:
      "Peluang bola pertama merah: 5/8. Peluang bola kedua merah setelah yang pertama merah: 4/7. Jadi, peluangnya adalah (5/8) * (4/7) = 20/56 = 10/28.",
  },
    {
      "question": "Jika sebuah dadu dilempar dua kali, berapa peluang muncul angka genap pada kedua pelemparan?",
      "options": ["1/4", "1/3", "1/2", "1/6"],
      "correctOption": "1/4",
      "explanation": "Peluang angka genap pada satu pelemparan adalah 3/6 = 1/2. Karena kedua pelemparan independen, peluangnya adalah (1/2) * (1/2) = 1/4.",
    },
    {
      "question": "Dalam sebuah tas terdapat 5 bola merah, 4 bola biru, dan 3 bola hijau. Jika dua bola diambil secara acak, berapa peluang kedua bola yang diambil berwarna merah?",
      "options": ["1/2", "10/66", "10/56", "5/66"],
      "correctOption": "10/66",
      "explanation": "Peluang bola pertama merah adalah 5/12, dan setelah itu peluang bola kedua merah adalah 4/11. Jadi peluangnya adalah (5/12) * (4/11) = 20/132 = 10/66.",
    },
    {
      "question": "Jika tiga koin dilempar sekaligus, berapa peluang muncul tepat satu sisi gambar?",
      "options": ["3/8", "1/4", "1/2", "5/8"],
      "correctOption": "3/8",
      "explanation": "Kemungkinan yang menghasilkan tepat satu sisi gambar adalah (G, T, T), (T, G, T), (T, T, G). Ada 3 kombinasi yang memenuhi syarat, sehingga peluangnya adalah 3/8.",
    },
    {
      "question": "Jika sebuah dadu dilempar dua kali, berapa peluang jumlah kedua pelemparan adalah lebih besar dari 8?",
      "options": ["10/36", "15/36", "20/36", "6/36"],
      "correctOption": "10/36",
      "explanation": "Kombinasi yang menghasilkan jumlah lebih besar dari 8 adalah: (3,6), (4,5), (4,6), (5,4), (5,5), (5,6), (6,3), (6,4), (6,5), (6,6). Ada 10 kombinasi, sehingga peluangnya adalah 10/36.",
    },
    {
      "question": "Dalam sebuah kotak terdapat 8 bola merah, 7 bola hijau, dan 5 bola biru. Jika tiga bola diambil secara acak, berapa peluang ketiga bola yang diambil berwarna hijau?",
      "options": ["7/56", "35/560", "7/30", "35/560"],
      "correctOption": "35/560",
      "explanation": "Peluang bola pertama hijau adalah 7/20, bola kedua hijau setelah bola pertama hijau adalah 6/19, dan bola ketiga hijau setelah dua bola hijau diambil adalah 5/18. Jadi, peluangnya adalah (7/20) * (6/19) * (5/18) = 35/560.",
    },
    {
      "question": "Jika sebuah dadu dilempar tiga kali, berapa peluang muncul angka 4 pada semua pelemparan?",
      "options": ["1/216", "1/36", "1/6", "1/12"],
      "correctOption": "1/216",
      "explanation": "Peluang muncul angka 4 pada satu pelemparan adalah 1/6. Karena pelemparan independen, peluangnya adalah (1/6) * (1/6) * (1/6) = 1/216.",
    },
    {
      "question": "Dalam sebuah kotak terdapat 5 bola merah, 4 bola hijau, dan 3 bola biru. Jika dua bola diambil tanpa pengembalian, berapa peluang tidak ada bola biru yang diambil?",
      "options": ["7/12", "7/15", "10/15", "12/15"],
      "correctOption": "7/15",
      "explanation": "Peluang bola pertama bukan biru adalah 9/12, dan peluang bola kedua juga bukan biru setelah bola pertama bukan biru adalah 8/11. Jadi, peluangnya adalah (9/12) * (8/11) = 72/132 = 7/15.",
    },
    {
      "question": "Jika dua kartu diambil secara acak dari setumpuk kartu remi, berapa peluang kedua kartu yang diambil adalah kartu hati?",
      "options": ["1/221", "1/169", "1/52", "1/17"],
      "correctOption": "1/221",
      "explanation": "Ada 13 kartu hati di setumpuk 52 kartu. Peluang kartu pertama hati adalah 13/52, dan peluang kartu kedua hati setelah yang pertama hati adalah 12/51. Jadi, peluangnya adalah (13/52) * (12/51) = 156/2652 = 1/221.",
    },
    {
      "question": "Dalam sebuah kelas terdapat 12 siswa laki-laki dan 8 siswa perempuan. Jika dua siswa dipilih secara acak, berapa peluang yang dipilih adalah satu laki-laki dan satu perempuan?",
      "options": ["96/190", "120/190", "96/180", "120/180"],
      "correctOption": "120/190",
      "explanation": "Peluang memilih satu laki-laki adalah 12/20, dan peluang memilih satu perempuan setelah memilih laki-laki adalah 8/19. Jadi, peluangnya adalah (12/20) * (8/19) = 96/380 + 96/380 = 120/190.",
    },
    {
      "question": "Jika dua dadu dilempar bersamaan, berapa peluang muncul angka yang jumlahnya lebih kecil dari 3?",
      "options": ["1/36", "1/18", "2/36", "1/6"],
      "correctOption": "1/36",
      "explanation": "Kombinasi yang menghasilkan jumlah lebih kecil dari 3 hanya (1,1). Jadi, peluangnya adalah 1/36.",
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

export default QuestionPage;
