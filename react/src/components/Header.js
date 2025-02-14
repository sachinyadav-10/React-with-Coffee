import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header =()=>{
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    
    const [btnNameReact,setbtnNameReact]= useState("login");
    
    // subscribing to the store using selector 
    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className='flex justify-between bg-orange-100 mt-2 md-10 '>
            <div className='logo-container '>
                {/* logo */}
                <img className='w-40' src={LOGO_URL}/>
            </div>
            <div className=' flex items-center'>
                <ul className="flex p-10 m-4">
                    <li className="px-4 text-2xl " > <Link to={'/'}>Home</Link></li>
                    <li className="px-4 text-2xl"><Link to={'/about'}>About US</Link></li>
                    <li className="px-4 text-2xl"><Link to={'/contactus'}>Contact Us</Link></li>
                    <li className="px-4 text-2xl font-bold"><Link to={'/cart'}>Cart -({cartItems.length} Items)</Link></li>
                    <button className="login text-2xl" onClick={()=>{
                       btnNameReact==="login"? setbtnNameReact("Logout") :  setbtnNameReact("login");
                    }}>{btnNameReact}</button>
                    <li className="px-4 text-2xl">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
};
 export default Header;