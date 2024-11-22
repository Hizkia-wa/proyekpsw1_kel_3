import React, { useState } from "react";
import "./Latihansoalbangunruang.css";

const Latihansoalbangunruang = () => {
  const questions = [
    {
      id: 1,
      question: "Apa yang dimaksud dengan bangun ruang?",
      options: [
        "Bangun tiga dimensi dalam matematika.",
        "Bangun dua dimensi dalam matematika.",
        "Bangun tanpa dimensi.",
        "Bangun dengan dimensi tak terbatas.",
      ],
      answer: "Bangun tiga dimensi dalam matematika.",
    },
    {
      id: 2,
      question: "Contoh bangun ruang sisi datar adalah...",
      options: [
        "Kubus, balok, prisma, limas",
        "Tabung, kerucut, bola",
        "Lingkaran, persegi",
        "Piramida, segitiga",
      ],
      answer: "Kubus, balok, prisma, limas",
    },
    {
      id: 3,
      question: "Bangun ruang sisi lengkung meliputi...",
      options: [
        "Tabung, kerucut, bola",
        "Kubus, balok",
        "Prisma, limas",
        "Segitiga, lingkaran",
      ],
      answer: "Tabung, kerucut, bola",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="latihan-soal">
      {!showResult ? (
        <div className="quiz">
          <h2>{`Soal ${currentQuestion + 1}`}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>Hasil Latihan</h2>
          <p>
            Skor Anda: {score} dari {questions.length}
          </p>
          <button onClick={restartQuiz}>Ulangi Latihan</button>
        </div>
      )}
    </div>
  );
};

export default Latihansoalbangunruang;
