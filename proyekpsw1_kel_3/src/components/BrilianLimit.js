import React, { useState } from "react";
import "./BrillianBinomial.css";
const slides = [
    {
        title: "Limit Fungsi Aljabar (x → a)",
        formulaArea: "lim (x → a) f(x) = f(a)",
        inputs: ["Fungsi", "NilaiX"],
        calculate: ({ Fungsi, NilaiX }) => {
            try {
                const x = parseFloat(NilaiX);
                if (isNaN(x) || !Fungsi) {
                    return { result: "Error", explanation: "Input tidak valid." };
                }
                const evaluatedFunction = new Function("x", `return ${Fungsi}`);
                const limit = evaluatedFunction(x);
                const explanation = `Dengan menggantikan x = ${x} ke dalam fungsi:\nf(x) = ${Fungsi.replace(
                    /x/g,
                    `(${x})`
                )} = ${limit}`;
                return { result: limit, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung limit." };
            }
        },
    },
    {
        title: "Limit Fungsi dengan Pembagian (x → a)",
        formulaArea: "lim (x → a) [f(x)/g(x)]",
        inputs: ["Pembilang", "Penyebut", "NilaiX"],
        calculate: ({ Pembilang, Penyebut, NilaiX }) => {
            try {
                const x = parseFloat(NilaiX);
                if (isNaN(x) || !Pembilang || !Penyebut) {
                    return { result: "Error", explanation: "Input tidak valid." };
                }
                const f = new Function("x", `return ${Pembilang}`);
                const g = new Function("x", `return ${Penyebut}`);
                const numerator = f(x);
                const denominator = g(x);

                if (denominator === 0) {
                    return {
                        result: "Tak hingga",
                        explanation: "Penyebut menjadi nol, sehingga limit menuju tak hingga atau tidak terdefinisi.",
                    };
                }

                const limit = numerator / denominator;
                const explanation = `Dengan menggantikan x = ${x} ke dalam fungsi:\nPembilang: ${Pembilang.replace(
                    /x/g,
                    `(${x})`
                )} = ${numerator}\nPenyebut: ${Penyebut.replace(
                    /x/g,
                    `(${x})`
                )} = ${denominator}\nLimit = ${numerator} / ${denominator} = ${limit}`;
                return { result: limit, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung limit." };
            }
        },
    },
    {
        title: "Limit Tak Hingga (x → ∞)",
        formulaArea: "lim (x → ∞) f(x)",
        inputs: ["Fungsi"],
        calculate: ({ Fungsi }) => {
            try {
                if (!Fungsi) {
                    return { result: "Error", explanation: "Input fungsi tidak valid." };
                }
                const x = Number.MAX_SAFE_INTEGER;
                const evaluatedFunction = new Function("x", `return ${Fungsi}`);
                const limit = evaluatedFunction(x);
                const explanation = `Dengan menggantikan x menuju tak hingga:\nf(x) = ${Fungsi.replace(
                    /x/g,
                    `(${x})`
                )} ≈ ${limit}`;
                return { result: limit, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung limit." };
            }
        },
    },
    {
        title: "Limit Trigonometri",
        formulaArea: "lim (x → a) [trigonometri]",
        inputs: ["Fungsi", "NilaiX"],
        calculate: ({ Fungsi, NilaiX }) => {
            try {
                const x = parseFloat(NilaiX);
                if (isNaN(x) || !Fungsi) {
                    return { result: "Error", explanation: "Input tidak valid." };
                }
                const evaluatedFunction = new Function(
                    "x",
                    `return ${Fungsi
                        .replace(/sin/g, "Math.sin")
                        .replace(/cos/g, "Math.cos")
                        .replace(/tan/g, "Math.tan")}`
                );
                const limit = evaluatedFunction(x);

                if (Fungsi.includes("sin(x)/x") && x === 0) {
                    return {
                        result: 1,
                        explanation:
                            "Berdasarkan sifat limit trigonometri:\nlim (x → 0) sin(x)/x = 1.",
                    };
                }
                if (Fungsi.includes("tan(x)/x") && x === 0) {
                    return {
                        result: 1,
                        explanation:
                            "Berdasarkan sifat limit trigonometri:\nlim (x → 0) tan(x)/x = 1.",
                    };
                }

                const explanation = `Menggunakan sifat trigonometri:\nJika fungsi adalah ${
                    Fungsi
                } dengan x = ${x}, maka hasilnya adalah ${limit}.`;
                return { result: limit, explanation };
            } catch (error) {
                return {
                    result: "Error",
                    explanation: "Kesalahan saat menghitung limit trigonometri.",
                };
            }
        },
    },
    {
        title: "Limit dengan L'Hôpital",
        formulaArea: "lim (x → a) [f(x)/g(x)] untuk bentuk tak tentu",
        inputs: ["Pembilang", "Penyebut", "NilaiX"],
        calculate: ({ Pembilang, Penyebut, NilaiX }) => {
            try {
                const x = parseFloat(NilaiX);
                if (isNaN(x) || !Pembilang || !Penyebut) {
                    return { result: "Error", explanation: "Input tidak valid." };
                }
                const fPrime = new Function("x", `return (${Pembilang})'`);
                const gPrime = new Function("x", `return (${Penyebut})'`);
                const limit = fPrime(x) / gPrime(x);
                const explanation = `Dengan menggunakan kaidah L'Hôpital:\nlim (x → ${x}) f'(x)/g'(x) = ${limit}`;
                return { result: limit, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung dengan kaidah L'Hôpital." };
            }
        },
    },
    {
        title: "Limit Deret Tak Hingga",
        formulaArea: "lim (n → ∞) Σ a_n",
        inputs: ["Rumus Deret", "Suku Awal"],
        calculate: ({ RumusDeret, SukuAwal }) => {
            try {
                const n = Number.MAX_SAFE_INTEGER;
                const evaluatedFunction = new Function("n", `return ${RumusDeret}`);
                const limit = evaluatedFunction(n);
                const explanation = `Dengan menggantikan n menuju tak hingga:\nΣ a_n = ${RumusDeret.replace(
                    /n/g,
                    `(${n})`
                )} ≈ ${limit}`;
                return { result: limit, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung limit deret tak hingga." };
            }
        },
    },
  ];
  
  const BrilianLimit = () => {
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
        <h1 className="main-title">Materi Peluang</h1>
        {slides.map((slide, index) => (
          <section className="slide" key={index}>
            <h2>{slide.title}</h2>
            <p>
              <strong>Soal:</strong> {slide.question}
            </p>
            <p>
              <strong>Rumus:</strong> {slide.formulaArea}
            </p>
            <div className="inputs">
              {slide.inputs.map((inputName) => (
                <div key={inputName}>
                  <label>
                    {inputName[0].toUpperCase() + inputName.slice(1)}:
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
            <button
              className="calculate-btn"
              onClick={() => calculateResult(slide)}
            >
              Hitung
            </button>
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
          </section>
        ))}
      </div>
    );
  };

export default BrilianLimit;