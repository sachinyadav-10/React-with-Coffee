import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";

const ResMenu = () => {
    const [resinfo, setResInfo] = useState(null);
    const { resid } = useParams();
    const [showIndex, setShowIndex] = useState(null); // Use null to indicate no category is expanded

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API + resid);
            const json = await data.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    if (resinfo === null) return <Shimmer />;

    const resDetail = resinfo?.cards[2]?.card?.card?.info;
    const categories = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    if (!resDetail || !categories) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resDetail;

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-3xl">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(", ")}</p>
            {categories.map((category, index) => (
                <div key={category?.card?.card?.id || index}>
                    <RestaurentCategory 
                        data={category?.card?.card} 
                        showItems={index === showIndex} // Pass whether this category is expanded
                        setShowIndex={() => {
                            // If the clicked category is already expanded, collapse it
                            if (showIndex === index) {
                                setShowIndex(null);
                            } else {
                                // Otherwise, expand the clicked category
                                setShowIndex(index);
                            }
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default ResMenu;