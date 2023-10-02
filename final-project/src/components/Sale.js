import sso from './sales.css'
import { useState } from 'react';
export const Sale = () => {

  const [color , setColor] = useState(0);
  const changeColor = () => {
     setColor(1+color);
     document.getElementById('yarrab').style.backgroundColor="red";
     document.getElementById('yarrab').style.transition="background-color 0.5s";
  }
  //
  const [colorf , setColorf] = useState(0);
  const changeColorf = () => {
     setColorf(1+colorf);
     document.getElementById('yarrab').style.backgroundColor="#3d5f00";
  }
  return (
    <div className="bigsale2" style={sso.bigsale}>
     <div className = "ground2" style={sso.ground}> 
      <div className="kalam2">
        <span className='uu2'>Special</span> <br></br>
        <br></br>
        <span className='kop2'>SALE 50% DISCOUNT</span>
        <br></br> 
        <span className='ppop2'>ALL FOOD PRODUCTS</span>
        <br></br> <br></br>
        <p className='taala2'>
        Celebrate the launch of our new fall menu
        <br></br>
        With 50% off your entire order enjooooooy <br></br>
        Whar are you waiting for
        </p>
        <button className="btn22" type="submit" onClick={changeColor} id='yarrab' onDoubleClick={changeColorf} >Discover NOW</button>
      </div>
     </div>
    </div>
  )
}
export default  Sale