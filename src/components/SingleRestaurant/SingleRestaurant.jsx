import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, decreaseItem } from "../../redux/cartSlice";
import useRestaurant from "../../utils/useRestaurant";
import CartList from "../CartList/CartList";
import RestaurantShimmer from "../Shimmer/RestaurantShimmer/RestaurantShimmer";

import "./SingleRestaurant.css";

const SingleRestaurant = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
  );
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleDecreaseItem = (item) => {
    dispatch(decreaseItem(item));
  };

  return restaurant?.length == 0 ? (
    <RestaurantShimmer />
  ) : (
    <section className="flex container">
      <div className="menu" data-testid="menu-data">
        <h2 className="text-center menu-title">Restaurant Menu</h2>

        {console.log(restaurant)}
        {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => {
            return (
              <div
                className="menuItem flex justify-between"
                key={item?.card?.info?.id}
              >
                <div className="menu-text">
                  <h3>{item?.card?.info?.name}</h3>
                  <span>Rs {item?.card?.info?.price / 100}</span>
                  <p>{item?.card?.info?.description?.slice(0, 80)}</p>
                </div>

                <div className="menuImg">
                  <img
                    className={
                      `${item?.card?.info?.imageId}` &&
                      `${item?.card?.info?.imageId == "undefined"}`
                        ? ""
                        : "display-none"
                    }
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                    alt="food"
                  />

                  <div className="cartBtn flex justify-between">
                    {cartItem.filter((x) => x?.id == item?.card?.info?.id)
                      .length ? (
                      <button
                        onClick={() => handleDecreaseItem(item?.card?.info)}
                      >
                        -
                      </button>
                    ) : null}

                    {cartItem.map((x, idx) => {
                      return x?.id == item?.card?.info?.id ? (
                        <p key={idx}>{x?.quantity}</p>
                      ) : (
                        ""
                      );
                    })}

                    <button
                      data-testid="addBtn"
                      onClick={() => handleAddItem(item?.card?.info)}
                    >
                      {cartItem.filter((x) => x?.id == item?.card?.info?.id)
                        .length
                        ? "+"
                        : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="cart-empty">
        <CartList />
      </div>
    </section>
  );
};

export default SingleRestaurant;
