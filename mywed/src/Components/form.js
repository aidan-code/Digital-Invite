import React from 'react'
import './Rsvp.css';

const Rvp = () => {
  return (
    <div className='ric'>
        <form method="POST" name="contact" netlify  onSubmit="submit" data-netlify-honeypot="bot-field" >

        <input type="hidden" name="contact" value="contact" />
            <p className="cryo"><input type="text" name="name" /></p>
            <p className="cryo"><input type="text" name="lastname"/></p>
            <p className="cryo"><input type="text" name="Phone"/></p>

            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Rvp