import React, { useState } from "react";
import stcont from './Content.module.css';

const Content = () => {
    const [ordering, setOrdering] = useState(0);

    const handlerNOW = function () {
        setOrdering(1 - ordering);
        document.querySelector('.now').style.backgroundColor = "black";
        document.querySelector('.now').style.transition = "background-color 1s";
        setTimeout(function () {
            document.querySelector('.now').style.backgroundColor = "#225E00";
        }, 700)
    }
    const [leftt, setLeftt] = useState(0);

    const handlerBack = function () {
        setLeftt(1 - leftt);
        document.querySelector('.leftt').style.backgroundColor = "black";
        document.querySelector('.leftt').style.transition = "background-color 1s";
        setTimeout(function () {
            document.querySelector('.leftt').style.backgroundColor = "#225E00";
        }, 700)
    }
    return (
        <div className={stcont.contentt}>
            <div className={`${stcont.food} ${stcont.col_5}`}>
                <p className={stcont.american}>american food</p>
                <p className={stcont.taste}>The Best Taste Food</p>
                <div className={`${stcont.bord} ${stcont.col_9}`}></div>
                <div className={stcont.tex}>
                    <p className={stcont.lorema}>Lorem Ipsum available, but the majority have suffered alteration in some form, by
                        injected humour, or randomised words</p>
                    <div className={stcont.bott}>
                        <div onClick={handlerNOW} className={`${stcont.ord} ${stcont.col_5} now`}>
                            ORDER NOW
                        </div>
                        <div onClick={handlerBack} className={`${stcont.back} ${stcont.col_2} leftt`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;