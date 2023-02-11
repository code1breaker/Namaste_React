import React, { useState } from "react";

import "./Body.css";
import Search from "../Search/Search";
import Carousel from "../Carousel/Carousel";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { FETCH_URL } from "../../utils/constant";

import useRestaurant from "../../utils/useRestaurant";
import HomeShimmer from "../Shimmer/HomeShimmer";

const Body = () => {
  const restaurant = useRestaurant(FETCH_URL);
  const [getRestaurant, setGetRestaurant] = useState(restaurant);
  // console.log(getRestaurant);

  return !getRestaurant ? (
    <HomeShimmer />
  ) : (
    <>
      {console.log("getRestaurant", getRestaurant)}
      <section className="carousel">
        <Carousel restaurant={restaurant} />
      </section>
      <Search setGetRestaurant={setGetRestaurant} />
      <section className="container flex restaurant">
        <RestaurantCard restaurant={getRestaurant} />
      </section>
    </>
  );
  // );
};

export default Body;

// useRestaurant ✅
// search functionality
// useOnline
// lazyloading-instamart
