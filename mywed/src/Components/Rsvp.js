import React from 'react'
import './Rsvp.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Rsvp = () => {
const [active, setActive] = useState(false);


function handleChange(e){
    // e.preventDefault();
    let vale = e.target.value;  
    if(vale === "Yes"){
        setActive(true);
    } else if(vale === "No"){
        setActive(false);
    }else if (vale ==="Choose"){
        setActive(false);
    }
}
  return (

    <div className='rsvp-cont' id='rsv-p'>
        <p className="beck"><Link to='/'>Home</Link></p>
        <div className="rsvp-title">
            <p>RSVP</p>
        </div>
        <div className="rsvp-frm">
{/* form */}


        <form name="contact" method='POST' action='https://formspree.io/f/meqdeerl'> 

        <input type="hidden" name="form-name" value="contact"/>
            <div className = "frm-sect"> 
                <p>First Name*</p>
                <input type="Text"  name="firstname"/>
            </div>

            <div className = "frm-sect">
                <p>Last Name*</p>
                <input type="Text"  name="LastName"/>
            </div>

            <div className = "frm-sect">
                <p>Phone Number*</p>
                <input type="text" name="Phonenumber" />
            </div>

            <div className="show-drop">
                <p>Are you inviting others?</p>
                <select className="cals" onChange={handleChange} placeholder="Choose">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>

            <div className={active ? "showfrm" : "hidefrm"}>
                <div className="frm-sect">
                    <p>Full Name of your +1*</p>
                    <input type="Text"  name="plusonename"/>
                </div>

                <div className="frm-sect">
                    <p>Phone Number of your +1*</p>
                    <input type="Text"  name="plusonenum"/>
                </div>
                <p className="call">If you inviting more than one person, please contact Faith on her Whatsapp Number  +234 (0) 7019261907</p>
            </div>

            <div className="subbtn">
                <button type="submit" className='reg-btn' >Register</button>
                <p>It’s important you register, as failure to do so will prohibit entrance to the event</p> 
            </div>
            
        </form>
        </div>
       
    </div>
  )
}

export default Rsvp;