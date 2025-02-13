import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory =(data)=>{
    // console.log(data);
    const [showItems, setShowItems]=useState(false);


    
    const handelClick=()=>{
            // console.log("cclicked");
            setShowItems(!showItems);
    }
    return (
        <div>
            {/* header */}
            <div>
            <div className="w-8/12 cursor-pointer bg-gray-200 flex justify-between shadow-lg mx-auto p-4 my-4" onClick={handelClick}>
                <span className="font-bold">{data?.data?.title} ({data?.data?.itemCards.length})</span>
                <span>👁</span>
            </div>
            {/* {Acordian body} */}
            <div className="flex justify-center">
              { showItems && <ItemList items={data?.data?.itemCards}/>}
            </div>
            </div>
        </div>
    );
};
export default RestaurentCategory;