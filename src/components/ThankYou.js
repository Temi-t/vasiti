import React from 'react';
import Button from '@material-ui/core/Button';
import {useThanks} from './StoryContext';


export default function ThankYou(){
    const [thankYou, setThankYou] = useThanks();
    return (
        <>
            {thankYou ? 
                <div className="modal-bg">
                    <div className="thank-you-bg">
                        <div className="popper"  role="image"><span>🎉</span></div>
                        <h1>Thank you for sharing your story!</h1>
                        <p>Nulla anim ut consectetur voluptate.</p>
                        <Button className="btn" size="large" variant="contained"
                            href="#contained-buttons"
                            onClick={()=> setThankYou(!thankYou)} 
                            style={{backgroundColor: "#FF5C00",color: "white"}} >
                            Close
                        </Button>
                        
                    </div>
                </div> : null
             }
        </>
    )
}