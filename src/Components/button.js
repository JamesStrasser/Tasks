import React from 'react';
import './button.css';

const button = ({children, onClick, identifer, type}) => {
  let buttonClassName = "";
  switch(type){
    case "delete": buttonClassName = "delete"; break;
    case "approve": buttonClassName = "approve"; break;
    default: break
  }
  console.log(buttonClassName)
    

  
  return (
    <div className = {`${buttonClassName}-button`} onClick = {onClick} identifer = {identifer}>
        {children}
    </div>
  );
};

export default button;


