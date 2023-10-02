import React, { useState } from "react";
import ar from './Arrow.module.css';

const Arrow = () => {
    const [arrw, setArrw] = useState(0);
    
    const toUpp = function () {
        setArrw(1 - arrw);
        document.getElementById("scoll").style.backgroundSize = "60%";
        document.getElementById("scoll").style.transition = "background-size 0.7s";
        document.querySelectorAll('.btnn').forEach(function (c) {
            c.style.backgroundColor = "white";
            c.style.color = "white";

            c.style.borderRadius = "0px 0px 30px 30px";
            c.style.boxShadow = "0 0 0 0";
        })
        document.querySelectorAll(".btnn")[0].style.color = "white";
        document.querySelectorAll(".btnn")[0].style.boxShadow = "8px 0 14px 0 #3d5f00";
        document.querySelectorAll(".btnn")[0].style.borderRadius = "0px 0px 30px 30px";
        document.querySelectorAll(".btnn")[0].style.transition = "box-shadow 1s";

        setTimeout(() => {
            document.getElementById("scoll").style.backgroundSize = "100%";
            document.getElementById("scoll").style.transition = "background-size 0.5s";
        }, 1000);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <a onClick={toUpp} id="scoll" className={ar.arr}></a>
    )
}
export default Arrow;