import React, { useState } from "react";
import "./MateriGeometriDatar.css";
import stk1 from "../images/STK1.png";
import stk2 from "../images/STK2.png";
import stk3 from "../images/STK3.png";
import stk4 from "../images/STK4.png";
import stk5 from "../images/STK5.png";
import stk6 from "../images/STK6.png";

const slides = [
    {
        title: "Mean",
        formulaArea: "Mean = JumlahData / BanyakData",
        inputs: ["JumlahData", "BanyakData"],
        background: stk1,
        calculate: ({ JumlahData, BanyakData }) => {
            const jumlah = parseFloat(JumlahData);
            const banyak = parseFloat(BanyakData);
            if (isNaN(jumlah) || isNaN(banyak) || banyak === 0) {
                return { result: "Error", explanation: "Input tidak valid atau pembagian dengan nol." };
            }
            const mean = jumlah / banyak;
            const explanation = `Mean dihitung dengan membagi Jumlah Data (${jumlah}) dengan Banyak Data (${banyak}):\nMean = ${jumlah} / ${banyak} = ${mean.toFixed(2)}`;
            return { result: mean, explanation };
        },
    },
    {
        title: "Median",
        formulaArea: "Median = Nilai tengah dari data yang telah diurutkan",
        inputs: ["Data"],
        background: stk2,
        calculate: ({ Data }) => {
            const dataArr = Data.split(",").map(Number).filter((n) => !isNaN(n)).sort((a, b) => a - b);
            if (dataArr.length === 0) {
                return { result: "Error", explanation: "Input data tidak valid." };
            }
            const mid = Math.floor(dataArr.length / 2);
            const median = dataArr.length % 2 === 0 ? (dataArr[mid - 1] + dataArr[mid]) / 2 : dataArr[mid];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nMedian adalah nilai tengah: ${median}.`;
            return { result: median, explanation };
        },
    },
    {
        title: "Modus",
        formulaArea: "Modus = Nilai yang paling sering muncul",
        inputs: ["Data"],
        background: stk3,
        calculate: ({ Data }) => {
            const dataArr = Data.split(",").map(Number).filter((n) => !isNaN(n));
            if (dataArr.length === 0) {
                return { result: "Error", explanation: "Input data tidak valid." };
            }
            const counts = {};
            dataArr.forEach((num) => (counts[num] = (counts[num] || 0) + 1));
            const maxCount = Math.max(...Object.values(counts));
            const mode = Object.keys(counts).filter((key) => counts[key] === maxCount);
            const explanation = `Frekuensi kemunculan nilai: ${JSON.stringify(counts)}.\nModus: ${mode.join(", ")}, muncul sebanyak ${maxCount} kali.`;
            return { result: mode.join(", "), explanation };
        },
    },
    {
        title: "Kuartil",
        formulaArea: "Kuartil = Pembagian data menjadi empat bagian",
        inputs: ["Data"],
        background: stk4,
        calculate: ({ Data }) => {
            const dataArr = Data.split(",").map(Number).filter((n) => !isNaN(n)).sort((a, b) => a - b);
            if (dataArr.length === 0) {
                return { Q1: "Error", Q3: "Error", explanation: "Input data tidak valid." };
            }
            const mid = Math.floor(dataArr.length / 2);
            const q1 = dataArr[Math.floor(mid / 2)];
            const q3 = dataArr[mid + Math.floor(mid / 2)];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nKuartil 1 (Q1): ${q1}.\nKuartil 3 (Q3): ${q3}.`;
            return { Q1: q1, Q3: q3, explanation };
        },
    },
    {
        title: "Desil",
        formulaArea: "Desil = Pembagian data menjadi sepuluh bagian",
        inputs: ["Data", "DesilKe"],
        background: stk5,
        calculate: ({ Data, DesilKe }) => {
            const dataArr = Data.split(",").map(Number).filter((n) => !isNaN(n)).sort((a, b) => a - b);
            const desilKe = parseInt(DesilKe);
            if (dataArr.length === 0 || isNaN(desilKe) || desilKe < 1 || desilKe > 10) {
                return { result: "Error", explanation: "Input tidak valid atau desil ke luar dari rentang (1-10)." };
            }
            const index = (desilKe / 10) * (dataArr.length - 1);
            const desil = dataArr[Math.round(index)];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nDesil ke-${desilKe}: ${desil}.`;
            return { result: desil, explanation };
        },
    },
    {
        title: "Persentil",
        formulaArea: "Persentil = Pembagian data menjadi seratus bagian",
        inputs: ["Data", "PersentilKe"],
        background: stk6,
        calculate: ({ Data, PersentilKe }) => {
            const dataArr = Data.split(",").map(Number).filter((n) => !isNaN(n)).sort((a, b) => a - b);
            const persentilKe = parseInt(PersentilKe);
            if (dataArr.length === 0 || isNaN(persentilKe) || persentilKe < 1 || persentilKe > 100) {
                return { result: "Error", explanation: "Input tidak valid atau persentil ke luar dari rentang (1-100)." };
            }
            const index = (persentilKe / 100) * (dataArr.length - 1);
            const persentil = dataArr[Math.round(index)];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nPersentil ke-${persentilKe}: ${persentil}.`;
            return { result: persentil, explanation };
        },
    },
];

const MateriGeometriDatar = () => {
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
            <h1>Konsep Statistik</h1>
            {slides.map((slide, index) => (
                <section
                    className="slide"
                    key={index}
                    style={{
                        backgroundImage: `url(${slide.background})`,
                    }}
                >
                    <h2>{slide.title}</h2>
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
                                        value={
                                            inputValues[slide.title]?.[inputName] || ""
                                        }
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
                </section>
            ))}
        </div>
    );
};

export default MateriGeometriDatar;
