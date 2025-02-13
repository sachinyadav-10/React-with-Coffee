import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";

const ResMenu = () => {
    const [resinfo, setresinfo] = useState(null);
    const { resid } = useParams();

    useEffect(() => {
        fetchmenu();
    }, []);

    const fetchmenu = async () => {
        try {
            const data = await fetch(MENU_API + resid);
            const json = await data.json();
            setresinfo(json.data);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    if (resinfo === null) return <Shimmer />;

    const resdetail = resinfo?.cards[2]?.card?.card?.info;
    const itemCards = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    const catagories = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    if (!resdetail || !catagories) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resdetail;

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-3xl">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(", ")}</p>
            {catagories.map((category, index) => (
                <div >
                    <RestaurentCategory key={category?.card?.card?.id || index} data={category?.card?.card} />
                </div>
            ))}
        </div>
    );
};

export default ResMenu;