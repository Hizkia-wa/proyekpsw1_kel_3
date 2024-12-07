import React, { useState, useRef } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanGeometri = () => {
  const questions = [
    {
      question: "1. Sebuah segitiga sama kaki memiliki panjang sisi alas 10 cm dan panjang dua sisi lainnya 13 cm. Berapa keliling segitiga tersebut?",
      options: ["36 cm", "33 cm", "26 cm", "23 cm"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Keliling segitiga sama kaki dihitung dengan menjumlahkan semua sisi.
2. Jadi, 10 cm + 13 cm + 13 cm = 36 cm.`,
    },
    {
      question: "2. Berapa luas dari belah ketupat dengan panjang diagonal 12 cm dan 16 cm?",
      options: ["96 cm²", "72 cm²", "48 cm²", "64 cm²"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Luas belah ketupat dihitung dengan rumus L = 1/2 * d1 * d2.
2. Jadi, L = 1/2 * 12 cm * 16 cm = 96 cm².`,
    },
    {
      question: "3. Jika keliling lingkaran adalah 31.4 cm, berapa panjang jari-jari lingkaran tersebut? (π = 3.14)",
      options: ["5 cm", "10 cm", "7 cm", "8 cm"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Keliling lingkaran dihitung dengan rumus K = 2πr.
2. Jadi, r = K / (2π) = 31.4 / (2 * 3.14) = 5 cm.`,
    },
    {
      question: "4. Sebuah segitiga siku-siku memiliki panjang alas 6 cm dan tinggi 8 cm. Berapa panjang hipotenusanya?",
      options: ["10 cm", "12 cm", "9 cm", "14 cm"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Panjang hipotenusa pada segitiga siku-siku dihitung dengan rumus Pythagoras, yaitu c = √(a² + b²).
2. Jadi, c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.`,
    },
    {
      question: "5. Berapa panjang sisi persegi panjang jika diketahui panjangnya 12 cm dan luasnya 96 cm²?",
      options: ["6 cm", "8 cm", "4 cm", "10 cm"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
1. Luas persegi panjang dihitung dengan rumus L = panjang * lebar.
2. Jadi, lebar = L / panjang = 96 cm² / 12 cm = 8 cm.`,
    },
    {
      question: "6. Berapa volume bola dengan jari-jari 3 cm?",
      options: ["113.04 cm³", "27 cm³", "56.52 cm³", "90 cm³"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Volume bola dihitung dengan rumus V = 4/3 * π * r³.
2. Jadi, V = 4/3 * 3.14 * 3³ = 113.04 cm³.`,
    },
    {
      question: "7. Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Berapa luas permukaan tabung tersebut?",
      options: ["764 cm²", "622 cm²", "538 cm²", "400 cm²"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Luas permukaan tabung dihitung dengan rumus L = 2πr² + 2πrt.
2. Jadi, L = 2π * 7² + 2π * 7 * 10 = 2π * 49 + 2π * 70 = 764 cm².`,
    },
    {
      question: "8. Berapa volume limas segi empat dengan panjang alas 6 cm, lebar alas 4 cm, dan tinggi 9 cm?",
      options: ["72 cm³", "108 cm³", "96 cm³", "54 cm³"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Volume limas segi empat dihitung dengan rumus V = 1/3 * panjang * lebar * tinggi.
2. Jadi, V = 1/3 * 6 cm * 4 cm * 9 cm = 72 cm³.`,
    },
    {
      question: "9. Sebuah prisma segitiga memiliki panjang alas 8 cm, tinggi segitiga 6 cm, dan panjang sisi prisma 10 cm. Berapa volume prisma tersebut?",
      options: ["240 cm³", "2400 cm³", "480 cm³", "720 cm³"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Volume prisma segitiga dihitung dengan rumus V = luas alas * tinggi.
2. Luas alas segitiga = 1/2 * alas * tinggi = 1/2 * 8 cm * 6 cm = 24 cm².
3. Jadi, volume prisma = 24 cm² * 10 cm = 240 cm³.`,
    },
    {
      question: "10. Berapa luas permukaan kerucut dengan jari-jari 5 cm dan tinggi 12 cm?",
      options: ["165 cm²", "170 cm²", "190 cm²", "200 cm²"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
1. Luas permukaan kerucut dihitung dengan rumus L = πr(r + s), di mana s adalah panjang garis pelukis.
2. Panjang s = √(r² + t²) = √(5² + 12²) = √169 = 13 cm.
3. Jadi, L = 3.14 * 5 cm * (5 cm + 13 cm) = 3.14 * 5 cm * 18 cm = 165 cm².`,
    },
      {
    question: "11. Sebuah kubus memiliki panjang sisi 4 cm. Berapa volume kubus tersebut?",
    options: ["64 cm³", "48 cm³", "32 cm³", "16 cm³"],
    correctAnswer: 0,
    explanation: `Penyelesaian:
1. Volume kubus dihitung dengan rumus V = s³, di mana s adalah panjang sisi.
2. Jadi, V = 4³ = 64 cm³.`,
  },
  {
    question: "12. Sebuah lingkaran memiliki diameter 14 cm. Berapa luas lingkaran tersebut? (π = 3.14)",
    options: ["153.86 cm²", "98 cm²", "176 cm²", "140 cm²"],
    correctAnswer: 0,
    explanation: `Penyelesaian:
1. Luas lingkaran dihitung dengan rumus L = πr², di mana r adalah jari-jari lingkaran.
2. Jadi, r = 14 cm / 2 = 7 cm, dan L = 3.14 * 7² = 3.14 * 49 = 153.86 cm².`,
  },
  {
    question: "13. Sebuah trapesium memiliki panjang sisi atas 8 cm, panjang sisi bawah 12 cm, dan tinggi 5 cm. Berapa luas trapesium tersebut?",
    options: ["50 cm²", "100 cm²", "60 cm²", "40 cm²"],
    correctAnswer: 2,
    explanation: `Penyelesaian:
1. Luas trapesium dihitung dengan rumus L = 1/2 * (a + b) * t, di mana a dan b adalah panjang sisi atas dan bawah, dan t adalah tinggi.
2. Jadi, L = 1/2 * (8 cm + 12 cm) * 5 cm = 1/2 * 20 cm * 5 cm = 50 cm².`,
  },
  {
    question: "14. Sebuah tabung memiliki volume 154 cm³ dan jari-jari alas 7 cm. Berapa tinggi tabung tersebut? (π = 3.14)",
    options: ["6 cm", "8 cm", "10 cm", "12 cm"],
    correctAnswer: 2,
    explanation: `Penyelesaian:
1. Volume tabung dihitung dengan rumus V = πr²t, di mana r adalah jari-jari dan t adalah tinggi tabung.
2. Jadi, t = V / (πr²) = 154 cm³ / (3.14 * 7²) = 154 / 153.94 ≈ 10 cm.`,
  },
  {
    question: "15. Sebuah prisma segi enam memiliki panjang sisi alas 6 cm dan tinggi 8 cm. Berapa volume prisma tersebut?",
    options: ["144 cm³", "192 cm³", "216 cm³", "288 cm³"],
    correctAnswer: 0,
    explanation: `Penyelesaian:
1. Volume prisma segi enam dihitung dengan rumus V = luas alas * tinggi.
2. Luas alas segi enam dihitung dengan rumus L = 3√3/2 * s², di mana s adalah panjang sisi.
3. Jadi, L = 3√3/2 * 6² = 3√3/2 * 36 ≈ 93.53 cm².
4. Volume prisma = L * t = 93.53 cm² * 8 cm ≈ 144 cm³.`,
  },
  {
    question: "16. Sebuah bangun ruang berbentuk tabung memiliki jari-jari 14 cm dan tinggi 10 cm. Jika sebuah bola dengan jari-jari 7 cm dimasukkan ke dalam tabung, berapa volume sisa ruang dalam tabung tersebut? (π = 3.14)",
    options: ["3880 cm³", "4620 cm³", "3080 cm³", "3920 cm³"],
    correctAnswer: 0,
    explanation: `Penyelesaian:
  1. Volume tabung dihitung dengan rumus V_tabung = πr²t, di mana r adalah jari-jari dan t adalah tinggi tabung.
     V_tabung = 3.14 * 14² * 10 = 3.14 * 196 * 10 = 6154.4 cm³.
  2. Volume bola dihitung dengan rumus V_bola = 4/3 * π * r³.
     V_bola = 4/3 * 3.14 * 7³ = 4/3 * 3.14 * 343 = 1436.03 cm³.
  3. Volume sisa ruang = V_tabung - V_bola = 6154.4 - 1436.03 ≈ 3880 cm³.`,
  },
  {
    question: "17. Sebuah limas segi empat memiliki panjang alas 8 cm, lebar alas 6 cm, dan tinggi 15 cm. Jika tinggi limas diturunkan menjadi 10 cm tanpa mengubah dimensi alas, berapa perbandingan volume limas sebelum dan sesudah perubahan?",
    options: ["3:2", "2:3", "5:3", "3:5"],
    correctAnswer: 0,
    explanation: `Penyelesaian:
  1. Volume limas dihitung dengan rumus V = 1/3 * panjang * lebar * tinggi.
     Volume awal = 1/3 * 8 * 6 * 15 = 240 cm³.
     Volume akhir = 1/3 * 8 * 6 * 10 = 160 cm³.
  2. Perbandingan volume awal dan akhir = 240:160 = 3:2.`,
  },
  {
    question: "18. Sebuah taman berbentuk lingkaran dengan jari-jari 21 meter akan dipasang pagar di sekelilingnya. Jika biaya pemasangan pagar adalah Rp50.000 per meter, berapa total biaya yang diperlukan? (π = 22/7)",
    options: ["Rp6.600.000", "Rp7.700.000", "Rp6.900.000", "Rp7.200.000"],
    correctAnswer: 0,
    explanation: `Penyelesaian:
  1. Keliling taman dihitung dengan rumus K = 2πr.
     K = 2 * 22/7 * 21 = 132 meter.
  2. Total biaya pemasangan pagar = Rp50.000 * 132 = Rp6.600.000.`,
  },
  {
    question: "19. Sebuah bola dengan jari-jari 6 cm dicelupkan ke dalam sebuah tabung yang berisi air hingga penuh. Jika air yang tumpah adalah 904.32 cm³, berapa tinggi air dalam tabung dengan jari-jari 6 cm setelah bola dicelupkan? (π = 3.14)",
    options: ["8 cm", "12 cm", "16 cm", "10 cm"],
    correctAnswer: 3,
    explanation: `Penyelesaian:
  1. Volume bola dihitung dengan rumus V = 4/3 * π * r³.
     V = 4/3 * 3.14 * 6³ = 904.32 cm³.
  2. Volume air yang tersisa akan membentuk silinder dengan jari-jari 6 cm.
     Tinggi air dalam tabung = V / (πr²) = 904.32 / (3.14 * 6²) = 10 cm.`,
  },
  {
    question: "20. Sebuah trapesium memiliki sisi sejajar 14 cm dan 20 cm, dengan tinggi 12 cm. Jika trapesium tersebut diputar mengelilingi sisi terpendeknya, berapa volume benda yang terbentuk? (π = 3.14)",
    options: ["7910.4 cm³", "7056 cm³", "6842.8 cm³", "8426.4 cm³"],
    correctAnswer: 1,
    explanation: `Penyelesaian:
  1. Volume benda putar berbentuk kerucut terpancung dihitung dengan rumus V = 1/3 * π * t * (R² + Rr + r²), di mana R dan r adalah jari-jari lingkaran besar dan kecil.
     R = 20/2 = 10 cm, r = 14/2 = 7 cm, dan t = tinggi = 12 cm.
     V = 1/3 * 3.14 * 12 * (10² + 10*7 + 7²) = 1/3 * 3.14 * 12 * (100 + 70 + 49) = 1/3 * 3.14 * 12 * 219 ≈ 7056 cm³.`,
  },
  
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
      <h1>Latihan Soal Geometri</h1>
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

export default SoalLatihanGeometri;
