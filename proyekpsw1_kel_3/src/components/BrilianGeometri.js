import React, { useState } from "react";
import "./Brilian.css";

const slidesGeometri = [
  {
    title: "Segitiga",
    formulaArea: "L = 1/2 * alas * tinggi",
    formulaVolume: "Tidak ada volume",
    inputs: ["Alas (a)", "Tinggi (t)"],
    backgroundColor: "#789DBC", 
    calculate: ({ "Alas (a)": a, "Tinggi (t)": t }) => {
      try {
        const alas = Number(a);
        const tinggi = Number(t);
        if (isNaN(alas) || isNaN(tinggi)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua input adalah angka.",
          };
        }
        const area = 0.5 * alas * tinggi;
        return {
          result: `Luas Segitiga: ${area}`,
          explanation: `Luas segitiga dihitung dengan rumus 1/2 * alas * tinggi, yaitu 1/2 * ${alas} * ${tinggi} = ${area}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung luas segitiga.",
        };
      }
    },
  },
  {
    title: "Persegi",
    formulaArea: "L = sisi * sisi",
    formulaVolume: "Tidak ada volume",
    inputs: ["Sisi (s)"],
    backgroundColor: "#C1BAA1", 
    calculate: ({ "Sisi (s)": s }) => {
      try {
        const sisi = Number(s);
        if (isNaN(sisi)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan input adalah angka.",
          };
        }
        const area = sisi * sisi;
        return {
          result: `Luas Persegi: ${area}`,
          explanation: `Luas persegi dihitung dengan rumus sisi * sisi, yaitu ${sisi} * ${sisi} = ${area}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung luas persegi.",
        };
      }
    },
  },
  {
    title: "Lingkaran",
    formulaArea: "L = π * r²",
    formulaVolume: "Tidak ada volume",
    inputs: ["Jari-jari (r)"],
    backgroundColor: "#C5D3E8",
    calculate: ({ "Jari-jari (r)": r }) => {
      try {
        const radius = Number(r);
        if (isNaN(radius)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan input adalah angka.",
          };
        }
        const area = Math.PI * Math.pow(radius, 2);
        return {
          result: `Luas Lingkaran: ${area.toFixed(2)}`,
          explanation: `Luas lingkaran dihitung dengan rumus π * r², yaitu π * ${radius}² = ${area.toFixed(2)}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung luas lingkaran.",
        };
      }
    },
  },
  {
    title: "Trapesium",
    formulaArea: "L = 1/2 * (a + b) * t",
    formulaVolume: "Tidak ada volume",
    inputs: ["Sisi Atas (a)", "Sisi Bawah (b)", "Tinggi (t)"],
    backgroundColor: "#89A8B2", 
    calculate: ({ "Sisi Atas (a)": a, "Sisi Bawah (b)": b, "Tinggi (t)": t }) => {
      try {
        const sisiAtas = Number(a);
        const sisiBawah = Number(b);
        const tinggi = Number(t);
        if (isNaN(sisiAtas) || isNaN(sisiBawah) || isNaN(tinggi)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua input adalah angka.",
          };
        }
        const area = 0.5 * (sisiAtas + sisiBawah) * tinggi;
        return {
          result: `Luas Trapesium: ${area}`,
          explanation: `Luas trapesium dihitung dengan rumus 1/2 * (a + b) * tinggi, yaitu 1/2 * (${sisiAtas} + ${sisiBawah}) * ${tinggi} = ${area}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung luas trapesium.",
        };
      }
    },
  },
  {
    title: "Persegi Panjang",
    formulaArea: "L = panjang * lebar",
    formulaVolume: "Tidak ada volume",
    inputs: ["Panjang (p)", "Lebar (l)"],
    backgroundColor: "#B5C0D0", 
    calculate: ({ "Panjang (p)": p, "Lebar (l)": l }) => {
      try {
        const panjang = Number(p);
        const lebar = Number(l);
        if (isNaN(panjang) || isNaN(lebar)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan input adalah angka.",
          };
        }
        const area = panjang * lebar;
        return {
          result: `Luas Persegi Panjang: ${area}`,
          explanation: `Luas persegi panjang dihitung dengan rumus panjang * lebar, yaitu ${panjang} * ${lebar} = ${area}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung luas persegi panjang.",
        };
      }
    },
  },
  {
    title: "Jajar Genjang",
    formulaArea: "L = alas * tinggi",
    formulaVolume: "Tidak ada volume",
    inputs: ["Alas (a)", "Tinggi (t)"],
    backgroundColor: "#D3D3D3", // Warna abu-abu terang
    calculate: ({ "Alas (a)": a, "Tinggi (t)": t }) => {
      try {
        const alas = Number(a);
        const tinggi = Number(t);
        if (isNaN(alas) || isNaN(tinggi)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua input adalah angka.",
          };
        }
        const area = alas * tinggi;
        return {
          result: `Luas Jajar Genjang: ${area}`,
          explanation: `Luas jajar genjang dihitung dengan rumus alas * tinggi, yaitu ${alas} * ${tinggi} = ${area}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung luas jajar genjang.",
        };
      }
    },
  },
];

