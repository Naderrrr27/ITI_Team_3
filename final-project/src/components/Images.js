import React from 'react';
import shape1 from './icons/Shape1.png';
import shape2 from './icons/Shape.png';
import './footer.css';

function Images() {
  return (
    <div className='footer'>
      <div>
        <div className="footer_image3">
          <img className="jk" src={shape1} alt="Shape 1" />
        </div>
        <div className="footer_image4">
          <img className="jk" src={shape2} alt="Shape" />
        </div>
      </div>
      <div className='clear'></div>
    </div>
  );
}

export default Images;