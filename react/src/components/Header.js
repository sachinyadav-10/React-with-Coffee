import React from "react";
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from "../utils/constants";

const Header =()=>{
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
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
};
 export default Header;