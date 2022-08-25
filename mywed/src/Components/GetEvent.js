import React from 'react'
import './getthere.css'
import reception from '../Assets/Vector.svg';
import { Link } from 'react-router-dom'


function GetEvent() {
  return (
    <div className="thediv">
      <h1 className="how">How do i get there</h1>
       <div className="spacer">
      
      <div class="mapouter">
        <div class="gmap_canvas"><iframe className='dmap' id="gmap_canvas" src="https://maps.google.com/maps?q=Whitestone%20Place%20Event%20Centre%203%20Billings%20Way,%20Oregun%20101233,%20Ikeja,%20Lagos%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      </div>

      <div className="place">
          
          <img src={reception} alt="reception"/>

          <p className='ch-loc'>
            <span>Whitestone Place Event Centre</span><br/>
              3 Billings Way, Oregun 101233, <br/>
              Ikeja, Lagos Nigeria<br/>
              Time : 1pm
          </p>
          
        </div>

    </div>
    <div className ="rvp"><Link to='/Rsvp' >RSVP</Link></div>
    </div>
   
  )
}

export default GetEvent