import React from 'react'
import FO from '../Assets/FO 1.svg';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner-name'>
        <img src={FO} className="bn-mn" alt='name logo'/>
    </div>
  )
}

export default Banner