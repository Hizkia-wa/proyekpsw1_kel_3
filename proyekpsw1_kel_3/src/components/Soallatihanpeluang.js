import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanpeluang = () => {
  const questions = [
    {
      question: "1. Berapa peluang muncul angka genap pada pelemparan sebuah dadu?",
      options: ["1/2", "1/3", "1/6", "1"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Dadu memiliki 6 sisi: {2, 4, 6} adalah angka genap.
2. Jadi peluangnya adalah 3/6 = 1/2.`,
    },
    {
      question: "2. Jika dua koin dilempar, berapa peluang kedua koin menunjukkan sisi gambar?",
      options: ["1/4", "1/2", "3/4", "1"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Ada 4 kemungkinan: (HH, HT, TH, TT).
2. Hanya 1 (HH) yang memenuhi syarat, jadi peluangnya adalah 1/4.`,
    },
    {
      question: "3. Sebuah kantong berisi 4 bola merah dan 6 bola hijau. Berapa peluang terambil bola merah?",
      options: ["2/5", "3/5", "4/5", "1/2"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Total bola ada 10. Bola merah ada 4.
2. Jadi peluangnya adalah 4/10 = 2/5.`,
    },
    {
      question: "4. Jika tiga koin dilempar bersamaan, berapa peluang muncul tepat dua sisi gambar?",
      options: ["1/8", "3/8", "5/8", "7/8"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Kemungkinan: GGG, GGT, GTG, TGG, TTT, TTG, TGT, GTT.
2. Hanya 3 yang memenuhi syarat (GGT, GTG, TGG).
3. Peluangnya adalah 3/8.`,
    },
    {
      question: "5. Dalam sebuah kantong terdapat 3 bola biru dan 2 bola merah. Berapa peluang terambil bola biru pada percobaan pertama?",
      options: ["1/5", "2/5", "3/5", "4/5"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Total bola ada 5. Bola biru ada 3.
2. Peluang terambil bola biru adalah 3/5.`,
    },
    {
      question: "6. Berapa peluang mendapatkan angka kurang dari 5 saat melempar dadu?",
      options: ["1/2", "1/3", "2/3", "5/6"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Angka kurang dari 5 adalah {1, 2, 3, 4}.
2. Totalnya 4 dari 6, sehingga peluangnya adalah 4/6 = 2/3.`,
    },
    {
      question: "7. Jika sebuah kartu diambil dari setumpuk kartu remi, berapa peluang mendapatkan kartu As?",
      options: ["1/52", "1/13", "4/52", "1/26"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Ada 4 kartu As dalam 52 kartu.
2. Jadi peluangnya adalah 4/52 = 1/13.`,
    },
    {
      question: "8. Jika dua dadu dilempar bersamaan, berapa peluang muncul jumlah 7?",
      options: ["1/6", "1/9", "1/12", "1/36"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Kombinasi menghasilkan jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).
2. Ada 6 dari total 36 kombinasi, sehingga peluangnya adalah 6/36 = 1/6.`,
    },
    {
      question: "9. Sebuah kantong berisi 5 bola merah dan 3 bola biru. Dua bola diambil tanpa pengembalian. Berapa peluang keduanya merah?",
      options: ["10/56", "5/14", "10/28", "5/8"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Peluang bola pertama merah: 5/8.
2. Peluang bola kedua merah setelah yang pertama merah: 4/7.
3. Peluangnya adalah (5/8) × (4/7) = 20/56 = 10/28.`,
    },
    {
      question: "10. Dalam sebuah kantong terdapat 6 bola biru dan 4 bola merah. Jika satu bola diambil secara acak, berapa peluang mendapatkan bola merah?",
      options: ["1/2", "2/3", "3/5", "2/5"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
1. Total bola ada 10. Bola merah ada 4.
2. Jadi peluangnya adalah 4/10 = 2/5.`,
    },
      {
        "question": "11. Sebuah kantong berisi 5 bola merah, 3 bola biru, dan 2 bola hijau. Jika dua bola diambil secara acak tanpa pengembalian, berapa peluang kedua bola yang diambil berwarna merah?",
        "options": ["5/28", "3/28", "10/28", "15/28"],
        "correctAnswer": 2,
        "explanation": "Penyelesaian:\n1. Peluang bola pertama merah adalah 5/10.\n2. Peluang bola kedua merah setelah bola pertama merah adalah 4/9.\n3. Peluangnya adalah (5/10) × (4/9) = 20/90 = 10/28."
      },
      {
        "question": "12. Diketahui sebuah kantong berisi 6 bola merah, 4 bola hijau, dan 2 bola kuning. Jika satu bola diambil, berapa peluang tidak terambil bola kuning?",
        "options": ["1/3", "2/3", "4/5", "5/6"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian:\n1. Total bola ada 12, bola kuning ada 2.\n2. Peluang tidak terambil bola kuning adalah 1 - (2/12) = 10/12 = 5/6."
      },
      {
        "question": "13. Jika dua dadu dilempar bersamaan, berapa peluang muncul jumlah lebih dari 10?",
        "options": ["1/36", "1/18", "1/12", "1/9"],
        "correctAnswer": 2,
        "explanation": "Penyelesaian:\n1. Kombinasi yang menghasilkan jumlah lebih dari 10 adalah (5,6), (6,5), dan (6,6).\n2. Ada 3 dari total 36 kombinasi, sehingga peluangnya adalah 3/36 = 1/12."
      },
      {
        "question": "14. Dalam sebuah permainan dadu, sebuah dadu dilempar. Berapa peluang muncul angka lebih dari 4?",
        "options": ["1/2", "1/3", "1/6", "2/3"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian:\n1. Angka lebih dari 4 adalah {5, 6}.\n2. Ada 2 dari total 6 sisi dadu, sehingga peluangnya adalah 2/6 = 1/3."
      },
      {
        "question": "15. Diketahui sebuah kantong berisi 8 bola merah dan 4 bola biru. Jika dua bola diambil secara acak dengan pengembalian, berapa peluang mendapatkan satu bola merah dan satu bola biru?",
        "options": ["1/6", "1/8", "2/3", "1/3"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian:\n1. Peluang bola pertama merah adalah 8/12.\n2. Peluang bola kedua biru adalah 4/12.\n3. Peluangnya adalah (8/12) × (4/12) = 32/144 = 1/3."
      },
      {
        "question": "16. Sebuah kartu dipilih secara acak dari setumpuk kartu remi. Berapa peluang kartu yang terpilih adalah kartu gambar (Jack, Queen, atau King)?",
        "options": ["1/52", "3/52", "12/52", "1/13"],
        "correctAnswer": 2,
        "explanation": "Penyelesaian:\n1. Ada 12 kartu gambar dalam 52 kartu (4 jenis x 3 kartu gambar).\n2. Jadi peluangnya adalah 12/52 = 3/13."
      },
      {
        "question": "17. Dalam sebuah permainan, sebuah dadu dilempar dua kali. Berapa peluang muncul angka genap pada kedua pelemparan?",
        "options": ["1/4", "1/6", "1/2", "2/3"],
        "correctAnswer": 0,
        "explanation": "Penyelesaian:\n1. Peluang muncul angka genap pada satu pelemparan adalah 3/6 = 1/2.\n2. Karena pelemparan dilakukan dua kali, peluangnya adalah (1/2) × (1/2) = 1/4."
      },
      {
        "question": "18. Jika tiga dadu dilempar bersamaan, berapa peluang muncul jumlah 11?",
        "options": ["1/36", "1/18", "1/9", "3/36"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian:\n1. Kombinasi yang menghasilkan jumlah 11 adalah (5, 5, 1), (6, 4, 1), dan (6, 5, 0).\n2. Ada 3 dari total 36 kombinasi, sehingga peluangnya adalah 3/36 = 1/12."
      },
      {
        "question": "19. Sebuah kantong berisi 6 bola merah, 4 bola hijau, dan 5 bola biru. Jika satu bola diambil, berapa peluang mendapatkan bola biru atau hijau?",
        "options": ["5/15", "2/3", "9/15", "4/5",],
        "correctAnswer": 2,
        "explanation": "Penyelesaian:\n1. Total bola ada 15. Bola biru atau hijau ada 9.\n2. Jadi peluangnya adalah 9/15 = 3/5."
      },
      {
        "question": "20. Dalam sebuah permainan, dua dadu dilempar bersamaan. Berapa peluang muncul jumlah kurang dari 4?",
        "options": ["1/12", "1/18", "1/36", "3/36",],
        "correctAnswer": 3,
        "explanation": "Penyelesaian:\n1. Kombinasi yang menghasilkan jumlah kurang dari 4 adalah (1,1), (1,2), (2,1).\n2. Ada 3 dari total 36 kombinasi, sehingga peluangnya adalah 3/36 = 1/12."
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
      <h1>Latihan Soal Peluang</h1>
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
            <div className="explanation">{question.explanation}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SoalLatihanpeluang;
