import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="container flex">
        <div className="logo">
          <h1>Food Store</h1>
        </div>
        <nav>
          <ul className="flex">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
