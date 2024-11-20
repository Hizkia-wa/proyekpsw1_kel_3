import React from "react";
import "./MateriGeometriRuang.css";
import stk1 from "../images/STK1.jpg";
import stk2 from "../images/STK2.jpg";
import stk3 from "../images/STK3.jpg";
import stk4 from "../images/STK4.jpg";
import stk5 from "../images/STK5.jpg";
import stk6 from "../images/STK6.jpg";


const MateriGeometriRuang = () => {
  const sections = [
    {
      id: 1,
      title: "Pengertian Bangun Ruang",
      content:
        "Bangun ruang merupakan salah satu objek matematika yang mempelajari mengenai bangun tiga dimensi.",
      bgImage: stk1,
    },
    {
      id: 2,
      title: "Bangun Ruang dalam Kehidupan Sehari-Hari",
      content:
        "Beberapa contoh penerapan bangun ruang dapat kita lihat pada benda-benda yang menyerupai bentuk bangun ruang, misalnya: bentuk lemari menyerupai bangun balok, bentuk dadu menyerupai bangun kubus, bentuk kaleng menyerupai bangun tabung.",
      bgImage: stk2,
    },
    {
      id: 3,
      title: "Macam-Macam Bangun Ruang",
      content:
        "Bangun ruang memiliki beberapa macam. Berdasarkan bentuknya, bangun ruang dibagi menjadi dua, yaitu bangun ruang sisi datar dan bangun ruang sisi lengkung. Bangun ruang sisi datar meliputi kubus, balok, prisma, dan limas. Bangun ruang sisi lengkung meliputi tabung, kerucut, dan bola.",
      bgImage: stk3,
    },
    {
      id: 4,
      title: "Bangun Ruang Sisi Datar",
      content:
        "Telah disebutkan pada bagian sebelumnya bahwa bangun ruang sisi datar terdiri dari kubus, balok, prisma, dan limas.",
      bgImage: stk4,
    },
    {
      id: 5,
      title: "Bangun Ruang Sisi Lengkung",
      content:
        "Beberapa bentuk bangun ruang sisi lengkung yaitu tabung, kerucut, dan bola.",
      bgImage: stk5,
    },
    {
      id: 6,
      title: "Jaring-Jaring Bangun Ruang",
      content:
        "Pada bagian ini, akan disajikan beberapa contoh jaring-jaring bangun ruang di antaranya jaring-jaring kubus, balok, prisma, limas, tabung, dan kerucut.",
      bgImage: stk6,
    }
  ];

  return (
    <div className="materi-bangun-ruang">
      {sections.map((section) => (
        <div
          key={section.id}
          className="materi-section"
          style={{
            backgroundImage: `url(${section.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="materi-content">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MateriGeometriRuang;
