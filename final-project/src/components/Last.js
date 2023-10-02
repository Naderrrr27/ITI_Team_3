import ssp from './sales2.css'
import { useState } from 'react'
export const Last = props => {
  const [color , setColor] = useState(0);
  const changeColor = () => {
     setColor(1+color);
     document.getElementById('yaallah').style.backgroundColor="red";
     document.getElementById('yaallah').style.transition="background-color 0.5s";
  }

  //rechange
  const [colorf , setColorf] = useState(0);
 const changeColorf = () => {
    setColorf(1+colorf);
    document.getElementById('yaallah').style.backgroundColor="#3d5f00";
 }


  return (
    <div className="bigsale" style={ssp.bigsale}>
     <div className = "ground" style={ssp.ground}> 
      <div className="kalam">
        <span className='uu'>Special</span> <br></br>
        <br></br>
        <span className='kop'>SALE 50% DISCOUNT</span>
        <br></br> 
        <span className='ppop'>ALL FOOD PRODUCTS</span>
        <br></br> <br></br>
        <p className='taala'>
        Celebrate the launch of our new fall menu
        <br></br>
        With 50% off your entire order enjooooooy <br></br>
        Whar are you waiting for
        </p>
        <button className="btn2" type="submit" id='yaallah' onClick={changeColor} onDoubleClick={changeColorf}>Discover NOW</button>
      </div>
     </div>
    </div>
  )
}



export default Last