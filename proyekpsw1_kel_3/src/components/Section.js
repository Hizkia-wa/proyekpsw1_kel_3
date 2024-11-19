import React from 'react';
import './Peluang.css';

function Section({ title, content, backgroundImage }) {
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
}

export default Section;
