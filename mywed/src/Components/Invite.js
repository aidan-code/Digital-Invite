import React from 'react'
import  FO from '../Assets/FO 1.svg';
import thelog from '../Assets/thelogo.svg';
import './Invite.css';


const Invite = () => {
  return (
    <div className='inv'>
        <div className='invlog'>
            <img src={thelog}/>
        </div>
        {/* the invite information */}
        <div className='inv-info'>
            <div className="nameinfo">
            <p>Thank you for the RSVP</p>
            <div className="pnam">
            <h1 >Person's Name</h1>
            <h1>&</h1>
            <h1 >plusone1 name</h1>
            </div>
            <p>We are looking forward to seeing you at our wedding on the </p>
            <h1 className="dte">29th of October 2022</h1>
            </div>

            {/* CENTERS */}
            <div className="centers">
                <div className="plc">
                    <p className="c-tit">Church Ceremony</p>
                    <p>RCCG</p>
                    <p>1 Isreal Adebajo Cl, Ogba<br/> 101233, Ikeja<br/>11:00 AM</p>
                </div>
                <div className="plc">
                <p className="c-tit"> Reception</p>
                    <p>Whitestone Place Event Centre</p>
                    <p>3 Billings Way, Oregun 101233,<br/>   Ikeja<br/>01:00 PM</p>

                </div>

            </div>
            
        </div>
        <p>Remember to screenshot your invite and present it on the day of event</p>
    
    </div>
  )
}

export default Invite