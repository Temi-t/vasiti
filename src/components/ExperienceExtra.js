import React from 'react';
import shopaholic from '../images/woman-shoppingbag-card 1.png';
import { Link } from "react-router-dom";
export default function ExperienceExtra () {
    return(
        <div className="experience-5">
            <div className="experience-5-detail">
                <h1>Josiah's Experience</h1>
                <span>VENDOR</span>
                <p> I had the best experience shopping with vasiti.
                    Usability of the website was great, 
                    very good customer service, an all round great
                    experience. I would definately be coming back!
                    I had the best experience shopping with vasiti.
                    Usability of the website was great, 
                    very good customer service, an all round great
                    experience. I would definately be coming back!
                </p>
                <h3 component={Link} to={"/stories"} >SHARE YOUR OWN STORY!</h3>
            </div>
            <div className="experience-5-img">
                    <img className="shopaholic" src={shopaholic} alt="happy lady holding a card"/>
            </div>
        </div>
    )
}