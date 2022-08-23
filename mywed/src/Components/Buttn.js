import React from 'react';
// import { Link } from 'react-router-dom';
import './button.css'


function Button( {name, handleClick}) {
  return (
    <div className="direct">
        <button onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Button;