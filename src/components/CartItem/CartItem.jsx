import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";
import { IMG_CDN_URL } from "../../utils/constant";

import "./CartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <div className="cart-card flex">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.imageId}`}
          alt="food"
        />
        <div className="cart-details flex">
          <h1>{item?.name}</h1>
          <p>Category: {item?.category}</p>
          <p>{item?.description}</p>
          <span>Rs {item?.price / 100}</span>
        </div>
        <div
          onClick={() => {
            handleRemoveItem(item?.id);
          }}
          className="cross"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/59/59836.png"
            alt="close"
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
