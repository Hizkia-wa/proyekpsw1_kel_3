import React, { useState } from "react";
import "./Brilian.css"; // pastikan file CSS ada di sini

const BrilianTurunan = () => {
  const [inputValues, setInputValues] = useState({});
  const [results, setResults] = useState({});

  // Handle perubahan input
  const handleInputChange = (e, slideTitle, inputName) => {
    const { value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [slideTitle]: {
        ...prev[slideTitle],
        [inputName]: value,
      },
    }));
  };

  // Fungsi untuk menghitung hasil turunan
  const calculateResult = (slide) => {
    const result = slide.calculate(inputValues[slide.title] || {});
    setResults((prev) => ({
      ...prev,
      [slide.title]: result,
    }));
  };

  const BrilianTurunanData = [
    {
      title: "Turunan Fungsi Polinomial",
      formulaArea: "f'(x) = n * a * x^(n-1)\n(Contoh: f(x) = 2 * x^3)",
      inputs: ["Fungsi (contoh: x^2)", "x (nilai yang dihitung)"],
      background: "#f0f0f0",
      calculate: ({ Fungsi, x }) => {
        try {
          const [base, exponent] = Fungsi.split("^");
          const a = Number(base) || 1;
          const n = Number(exponent) || 1;
          const xValue = Number(x);
          if (isNaN(a) || isNaN(n) || isNaN(xValue)) {
            return {
              result: "Error",
              explanation: "Data tidak valid. Pastikan semua data adalah angka.",
            };
          }

          const derivative = n * a * Math.pow(xValue, n - 1);
          const explanation = `Rumus turunan untuk fungsi polinomial: f'(x) = n * a * x^(n-1)\nMisalnya, jika f(x) = ${a} * x^${n}, maka turunan f'(x) adalah ${n} * ${a} * x^(${n - 1})\nPada x = ${xValue}, f'(${xValue}) = ${derivative}`;

          return { result: derivative, explanation };
        } catch (error) {
          return { result: "Error", explanation: "Kesalahan saat menghitung turunan." };
        }
      },
    },
    {
      title: "Turunan Fungsi Eksponensial",
      formulaArea: "f'(x) = a * e^(a * x)\n(Contoh: f(x) = 2 * e^(3x))",
      inputs: ["Fungsi (contoh: 2 * e^(3x))", "x (nilai yang dihitung)"],
      background: "#e7f1f5",
      calculate: ({ Fungsi, x }) => {
        try {
          const [coefficient, exponent] = Fungsi.split("e^(");
          const a = Number(coefficient) || 1;
          const exponentValue = Number(exponent.replace("x)", "")) || 1;
          const xValue = Number(x);
          if (isNaN(a) || isNaN(exponentValue) || isNaN(xValue)) {
            return {
              result: "Error",
              explanation: "Data tidak valid. Pastikan semua data adalah angka.",
            };
          }

          const derivative = a * exponentValue * Math.exp(exponentValue * xValue);
          const explanation = `Rumus turunan untuk fungsi eksponensial: f'(x) = a * e^(a * x)\nJika fungsi adalah ${a} * e^(${exponentValue} * x), maka turunan f'(x) = ${a} * ${exponentValue} * e^(${exponentValue} * ${xValue})\nPada x = ${xValue}, f'(${xValue}) = ${derivative}`;

          return { result: derivative, explanation };
        } catch (error) {
          return { result: "Error", explanation: "Kesalahan saat menghitung turunan." };
        }
      },
    },
    {
      title: "Turunan Fungsi Trigonometri",
      formulaArea: "f'(x) = cos(x) untuk f(x) = sin(x), f'(x) = -sin(x) untuk f(x) = cos(x)\n(Contoh: f(x) = sin(x))",
      inputs: ["Fungsi (contoh: sin(x))", "x (nilai yang dihitung)"],
      background: "#e8f7e9",
      calculate: ({ Fungsi, x }) => {
        try {
          const xValue = Number(x);
          if (isNaN(xValue)) {
            return {
              result: "Error",
              explanation: "x harus berupa angka.",
            };
          }

          let derivative;
          if (Fungsi === "sin(x)") {
            derivative = Math.cos(xValue);
          } else if (Fungsi === "cos(x)") {
            derivative = -Math.sin(xValue);
          } else {
            return {
              result: "Error",
              explanation: "Fungsi yang valid hanya 'sin(x)' atau 'cos(x)'.",
            };
          }

          const explanation = `Rumus turunan untuk fungsi trigonometri: f'(x) = cos(x) untuk sin(x), dan f'(x) = -sin(x) untuk cos(x)\nPada x = ${xValue}, turunan f'(${xValue}) = ${derivative}`;

          return { result: derivative, explanation };
        } catch (error) {
          return { result: "Error", explanation: "Kesalahan saat menghitung turunan." };
        }
      },
    },
    {
      title: "Turunan Fungsi Logaritma",
      formulaArea: "f'(x) = 1/x\n(Contoh: f(x) = log(x))",
      inputs: ["Fungsi (contoh: log(x))", "x (nilai yang dihitung)"],
      background: "#e7f5e7",
      calculate: ({ Fungsi, x }) => {
        try {
          const xValue = Number(x);
          if (isNaN(xValue) || xValue <= 0) {
            return {
              result: "Error",
              explanation: "x harus berupa angka positif.",
            };
          }

          const derivative = 1 / xValue;
          const explanation = `Rumus turunan untuk fungsi logaritma: f'(x) = 1/x\nJika fungsi adalah log(x), maka turunan f'(x) = 1/x\nPada x = ${xValue}, f'(${xValue}) = ${derivative}`;

          return { result: derivative, explanation };
        } catch (error) {
          return { result: "Error", explanation: "Kesalahan saat menghitung turunan." };
        }
      },
    },
    {
      title: "Turunan Fungsi Pangkat dengan Bilangan Pecahan",
      formulaArea: "f'(x) = (1/2) * x^(-1/2)\n(Contoh: f(x) = x^(1/2))",
      inputs: ["Fungsi (contoh: x^(1/2))", "x (nilai yang dihitung)"],
      background: "#f8e1e1",
      calculate: ({ Fungsi, x }) => {
        try {
          const [base, exponent] = Fungsi.split("^");
          const n = Number(exponent.replace("(", "").replace(")", "")) || 1;
          const xValue = Number(x);
          if (isNaN(n) || isNaN(xValue) || xValue <= 0) {
            return {
              result: "Error",
              explanation: "Pastikan x adalah angka positif.",
            };
          }

          const derivative = (n / 2) * Math.pow(xValue, n - 1);
          const explanation = `Rumus turunan untuk fungsi pangkat dengan bilangan pecahan: f'(x) = (1/2) * x^(-1/2)\nJika fungsi adalah x^(1/2), maka turunan f'(x) = (1/2) * x^(-1/2)\nPada x = ${xValue}, f'(${xValue}) = ${derivative}`;

          return { result: derivative, explanation };
        } catch (error) {
          return { result: "Error", explanation: "Kesalahan saat menghitung turunan." };
        }
      },
    },
    {
      title: "Turunan Fungsi Logaritma Natural",
      formulaArea: "f'(x) = 1/x\n(Contoh: f(x) = ln(x))",
      inputs: ["Fungsi (contoh: ln(x))", "x (nilai yang dihitung)"],
      background: "#f3e0d3",
      calculate: ({ Fungsi, x }) => {
        try {
          const xValue = Number(x);
          if (isNaN(xValue) || xValue <= 0) {
            return {
              result: "Error",
              explanation: "x harus berupa angka positif.",
            };
          }

          const derivative = 1 / xValue;
          const explanation = `Rumus turunan untuk fungsi logaritma natural: f'(x) = 1/x\nJika fungsi adalah ln(x), maka turunan f'(x) = 1/x\nPada x = ${xValue}, f'(${xValue}) = ${derivative}`;

          return { result: derivative, explanation };
        } catch (error) {
          return { result: "Error", explanation: "Kesalahan saat menghitung turunan." };
        }
      },
    },
  ];

  return (
    <div className="soal-latihan-container">
      <header className="soal-latihan-header">
        <h1>Brilian Kalkulator Turunan</h1>
      </header>
      <section className="soal-latihan-slides">
        {BrilianTurunanData.map((slide, index) => (
          <div
            key={index}
            className="soal-latihan-slide-container"
            style={{ backgroundColor: slide.background }}
          >
            <h2 className="soal-latihan-title">{slide.title}</h2>
            <p className="soal-latihan-formula">{slide.formulaArea}</p>
            {slide.inputs.map((input, i) => (
              <div key={i} className="soal-latihan-input-container">
                <label className="soal-latihan-label">{input}</label>
                <input
                  type="text"
                  className="soal-latihan-input"
                  value={inputValues[slide.title]?.[input] || ""}
                  onChange={(e) => handleInputChange(e, slide.title, input)}
                />
              </div>
            ))}
            <button
              className="soal-latihan-calculate-btn"
              onClick={() => calculateResult(slide)}
            >
              Hitung
            </button>
            <div>
              {results[slide.title] && (
                <div className="soal-latihan-result-container">
                  <h3 className="soal-latihan-result-title">Hasil:</h3>
                  <p className="soal-latihan-result">{results[slide.title].result}</p>
                  <p className="soal-latihan-explanation">{results[slide.title].explanation}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BrilianTurunan;
