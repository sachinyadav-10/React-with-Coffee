import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const ResMenu=()=>{
    const [resinfo,setresinfo]=useState(null);
    const {resid}=useParams();
    
    useEffect (()=>{
        fetchmenu();
        },[]);
    
    const fetchmenu = async ()=>{
        const data = await fetch(
            MENU_API+resid
        )
        const json = await data.json();
        console.log(json);
        setresinfo(json.data);
    }
    
    if(resinfo===null) return <Shimmer/>
    
    const resdetail=resinfo?.cards[2]?.card?.card?.info;
    const itemCards=resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(itemCards);
    // console.log(resinfo);
    const {name,cuisines,costForTwoMessage}=resdetail
    
    return(
        <div>
              <h1>{name}</h1>
              <h2>MENU</h2>
              <h3>{cuisines}</h3>
              <h3>{costForTwoMessage}</h3>

              <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price}</li>)}
              </ul>
        </div>
    );

}
export default ResMenu;