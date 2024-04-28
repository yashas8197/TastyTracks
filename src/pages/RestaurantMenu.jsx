import { useEffect, useState } from "react"
import Shimmer from "../components/Shimmer";
import MenuHeader from "../components/MenuHeader"
import RestaurantCategory from "../components/RestaurantCategory"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams()

    const [showIndex, setShowIndex] = useState(0)

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const menu = await fetch(MENU_API + resId)

        const json = await menu.json()

        setResInfo(json.data)

    }

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cate => cate?.card?.card?.["@type"] ===  
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


    const {info} = resInfo?.cards[2]?.card?.card || {};

    return resInfo === null ? <Shimmer/> : (
        <div>
         <MenuHeader info={info}/>
         {
            categories.map((category, index) => <RestaurantCategory key={category.card?.card?.title} data={category.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>)
         }
        </div>
    )
}

export default RestaurantMenu;