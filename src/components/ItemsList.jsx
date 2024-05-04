import veg from "../assets/veg.png";
import nonVeg from "../assets/non-veg.png";
import { CDN_URL } from "../utils/constants";
import "../App.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="accordion-body">
        {items.map((item) => (
          <div key={item.card.info.name} className="item-container">
            <div className="d-flex justify-content-between py-3">
              <div className="w-75">
                <img
                  src={item.card.info.isVeg === 1 ? veg : nonVeg}
                  style={{ height: "18px" }}
                />
                <h6 style={{ height: "8px" }}>{item.card.info.name}</h6>
                <p>₹{item.card.info.price / 100}</p>
                <small className="text-secondary">
                  {item.card.info.description}
                </small>
              </div>

              <div>
                <img
                  src={
                    item?.card?.info?.imageId
                      ? CDN_URL + item?.card?.info?.imageId
                      : ""
                  }
                  className="img-fluid image-container"
                  style={{ width: "150px", height: "150px" }}
                />
                <button
                  className="btn btn-dark btnAddBtn"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
