import React from 'react'
import './Content.css';
import Flower from '../Assets/Flower.svg'

const Content = () => {
  return (
    <div className="ct-text">
        <div className="ct-1">
            <p className="sml">The families of </p>

        <p className="fam-nm">Abayomi-Daniel Adegbamigbe<br/><span className='sep'>&</span><br/>Olawuyi-Olawale </p>
        <p className="sml"> invites you to the soleminisation of their children </p>
        </div>
        
        <img src={Flower} className="flwr" alt='flower'/>

        <div className='cple'>
            <span className="col">Folashade </span>
            <span className="sep">&</span>
            <span className="col"> Oluwagbemiga</span>
        </div>
    </div>
  )
}

export default Content