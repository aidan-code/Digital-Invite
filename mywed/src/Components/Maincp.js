import Nav from './Nav';
import React from 'react'
import Banner from './Banner';
import Content from './Content';
import './Maincp.css'
import Locate from './locate';
import Registry from './Registry';
import Rsvp from './Rsvp';

const Maincp = () => {
  return (
    <div className='container'>
        <Nav/>
        <Banner />
        <Content/>
        <Locate/>
        <Registry/>
        <Rsvp/>
    </div>
  )
}

export default Maincp