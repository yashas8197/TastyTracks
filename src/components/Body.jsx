import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestuarant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showRemoveTopResBtn, setShowRemoveTopResBtn] = useState(false);
  const [showRemoveFastDeliveryBtn, setShowRemoveFastDeliveryBtn] =
    useState(false);
  const [pureVeg, setPureVeg] = useState(false);
  const [showCostBtn, setShowCostBtn] = useState(false);

  const resInfo = useRestaurantList();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (resInfo) {
      setRestaurantsList(resInfo);
    }
  }, [resInfo]);

  useEffect(() => {
    if (restaurantsList?.data?.cards) {
      setFilteredRestaurant(
        restaurantsList.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    }
  }, [restaurantsList]);

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearchText(value);
    const filteredRestaurants = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurants);
  };

  const filterTopRestaurants = () => {
    const filterRes = restaurantsList.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.5;
    });

    const combinedList = [...filterRes, ...filteredRestuarant];

    // Set the combined list as the new filtered list
    setFilteredRestaurant(filterRes);
    setShowRemoveTopResBtn(true);
  };

  const removeTopRatedFilter = () => {
    setFilteredRestaurant(restaurantsList);
    setShowRemoveTopResBtn(false);
  };

  const fastDelivery = () => {
    const delivery30Min = restaurantsList.filter(
      (res) => res.info?.sla?.deliveryTime < 30
    );
    setFilteredRestaurant(delivery30Min);
    setShowRemoveFastDeliveryBtn(true);
  };

  const removeFastDeliveryFilter = () => {
    setFilteredRestaurant(restaurantsList);
    setShowRemoveFastDeliveryBtn(false);
  };

  const handleVeg = () => {
    const pureVegRes = restaurantsList.filter((res) => res.info?.veg === true);
    setFilteredRestaurant(pureVegRes);
    setPureVeg(true);
  };

  const removePureVegBtn = () => {
    setFilteredRestaurant(restaurantsList);
    setPureVeg(false);
  };

  const costFilter = () => {
    const filterByCost = restaurantsList.filter(
      (res) => parseInt(res.info?.costForTwo.split(" ")[0].slice(1)) <= 300
    );
    setFilteredRestaurant(filterByCost);
    setShowCostBtn(true);
  };

  const removeCostFilterBtn = () => {
    setFilteredRestaurant(restaurantsList);
    setShowCostBtn(false);
  };

  if (onlineStatus === false) {
    return (
      <div className="my-4">
        <h1 className="text-center">
          Looks like you're offline!! Please check your internet connection
        </h1>
      </div>
    );
  }

  return filteredRestuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container my-4">
      <div className="d-flex justify-content-between">
        {!showRemoveTopResBtn ? (
          <button
            className="btn btn-primary"
            onClick={() => filterTopRestaurants()}
          >
            Rating 4.5+
          </button>
        ) : (
          <button
            className="btn btn-outline-secondary"
            onClick={() => removeTopRatedFilter()}
          >
            ❌ Rating 4.5+
          </button>
        )}

        {!showRemoveFastDeliveryBtn ? (
          <button className="btn btn-primary" onClick={() => fastDelivery()}>
            Fast Delivery
          </button>
        ) : (
          <button
            className="btn btn-outline-secondary"
            onClick={() => removeFastDeliveryFilter()}
          >
            ❌ Fast Delivery
          </button>
        )}

        {!pureVeg ? (
          <button className="btn btn-primary" onClick={handleVeg}>
            Pure Veg
          </button>
        ) : (
          <button
            className="btn btn-outline-secondary"
            onClick={() => removePureVegBtn()}
          >
            ❌ Pure Veg
          </button>
        )}

        {!showCostBtn ? (
          <button onClick={costFilter} className="btn btn-primary">
            Less Then 300
          </button>
        ) : (
          <button
            className="btn btn-outline-secondary"
            onClick={() => removeCostFilterBtn()}
          >
            ❌ Less Then 300
          </button>
        )}

        <div className="my-2 my-lg-0 d-flex">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={onChangeSearch}
          />
        </div>
      </div>

      <div className="row">
        {filteredRestuarant.map((restaurant) => (
          <Link
            className="col-md-3 my-3 text-decoration-none"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
