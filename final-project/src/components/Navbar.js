import React from "react";
import st from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={st.navbar}>
            <div className={st.search}>
                <input className={`${st.text_search} ${st.col_10}`} type="search" name="q" placeholder="Search here" />
            </div>
            <div className={st.logo}>
                <img src="\images\3589374.png" />
            </div>
            <div className={`${st.sub} ${st.col_3}`}>
                <div className={st.unk}>
                    <ul className={st.form1}>
                        <li className={st.lis}><a href="#" className={st.login}>Register</a>/</li>
                        <li className={st.lis}><a href="#" className={st.login}>Login</a></li>
                    </ul>
                </div>
                <div className={st.likes}>
                    <a href="#" className={st.shop}><img src="Images/3589374 (1)u.png" width="25px"/></a>
                    <a href="#" className={st.shop}><img src="Images/3589374 (1).png" width="30px"/></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;