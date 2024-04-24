const RestaurantCard = ({ resData }) => {
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
    } = resData.info;

    const imageStyle = {
      width: "15rem",
      height: "10rem", // Adjust the height as needed
      objectFit: "cover",
    };

    return (
      <div className="col-md-3 my-3">
        <div className="card shadow" style={{ width: "15rem" }}>
          <img
            style={imageStyle}
            className="card-img-top img-fluid"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            alt="restaurantImg"
          />
          <div className="card-body">
            <p className="card-text">
              <strong>{name}</strong></p>
              <p>{avgRating}</p>
              <p>{cuisines.join(", ")}</p>
              <p>{costForTwo}</p>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;
  