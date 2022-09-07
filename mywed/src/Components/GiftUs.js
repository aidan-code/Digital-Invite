import React from 'react'
import './GiftUs.css';
import ukCard from  "../Assets/Goldcard.svg";
import NigCard from "../Assets/Whitecard.svg";
import UsCard from  "../Assets/Goldcredit.svg";
import { Link } from 'react-router-dom'


function GiftUs() {
  return (
    <div className='gft'>
     <div className='bcvk'><Link to='/'>&larr; Back</Link></div>
    <div className="headcard">
        <div className='wdt'><p>GiftUs</p></div>
    </div>
    <div className="all-acc">
        <div className="accs">
            <img src={ukCard} alt=""/>
            {/* the CARD Details */}
            <div className="details">
                <p>Name : Temitope Christiana Abayomi-Daniel</p>
                <p>Bank : Monese LTD</p>
                <p>Acc No : 26784698</p>
                <p>Sort Code : 23-69-72</p>
                <p>Pound Sterlings</p>
            </div>
        </div>

        <div className="accs">
            <img src={NigCard} alt=""/>
            {/* the CARD Details */}            
            <div className="details">
                <p>Name : Olugbenga Olawale Bank</p>
                <p>Bank : Stanbic IBTC</p>
                <p>Acc No : 0019525623</p>
                <p>Naira</p>
            </div>
        </div>

        <div className="accs">
            <img src={UsCard} alt=""/>
            {/* the CARD Details */}
            <div className="details">
                <p>Name : Olugbenga Olawale</p>
                <p> Bank : Bank of Montreal (BMO) </p>
                <p>Acc No : 4780-926</p>
                <p>Transit No : 25129</p>
                <p>Institution No : 001</p>
                <p> US Dollars</p>
            </div>
        </div>
    </div>

    <div className="Thanks">
        <p><Link to="/">Thank You</Link></p>
        </div>
    </div>
    
  )
}

export default GiftUs