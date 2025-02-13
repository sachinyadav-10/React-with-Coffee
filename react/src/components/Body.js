import React, { useEffect, useState } from "react";
import RestaurentCard ,{withPromotedLabel}from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);
    useEffect(() => {
        console.log("useEffect called");
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.818758&lng=75.7972135&carousel=true&third_party_vendor=1"
            );
            const json = await response.json();
            console.log(json);
            
            const restaurantList = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurants(restaurantList);
            setFilteredRes(restaurantList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleFilter = () => {
        const filteredList = restaurants.filter(
            (res) => res.info?.avgRating > 4
        );
        console.log("Filtered List:", filteredList);
        setFilteredRes(filteredList);
    };

    const handleSearch = () => {
        const searchedRes = restaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRes(searchedRes);
    };

    // if (restaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return (
        <div className="body">
            <div className="filter flex  ">
                <div className="search flex  m-4 p-6 ">
                    <input 
                        type="text" 
                        className=" py-1 border border-orange-200 border-solid " 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="rounded-lg bg-blue-200 px-3 py-2 mx-3" onClick={handleSearch}>Search</button>
                
                <div className="px-10"> 
                    <button className="filter-btn px-7 py-2 rounded-2xl bg-gray-200 round" onClick={handleFilter}>
                        Top Rated Restaurant
                    </button>
                </div>
                </div>
            </div>
            <div className="res-container flex flex-wrap ">
                {filteredRes.length > 0 ? (
                    filteredRes.map((restaurant) => (
                        restaurant.info.promoted ? <RestaurantCardPromoted key={restaurant.info.id}
                        resData={restaurant} />
                        : <RestaurentCard
                            key={restaurant.info.id}
                            resData={restaurant}
                        />
                    ))
                ) : (
                    <p>No restaurants found.</p>
                )}
            </div>
        </div>
    );
};

export default Body;