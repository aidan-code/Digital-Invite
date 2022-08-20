import React from 'react';
import { Link } from 'react-router-dom';


function Button( {name, path}) {
  return (
    <div>
        <Link to={path}>{name}</Link>
    </div>
  )
}

export default Button;