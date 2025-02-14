import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div>
            <div className="w-8/12 cursor-pointer bg-gray-200 flex justify-between shadow-lg mx-auto p-4 my-4" onClick={handleClick}>
                <span className="font-bold">{data?.title} ({data?.itemCards?.length})</span>
                <span>👁</span>
            </div>
            <div className="flex justify-center">
                {showItems && <ItemList items={data?.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurentCategory;