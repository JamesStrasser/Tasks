import React from 'react';
import './sideBySideLayout.css';

const SideBySideLayout = ({ numColumns, children }) => {
  const columnContainerStyle = {
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    // gap: '10px',
  };

  return (
    <div className="sideBySideLayout" style={columnContainerStyle}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="sideBySideItem">
          {child}
        </div>
      ))}
    </div>
  );
};

export default SideBySideLayout;