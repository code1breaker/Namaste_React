import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import CartList from "../../components/CartList/CartList";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <section className="cart">
      {/* <h1 className="text-center">My Cart</h1> */}
      <div className="flex container">
        {cartItem.length != 0 && (
          <div className="cart-item">
            {cartItem?.map((item) => {
              return <CartItem item={item} key={item?.id} />;
            })}
          </div>
        )}

        {cartItem.length != 0 ? (
          <div className="cart-info">
            <CartList />
          </div>
        ) : (
          <div className="cart-empty-page flex">
            <div className="cart-empty-img">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
                alt=""
              />
            </div>
            <div className="cart-empty-text text-center">
              <h1>Your Cart is empty</h1>
              <p>Looks like you haven't added anything to your cart.</p>
              <p>Go ahead and explore</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
