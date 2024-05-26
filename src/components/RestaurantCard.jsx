import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData.info;

  const imageStyle = {
    width: "15rem",
    height: "10rem", // Adjust the height as needed
    objectFit: "cover",
  };

  return (
    <div>
      <div
        className="card shadow  hover:bg-gray-100"
        style={{ width: "15rem" }}
      >
        <img
          style={imageStyle}
          className="card-img-top img-fluid"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurantImg"
        />
        <div className="card-body">
          <p className="card-text my-2">
            <strong>{name}</strong>
          </p>
          <p className="text-secondary my-2">
            {cuisines.length > 3
              ? cuisines.slice(0, 3).join(", ") + "..."
              : cuisines.join(", ")}
          </p>
          <p>⭐{avgRating}</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
