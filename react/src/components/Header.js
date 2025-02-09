import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
                    <li > <Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About US</Link></li>
                    <li><Link to={'/contactus'}>Contact Us</Link></li>
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