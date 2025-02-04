import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from "../utils/constants";

const Header =()=>{
    const [btnNameReact,setbtnNameReact]= useState("login");
    return (
        <div className='header'>
            <div className='logo-container'>
                {/* logo */}
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                       btnNameReact==="login"? setbtnNameReact("Logout") :  setbtnNameReact("login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>

        </div>
    )
};
 export default Header;