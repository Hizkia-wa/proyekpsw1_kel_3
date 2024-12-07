import React, { useState, useRef, useEffect } from "react";
import "./SoalLatihanStatistika.css";

const SoalLatihanStatistika = () => {
  const questions = [
    [
      {
        "question": "Dalam sebuah perlombaan, terdapat 5 peserta. Berapa banyak cara untuk menentukan juara 1, 2, dan 3?",
        "options": ["20", "60", "120", "210"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Juara 1 dapat dipilih dengan 5 cara, juara 2 dengan 4 cara, dan juara 3 dengan 3 cara. Total cara = 5 × 4 × 3 = 60."
      },
      {
        "question": "Berapa banyak susunan berbeda yang dapat dibuat dari huruf-huruf pada kata 'LULUS'?",
        "options": ["30", "60", "120", "240"],
        "correctAnswer": 0,
        "explanation": "Penyelesaian: Kata 'LULUS' memiliki 5 huruf, dengan 'L' muncul 2 kali dan 'U' muncul 2 kali. Banyak susunan = 5! ÷ (2! × 2!) = 120 ÷ 4 = 30."
      },
      {
        "question": "Dalam suatu kelompok terdapat 8 orang. Berapa banyak cara memilih 3 orang untuk membentuk tim?",
        "options": ["28", "36", "56", "72"],
        "correctAnswer": 2,
        "explanation": "Penyelesaian: Gunakan rumus kombinasi: C(n, r) = n! / (r! × (n - r)!). C(8, 3) = 8! / (3! × (8 - 3)!) = (8 × 7 × 6) ÷ (3 × 2 × 1) = 56."
      },
      {
        "question": "Dalam sebuah kode sandi terdiri dari 4 angka, di mana setiap angka dapat dipilih dari 0-9 tanpa pengulangan. Berapa banyak kode sandi yang mungkin?",
        "options": ["3024", "5040", "7200", "10000"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Angka pertama dapat dipilih dengan 10 cara, angka kedua 9 cara, angka ketiga 8 cara, dan angka keempat 7 cara. Total cara = 10 × 9 × 8 × 7 = 5040."
      },
      {
        "question": "Dalam suatu kelas terdapat 6 siswa. Berapa banyak cara untuk menyusun mereka dalam satu baris?",
        "options": ["120", "360", "480", "720"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian: Banyak susunan = 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720."
      },
      {
        "question": "Berapa banyak cara memilih 2 orang dari 10 orang jika urutan tidak diperhatikan?",
        "options": ["40", "45", "50", "55"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Gunakan rumus kombinasi: C(n, r) = n! / (r! × (n - r)!). C(10, 2) = 10! / (2! × (10 - 2)!) = (10 × 9) ÷ 2 = 45."
      },
      {
        "question": "Berapa banyak cara memilih 3 huruf dari kata 'ABCDE' jika urutan diperhatikan?",
        "options": ["30", "40", "50", "60"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian: Gunakan rumus permutasi: P(n, r) = n! / (n - r)!. P(5, 3) = 5! / (5 - 3)! = (5 × 4 × 3) = 60."
      },
      {
        "question": "Dalam sebuah pesta, terdapat 10 orang. Berapa banyak cara memilih ketua dan wakil ketua?",
        "options": ["80", "90", "100", "120"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Ketua dapat dipilih dengan 10 cara, wakil ketua dengan 9 cara. Total cara = 10 × 9 = 90."
      },
      {
        "question": "Berapa banyak cara menyusun huruf pada kata 'MELON' jika semua huruf berbeda?",
        "options": ["60", "120", "240", "720"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Karena semua huruf berbeda, banyak susunan = 5! = 5 × 4 × 3 × 2 × 1 = 120."
      },
      {
        "question": "Dalam sebuah lomba lari, terdapat 12 peserta. Berapa banyak cara untuk memilih 3 pemenang (tanpa urutan)?",
        "options": ["220", "320", "420", "520"],
        "correctAnswer": 0,
        "explanation": "Penyelesaian: Gunakan rumus kombinasi: C(n, r) = n! / (r! × (n - r)!). C(12, 3) = 12! / (3! × (12 - 3)!) = (12 × 11 × 10) ÷ (3 × 2 × 1) = 220."
      },
      {
        "question": "Dalam sebuah kelas, terdapat 15 siswa yang berpartisipasi dalam lomba matematika. Berapa banyak cara memilih 4 siswa untuk membentuk tim di mana salah satu siswa tertentu harus selalu dipilih?",
        "options": ["455", "364", "273", "182"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Siswa tertentu sudah dipilih, maka tersisa 14 siswa untuk mengisi 3 tempat. Gunakan rumus kombinasi: C(14, 3) = 14! / (3! × (14 - 3)!) = (14 × 13 × 12) ÷ (3 × 2 × 1) = 364."
      },
      {
        "question": "Sebuah komite terdiri dari 8 orang. Jika diperlukan ketua, wakil ketua, dan sekretaris, berapa banyak cara memilih posisi tersebut jika satu orang hanya bisa menduduki satu posisi?",
        "options": ["336", "448", "560", "672"],
        "correctAnswer": 0,
        "explanation": "Penyelesaian: Ketua dapat dipilih dengan 8 cara, wakil ketua dengan 7 cara, sekretaris dengan 6 cara. Total cara = 8 × 7 × 6 = 336."
      },
      {
        "question": "Kata 'STATISTIKA' memiliki 10 huruf dengan beberapa huruf yang berulang. Berapa banyak cara untuk menyusun huruf-huruf tersebut?",
        "options": ["50400", "45360", "40320", "30240"],
        "correctAnswer": 2,
        "explanation": "Penyelesaian: Kata 'STATISTIKA' memiliki 10 huruf, dengan 'T' muncul 3 kali, 'S' muncul 2 kali, dan 'I' muncul 2 kali. Banyak susunan = 10! ÷ (3! × 2! × 2!) = 40320."
      },
      {
        "question": "Sebuah papan permainan memiliki angka 1 hingga 9. Berapa banyak kode sandi 3 digit yang dapat dibuat jika angka tidak boleh berulang dan digit pertama harus genap?",
        "options": ["120", "140", "160", "180"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian: Digit pertama harus genap: {2, 4, 6, 8} (4 pilihan). Digit kedua: 8 pilihan (tanpa angka pertama). Digit ketiga: 7 pilihan (tanpa dua angka pertama). Total cara = 4 × 8 × 7 = 180."
      },
      {
        "question": "Dalam suatu undian, terdapat 20 nama. Jika 3 nama pemenang dipilih secara acak, berapa banyak susunan berbeda yang mungkin dibuat jika urutan pemenang diperhatikan?",
        "options": ["6840", "7440", "8040", "8640"],
        "correctAnswer": 0,
        "explanation": "Penyelesaian: Gunakan rumus permutasi: P(n, r) = n! / (n - r)!. P(20, 3) = 20 × 19 × 18 = 6840."
      },
      {
        "question": "Dalam sebuah tes, terdapat 10 soal pilihan ganda dengan 4 opsi pada setiap soal. Berapa banyak cara menjawab semua soal?",
        "options": ["1048576", "4096", "1024", "512"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Setiap soal memiliki 4 opsi. Total cara = 4^10 = 4096."
      },
      {
        "question": "Berapa banyak cara memilih 5 kartu dari sebuah dek standar (52 kartu) jika setiap pilihan harus memiliki tepat 2 kartu merah dan 3 kartu hitam?",
        "options": ["2598960", "63504", "31104", "12600"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian: Pilih 2 kartu merah: C(26, 2) = 325. Pilih 3 kartu hitam: C(26, 3) = 2600. Total cara = 325 × 2600 = 12600."
      },
      {
        "question": "Dalam sebuah perusahaan, terdapat 12 kandidat untuk dipilih menjadi manajer, supervisor, dan asisten. Berapa banyak cara untuk memilih posisi ini jika salah satu kandidat tertentu harus menjadi manajer?",
        "options": ["990", "1320", "1980", "2310"],
        "correctAnswer": 2,
        "explanation": "Penyelesaian: Manajer sudah dipilih (1 cara). Supervisor dapat dipilih dengan 11 cara, asisten dengan 10 cara. Total cara = 1 × 11 × 10 = 1980."
      },
      {
        "question": "Sebuah kode sandi terdiri dari 5 huruf di mana tidak ada huruf yang boleh diulang. Berapa banyak kode sandi yang dapat dibuat jika hanya huruf vokal digunakan?",
        "options": ["60", "120", "240", "360"],
        "correctAnswer": 1,
        "explanation": "Penyelesaian: Huruf vokal: {A, E, I, O, U} (5 huruf). Banyak susunan = 5! = 120."
      },
      {
        "question": "Dalam suatu perlombaan dengan 10 peserta, berapa banyak cara untuk memilih pemenang medali emas, perak, dan perunggu jika tidak ada seri?",
        "options": ["720", "840", "960", "1200"],
        "correctAnswer": 3,
        "explanation": "Penyelesaian: Medali emas: 10 cara, medali perak: 9 cara, medali perunggu: 8 cara. Total cara = 10 × 9 × 8 = 1200."
      }
    ]    
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
      <h1>Soal Latihan Aturan Pencacahan</h1>
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

export default SoalLatihanStatistika;
