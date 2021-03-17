import React from 'react';
import logo from '../images/vasiti.png';
import Button from '@material-ui/core/Button';
// import { Link } from  "react-router-dom";


export default function Nav () {
    return(
        <div className='nav-major'>
            <nav>
                <img src={logo} alt='brand logo' />
                <div className='nav-minor'>
                    <ul className="nav-links">
                        <li>about us</li>
                        <li>stories</li>
                        <li>contact</li>
                        <li>login</li>
                    </ul>
                    <Button className="btn" size="medium" variant="contained"
                      href="#contained-buttons" style={{backgroundColor: "#FF5C00", color: "white"}}>
                        Sign up
                    </Button>
                </div>
            </nav>
            <div className="nav-extra-container">
                <ul className="nav-extra">
                    <li>marketplace</li>
                    <li>wholesale center</li>
                    <li>seller center</li>
                    <li>services</li>
                    <li>internships</li>
                    <li>events</li>
                </ul>
            </div>
        </div>
    )
}