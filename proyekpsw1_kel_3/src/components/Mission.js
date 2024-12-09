import React from "react";
import "./Mission.css";

const BusinessSection = () => {
  return (
    <div className="business-section">
      <div className="content">
        <div className="text-section">
          <h2 className="title">Kami Dari Team RUMAPI</h2>
          <p className="description">
            Bertujuan untuk menciptakan platform pembelajaran matematika yang
            mendukung siswa dalam meraih prestasi akademik terbaik
            melalui pemahaman konsep dan rumus secara inovatif, interaktif, dan
            menyenangkan.
          </p>
        </div>

        <div className="card-section">
          <div className="card card-vision">
            <h3>Visi</h3>
            <p>
              Menjadi platform pembelajaran matematika terbaik yang mampu
              menginspirasi generasi muda untuk berpikir kritis, kreatif, dan
              siap menghadapi tantangan dunia pendidikan masa depan.
            </p>
          </div>
          <div className="card card-mission">
            <h3>Misi</h3>
            <p>
              Menghadirkan materi yang terstruktur dan mudah dipahami untuk
              membantu siswa menguasai matematika, serta menyediakan fitur
              latihan interaktif yang mendorong eksplorasi dan pemahaman
              mendalam. RUMAPI juga mendukung siswa dalam persiapan ujian
              melalui soal-soal yang relevan dan analisis hasil belajar,
              sekaligus mengintegrasikan teknologi terkini untuk menciptakan
              pengalaman belajar modern dan efektif. Selain itu, kami
              berkomitmen membentuk komunitas belajar yang kolaboratif dan
              saling mendukung demi keberhasilan bersama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
