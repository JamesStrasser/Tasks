import React from 'react';
import './labelValuePair.css';

const LabelValuePair = ({ label, value, customStyles }) => {
  return (
    <div className="label-value-pair" style={{ ...customStyles }}>
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default LabelValuePair;