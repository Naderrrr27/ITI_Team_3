import React from 'react';
import Shape3Image from './icons/Shape3.png';
import Shape2Image from './icons/Shape2.png';
import InstagramImage from './icons/instagram.png';
import FacebookImage from './icons/facebook.png';
import TwitterImage from './icons/twitter.png';
import WhatsappImage from './icons/whatsapp.png';
import './footer.css';

function Socials() {
  return (
    <div className="footer-content">
      <div className="footer_image1">
        <img className="mk" src={Shape3Image} alt="shape 3" />
      </div>
      <div className="footer_image2">
        <img className="mk" src={Shape2Image} alt="shape 2" />
      </div>
      <h3>AMERICAN FOOD</h3>
      <p>The Best Taste Food</p>
      <ul className="socials">
        <li><img src={InstagramImage} alt="instagram icon" /></li>
        <li><img src={FacebookImage} alt="facebook icon" /></li>
        <li><img src={TwitterImage} alt="twitter icon" /></li>
        <li><img src={WhatsappImage} alt="whatsapp icon" /></li>
      </ul>
      <p className="your-website">YourWebsite.com</p>
    </div>
  );
}

export default Socials;