import pp from "./pric.css"
import { useState } from "react"
export const Pricingsec1 = () => {

  const [color , setColor] = useState(0);

  //taney button
  const [color2 , setColor2] = useState(0);
  
  //talet button
  const [color3 , setColor3] = useState(0);

  const changeColor = () => {
     setColor(1+color);
     document.getElementById('awelfloss').style.backgroundColor="red";
     document.getElementById('awelfloss').style.transition="background-color 0.5s";
  }
  //taney button
  const changeColor2 = () => {
     setColor2(1+color2);
     document.getElementById('taneyfloss').style.backgroundColor="red";
     document.getElementById('taneyfloss').style.transition="background-color 0.5s";
  }
  //taletbutton
  const changeColor3 = () => {
    setColor3(1+color3);
    document.getElementById('taletfloss').style.backgroundColor="red";
    document.getElementById('taletfloss').style.transition="background-color 0.5s";
 }

 // for double clicking 
 const [colorf , setColorf] = useState(0);
 const changeColorf = () => {
    setColorf(1+colorf);
    document.getElementById('awelfloss').style.backgroundColor="#3d5f00";
 }

 //doubleclickinglltaney
 const [colorff , setColorff] = useState(0);
 const changeColorff = () => {
    setColorff(1+colorff);
    document.getElementById('taneyfloss').style.backgroundColor="#3d5f00";
 }
 //doubleclickinglltalet
 const [colorfff , setColorfff] = useState(0);
 const changeColorfff = () => {
    setColorfff(1+colorfff);
    document.getElementById('taletfloss').style.backgroundColor="#3d5f00";
 }


  return (
    <div className="biggy" style={pp.biggy}>
     <div className='pricingmin' style={pp.Pricingsec1}>
       <div className="coleur" style={pp.coleur}>
      <span className="shar2">Basic<span className="shar">jjj</span></span><br></br>
        $35
     </div>
       <div className="se3ro">
       <p>
       6 Pis Chiken <br></br>
       3 Pis Beef Chiken <br></br>
       2 Pis Burger
       </p>
       <button className="btn3ar" type="submit" onClick={changeColor} onDoubleClick={changeColorf}  id="awelfloss" >BUY NOW</button>
     </div>
    </div>
     <div className='pricingmin' style={pp.Pricingsec1}>
       <div className="coleur" style={pp.coleur}>
        <span className="trapezoid"></span>
        <span className="trapezoid2">HOT</span>
          Standard <br></br>
            $50
     </div>
       <div className="se3ro">
       <p>
       12 Pis Chiken <br></br>
       6 Pis Beef Chiken <br></br>
       2 Pis Burger
       </p>
       <button className="btn3ar" type="submit" id="taneyfloss" onClick={changeColor2} onDoubleClick={changeColorff}>BUY NOW</button>
     </div>
    </div>
     <div className='pricingmin' style={pp.Pricingsec1}>
       <div className="coleur" style={pp.coleur}>
             Premuim<br></br>
              $45
     </div>
       <div className="se3ro">
       <p>
       10 Pis Chiken <br></br>
       5 Pis Beef Chiken <br></br>
       2 Pis Burger
       </p>
       <button className="btn3ar" type="submit" id="taletfloss" onClick={changeColor3}  onDoubleClick={changeColorfff}>BUY NOW</button>
     </div>
    </div>
    </div>
  )
}
export default Pricingsec1