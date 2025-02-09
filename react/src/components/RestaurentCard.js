import { Link } from "react-router-dom";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla,id } = resData.info;

  return (
    <div className='res-card'>
      <Link to={`/restaurants/${id}`}>
      <img
        className='rescard-logo'
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;