const slidesBangunRuang = [
  {
    title: "Kubus",
    formulaArea: "L = 6 * sisi²",
    formulaVolume: "V = sisi³",
    inputs: ["Sisi (s)"],
    backgroundColor: "#D4EBF8", // Warna coklat
    calculate: ({ "Sisi (s)": s }) => {
      try {
        const sisi = Number(s);
        if (isNaN(sisi)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan input adalah angka.",
          };
        }
        const area = 6 * Math.pow(sisi, 2);
        const volume = Math.pow(sisi, 3);
        return {
          result: `Luas Permukaan Kubus: ${area}, Volume Kubus: ${volume}`,
          explanation: `Luas permukaan kubus dihitung dengan rumus 6 * sisi², yaitu 6 * ${sisi}² = ${area}, dan volume kubus dihitung dengan rumus sisi³, yaitu ${sisi}³ = ${volume}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung kubus.",
        };
      }
    },
  },
  {
    title: "Balok",
    formulaArea: "L = 2 * (p * l + p * t + l * t)",
    formulaVolume: "V = p * l * t",
    inputs: ["Panjang (p)", "Lebar (l)", "Tinggi (t)"],
    backgroundColor: "#E5E1DA", 
    calculate: ({ "Panjang (p)": p, "Lebar (l)": l, "Tinggi (t)": t }) => {
      try {
        const panjang = Number(p);
        const lebar = Number(l);
        const tinggi = Number(t);
        if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua input adalah angka.",
          };
        }
        const area = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
        const volume = panjang * lebar * tinggi;
        return {
          result: `Luas Permukaan Balok: ${area}, Volume Balok: ${volume}`,
          explanation: `Luas permukaan balok dihitung dengan rumus 2 * (p * l + p * t + l * t), yaitu 2 * (${panjang} * ${lebar} + ${panjang} * ${tinggi} + ${lebar} * ${tinggi}) = ${area}, dan volume balok dihitung dengan rumus p * l * t, yaitu ${panjang} * ${lebar} * ${tinggi} = ${volume}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung balok.",
        };
      }
    },
  },
  {
    title: "Prisma Segitiga",
    formulaArea: "L = 2 * (1/2 * alas * tinggi) + (2 * alas * panjang)",
    formulaVolume: "V = 1/2 * alas * tinggi * panjang",
    inputs: ["Alas (a)", "Tinggi (t)", "Panjang (p)"],
    backgroundColor: "#9CAFAA", 
    calculate: ({ "Alas (a)": a, "Tinggi (t)": t, "Panjang (p)": p }) => {
      try {
        const alas = Number(a);
        const tinggi = Number(t);
        const panjang = Number(p);
  
        if (isNaN(alas) || isNaN(tinggi) || isNaN(panjang)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua input adalah angka.",
          };
        }

        const areaSegitiga = 0.5 * alas * tinggi;
        const areaLateral = 2 * areaSegitiga * panjang;
        const luasPermukaan = 2 * areaSegitiga + areaLateral;
        const volume = areaSegitiga * panjang;
  
        return {
          result: `Luas Permukaan Prisma Segitiga: ${luasPermukaan}, Volume Prisma Segitiga: ${volume}`,
          explanation: `Luas permukaan prisma segitiga dihitung dengan rumus 2 * (1/2 * alas * tinggi) + (2 * alas * panjang), yaitu 2 * (1/2 * ${alas} * ${tinggi}) + (2 * ${alas} * ${panjang}) = ${luasPermukaan}. Volume prisma segitiga dihitung dengan rumus 1/2 * alas * tinggi * panjang, yaitu (1/2 * ${alas} * ${tinggi}) * ${panjang} = ${volume}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung prisma segitiga.",
        };
      }
    },
  },  
  {
    title: "Kerucut",
    formulaArea: "L = π * r * (r + s)",
    formulaVolume: "V = 1/3 * π * r² * t",
    inputs: ["Jari-jari (r)", "Tinggi (t)", "Sisi (s)"],
    backgroundColor: "#B0E0E6", 
    calculate: ({ "Jari-jari (r)": r, "Tinggi (t)": t, "Sisi (s)": s }) => {
      try {
        const radius = Number(r);
        const tinggi = Number(t);
        const sisi = Number(s);
        if (isNaN(radius) || isNaN(tinggi) || isNaN(sisi)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan semua input adalah angka.",
          };
        }
        const area = Math.PI * radius * (radius + sisi);
        const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * tinggi;
        return {
          result: `Luas Permukaan Kerucut: ${area.toFixed(2)}, Volume Kerucut: ${volume.toFixed(2)}`,
          explanation: `Luas permukaan kerucut dihitung dengan rumus π * r * (r + s), yaitu π * ${radius} * (${radius} + ${sisi}) = ${area.toFixed(2)}, dan volume kerucut dihitung dengan rumus 1/3 * π * r² * t, yaitu 1/3 * π * ${radius}² * ${tinggi} = ${volume.toFixed(2)}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung kerucut.",
        };
      }
    },
  },
  {
    title: "Bola",
    formulaArea: "L = 4 * π * r²",
    formulaVolume: "V = 4/3 * π * r³",
    inputs: ["Jari-jari (r)"],
    backgroundColor: "#B5CFB7", 
    calculate: ({ "Jari-jari (r)": r }) => {
      try {
        const radius = Number(r);
        if (isNaN(radius)) {
          return {
            result: "Error",
            explanation: "Data tidak valid. Pastikan input adalah angka.",
          };
        }
        const area = 4 * Math.PI * Math.pow(radius, 2);
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        return {
          result: `Luas Permukaan Bola: ${area.toFixed(2)}, Volume Bola: ${volume.toFixed(2)}`,
          explanation: `Luas permukaan bola dihitung dengan rumus 4 * π * r², yaitu 4 * π * ${radius}² = ${area.toFixed(2)}, dan volume bola dihitung dengan rumus 4/3 * π * r³, yaitu 4/3 * π * ${radius}³ = ${volume.toFixed(2)}.`,
        };
      } catch (error) {
        return {
          result: "Error",
          explanation: "Kesalahan saat menghitung bola.",
        };
      }
    },
  },
];

