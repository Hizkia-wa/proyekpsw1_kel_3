import React, { useState } from "react";
import "./BrillianBinomial.css";

const slides = [
    {
        title: "Mean (Rata-Rata) - Data Tunggal",
        formulaArea: "Mean = Σx / n",
        inputs: ["Data"],
        calculate: ({ Data }) => {
            try {
                const numbers = Data.split(",").map(Number);
                if (numbers.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                const sum = numbers.reduce((a, b) => a + b, 0);
                const mean = sum / numbers.length;
                const explanation = `Rata-rata dihitung dengan:\nΣx / n = ${sum} / ${numbers.length} = ${mean}`;
                return { result: mean, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung rata-rata." };
            }
        },
    },
    {
        title: "Median - Data Tunggal",
        formulaArea: "Median = (n + 1) / 2",
        inputs: ["Data"],
        calculate: ({ Data }) => {
            try {
                const numbers = Data.split(",").map(Number);
                if (numbers.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                numbers.sort((a, b) => a - b);
                const middle = Math.floor(numbers.length / 2);
                let median;
                if (numbers.length % 2 === 0) {
                    median = (numbers[middle - 1] + numbers[middle]) / 2;
                } else {
                    median = numbers[middle];
                }
                const explanation = `Median dihitung dengan cara:\nData terurut: ${numbers.join(", ")}\nMedian = ${median}`;
                return { result: median, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung median." };
            }
        },
    },
    {
        title: "Modus - Data Tunggal",
        formulaArea: "Modus = Nilai yang paling sering muncul",
        inputs: ["Data"],
        calculate: ({ Data }) => {
            try {
                const numbers = Data.split(",").map(Number);
                if (numbers.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                const frequency = {};
                let maxFreq = 0;
                let mode;
                numbers.forEach((num) => {
                    frequency[num] = (frequency[num] || 0) + 1;
                    if (frequency[num] > maxFreq) {
                        maxFreq = frequency[num];
                        mode = num;
                    }
                });
                const explanation = `Modus dihitung dengan cara:\nFrekuensi data: ${JSON.stringify(
                    frequency
                )}\nModus = ${mode}`;
                return { result: mode, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung modus." };
            }
        },
    },
    {
        title: "Kuartil - Data Tunggal",
        formulaArea: "Q1 = P25, Q2 = Median, Q3 = P75",
        inputs: ["Data"],
        calculate: ({ Data }) => {
            try {
                const numbers = Data.split(",").map(Number);
                if (numbers.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                numbers.sort((a, b) => a - b);

                const quartile = (percent) => {
                    const index = (percent / 100) * (numbers.length + 1);
                    const lower = Math.floor(index) - 1;
                    const upper = Math.ceil(index) - 1;
                    if (lower === upper) {
                        return numbers[lower];
                    } else {
                        return numbers[lower] + (numbers[upper] - numbers[lower]) * (index - lower - 1);
                    }
                };

                const q1 = quartile(25);
                const q2 = quartile(50); // Median
                const q3 = quartile(75);

                const explanation = `Kuartil dihitung dengan cara:\nQ1 = P25 = ${q1}, Q2 = P50 (Median) = ${q2}, Q3 = P75 = ${q3}`;
                return { result: `Q1 = ${q1}, Q2 = ${q2}, Q3 = ${q3}`, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung kuartil." };
            }
        },
    },
    {
        title: "Persentil - Data Tunggal",
        formulaArea: "P = (n + 1) * p / 100",
        inputs: ["Data", "Persentil"],
        calculate: ({ Data, Persentil }) => {
            try {
                const numbers = Data.split(",").map(Number);
                const p = Number(Persentil);
                if (numbers.some(isNaN) || isNaN(p)) {
                    return {
                        result: "Error",
                        explanation: "Data atau persentil tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                numbers.sort((a, b) => a - b);
                const index = (p / 100) * (numbers.length + 1);
                const lower = Math.floor(index) - 1;
                const upper = Math.ceil(index) - 1;
                let percentile;
                if (lower === upper) {
                    percentile = numbers[lower];
                } else {
                    percentile = numbers[lower] + (numbers[upper] - numbers[lower]) * (index - lower - 1);
                }
                const explanation = `Persentil dihitung dengan cara:\nP${p} = ${percentile}`;
                return { result: `P${p} = ${percentile}`, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung persentil." };
            }
        },
    },
];

const slidesBerkelompok = [
    {
        title: "Mean (Rata-Rata) - Data Berkelompok",
        formulaArea: "Mean = Σ(f * x̄) / Σf",
        inputs: ["Data", "Frekuensi"],
        calculate: ({ Data, Frekuensi }) => {
            try {
                const classes = Data.split(";").map((range) =>
                    range.split("-").map(Number)
                );
                const frequencies = Frekuensi.split(",").map(Number);
                if (classes.some((c) => c.length !== 2 || c.some(isNaN)) || frequencies.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data atau frekuensi tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                const midpoints = classes.map(([low, high]) => (low + high) / 2);
                const totalFreq = frequencies.reduce((a, b) => a + b, 0);
                const weightedSum = midpoints.reduce(
                    (sum, mid, i) => sum + mid * frequencies[i],
                    0
                );
                const mean = weightedSum / totalFreq;
                const explanation = `Rata-rata dihitung dengan:\nΣ(f * x̄) / Σf = ${weightedSum} / ${totalFreq} = ${mean}`;
                return { result: mean, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung rata-rata." };
            }
        },
    },
    {
        title: "Median - Data Berkelompok",
        formulaArea: "Median = L + [(N/2 − F) / f] * w",
        inputs: ["Data", "Frekuensi"],
        calculate: ({ Data, Frekuensi }) => {
            try {
                const classes = Data.split(";").map((range) =>
                    range.split("-").map(Number)
                );
                const frequencies = Frekuensi.split(",").map(Number);
                if (classes.some((c) => c.length !== 2 || c.some(isNaN)) || frequencies.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data atau frekuensi tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                const totalFreq = frequencies.reduce((a, b) => a + b, 0);
                const midIndex = totalFreq / 2;
                let cumulativeFreq = 0;
                let medianClassIndex = -1;

                for (let i = 0; i < frequencies.length; i++) {
                    cumulativeFreq += frequencies[i];
                    if (cumulativeFreq >= midIndex) {
                        medianClassIndex = i;
                        break;
                    }
                }

                const [lower, upper] = classes[medianClassIndex];
                const L = lower;
                const F = cumulativeFreq - frequencies[medianClassIndex];
                const f = frequencies[medianClassIndex];
                const w = upper - lower;
                const median = L + ((midIndex - F) / f) * w;
                const explanation = `Median dihitung dengan:\nL = ${L}, N/2 = ${midIndex}, F = ${F}, f = ${f}, w = ${w}\nMedian = ${median}`;
                return { result: median, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung median." };
            }
        },
    },
    {
        title: "Modus - Data Berkelompok",
        formulaArea: "Modus = L + [(fm - f1) / (2fm - f1 - f2)] * h",
        inputs: ["Data", "Frekuensi"],
        calculate: ({ Data, Frekuensi }) => {
            try {
                const classes = Data.split(";").map((range) =>
                    range.split("-").map(Number)
                );
                const frequencies = Frekuensi.split(",").map(Number);
                if (classes.some((c) => c.length !== 2 || c.some(isNaN)) || frequencies.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data atau frekuensi tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                const maxFreq = Math.max(...frequencies);
                const index = frequencies.indexOf(maxFreq);
                const [lower, upper] = classes[index];
                const L = lower;
                const fm = maxFreq;
                const f1 = frequencies[index - 1] || 0;
                const f2 = frequencies[index + 1] || 0;
                const h = upper - lower;
                const mode = L + ((fm - f1) / (2 * fm - f1 - f2)) * h;
                const explanation = `Modus dihitung dengan:\nL = ${L}, fm = ${fm}, f1 = ${f1}, f2 = ${f2}, h = ${h}\nModus = ${mode}`;
                return { result: mode, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung modus." };
            }
        },
    },
    {
        title: "Kuartil - Data Berkelompok",
        formulaArea: "Q1 = L + [(N/4 − F) / f] * w, Q3 = L + [(3N/4 − F) / f] * w",
        inputs: ["Data", "Frekuensi"],
        calculate: ({ Data, Frekuensi }) => {
            try {
                const classes = Data.split(";").map((range) =>
                    range.split("-").map(Number)
                );
                const frequencies = Frekuensi.split(",").map(Number);
                if (classes.some((c) => c.length !== 2 || c.some(isNaN)) || frequencies.some(isNaN)) {
                    return {
                        result: "Error",
                        explanation: "Data atau frekuensi tidak valid. Pastikan semua data adalah angka.",
                    };
                }
                const totalFreq = frequencies.reduce((a, b) => a + b, 0);
                const Q1Index = totalFreq / 4;
                const Q3Index = (3 * totalFreq) / 4;

                const calculateQuartile = (index) => {
                    let cumulativeFreq = 0;
                    for (let i = 0; i < frequencies.length; i++) {
                        cumulativeFreq += frequencies[i];
                        if (cumulativeFreq >= index) {
                            const [lower, upper] = classes[i];
                            const L = lower;
                            const F = cumulativeFreq - frequencies[i];
                            const f = frequencies[i];
                            const w = upper - lower;
                            return L + ((index - F) / f) * w;
                        }
                    }
                };

                const Q1 = calculateQuartile(Q1Index);
                const Q3 = calculateQuartile(Q3Index);
                const explanation = `Kuartil dihitung dengan:\nQ1 = ${Q1}, Q3 = ${Q3}`;
                return { result: `Q1: ${Q1}, Q3: ${Q3}`, explanation };
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung kuartil." };
            }
        },
    },
    {
        title: "Persentil - Data Berkelompok",
        formulaArea: "P = L + [(N / 100) * P − F) / f] * w",
        inputs: ["Data", "Frekuensi", "Persentil"],
        calculate: ({ Data, Frekuensi, Persentil }) => {
            try {
                const classes = Data.split(";").map((range) =>
                    range.split("-").map(Number)
                );
                const frequencies = Frekuensi.split(",").map(Number);
                const p = parseInt(Persentil, 10);
                if (classes.some((c) => c.length !== 2 || c.some(isNaN)) || frequencies.some(isNaN) || isNaN(p)) {
                    return {
                        result: "Error",
                        explanation: "Data, frekuensi, atau persentil tidak valid. Pastikan semua data adalah angka.",
                    };
                }

                const totalFreq = frequencies.reduce((a, b) => a + b, 0);
                const PIndex = (p / 100) * totalFreq;

                let cumulativeFreq = 0;
                for (let i = 0; i < frequencies.length; i++) {
                    cumulativeFreq += frequencies[i];
                    if (cumulativeFreq >= PIndex) {
                        const [lower, upper] = classes[i];
                        const L = lower;
                        const F = cumulativeFreq - frequencies[i];
                        const f = frequencies[i];
                        const w = upper - lower;
                        const percentile = L + ((PIndex - F) / f) * w;
                        const explanation = `Persentil dihitung dengan:\nP = ${percentile}`;
                        return { result: percentile, explanation };
                    }
                }
            } catch (error) {
                return { result: "Error", explanation: "Kesalahan saat menghitung persentil." };
            }
        },
    },
];

const BrilianStatistika = () => {
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
      <h1 className="main-title">Distribusi Binomial</h1>
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

export default BrilianStatistika;
