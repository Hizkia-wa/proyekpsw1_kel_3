import React, { useState } from "react";
import "./MateriGeometriDatar.css";

const slides = [
    {
        title: "Mean",
        formulaArea: "Mean = JumlahData / BanyakData",
        inputs: ["JumlahData", "BanyakData"],
        calculate: ({ JumlahData, BanyakData }) => {
            const jumlah = parseFloat(JumlahData);
            const banyak = parseFloat(BanyakData);
            const mean = jumlah / banyak;
            const explanation = `Mean dihitung dengan membagi Jumlah Data (${jumlah}) dengan Banyak Data (${banyak}):\nMean = ${jumlah} / ${banyak} = ${mean.toFixed(2)}`;
            return { result: mean, explanation };
        },
    },
    {
        title: "Median",
        formulaArea: "Median = Nilai tengah dari data yang telah diurutkan",
        inputs: ["Data"],
        calculate: ({ Data }) => {
            const dataArr = Data.split(",").map(Number).sort((a, b) => a - b);
            const mid = Math.floor(dataArr.length / 2);
            const median =
                dataArr.length % 2 === 0
                    ? (dataArr[mid - 1] + dataArr[mid]) / 2
                    : dataArr[mid];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nJika jumlah data ganjil, median adalah nilai tengah (${median}).\nJika genap, median adalah rata-rata dua nilai tengah.`;
            return { result: median, explanation };
        },
    },
    {
        title: "Modus",
        formulaArea: "Modus = Nilai yang paling sering muncul",
        inputs: ["Data"],
        calculate: ({ Data }) => {
            const counts = {};
            const dataArr = Data.split(",").map(Number);
            dataArr.forEach((num) => (counts[num] = (counts[num] || 0) + 1));
            const maxCount = Math.max(...Object.values(counts));
            const mode = Object.keys(counts).filter((key) => counts[key] === maxCount);
            const explanation = `Frekuensi kemunculan nilai: ${JSON.stringify(
                counts
            )}.\nNilai yang paling sering muncul: ${mode.join(", ")} (sebanyak ${maxCount} kali).`;
            return { result: mode.join(", "), explanation };
        },
    },
    {
        title: "Kuartil",
        formulaArea: "Kuartil = Pembagian data menjadi empat bagian",
        inputs: ["Data"],
        calculate: ({ Data }) => {
            const dataArr = Data.split(",").map(Number).sort((a, b) => a - b);
            const mid = Math.floor(dataArr.length / 2);
            const q1 = dataArr[Math.floor(mid / 2)];
            const q3 = dataArr[mid + Math.floor(mid / 2)];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nKuartil 1 (Q1): nilai tengah dari setengah data pertama (${q1}).\nKuartil 3 (Q3): nilai tengah dari setengah data kedua (${q3}).`;
            return { Q1: q1, Q3: q3, explanation };
        },
    },
    {
        title: "Desil",
        formulaArea: "Desil = Pembagian data menjadi sepuluh bagian",
        inputs: ["Data", "DesilKe"],
        calculate: ({ Data, DesilKe }) => {
            const dataArr = Data.split(",").map(Number).sort((a, b) => a - b);
            const desilKe = parseInt(DesilKe);
            const index = (desilKe / 10) * (dataArr.length - 1);
            const desil = dataArr[Math.round(index)];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nDesil ke-${desilKe} berada di posisi ${(index + 1).toFixed(2)} (dibulatkan ke ${Math.round(
                index
            )}): ${desil}.`;
            return { result: desil, explanation };
        },
    },
    {
        title: "Persentil",
        formulaArea: "Persentil = Pembagian data menjadi seratus bagian",
        inputs: ["Data", "PersentilKe"],
        calculate: ({ Data, PersentilKe }) => {
            const dataArr = Data.split(",").map(Number).sort((a, b) => a - b);
            const persentilKe = parseInt(PersentilKe);
            const index = (persentilKe / 100) * (dataArr.length - 1);
            const persentil = dataArr[Math.round(index)];
            const explanation = `Data diurutkan: ${dataArr.join(", ")}.\nPersentil ke-${persentilKe} berada di posisi ${(index + 1).toFixed(2)} (dibulatkan ke ${Math.round(
                index
            )}): ${persentil}.`;
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
                <section className="slide" key={index}>
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