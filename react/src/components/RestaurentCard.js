import { Hotel_Photo } from "../utils/constants";
const RestaurentCard =({resData})=>{
    // const{resname,cuisine,...}=props ----> destructuring on fly
    // console.log(props);
    const{RestaurantName,Cuisines,Rating,PriceForTwo,DeliveryTime}=resData;
    // console.log(data);
    return(
        <div className='res-card'>
            <img className='rescard-logo' src={Hotel_Photo}alt='Cheese fried momos'></img>
            <h3>{RestaurantName}</h3>
            <h4>{Cuisines}</h4>
            <h4>{Rating + '/5'}</h4>
            <h4>{PriceForTwo+"$ For Two"}</h4>
            <h4>{DeliveryTime}</h4>
        </div>
    )
}
export default RestaurentCard;