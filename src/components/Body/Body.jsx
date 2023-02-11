import React, { useState, useEffect } from "react";

import "./Body.css";
import Search from "../Search/Search";
import Carousel from "../Carousel/Carousel";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { FETCH_URL } from "../../utils/constant";

import HomeShimmer from "../Shimmer/HomeShimmer";

import useRestaurant from "../../utils/useRestaurant";

const Body = () => {
  const restaurant = useRestaurant(FETCH_URL);
  const [getRestaurant, setGetRestaurant] = useState([]);

  return getRestaurant?.length === 0 ? (
    <HomeShimmer />
  ) : (
    <>
      {console.log("getRestaurant", getRestaurant)}
      <section className="carousel">
        <Carousel restaurant={restaurant} />
      </section>
      <Search setGetRestaurant={setGetRestaurant} />
      <section className="container flex restaurant">
        <RestaurantCard restaurant={restaurant} />
      </section>
    </>
  );
  // );
};

export default Body;

// useRestaurant ✅
// lazyloading-instamart ✅
// useOnline
// search functionality 🔴
