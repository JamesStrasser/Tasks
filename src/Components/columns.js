import React from 'react';
import './columns.css';

const Columns = ({ numColumns, children }) => {
  const columnContainerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    // gap: '10px',
    justifyContent: 'center',
  };

  return (
    <div className="columns-container" style={columnContainerStyle}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="column">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Columns;