import React from 'react';
import './Mission.css';

const BusinessSection = () => {
  return (
    <div className="business-section">
      <div className="content">
        {/* Bagian Kiri: Teks */}
        <div className="text-section">
          <h2 className="title">We are serious about your business.</h2>
          <p className="description">
            Present ac massa at ligula laoreet luctus. Vivamus aliquet elit ac nisl.
          </p>
        </div>

        {/* Bagian Kanan: Kartu */}
        <div className="card-section">
          <div className="card card-management">
            <h3>Management</h3>
            <p>
              Present ac massa at ligula laoreet luctus. Vivamus aliquet elit ac nisl. Sed aliquam ultrices.
            </p>
          </div>
          <div className="card">
            <h3>Digital</h3>
            <p>
              Present ac massa at ligula laoreet luctus. Vivamus aliquet elit ac nisl. Sed aliquam ultrices.
            </p>
          </div>
          <div className="card">
            <h3>Design</h3>
            <p>
              Present ac massa at ligula laoreet luctus. Vivamus aliquet elit ac nisl. Sed aliquam ultrices.
            </p>
          </div>
          <div className="card">
            <h3>Scrum</h3>
            <p>
              Present ac massa at ligula laoreet luctus. Vivamus aliquet elit ac nisl. Sed aliquam ultrices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
