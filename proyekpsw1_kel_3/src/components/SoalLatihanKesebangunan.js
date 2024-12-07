import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanKesebangunan = () => {
  const questions = [
    {
        question: 
            "1. Dua segitiga, ∆ABC dan ∆DEF, kongruen. Jika panjang sisi AB = 6 cm, BC = 8 cm, dan AC = 10 cm, maka berapakah panjang sisi DE pada ∆DEF yang bersesuaian dengan sisi AB?",
        options: ["6 cm", "8 cm", "10 cm", "12 cm"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Karena kedua segitiga kongruen, panjang sisi yang bersesuaian adalah sama.
    2. Sisi AB bersesuaian dengan sisi DE, sehingga panjang DE = panjang AB = 6 cm.`,
    },
    {
        question: 
            "2. ∆PQR dan ∆XYZ sebangun. Jika panjang sisi PQ = 12 cm, QR = 18 cm, dan sisi XY = 8 cm, berapakah panjang sisi YZ?",
        options: ["12 cm", "16 cm", "18 cm", "24 cm"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - PQ/XY = QR/YZ
       - 12/8 = 18/YZ
    2. Selesaikan perbandingan:
       - YZ = (18 × 8) ÷ 12 = 144 ÷ 12 = 16 cm.`,
    },
    {
        question: 
            "3. Diketahui dua segitiga kongruen, ∆ABC dan ∆DEF. Jika sudut A = 40° dan sudut B = 50°, berapakah besar sudut E pada ∆DEF?",
        options: ["40°", "50°", "90°", "60°"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Pada segitiga kongruen, sudut yang bersesuaian adalah sama besar.
    2. Sudut A bersesuaian dengan sudut E, sehingga besar sudut E = 40°.`,
    },
    {
        question: 
            "4. Dua persegi panjang, ABCD dan EFGH, sebangun. Panjang AB = 12 cm, lebar BC = 8 cm, dan panjang EF = 18 cm. Berapakah panjang FG?",
        options: ["9 cm", "12 cm", "18 cm", "24 cm"],
        correctAnswer: 3,
        explanation: `Penyelesaian:
    1. Hubungan sisi-sisi pada bangun sebangun:
       - AB/EF = BC/FG
       - 12/18 = 8/FG
    2. Selesaikan perbandingan:
       - FG = (8 × 18) ÷ 12 = 144 ÷ 12 = 24 cm.`,
    },
    {
        question: 
            "5. ∆ABC dan ∆DEF sebangun. Jika panjang sisi AB = 15 cm, BC = 20 cm, dan panjang sisi DE = 9 cm, berapakah panjang sisi EF?",
        options: ["12 cm", "10 cm", "15 cm", "18 cm"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - AB/DE = BC/EF
       - 15/9 = 20/EF
    2. Selesaikan perbandingan:
       - EF = (20 × 9) ÷ 15 = 180 ÷ 15 = 12 cm.`,
    },
    {
        question: 
            "6. Dua segitiga, ∆ABC dan ∆DEF, sebangun. Jika panjang sisi AB = 8 cm, BC = 6 cm, dan panjang sisi EF = 9 cm, berapakah panjang sisi DE?",
        options: ["6 cm", "9 cm", "12 cm", "8 cm"],
        correctAnswer: 2,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - AB/DE = BC/EF
       - 8/DE = 6/9
    2. Selesaikan perbandingan:
       - DE = (8 × 9) ÷ 6 = 72 ÷ 6 = 12 cm.`,
    },
    {
        question: 
            "7. Dua segitiga kongruen memiliki sisi masing-masing: AB = 5 cm, BC = 12 cm, AC = 13 cm. Berapakah keliling segitiga kongruen lainnya?",
        options: ["30 cm", "25 cm", "20 cm", "35 cm"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Karena kedua segitiga kongruen, panjang semua sisi yang bersesuaian adalah sama.
    2. Keliling segitiga kongruen lainnya = AB + BC + AC = 5 + 12 + 13 = 30 cm.`,
    },
    {
        question: 
            "8. Dua segitiga ∆ABC dan ∆DEF sebangun. Jika panjang sisi AB = 10 cm, BC = 15 cm, dan panjang sisi EF = 12 cm, berapakah panjang sisi DE?",
        options: ["8 cm", "10 cm", "9 cm", "14 cm"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Hubungan segitiga sebangun: sisi-sisi yang bersesuaian memiliki perbandingan yang sama.
       - AB/DE = BC/EF
       - 10/DE = 15/12
    2. Selesaikan perbandingan:
       - DE = (10 × 12) ÷ 15 = 120 ÷ 15 = 8 cm.`,
    },
    {
        question: 
            "9. Diketahui dua trapesium sebangun. Panjang sisi sejajar pada trapesium pertama adalah 10 cm dan 20 cm. Panjang sisi sejajar trapesium kedua adalah 15 cm. Berapakah panjang sisi sejajar lainnya pada trapesium kedua?",
        options: ["30 cm", "25 cm", "20 cm", "10 cm"],
        correctAnswer: 1,
        explanation: `Penyelesaian:
    1. Hubungan sisi sejajar pada trapesium sebangun:
       - (10/15) = (20/x)
       - x = (15 × 20) ÷ 10 = 30 cm.`,
    },
    {
        question: 
            "10. Dua persegi sebangun dengan panjang sisi masing-masing 6 cm dan 9 cm. Jika luas persegi pertama adalah 36 cm², berapakah luas persegi kedua?",
        options: ["81 cm²", "64 cm²", "72 cm²", "48 cm²"],
        correctAnswer: 0,
        explanation: `Penyelesaian:
    1. Hubungan luas bangun sebangun:
       - Perbandingan luas = (perbandingan sisi)².
       - Luas kedua = (9/6)² × luas pertama = (3/2)² × 36 = (9/4) × 36 = 81 cm².`,
    },
    {
      question: 
          "11. Dua bangun segitiga, ∆ABC dan ∆DEF, kongruen. Jika panjang sisi AB = 7 cm, BC = 24 cm, dan AC = 25 cm, berapakah keliling ∆DEF?",
      options: ["56 cm", "62 cm", "48 cm", "52 cm"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
  1. Karena kedua segitiga kongruen, panjang semua sisi yang bersesuaian sama.
  2. Keliling ∆DEF = AB + BC + AC = 7 cm + 24 cm + 25 cm = 56 cm.`,
  },
  {
      question: 
          "12. Dua lingkaran sebangun memiliki perbandingan diameter 2:3. Jika luas lingkaran yang lebih kecil adalah 50 cm², berapakah luas lingkaran yang lebih besar?",
      options: ["75 cm²", "112.5 cm²", "90 cm²", "120 cm²"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
  1. Perbandingan luas lingkaran = (perbandingan diameter)².
  2. Luas lingkaran besar = (3/2)² × 50 cm² = (9/4) × 50 = 112.5 cm².`,
  },
  {
      question: 
          "13. Sebuah kubus memiliki volume 216 cm³. Jika panjang sisi kubus tersebut diperbesar menjadi dua kali lipat, berapakah volume kubus yang baru?",
      options: ["864 cm³", "1728 cm³", "432 cm³", "648 cm³"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
  1. Panjang sisi kubus = ∛216 = 6 cm.
  2. Jika sisi diperbesar dua kali lipat, sisi baru = 2 × 6 = 12 cm.
  3. Volume kubus baru = 12³ = 1728 cm³.`,
  },
  {
      question: 
          "14. Sebuah prisma segitiga memiliki panjang alas 6 cm, tinggi segitiga 8 cm, dan tinggi prisma 10 cm. Jika alas diperbesar menjadi 9 cm, berapakah volume prisma baru?",
      options: ["360 cm³", "480 cm³", "540 cm³", "720 cm³"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
  1. Volume awal = luas alas × tinggi prisma = (1/2 × 6 × 8) × 10 = 240 cm³.
  2. Jika panjang alas menjadi 9 cm, luas alas baru = 1/2 × 9 × 8 = 36 cm².
  3. Volume baru = 36 × 10 = 360 cm³.`,
  },
  {
      question: 
          "15. Sebuah tabung memiliki jari-jari 14 cm dan tinggi 20 cm. Jika jari-jari tabung diperkecil menjadi setengahnya, berapakah volume tabung baru?",
      options: ["1540 cm³", "3080 cm³", "3850 cm³", "6160 cm³"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
  1. Volume awal = πr²t = 3.14 × 14² × 20 = 12320 cm³.
  2. Jika jari-jari menjadi setengahnya (7 cm), volume baru = 3.14 × 7² × 20 = 1540 cm³.`,
  },
  {
      question: 
          "16. Sebuah belah ketupat memiliki diagonal masing-masing 10 cm dan 24 cm. Jika kedua diagonal diperbesar menjadi 1.5 kali panjangnya, berapakah luas belah ketupat baru?",
      options: ["180 cm²", "360 cm²", "270 cm²", "225 cm²"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
  1. Luas awal = 1/2 × d1 × d2 = 1/2 × 10 × 24 = 120 cm².
  2. Setelah diperbesar, diagonal baru = 1.5 × 10 = 15 cm dan 1.5 × 24 = 36 cm.
  3. Luas baru = 1/2 × 15 × 36 = 270 cm².`,
  },
  {
      question: 
          "17. Sebuah lingkaran memiliki keliling 31.4 cm. Jika diameter lingkaran tersebut diperbesar menjadi dua kali lipat, berapakah keliling lingkaran baru? (π = 3.14)",
      options: ["31.4 cm", "62.8 cm", "94.2 cm", "125.6 cm"],
      correctAnswer: 1,
      explanation: `Penyelesaian:
  1. Diameter awal = 31.4 ÷ π = 10 cm.
  2. Jika diameter diperbesar dua kali, diameter baru = 20 cm.
  3. Keliling baru = π × diameter baru = 3.14 × 20 = 62.8 cm.`,
  },
  {
      question: 
          "18. Sebuah kerucut memiliki jari-jari 7 cm dan tinggi 24 cm. Jika tinggi kerucut diperbesar menjadi dua kali lipat, berapakah volume kerucut baru?",
      options: ["308 cm³", "615 cm³", "1230 cm³", "2460 cm³"],
      correctAnswer: 3,
      explanation: `Penyelesaian:
  1. Volume awal = 1/3 × π × r² × t = 1/3 × 3.14 × 7² × 24 = 1230 cm³.
  2. Jika tinggi diperbesar dua kali, tinggi baru = 2 × 24 = 48 cm.
  3. Volume baru = 1/3 × 3.14 × 7² × 48 = 2460 cm³.`,
  },
  {
      question: 
          "19. Sebuah trapesium memiliki panjang sisi sejajar 10 cm dan 15 cm dengan tinggi 6 cm. Jika tinggi diperbesar 2 kali lipat, berapakah luas trapesium baru?",
      options: ["120 cm²", "180 cm²", "240 cm²", "150 cm²"],
      correctAnswer: 2,
      explanation: `Penyelesaian:
  1. Luas awal = 1/2 × (a + b) × t = 1/2 × (10 + 15) × 6 = 75 cm².
  2. Setelah tinggi diperbesar dua kali lipat, t baru = 2 × 6 = 12 cm.
  3. Luas baru = 1/2 × (10 + 15) × 12 = 180 cm².`,
  },
  {
      question: 
          "20. Sebuah kubus memiliki panjang sisi 5 cm. Jika panjang sisi diperbesar 3 kali lipat, berapakah perbandingan volume awal dengan volume baru?",
      options: ["1:27", "1:9", "1:3", "1:8"],
      correctAnswer: 0,
      explanation: `Penyelesaian:
  1. Volume awal = 5³ = 125 cm³.
  2. Setelah sisi diperbesar tiga kali, sisi baru = 3 × 5 = 15 cm.
  3. Volume baru = 15³ = 3375 cm³.
  4. Perbandingan volume = 125:3375 = 1:27.`,
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
      <h1>Soal Latihan Kongruen Dan Kesebangunan</h1>
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

export default SoalLatihanKesebangunan;
