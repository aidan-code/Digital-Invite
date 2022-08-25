import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';
// import * as FaIcons from 'react-icons/fa'
import { MenuData} from './MenuData';



const Nav = () => {

  return (
    <>
      <nav className="navlist">
        <ul className='m-itm'>
          {MenuData.map((items, index)=> {
            return(
              <li key={index} className={items.cName} ><Link to= {items.ident}>{items.title}</Link></li>
            )
          })}
        </ul>
      </nav>
    </>


  )
}

export default Nav