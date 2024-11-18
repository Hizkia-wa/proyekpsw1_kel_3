import React, { useState } from "react";
import "./MateriGeometriDatar.css";
import backgroundSegitiga from "../images/image1.jpg";
import  backgroundPersegi from "../images/image2.jpg";
import  backgroundLingkaran  from "../images/image3.jpg";
import  backgroundTrapesium from  "../images/image4.jpg";

const slides = [
    {
        title : "Segitiga",
        formulaArea : "L = 1/2 x alas x tinggi",
        formulaPerimeter : "K = jumlah semua sisi",
        inputs : ["alas", "tinggi", "sisiA", "sisiB", "sisiC"],
        rendershape : () => (
            <svg width ="100" height="100" viewBox="0 0 100 100">
                <polygon points="50,15 90,85 10,85" fill="#4CAF50"/>
            </svg>
        ),
        background : backgroundSegitiga,
        calculate : ({ alas, tinggi, sisiA, sisiB, sisiC }) => {
            const area = 0.5 * parseFloat(alas) * parseFloat(tinggi);
            const perimeter = 
            parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
            return { area, perimeter };
        },    
    },
    {
        title : "Persegi",
        formulaArea : "L = sisi x sisi ",
        formulaPerimeter : "K = jumlah semua sisi",
        inputs : ["sisi"],
        rendershape : () => (
            <svg width ="100" height="100" viewBox="0 0 100 100">
                <rect width="80" height="80" x="10" y="10" fill="#2196F3" />
            </svg>
        ),
        background : backgroundPersegi,
        calculate : ({ sisi }) => {
            const area = parseFloat(sisi) * parseFloat(sisi);
            const perimeter = 4 * parseFloat(sisi);
            return { area, perimeter };
        },
    },
    {
        title : "Lingkaran",
        formulaArea : "L = π x r² ",
        formulaPerimeter : "K = 2 × π × r",
        inputs : ["radius"],
        rendershape : () => (
            <svg width ="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#FFC107" />
            </svg>
        ),
        background : backgroundLingkaran,
        calculate : ({ radius }) => {
            const area = Math.PI * Math.pow(parseFloat(radius), 2);
            const perimeter = 2 * Math.PI * parseFloat(radius);
            return { area, perimeter };
        },
    },
    {
        title: "Trapesium",
        formulaArea: "L = 1/2 × (a + b) × tinggi",
        formulaPerimeter: "K = a + b + c + d",
        inputs: ["a", "b", "c", "d", "tinggi"],
        renderShape: () => (
            <svg width="100" height="100" viewBox="0 0 100 100">
                <polygon points="20,85 80,85 70,30 30,30" fill="#FF5722" />
            </svg>
    ),
        background: backgroundTrapesium,
        calculate: ({ a, b, c, d, tinggi }) => {
        const area =
            0.5 * (parseFloat(a) + parseFloat(b)) * parseFloat(tinggi);
        const perimeter =
            parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
        return { area, perimeter };
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
          <h1>Geometri Bangun Datar</h1>
          {slides.map((slide, index) => (
            <section
              className="slide"
              key={index}
              style={{
                background: `url(${slide.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h2>{slide.title}</h2>
              <div className="shape">{slide.renderShape()}</div>
              <p>
                <strong>Luas:</strong> {slide.formulaArea}
              </p>
              <p>
                <strong>Keliling:</strong> {slide.formulaPerimeter}
              </p>
              <div className="inputs">
                {slide.inputs.map((inputName) => (
                  <div key={inputName}>
                    <label>
                      {inputName[0].toUpperCase() + inputName.slice(1)}:
                      <input
                        type="number"
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
                    <strong>Luas:</strong>{" "}
                    {results[slide.title].area.toFixed(2)}
                  </p>
                  <p>
                    <strong>Keliling:</strong>{" "}
                    {results[slide.title].perimeter.toFixed(2)}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      );
    };
    
    export default MateriGeometriDatar;