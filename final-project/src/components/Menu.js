'use client'
import React, { useState } from "react";
import stmenu from './Menu.module.css';
const Menu = () => {
    const [done, setDone] = useState(0);
    const handle = function () {
        document.querySelectorAll('.btnn').forEach(function (e) {
            e.addEventListener("click", function () {
                setDone(1 - done);
                document.querySelectorAll('.btnn').forEach(function (c) {
                    c.style.backgroundColor = "white";
                    e.style.color = "white";

                    e.style.borderRadius = "0px 0px 30px 30px";
                    c.style.boxShadow = "0 0 0 0";
                })
                e.style.color = "white";
                e.style.boxShadow = "8px 0 14px 0 #3d5f00";
                e.style.borderRadius = "0px 0px 30px 30px";
                e.style.transition = "box-shadow 1s";
            })
        });
    }

    const [about, setAbout] = useState(0);
    const scrollToAbout=function(){
        setAbout(1-about);
        window.scrollTo({
            top:document.getElementById("scro1").clientHeight+100,
            behavior:"smooth"
        })
    }
    
    const [serv, setServ] = useState(0);
    const scrollToService=function(){
        setServ(1-serv);
        window.scrollTo({
            top:2250,
            behavior:"smooth"
        })
    }

    const [pricin, setPricin] = useState(0);
    const scrollToPricing=function(){
        setPricin(1-pricin);
        window.scrollTo({
            top:3452,
            behavior:"smooth"
        })
    }
    
    const [cont, setCont] = useState(0);
    const scrollToContact=function(){
        setCont(1-cont);
        window.scrollTo({
            top:4452,
            behavior:"smooth"
        })
    }
    return (
        <div className={stmenu.menu}>
            <div className={stmenu.options}>
                <ul>
                    <li onMouseEnter={handle}  className={`btnn ${stmenu.home}`} id="lo"><a href="#" className={` ${stmenu.nav}  `}>HOME</a></li>
                    <li onMouseEnter={handle} onClick={scrollToAbout}   className="btnn" ><a href="#" className={` ${stmenu.nav} ${stmenu.about} `}>ABOUT US</a></li>
                    <li onMouseEnter={handle} onClick={scrollToService} className="btnn"><a href="#" className={` ${stmenu.nav} ${stmenu.service} `}>SERVICE</a></li>
                    <li onMouseEnter={handle} onClick={scrollToPricing} className="btnn" ><a href="#" className={` ${stmenu.nav} ${stmenu.pricing} `}>PRICING</a></li>
                    <li onMouseEnter={handle} onClick={scrollToContact} className="btnn"><a href="#" className={` ${stmenu.nav} ${stmenu.contact} `}>CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;