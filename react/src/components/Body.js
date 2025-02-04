import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [filteredRes, setFilteredRes] = useState([]);

    const[searchtext ,setsearchtext]=useState("");
    const[oldFilteredRes, setoldFilteredRes]=useState([]);

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
            
            setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants|| []);
            setoldFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants|| []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    const handleFilter = () => {
        const filteredList = oldFilteredRes.filter(
            (res) => res.info?.avgRating > 4
        );
        console.log("Filtered List:", filteredList);
        setFilteredRes(filteredList);
    };
    if(filteredRes.length===0){
        return <Shimmer/>;
    }



    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-bar" value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value);
                        const searchedRes = filteredRes.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setFilteredRes(searchedRes);
                    }}/>
                    <button>Search</button>
                </div>
                <button className="filter-btn" onClick={handleFilter}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {oldFilteredRes.length > 0 ? (
                    oldFilteredRes.map((restaurant) => (
                        <RestaurentCard
                            key={restaurant.info.id}
                            resData={restaurant}
                        />
                    ))
                ) : (
                    <p>Loading restaurants...</p>
                )}
            </div>
        </div>
    );
};

export default Body;
