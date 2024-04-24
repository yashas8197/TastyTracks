import { useEffect } from "react"

const RestaurantMenu = () => {

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const menu = await fetch("https://thingproxy-760k.onrender.com/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=10576&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")

        const json = await menu.json()

        console.log(json)

    }

    return (
        <div>
            <h1>Restaurant Menu</h1>
        </div>
    )
}

export default RestaurantMenu;