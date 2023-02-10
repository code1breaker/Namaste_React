import React from "react";
import { Link } from "react-router-dom";
import "./RestaurantCard.css";

import { IMG_CDN_URL } from "../../utils/constant";

const RestaurantCard = ({ getRestaurant }) => {
  return (
    <>
      {getRestaurant?.map((item) => {
        return (
          <div className="card" key={item?.data?.id}>
            <Link to={`/restaurant/${item?.data?.id}`}>
              <img
                src={`${IMG_CDN_URL}${item?.data?.cloudinaryImageId}`}
                alt="image"
              />

              <h3>{item?.data?.name}</h3>
              <p>{item?.data?.cuisines.join(", ")}</p>

              <div className="flex list">
                <span className="rating">{item?.data?.avgRating}</span>
                <p className="price">{item?.data?.costForTwoString}</p>
              </div>

              <hr />

              <p>{item?.data?.aggregatedDiscountInfoV2?.header}</p>
              <p>
                {
                  item?.data?.aggregatedDiscountInfoV2?.header
                    ?.shortDescriptionList?.Array[0]?.meta
                }
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantCard;
