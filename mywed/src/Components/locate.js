import React from 'react';
import './locate.css';
import church from '../Assets/Church.svg';
import reception from '../Assets/Vector.svg';
import car from  '../Assets/ride.svg';
import Button from './Buttn';



const Locate = () => {

  return (
    <div className="locate" id='Locate'>
        <div className="loc-title">
          <p>LOCATION...</p>
          <img src={car} alt=""/>
        </div>

    <div className="loc-descrip">
{/* church Location */}
        <div className="place">

          <img src={church} alt="church"/>

          <p className='ch-loc'>
          <span>RCCG Fountain of Life</span><br/>
            1 Isreal Adebajo Cl, Ogba 101233,<br/> 
            Ikeja, Lagos Nigeria<br/>
            Time : 10am
          </p>

            <Button name = "How do I get there" path = "/GetChurch"/>

        </div>

  {/* reception Location */}
        <div className="place">
          
          <img src={reception} alt="reception"/>

          <p className='ch-loc'>
            <span>Whitestone Place Event Centre</span><br/>
              3 Billings Way, Oregun 101233, <br/>
              Ikeja, Lagos Nigeria<br/>
              Time : 1pm
          </p>


          <Button name = "How do I get there"  path = "/GetEvent"/>

        </div>

    </div>
    </div>
  )
}

export default Locate