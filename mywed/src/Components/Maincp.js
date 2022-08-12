import Nav from './Nav';
import React from 'react'
import Banner from './Banner';
import Content from './Content';
import './Maincp.css'
import Locate from './locate';

const Maincp = () => {
  return (
    <div className='container'>
        <Nav/>
        <Banner />
        <Content/>
        <Locate/>
    </div>
  )
}

export default Maincp