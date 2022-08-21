import React from 'react';
import { Link } from 'react-router-dom';
import './button.css'


function Button( {name, path}) {
  return (
    <div className="direct">
        <Link to={path}>{name}</Link>
    </div>
  )
}

export default Button;