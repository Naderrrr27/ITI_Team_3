import mm from './media.css'
import { useState } from 'react';
export const Bptton = () => {

  const [color, setColor] = useState(0);
  const changeColor = () => {
    setColor(1 + color);
    document.getElementById('ana').style.transition = "background-color 0.5s";
    document.getElementById('ana').style.backgroundColor = "red";
  }
  //forDoubleClicking
  const [colorf, setColorf] = useState(0);
  const changeColorf = () => {
    setColorf(1 + colorf);
    document.getElementById('ana').style.backgroundColor = "#3d5f00";
  }
  const mystyle2 = {
    margin: "0  0 0 20px",
    flex: "5",
  }
  const mystyle3 = {
    fontFamily: "'Noto Sans Duployan', sans-serif",
    fontSize: "24px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "space-between",
  }


  return (
    <div className="servoParent" style={mm.servoParent}>
      <div className="servoChild1" style={mystyle2}>
        <div id="childHead" style={mystyle3} >
          <div className="ii" style={mm.ii}>Pumpkin pie</div>
          <div className="i2" style={mm.i2}>$35</div>
        </div>
        <p style={mm.kk} className="kk">
          Pumpkin pie lovers rejoice! There's a restaurant dedicated to the
          nutty spread, with everything from peanut butter spring rolls to peanut butter pie on the menu. The restaurant also offers a variety sauces and  dips as well
          as peanut butter-infused cocktails and desserts.
        </p>
        <button onClick={changeColor} className="btn" style={mm.btn} id='ana' onDoubleClick={changeColorf}>BUY NOW</button>

      </div>
      <div className="servoChild2" style={{ flex: "1", marginLeft: "20px", paddingLeft: "30px" }}>
        <img src="/images/service2.png" alt="" width="220px" className='imk' style={mm.imk} />
      </div>
    </div>

  )
}



export default Bptton