import React from 'react';
import profileImgB from '../images/good-guy.png';

export default function SingleProfileB () {
    return(
        <div className="card-profile" >
            <img src={profileImgB} alt=" profile"/>
            <h3>Temi Obadofin</h3>
            <div>
                <span className="vendor">VENDOR</span>
            </div>
            <p>Eu adipisicing anim nisi fugiat nulla minim do 
                amet mollit occaecat amet voluptate nostrud. 
                Ullamco reprehenderit voluptate ipsum occaecat 
                cupidatat veniam proident occaecat do excepteur 
                ut minim incididunt. Lorem non ipsum nisi anim 
                anim dolor qui ut nisi ullamco. Consequat ex duis 
                velit excepteur laboris veniam consequat cillum aute.
             </p>
        </div>
    )
}