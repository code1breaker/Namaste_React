import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/cartSlice";
import { IMG_EMPTY_CART } from "../../utils/constant";
import "./CartList.css";

const CartList = () => {
  const getTotalAmount = () => {
    let amount = 0;
    cartItem.forEach((item) => (amount += (item.price / 100) * item.quantity));
    return amount;
  };
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cartList">
      {cartItem.length == 0 ? (
        <>
          <h1>Cart Empty</h1>
          <img src={IMG_EMPTY_CART} alt="empty cart" />
        </>
      ) : (
        <>
          <h1>Cart</h1>
          <h2>Items</h2>
          {cartItem.map((item) => {
            return (
              <div
                key={item?.id}
                className="cartList-details flex justify-between"
              >
                <p>{item?.name}</p>
                <p>{item?.quantity}</p>
                <p>Rs {(item?.price / 100) * item?.quantity}</p>
                <p
                  onClick={() => {
                    handleRemoveItem(item.id);
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </p>
              </div>
            );
          })}
          <h2>Total Amount</h2>
          <p className="amount">Your billing amount is Rs {getTotalAmount()}</p>
          <button className="pay">Pay</button>
        </>
      )}
    </div>
  );
};

export default CartList;
