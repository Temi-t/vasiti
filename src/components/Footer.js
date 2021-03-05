import React from 'react';
import Phone from '../images/phone.png';

export default function Footer () {
    return(
        <div className="dark-foot">
            <div className="upper-foot">
                <div className="phone-split">
                    <img src={Phone} alt="phone" />
                </div>
                <div className="subscribe">
                    <h1>Be a member of our community<span role="img" aria-label="celebration"  >🎉</span></h1>
                    <p>We'd make sure you're always first to know what's
                         happening on Vasiti-thus, the world.
                    </p>
                    <input type="text" />
                </div>
            </div>
            <div className="lower-foot">
                <div className="info-card">
                    <h2>Company</h2>
                    <h5>About us</h5>
                    <h5>Term of Use</h5>
                    <h5>Privacy Policy</h5>
                    <h5>Press & Media</h5>
                </div>
                <div className="info-card">
                <h2>Products</h2>
                    <h5>Marketplace</h5>
                    <h5>Magazine</h5>
                    <h5>Seller</h5>
                    <h5>Wholesale</h5>
                    <h5>Services</h5>
                </div>
                <div className="info-card">
                <h2>Careers</h2>
                    <h5>Become a Campus Rep</h5>
                    <h5>Become a Vasiti influencer</h5>
                    <h5>Become a Campus writer</h5>
                    <h5>Become an Affiliate</h5>
                </div>
                <div className="info-card">
                <h2>Get in touch</h2>
                    <h5>Partner with us</h5>
                    <h5>Advertise with us</h5>
                    <h5>Help/FAQs</h5>
                </div>
                <div className="join-us">
                    <h2>Join our community</h2>
                    <div>icons</div>
                    <h5>Email Newsletter</h5>
                </div>
            </div>            
        </div>
    )
}