import { useEffect, useState } from "react"
import Shimmer from "../components/Shimmer";
import MenuHeader from "../components/MenuHeader"
import RestaurantCategory from "../components/RestaurantCategory"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {


    const {resId} = useParams()

    const [showIndex, setShowIndex] = useState(0)

    const resInfo = useRestaurantMenu(resId)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cate => cate?.card?.card?.["@type"] ===  
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    const {info} = resInfo?.cards[2]?.card?.card || {};

    return resInfo === null ? <Shimmer/> : (
        <div>
         <MenuHeader info={info}/>
         <h2 className="display-6 text-center my-4">ಮenu</h2>
         {
            categories.map((category, index) => <RestaurantCategory key={category.card?.card?.title} data={category.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>)
         }
        </div>
    )
}

export default RestaurantMenu;