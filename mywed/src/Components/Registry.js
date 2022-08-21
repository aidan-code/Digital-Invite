import React from 'react'
import './Registry.css';
import present from '../Assets/Frame.svg'
import { Link } from 'react-router-dom'

const Registry = () => {
  return (
    <div className='Regi'>
        <p className='tle'>REGISTRY</p>

        <img src={present} alt="gift"/>

        <p className='regitext'>Your presence is enough of a present to us! But for those of you who want to Bless Us Further A monetary Gift would be greatly appreciated</p>

        <div className='gift'>
            <Link to='/GiftUs'>Gift Us</Link>
        </div>

    </div>
  )
}

export default Registry