import React from "react";
import "./RestaurantCard.css";

import { IMG_CDN_URL } from "../../utils/constant";

const RestaurantCard = ({ item }) => {
  return (
    <>
      <img src={`${IMG_CDN_URL}${item?.data?.cloudinaryImageId}`} alt="image" />

      <h3>{item?.data?.name}</h3>
      <p>{item?.data?.cuisines.slice(0, 5).join(", ")}</p>

      <div className="flex list">
        <span className="rating">{item?.data?.avgRating}</span>
        <p className="price">{item?.data?.costForTwoString}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
