import React from 'react';
import './viewSwitcher.css';

const ViewSwitcher = ({ labels, activeIndex, handleSwitchView }) => {
  return (
    <div className="view-switcher">
        {React.Children.map(labels, (label, index) => (
        <div onClick = {handleSwitchView} identifier = {index} key={index} className= {index === activeIndex ? "view-card active" : "view-card"}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default ViewSwitcher;


