import Nav from './Nav';
import React from 'react'
import Banner from './Banner';
import Content from './Content';
import './Maincp.css'

const Maincp = () => {
  return (
    <div className='container'>
        <Nav/>
        <Banner />
        <Content/>
    </div>
  )
}

export default Maincp