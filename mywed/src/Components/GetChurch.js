import React from 'react'
import './getthere.css'
import church from '../Assets/Church.svg';
import { Link } from 'react-router-dom'


function GetEvent() {
  return (
    <div className="thediv">
      <h1 className="how">How do i get there</h1>
       <div className="spacer">
      
      <div class="mapouter">
        <div class="gmap_canvas"><iframe className='dmap' id="gmap_canvas" title="church" src="https://maps.google.com/maps?q=RCCG%20Fountain%20of%20Life%201%20Isreal%20Adebajo%20Cl,%20Ogba%20101233,%20Ikeja,%20Lagos%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
      </div>
      </div>

      <div className="place">

          <img src={church} alt="church"/>

          <p className='ch-loc'>
          <span>RCCG Fountain of Life</span><br/>
            1 Isreal Adebajo Cl, Ogba 101233,<br/> 
            Ikeja, Lagos Nigeria<br/>
            Time : 11am
          </p>


        </div>

    </div>
    <div className ="rvp"><Link to='/Rsvp' >RSVP</Link></div>
    </div>
   
  )
}

export default GetEvent

// frameborder="0" scrolling="no" marginheight="0" marginwidth="0"