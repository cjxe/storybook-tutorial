import React from 'react';
import './Input.css'

function Input({ size }) {
  return ( 
    <input className={`input ${size}`}></input>
   );
}

export default Input;