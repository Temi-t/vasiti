import React from 'react';
import couple from '../images/smiling-couples.png';
import ladies from '../images/smiling-ladies.png';

export default function Experiences () {
    return(
        <div>
            <div className="experience">
                <div className="experience-1">
                        <p>Amazing Experiences from Our
                        Wonderful Customers</p>
                        <p>Here is what customers and vendors are saying 
                        about us, you can share your stories with us too</p>
                </div>
                <div className="experience-2">
                    <img className="couple-img" src={couple} alt="happy couple"/>
                </div>
                <div className="dark-side">
                    <div className="experience-3">
                        <img src={ladies} alt="ladies lauging" />
                    </div>
                    <div className="experience-4">
                        <h1>Tolu & Joy's Experience</h1>
                        <span>CUSTOMER</span>
                        <p>I had the best experience shopping with vasiti.
                            Usability of the website was great, 
                            very good customer service, an all round great
                            experience. I would definately be coming back!
                            I had the best experience shopping with vasiti.
                            Usability of the website was great, 
                            very good customer service, an all round great
                            experience. I would definately be coming back!
                        </p>
                        <h3>SHARE YOUR OWN STORY!</h3>
                    </div>
                </div>
            </div>
         </div>
    )
}