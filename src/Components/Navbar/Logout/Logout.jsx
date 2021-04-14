import React from 'react';
import powerButton from '../../../assets/download.jpeg'
import './Logout.css';

const Logout = (props) => {


    return(
        <div>
            <img id="logout" className="logout" src={powerButton} alt="powerButton"/>
        </div>
    )
}

export default Logout;