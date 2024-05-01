import { useEffect, useState } from "react";
import { MAIN_URL } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_URL);
    const json = await data.json();
    setRestaurantList(json);
  };

  return restaurantList;
};

export default useRestaurantList;
