import { Link } from "react-router-dom";
import ItemsList from "../components/ItemsList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="my-4">
      <h1 className="text-center display-6">
        <strong>Your Cart</strong>
      </h1>
      <div className="container col-md-7">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h2 className="fs-5">Cart is empty</h2>
            <p className="fs-5">
              Looks like you have not added anything to your cart. Go ahead &
              explore items in menu.
            </p>
            <Link to="/" className="btn btn-primary">
              Add Items
            </Link>
          </div>
        ) : (
          <ItemsList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