const BrilianGeometri = () => {
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
    <div className="soal-latihan-container">
      <div className="soal-latihan-header">
        <h1>Materi Geometri Bangun Datar dan Bangun Ruang</h1>
      </div>

      {/* Bangun Datar Section */}
      <section className="soal-latihan-section">
        <h2>Bangun Datar</h2>
        <div className="soal-latihan-slides">
          {slidesGeometri.map((slide, index) => (
            <div
              className="soal-latihan-slide-container"
              key={index}
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <h3 className="soal-latihan-title">{slide.title}</h3>
              <p className="soal-latihan-formula">
                <strong>Rumus Luas:</strong> {slide.formulaArea}
                {slide.formulaVolume && (
                  <p><strong>Rumus Volume:</strong> {slide.formulaVolume}</p>
                )}
              </p>
              <div className="soal-latihan-input-container">
                {slide.inputs.map((inputName) => (
                  <div key={inputName}>
                    <label className="soal-latihan-label">
                      {inputName}:
                      <input
                        type="text"
                        name={inputName}
                        value={inputValues[slide.title]?.[inputName] || ""}
                        onChange={(e) => handleInputChange(e, slide.title)}
                        className="soal-latihan-input"
                      />
                    </label>
                  </div>
                ))}
              </div>
              <button
                onClick={() => calculateResult(slide)}
                className="soal-latihan-calculate-btn"
              >
                Hitung
              </button>
              {results[slide.title] && (
                <div className="soal-latihan-result-container">
                  <p className="soal-latihan-result-title">Hasil:</p>
                  <p className="soal-latihan-result">{results[slide.title].result}</p>
                  <pre className="soal-latihan-explanation">
                    {results[slide.title].explanation}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bangun Ruang Section */}
      <section className="soal-latihan-section">
        <h2>Bangun Ruang</h2>
        <div className="soal-latihan-slides">
          {slidesBangunRuang.map((slide, index) => (
            <div
              className="soal-latihan-slide-container"
              key={index}
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <h3 className="soal-latihan-title">{slide.title}</h3>
              <p className="soal-latihan-formula">
                <strong>Rumus Luas:</strong> {slide.formulaArea}
                {slide.formulaVolume && (
                  <p><strong>Rumus Volume:</strong> {slide.formulaVolume}</p>
                )}
              </p>
              <div className="soal-latihan-input-container">
                {slide.inputs.map((inputName) => (
                  <div key={inputName}>
                    <label className="soal-latihan-label">
                      {inputName}:
                      <input
                        type="text"
                        name={inputName}
                        value={inputValues[slide.title]?.[inputName] || ""}
                        onChange={(e) => handleInputChange(e, slide.title)}
                        className="soal-latihan-input"
                      />
                    </label>
                  </div>
                ))}
              </div>
              <button
                onClick={() => calculateResult(slide)}
                className="soal-latihan-calculate-btn"
              >
                Hitung
              </button>
              {results[slide.title] && (
                <div className="soal-latihan-result-container">
                  <p className="soal-latihan-result-title">Hasil:</p>
                  <p className="soal-latihan-result">{results[slide.title].result}</p>
                  <pre className="soal-latihan-explanation">
                    {results[slide.title].explanation}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrilianGeometri;
