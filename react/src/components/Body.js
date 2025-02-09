import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

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
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-bar" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn" onClick={handleFilter}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRes.length > 0 ? (
                    filteredRes.map((restaurant) => (
                        <RestaurentCard
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