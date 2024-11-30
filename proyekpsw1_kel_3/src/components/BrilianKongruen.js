import React, { useState } from "react";
import "./MateriKongruenKesebangunan.css";

const slidesKongruenKesebangunan = [
  {
    title: "Kongruen pada Segitiga",
    formulaArea: "SSS, SAS, ASA, AAS",
    inputs: ["Sisi 1 (a)", "Sisi 2 (b)", "Sisi 3 (c)"],
    backgroundColor: "#FFD700", // Warna emas
    calculate: ({ "Sisi 1 (a)": a, "Sisi 2 (b)": b, "Sisi 3 (c)": c }) => {
      try {
        const sides = [Number(a), Number(b), Number(c)];
        if (sides.some(isNaN)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua sisi adalah angka.",
          };
        }

        if (sides[0] === sides[1] && sides[1] === sides[2]) {
          return {
            result: "Kongruen",
            explanation: `Ketiga sisi sama panjang (${sides[0]}), segitiga ini kongruen dengan SSS.`,
          };
        } else {
          return {
            result: "Tidak Kongruen",
            explanation: `Sisi-sisi segitiga tidak sama panjang (${sides.join(
              ", "
            )}).`,
          };
        }
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung kongruen.",
        };
      }
    },
  },
  {
    title: "Kesebangunan pada Segitiga",
    formulaArea: "AA, SSS, SAS",
    inputs: [
      "Sudut 1 (A)",
      "Sudut 2 (B)",
      "Sisi 1 (a)",
      "Sisi 2 (b)",
      "Sisi 3 (c)",
    ],
    backgroundColor: "#87CEEB", // Warna biru langit
    calculate: (data) => {
      const {
        "Sudut 1 (A)": A,
        "Sudut 2 (B)": B,
        "Sisi 1 (a)": a,
        "Sisi 2 (b)": b,
        "Sisi 3 (c)": c,
      } = data;
      try {
        const angles = [Number(A), Number(B)];
        const sides = [Number(a), Number(b), Number(c)];
        if (angles.some(isNaN) || sides.some(isNaN)) {
          return {
            result: "Error",
            explanation:
              "Data tidak valid. Pastikan semua sudut dan sisi adalah angka.",
          };
        }

        if (angles[0] + angles[1] < 180) {
          const scale = sides.map((side) => side / sides[0]);
          const isSimilar = scale.every((val, _, arr) => val === arr[0]);

          return {
            result: isSimilar ? "Sebangun" : "Tidak Sebangun",
            explanation: isSimilar
              ? `Skala semua sisi sama (${scale.join(
                  ", "
                )}), segitiga ini sebangun.`
              : `Skala sisi tidak sama (${scale.join(
                  ", "
                )}), segitiga ini tidak sebangun.`,
          };
        } else {
          return {
            result: "Error",
            explanation:
              "Jumlah sudut tidak valid, pastikan jumlahnya kurang dari 180°.",
          };
        }
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung kesebangunan.",
        };
      }
    },
  },
  {
    title: "Perbandingan Sisi pada Segitiga Sebangun",
    formulaArea: "S1 / S2 = S3 / S4",
    inputs: ["Sisi 1 (a)", "Sisi 2 (b)", "Sisi 3 (c)", "Sisi 4 (d)"],
    backgroundColor: "#FF69B4", // Warna merah muda
    calculate: (data) => {
      const {
        "Sisi 1 (a)": a,
        "Sisi 2 (b)": b,
        "Sisi 3 (c)": c,
        "Sisi 4 (d)": d,
      } = data;
      try {
        const sides = [Number(a), Number(b), Number(c), Number(d)];
        if (sides.some(isNaN)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua sisi adalah angka.",
          };
        }

        const ratio1 = sides[0] / sides[1];
        const ratio2 = sides[2] / sides[3];
        const isEqual = Math.abs(ratio1 - ratio2) < 0.001;

        return {
          result: isEqual ? "Sebangun" : "Tidak Sebangun",
          explanation: isEqual
            ? `Perbandingan sisi sama (${ratio1.toFixed(3)} ≈ ${ratio2.toFixed(
                3
              )}), segitiga ini sebangun.`
            : `Perbandingan sisi tidak sama (${ratio1.toFixed(
                3
              )} ≠ ${ratio2.toFixed(3)}).`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung perbandingan sisi.",
        };
      }
    },
  },
];

const MateriKongruenKesebangunan = () => {
  const [inputValues, setInputValues] = useState({});
  const [results, setResults] = useState({});

  const handleInputChange = (e, slideTitle) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [slideTitle]: {
        ...prev[slideTitle],
        [name]: value,
      },
    }));
  };

  const calculateResult = (slide) => {
    const inputs = inputValues[slide.title] || {};
    const resultsForSlide = slide.calculate(inputs);
    setResults((prev) => ({
      ...prev,
      [slide.title]: resultsForSlide,
    }));
  };

  return (
    <div className="slides-container">
      <h1>Materi Kongruen dan Kesebangunan</h1>

      <section>
        {slidesKongruenKesebangunan.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundColor: slide.backgroundColor, // Gunakan warna latar
            }}
          >
            <h3>{slide.title}</h3>
            <p>
              <strong>Rumus:</strong> {slide.formulaArea}
            </p>
            <div className="inputs">
              {slide.inputs.map((inputName) => (
                <div key={inputName}>
                  <label>
                    {inputName}:
                    <input
                      type="text"
                      name={inputName}
                      value={inputValues[slide.title]?.[inputName] || ""}
                      onChange={(e) => handleInputChange(e, slide.title)}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button onClick={() => calculateResult(slide)}>Hitung</button>
            {results[slide.title] && (
              <div className="result">
                <p>
                  <strong>Hasil:</strong> {results[slide.title].result}
                </p>
                <pre className="explanation">
                  {results[slide.title].explanation}
                </pre>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MateriKongruenKesebangunan;
