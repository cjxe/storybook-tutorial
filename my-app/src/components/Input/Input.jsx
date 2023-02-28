import React from 'react';
import './Input.css'

function Input({ size, children }) {
  return ( 
    <input className={`input ${size}`}>
      {children}
    </input>
   );
}

export default Input;