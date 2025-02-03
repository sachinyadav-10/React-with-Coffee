import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import resData from "../utils/modelData";
 import RestaurentCard from "./RestaurentCard";
const Body=()=>{
    const [filteredRes , setfilteredres]=useState(resData);
    return (
        <div className='body'>
            <div className='Filter'>
                <button className="filter-btn" onClick={()=>{
                    // filter logic ----
                    const filteredlist = filteredRes.filter((res)=> res.Rating > 4);
                    {console.log(filteredlist)}
                    setfilteredres(filteredlist)
                }}>
                Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {/* restaurentCard */}
                {filteredRes.map((restourants)=>(
                    <RestaurentCard  key={resData.RestaurantName} resData={restourants} />

                ))}
                
            </div>
        </div>
    )
}
export default Body;