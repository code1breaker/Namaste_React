import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import useOnline from "../../utils/useOnline";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  const { user } = useContext(UserContext);
  const { name, email } = user;
  const isOnline = useOnline();
  const cartItem = useSelector((store) => store.cart.items);

  const getTotalQuantity = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.quantity));
    return total;
  };

  return (
    <>
      <header className="container flex">
        <div className="logo">
          <h1>
            <Link to="/">Food Store</Link>
          </h1>
        </div>

        <nav className="flex item-center">
          {/* <span data-testid="online-status">{isOnline ? "🟢" : "🔴"}</span> */}

          <ul className={menuToggle ? "nav-hidden flex" : "flex"}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/cart">
              <li>
                Cart
                <span
                  data-testid="cart"
                  className={`${
                    cartItem.length !== 0 ? "cart-len" : "display-none"
                  } text-center`}
                >
                  {getTotalQuantity()}
                </span>
              </li>
            </Link>
            <Link to="/help">
              <li>Help</li>
            </Link>
          </ul>

          <div className="user">
            <img
              src="https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png"
              alt="user icon"
            />
          </div>
          <div
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
            className="hamburger flex"
          >
            {menuToggle ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-close"></i>
            )}
          </div>
          <div className="user-profile">
            <h3 className="text-center user-info">Profile</h3>
            <p className="user-details">name:{name}</p>
            <p className="user-details">email:{email}</p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
