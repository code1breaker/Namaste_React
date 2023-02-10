import React from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL, IMG_CDN_URL } from "../../utils/constant";
import useRestaurant from "../../utils/useRestaurant";

import "./SingleRestaurant.css";

const SingleRestaurant = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(FETCH_MENU_URL + id);

  return (
    <>
      <section className="restBanner">
        <div className="container flex">
          <div className="restImg">
            <img
              src={`${IMG_CDN_URL}${restaurant?.data?.cloudinaryImageId}`}
              alt="food"
            />
          </div>

          <div className="restInfo">
            <div>
              <h2>{restaurant?.data?.name}</h2>
              <p>{restaurant?.data?.cuisines?.join(", ")}</p>
              <span>{restaurant?.data?.locality}, </span>
              <span>{restaurant?.data?.area}</span>
            </div>

            <div className="flex infoDetail">
              <div>
                <span>{restaurant?.data?.avgRating}</span>
                <p>{restaurant?.data?.totalRatingsString}</p>
              </div>
              <div className="line">
                <span>{restaurant?.data?.sla?.slaString}</span>
                <p>Delivery Time</p>
              </div>
              <div>
                <span>{(restaurant?.data?.costForTwo / 100).toString()}</span>
                <p>Cost for two</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex container">
        <div className="category">
          <ul>
            {restaurant?.data?.menu?.widgets?.map((item) => {
              return (
                <>
                  <li>{item?.name}</li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="menu">
          {restaurant &&
            Object.values(restaurant?.data?.menu?.items)?.map((item) => {
              return (
                <>
                  <div className="menuItem flex justify-between" key={item?.id}>
                    <div>
                      <h3>{item?.name}</h3>
                      <span>Rs {item?.price / 100}</span>
                      <p>{item?.description?.slice(0, 80)}</p>
                    </div>

                    <div className="menuImg">
                      <img
                        src={`${IMG_CDN_URL}${item?.cloudinaryImageId}`}
                        // src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.cloudinaryImageId}`}
                        alt="food"
                      />

                      <button className="addBtn">Add</button>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default SingleRestaurant;
