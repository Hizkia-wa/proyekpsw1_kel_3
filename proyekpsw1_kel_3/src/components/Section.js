import React from 'react';

const Section = ({ title, content }) => {
    return (
        <div className="section">
        <h2>{title}</h2>
        <div>{content}</div>
        </div>
    );
}

export default Section;