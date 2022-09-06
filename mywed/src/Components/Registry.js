import React from 'react'
import './Registry.css';
import present from '../Assets/Frame.svg'
import { Link } from 'react-router-dom'

const Registry = () => {
  return (
    <div className='Regi' id='regi'>
        <p className='tle'>REGISTRY</p>

        <img src={present} alt="gift"/>

        <p className='regitext'>Your presence a present to us! Those of you who want to bless us further a monetary Gift would be greatly appreciated</p>

        <div className='gift'>
            <Link to='/GiftUs'>Gift Us</Link>
        </div>

    </div>
  )
}

export default Registry