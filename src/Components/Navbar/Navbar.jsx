import React from 'react'
import pecanPie from '../../assets/pie.jpeg'
import Logout from './Logout/Logout'
import './Navbar.css' // <-- you need .css when importing a css file

const Navbar = (props) =>{
    console.log(props)




    return (
      <div>
        <nav>
            <img id="piePic" src={pecanPie} alt="pie"/>
            <Logout/>
        </nav>
      </div>
    )
}

export default Navbar;