import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const logoutHandler = () => {
    setLogout(true);
  };

  const loginHandler = () => {
    setLogout(false);
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <header className="navbar-light bg-light shadow">
      <nav className="navbar navbar-expand-lg  container">
        <div className="container-fluid">
          <img src={LOGO_URL} style={{ height: "100px" }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <ShoppingCart /> Cart ({cartItems.length} Items)
                </NavLink>
              </li>
              {!logout ? (
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-success" onClick={loginHandler}>
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
