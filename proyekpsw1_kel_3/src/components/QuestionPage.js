import React, { useState } from "react";
import "./QuestionPage.css";

const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

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
      question: "Jika sebuah koin dilempar 3 kali, berapa peluang muncul tepat dua sisi gambar?",
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

export default QuestionPage;
