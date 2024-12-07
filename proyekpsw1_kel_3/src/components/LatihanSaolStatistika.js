import React, { useState } from "react";
import "./QuestionPage.css";

const LatihanSoalStatistika = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Rata-rata dari data berikut: 5, 7, 8, 10, 12 adalah?",
      options: ["7", "8", "9", "10"],
      correctOption: "8",
      explanation: "Rata-rata dihitung dengan Σx/n = (5+7+8+10+12)/5 = 42/5 = 8.",
    },
    {
      question: "Modus dari data berikut: 2, 3, 4, 3, 5, 3, 6 adalah?",
      options: ["2", "3", "4", "6"],
      correctOption: "3",
      explanation:
        "Modus adalah data yang paling sering muncul. Pada data ini, angka 3 muncul sebanyak 3 kali, lebih banyak dari yang lain.",
    },
    {
      question: "Median dari data berikut: 12, 14, 15, 16, 20 adalah?",
      options: ["14", "15", "16", "20"],
      correctOption: "15",
      explanation:
        "Median adalah nilai tengah setelah data diurutkan. Data yang diurutkan: 12, 14, 15, 16, 20. Nilai tengahnya adalah 15.",
    },
    {
      question: "Variansi dari data berikut: 2, 4, 6 adalah?",
      options: ["2.67", "4", "6", "8"],
      correctOption: "2.67",
      explanation:
        "Rata-rata = 4. Variansi = [(2-4)² + (4-4)² + (6-4)²] / 3 = (4 + 0 + 4) / 3 = 2.67.",
    },
    {
      question: "Kuartil ketiga dari data: 10, 15, 20, 25, 30, 35 adalah?",
      options: ["25", "27.5", "30", "32.5"],
      correctOption: "30",
      explanation:
        "Kuartil ketiga (Q3) berada di posisi 3/4(n+1). Data diurutkan: 10, 15, 20, 25, 30, 35. Q3 = data ke-5, yaitu 30.",
    },
    {
      question: "Berapa persen data berada di bawah persentil ke-40?",
      options: ["40%", "50%", "60%", "70%"],
      correctOption: "40%",
      explanation:
        "Persentil ke-40 menunjukkan bahwa 40% dari data berada di bawah nilai tersebut.",
    },
    {
      question: "Mean dari data berkelompok dengan frekuensi: 2, 3, 5, 10 adalah?",
      options: ["6", "7", "8", "9"],
      correctOption: "7",
      explanation:
        "Mean = Σ(f * x) / Σf. Asumsikan nilai tengah kelas: {2, 4, 6, 8}. Mean = (2*2 + 4*3 + 6*5 + 8*10) / 20 = 7.",
    },
    {
      question: "Jika data memiliki variansi 16, berapa simpangan bakunya?",
      options: ["2", "4", "8", "16"],
      correctOption: "4",
      explanation:
        "Simpangan baku adalah akar kuadrat dari variansi. √16 = 4.",
    },
    {
      question: "Modus dari data berkelompok dengan frekuensi tertinggi adalah?",
      options: ["nilai tengah kelas", "tepi bawah kelas", "nilai rata-rata", "median"],
      correctOption: "nilai tengah kelas",
      explanation:
        "Modus pada data berkelompok dihitung menggunakan kelas dengan frekuensi tertinggi.",
    },
    {
      question:
        "Median dari data berkelompok dapat dihitung menggunakan rumus?",
      options: [
        "L + [(N/2 - F) / f] * w",
        "Σf * x / Σf",
        "Σ(f * x) / N",
        "L + [(N - F) / f] * w",
      ],
      correctOption: "L + [(N/2 - F) / f] * w",
      explanation:
        "Rumus median pada data berkelompok adalah L + [(N/2 - F) / f] * w.",
    },
    {
      question:
        "Sebuah kelas memiliki data: 5, 10, 10, 15. Berapa nilai mediannya?",
      options: ["10", "12.5", "15", "5"],
      correctOption: "10",
      explanation:
        "Median adalah nilai tengah. Setelah diurutkan: {5, 10, 10, 15}, median = (10 + 10)/2 = 10.",
    },
    {
      question:
        "Jika data memiliki kuartil Q1=25 dan Q3=75, berapa jangkauan interkuartilnya?",
      options: ["25", "50", "75", "100"],
      correctOption: "50",
      explanation:
        "Jangkauan interkuartil (IQR) dihitung dengan Q3 - Q1 = 75 - 25 = 50.",
    },
    {
      question: "Data berikut adalah: 4, 8, 6, 9, 7, 5, 3, 10. Berapakah simpangan bakunya?",
      options: ["2.5", "2.83", "3.16", "3.5"],
      correctOption: "2.83",
      explanation:
          "Rata-rata = (4 + 8 + 6 + 9 + 7 + 5 + 3 + 10) / 8 = 6.5. Variansi = Σ(xi - mean)² / n = 8. Simpangan baku = √variansi = 2.83.",
  },
  {
      question: "Kuartil kedua dari data: 12, 16, 20, 24, 28, 32 adalah?",
      options: ["20", "22", "24", "26"],
      correctOption: "24",
      explanation:
          "Kuartil kedua (median) adalah nilai tengah. Data diurutkan: 12, 16, 20, 24, 28, 32. Median = (20 + 24) / 2 = 24.",
  },
  {
      question: "Suatu kelas memiliki data berkelompok berikut: [10-20: 5], [20-30: 10], [30-40: 15], [40-50: 10]. Hitunglah rata-ratanya.",
      options: ["25", "30", "32.5", "35"],
      correctOption: "32.5",
      explanation:
          "Mean = Σ(f * x̄) / Σf, dengan x̄ adalah nilai tengah kelas. Mean = [(15×5)+(25×10)+(35×15)+(45×10)]/40 = 32.5.",
  },
  {
      question: "Jika simpangan baku suatu data adalah 5, berapakah variansinya?",
      options: ["10", "20", "25", "50"],
      correctOption: "25",
      explanation:
          "Variansi adalah kuadrat dari simpangan baku. Variansi = (5)² = 25.",
  },
  {
      question: "Jika sebuah data memiliki nilai Q1 = 15 dan Q3 = 45, berapa nilai batas bawah outlier?",
      options: ["-15", "0", "5", "10"],
      correctOption: "5",
      explanation:
          "Batas bawah = Q1 - 1.5 × (Q3 - Q1) = 15 - 1.5 × (45 - 15) = 15 - 45 = 5.",
  },
  {
      question: "Dari data: 2, 4, 6, 8, 10. Berapakah persentil ke-60?",
      options: ["6", "7.2", "8", "8.5"],
      correctOption: "8",
      explanation:
          "Persentil ke-60 berada di posisi P60 = 60/100 × (n+1). Posisi = 3.6. Nilainya 8.",
  },
  {
      question: "Data berikut memiliki frekuensi: 2, 4, 6, 8. Median datanya adalah?",
      options: ["4.5", "5", "5.5", "6"],
      correctOption: "5",
      explanation:
          "Jumlah frekuensi = 20. Median = (N/2) = posisi ke-10. Nilai median ada di kelas ketiga, yaitu 5.",
  },
  {
      question: "Jika data berikut memiliki rata-rata 10 dan simpangan baku 3, berapakah z-score dari data bernilai 16?",
      options: ["1.5", "2", "2.5", "3"],
      correctOption: "2",
      explanation:
          "z-score = (x - μ) / σ. z = (16 - 10) / 3 = 2.",
  },
  {
      question: "Jika modus data berkelompok terletak pada kelas [10-20], dan data tersebut memiliki frekuensi: [10-20: 12], [20-30: 15], [30-40: 10], hitunglah modusnya!",
      options: ["15.33", "16.5", "18", "20"],
      correctOption: "16.5",
      explanation:
          "Modus = L + [(d1 / (d1 + d2)) * w], dengan L = 10, d1 = 3, d2 = 5, w = 10. Modus = 10 + [(3/8)×10] = 16.5.",
  },
  {
      question: "Data berikut memiliki 5 kelompok: [10-20: 5], [20-30: 8], [30-40: 12], [40-50: 15], [50-60: 10]. Hitung median data tersebut.",
      options: ["35", "37.5", "40", "42.5"],
      correctOption: "37.5",
      explanation:
          "Median = L + [(N/2 - F) / f] * w. Median kelas adalah [30-40], L = 30, F = 13, f = 12, w = 10. Median = 30 + [(25-13)/12]*10 = 37.5.",
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

export default LatihanSoalStatistika;