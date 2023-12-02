import React from 'react';
import './cardContainer.css';

const cardContainer = ({children}) => {
  return (
    <div className ="card-container">
        {children}
         {/* {React.Children.map(children, (child, index) => (child))} */}
    </div>
  );
};

export default cardContainer;


