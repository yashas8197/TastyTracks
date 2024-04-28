import veg from "../assets/veg.png"
import nonVeg from "../assets/non-veg.png"
import { CDN_URL } from "../utils/constants"

const ItemsList = ({items}) => {
    console.log(items)  
    return (
        <>
            <div className="accordion-body">
                    {items.map(item => (
                        <div key={item.card.info.name}>
                        <div className="d-flex justify-content-between py-3" >
                            <div className="w-75">
                                <img src={item.card.info.isVeg === 1 ? veg : nonVeg} style={{height: "18px"}}/>
                                <h6 style={{height: "8px"}}>{item.card.info.name}</h6>
                                <p>₹{item.card.info.price / 100}</p>
                                <small className="text-secondary">{item.card.info.description}</small>
                            </div>  
                            <div>
                                <img src={item?.card?.info?.imageId ? CDN_URL + item?.card?.info?.imageId : ""} className="img-fluid" style={{width: "150px"}}/>
                            </div>
                        </div>
                        <hr/>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default ItemsList;