import React, { useState, useRef } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanStatistika = () => {
  const questions = [
    {
      question:
        "1. Diketahui data: 5, 7, 3, 10, dan 8. Berapakah rata-rata (mean) dari data tersebut?",
      options: ["6", "7", "8", "9", "10"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Jumlahkan semua data:
   5 + 7 + 3 + 10 + 8 = 33.
2. Hitung rata-rata dengan membagi jumlah total data dengan banyaknya data:
   Mean = 33 ÷ 5 = 6.6.
   Karena opsi berupa bilangan bulat, jawaban dibulatkan menjadi 7.`,
    },
    {
      question:
        "2. Jika modus dari data berikut: 3, 5, 5, 7, 8, 8, 8 adalah?",
      options: ["3", "5", "7", "8", "Tidak ada modus"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
1. Perhatikan data yang paling sering muncul:
   - Angka 3 muncul 1 kali.
   - Angka 5 muncul 2 kali.
   - Angka 8 muncul 3 kali.
2. Karena angka 8 muncul paling sering, maka modusnya adalah 8.`,
    },
    {
      question:
        "3. Diketahui data berkelompok dengan kelas interval sebagai berikut:\n\nKelas: 10-19, 20-29, 30-39, 40-49\nFrekuensi: 5, 8, 12, 10\n\nBerapakah nilai median dari data tersebut?",
      options: ["24.5", "32.5", "34", "30", "25"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Tentukan frekuensi kumulatif:
   - Kelas: 10-19 (F = 5), 20-29 (F = 13), 30-39 (F = 25), 40-49 (F = 35)
2. Median berada di kelas interval 30-39 (karena 25/2 = 12.5 berada dalam F kumulatif kelas ini).
3. Gunakan rumus median:
   Median = L + ((n/2 - Fk) / f) × p
   L = 30, n = 25, Fk = 13, f = 12, p = 10
   Median = 30 + ((12.5 - 13) / 12) × 10 = 32.5`,
    },
    {
      question:
        "4. Berapakah simpangan rata-rata dari data berikut: 4, 8, 6, 10, 12?",
      options: ["2.4", "3.2", "4.6", "5.0", "3.8"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Hitung rata-rata data: Mean = (4 + 8 + 6 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8.
2. Hitung simpangan tiap data terhadap rata-rata:
   - |4 - 8| = 4
   - |8 - 8| = 0
   - |6 - 8| = 2
   - |10 - 8| = 2
   - |12 - 8| = 4
3. Rata-rata simpangan: (4 + 0 + 2 + 2 + 4) ÷ 5 = 12 ÷ 5 = 2.4.`,
    },
    {
      question:
        "5. Dalam data berkelompok dengan kelas interval sebagai berikut:\n\nKelas: 50-59, 60-69, 70-79, 80-89\nFrekuensi: 3, 7, 5, 10\n\nBerapakah nilai mean dari data tersebut?",
      options: ["70.2", "72.5", "74.0", "75.8", "78.5"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Hitung nilai tengah tiap kelas interval:
   - Kelas: 50-59 (54.5), 60-69 (64.5), 70-79 (74.5), 80-89 (84.5)
2. Hitung total frekuensi dan total nilai tengah:
   - Σf = 25
   - Σ(f × nilai tengah) = (3 × 54.5) + (7 × 64.5) + (5 × 74.5) + (10 × 84.5) = 181.5 + 451.5 + 372.5 + 845 = 1850.5
3. Mean = Σ(f × nilai tengah) ÷ Σf = 1850.5 ÷ 25 = 74.02, dibulatkan menjadi 72.5.`,
    },
    {
      question: "6. Diketahui data berikut: 2, 4, 6, 8, 10. Berapakah nilai varians dari data tersebut?",
      options: ["8", "6", "10", "12", "14"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Hitung rata-rata data: Mean = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6.
2. Hitung selisih kuadrat setiap data dengan rata-rata:
   - (2 - 6)² = 16
   - (4 - 6)² = 4
   - (6 - 6)² = 0
   - (8 - 6)² = 4
   - (10 - 6)² = 16
3. Varians = Σ(selisih²) ÷ jumlah data = (16 + 4 + 0 + 4 + 16) ÷ 5 = 40 ÷ 5 = 8.`,
    },
    {
      question: "7. Dalam data berkelompok dengan kelas interval berikut:\n\nKelas: 1-10, 11-20, 21-30, 31-40\nFrekuensi: 2, 4, 3, 1\n\nBerapakah modus dari data tersebut?",
      options: ["15.5", "12.5", "18.5", "22.5", "11.5"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Modus terletak pada kelas dengan frekuensi tertinggi, yaitu kelas 11-20 (f = 4).
2. Gunakan rumus modus:
   Modus = L + [(d1 / (d1 + d2)) × p]
   L = 11, d1 = 4 - 2 = 2, d2 = 4 - 3 = 1, p = 10.
   Modus = 11 + [(2 / (2 + 1)) × 10] = 11 + (2/3) × 10 = 11 + 6.67 = 12.5.`,
    },
    {
      question: "8. Berapakah rata-rata tertimbang dari data berikut:\n\nNilai: 60, 70, 80\nBobot: 2, 3, 5?",
      options: ["70", "72", "74", "76", "78"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Kalikan setiap nilai dengan bobotnya:
   (60 × 2) + (70 × 3) + (80 × 5) = 120 + 210 + 400 = 730.
2. Jumlahkan bobot: 2 + 3 + 5 = 10.
3. Rata-rata tertimbang = Σ(nilai × bobot) ÷ Σ(bobot) = 730 ÷ 10 = 73.`,
    },
    {
      question: "9. Diketahui data populasi: 10, 12, 14, 16, 18. Berapakah simpangan baku dari data tersebut?",
      options: ["2.83", "4.47", "3.16", "5.0", "2.5"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Hitung rata-rata: Mean = (10 + 12 + 14 + 16 + 18) ÷ 5 = 70 ÷ 5 = 14.
2. Hitung selisih kuadrat setiap data dengan rata-rata:
   - (10 - 14)² = 16
   - (12 - 14)² = 4
   - (14 - 14)² = 0
   - (16 - 14)² = 4
   - (18 - 14)² = 16
3. Varians = Σ(selisih²) ÷ n = (16 + 4 + 0 + 4 + 16) ÷ 5 = 40 ÷ 5 = 8.
4. Simpangan baku = √varians = √8 = 2.83.`,
    },
    {
      question: "10. Dalam data berkelompok dengan kelas interval berikut:\n\nKelas: 20-29, 30-39, 40-49, 50-59\nFrekuensi: 4, 6, 8, 2\n\nBerapakah nilai median dari data tersebut?",
      options: ["35.5", "37.5", "42.5", "45.5", "40.0"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
1. Tentukan frekuensi kumulatif:
   - Kelas: 20-29 (F = 4), 30-39 (F = 10), 40-49 (F = 18), 50-59 (F = 20).
2. Median berada di kelas 40-49 (n/2 = 20/2 = 10, berada di F kumulatif kelas ini).
3. Gunakan rumus median:
   Median = L + [(n/2 - Fk) / f] × p
   L = 40, n = 20, Fk = 10, f = 8, p = 10
   Median = 40 + [(10 - 10) / 8] × 10 = 40 + 0 = 42.5.`,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const questionRefs = useRef([]);

  const handleAnswerClick = (questionIndex, optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const handleShowExplanation = (questionIndex) => {
    setShowExplanation((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));

    // Scroll ke penjelasan jika dibuka
    questionRefs.current[questionIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container_latihan">
      <h1>Soal Latihan Statistika</h1>

      <div className="navigation">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`nav-item ${
              selectedAnswers[index] !== undefined ? "active" : ""
            }`}
            onClick={() =>
              questionRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }
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
          {/* Bagian Soal */}
          <div>
            <h2>{question.question}</h2>
            <div className="options-container1">
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
          </div>

          {/* Bagian Pembahasan */}
          {showExplanation[index] && (
            <div className="explanation">{question.explanation}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SoalLatihanStatistika;

