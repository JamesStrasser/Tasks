import React from 'react';
import './section.css';

const section = ({ label,  children }) => {
  return (
    <div className="section-container">
      <div className="section-label">{label}</div>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default section;