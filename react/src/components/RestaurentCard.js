import { Link } from "react-router-dom";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla,id } = resData.info;

  return (
    <div className='res-card m-4 p-4 rounded-2xl max-w-[220px] bg-gray-200'>
      <Link to={`/restaurants/${id}`}>
      <img
        className='rescard-logo rounded-md'
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h3 className=" font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      </Link>
    </div>
  );
};

// higher order component

//input --> rescard   output--> promotedrescard

export const withPromotedLabel =(RestaurantCard)=>{
  return (props)=>{
        return (
          <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/> 
          </div>
        );
  }
}

export default RestaurantCard;