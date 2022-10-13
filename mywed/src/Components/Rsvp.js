import React from 'react'
import './Rsvp.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import image from '../Assets/FO 1.svg'

const Rsvp = () => {
  return (
    
     <div className='rsvp-cont' id='rsv-p'>
        <div> <p className="beck"><Link to='/'>Home</Link></p>
        
{/* form */}


      
        <div className='closee'>
            <div className='cl-img'>
                <img src={image} />
            </div>
            <h1 className='rssve'>Rsvp Closed</h1>
            <p>Registrations for this event has ended</p>
            <p></p>
        </div>
        
    </div>
    </div>

  )
}

export default Rsvp;