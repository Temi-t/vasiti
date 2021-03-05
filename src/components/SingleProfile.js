import React from 'react';
import profileImg from '../images/Adetola.png'

export default function SingleProfile () {
    return(
        <div className="card-profile" >
            <img src={profileImg} alt=" profile"/>
            <h3>Adetola Fashina</h3>
            <div>
                <span>Ibadan</span>
                <span>Customer</span>
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